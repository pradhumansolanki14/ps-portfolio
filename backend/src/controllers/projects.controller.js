import Project from "../models/Projects.js";
import Contact from "../models/Contact.js";
import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

// GET all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ published: true })
      .sort({ createdAt: -1 })
      .lean();

    res.json(projects || []);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};




export const createProject = async (req, res) => {
  try {
let image = "";
let public_id = "";

if (req.file) {
  const title = req.body.title || "project";

  const safeName = title
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-");

  const result = await new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "portfolio/projects",
        public_id: `${safeName}-${Date.now()}`,
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    streamifier.createReadStream(req.file.buffer).pipe(stream);
  });

  image = result.secure_url;
  public_id = result.public_id;
}

    const isClient = !!req.body.clientId;

    const project = new Project({
      title: req.body.title || "Untitled Project",
      description: req.body.description,

      tech: req.body.tech
        ? req.body.tech.split(",").map((t) => t.trim())
        : [],

      github: req.body.github,
      live: req.body.live,

      category: req.body.category,
      image,
      public_id,

      isClientProject: isClient,
      clientId: req.body.clientId || null,

      published: true,
    });

    await project.save();

    if (isClient) {
      await Contact.findByIdAndUpdate(req.body.clientId, {
        approved: true,
        projectId: project._id,
        status: "completed",
      });
    }

    res.json(project);

  } catch (error) {
    console.error(error);
   res.status(500).json({ message: "Failed to create project" });
  }
};
// UPDATE project
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    const updateData = {
      title: req.body.title ,
      description: req.body.description,

      tech: req.body.tech
        ? req.body.tech.split(",").map((t) => t.trim())
        : [],

      github: req.body.github,
      live: req.body.live,
      category: req.body.category,
    };

   if (req.file) {
  
  if (project.public_id) {
    await cloudinary.uploader.destroy(project.public_id);
  }

  const result = await new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "portfolio/projects",
        public_id: `project-${Date.now()}`,
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    streamifier.createReadStream(req.file.buffer).pipe(stream);
  });

  updateData.image = result.secure_url;
  updateData.public_id = result.public_id;
}

    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      updateData,
      { returnDocument: "after", runValidators: true }
    );

    res.json(updated);

  } catch (error) {
    console.error(error);
res.status(500).json({ message: "Failed to update project" });  }
};


// DELETE project
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    // CHECK IF EXISTS
    if (!project) {
      return res.status(404).json({
        error: "Project not found",
      });
    }

    //  BLOCK CLIENT PROJECT DELETE
    if (project.isClientProject) {
      return res.status(400).json({
        error: "Client projects cannot be deleted",
      });
    }

// delete image from cloudinary
if (project.public_id) {
  await cloudinary.uploader.destroy(project.public_id);
}

await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted" });

  } catch (error) {
res.status(500).json({ message: "Failed to delete project" });  }
};



export const toggleProjectPublish = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    if (!project.isClientProject) {
      return res.status(400).json({
        error: "Only client projects can be toggled",
      });
    }

    project.published = !project.published;

    await project.save();

    res.json(project);
  } catch (err) {
res.status(500).json({ message: "Failed to toggle project" });  }
};