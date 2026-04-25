import Project from "../models/Projects.js";
import Contact from "../models/Contact.js";
import Review from "../models/Review.js";

export const getDashboardStats = async (req, res) => {
  try {
    const DAYS = 10;

   
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - DAYS);

    // COUNTS
    const [
      projects,
      leads,
      ongoing,
      completed,
      reviews,
    ] = await Promise.all([
      Project.countDocuments(),

      // REQUESTS (ONLY LEADS)
      Contact.countDocuments({ status: "lead" }),

      //  CLIENTS PART
      Contact.countDocuments({ status: "ongoing" }),
      Contact.countDocuments({ status: "completed" }),

      Review.countDocuments(),
    ]);

    // FETCH CONTACTS (FOR ACTIVITY)
    const contacts = await Contact.find({
      $or: [
        { createdAt: { $gte: cutoffDate } },
        { updatedAt: { $gte: cutoffDate } },
      ],
    }).sort({ updatedAt: -1 }).lean();
    

    //  FETCH PROJECTS
    const recentProjects = await Project.find({
      createdAt: { $gte: cutoffDate },
    }).sort({ createdAt: -1 }).lean();;

    // ACTIVITY BUILD
    const activity = [

      // NEW REQUESTS (LEADS)
      ...contacts
        .filter((c) => c.status === "lead")
        .map((c) => ({
          text: `New request from ${c.name}`,
          createdAt: c.createdAt,
          type: "request",
        })),

      //  MOVED TO ONGOING
      ...contacts
        .filter(
          (c) =>
            c.status === "ongoing" &&
            c.updatedAt >= cutoffDate
        )
        .map((c) => ({
          text: `${c.name} moved to ongoing`,
          createdAt: c.updatedAt,
          type: "ongoing",
        })),

      //  COMPLETED
      ...contacts
        .filter(
          (c) =>
            c.status === "completed" &&
            c.updatedAt >= cutoffDate
        )
        .map((c) => ({
          text: `${c.name} project completed`,
          createdAt: c.updatedAt,
          type: "completed",
        })),

      //  PROJECTS
      ...recentProjects.map((p) => ({
        text: `Project "${p.title}" added`,
        createdAt: p.createdAt,
        type: "project",
      })),
    ]
      .sort((a, b) => b.createdAt - a.createdAt)
      .slice(0, 50); // safety limit

    //  RESPONSE (MATCH FRONTEND EXACTLY)
   return res.json({
      stats: {
        projects,
        requests: leads,          
        ongoing,
        completed,
        clients: ongoing + completed, 
        reviews,
      },
      activity,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Dashboard error" });
  }
};