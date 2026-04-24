// import cron from "node-cron";
// import Contact from "../models/Contact.js";

// export const startLeadCleanup = () => {

//   cron.schedule("0 0 * * *", async () => {
//     try {
//       const sevenDaysAgo = new Date(
//         Date.now() - 7 * 24 * 60 * 60 * 1000
//       );

//       const result = await Contact.deleteMany({
//         status: "lead",
//         createdAt: { $lt: sevenDaysAgo },
//       });

//       console.log(` Deleted ${result.deletedCount} old leads`);
//     } catch (err) {
//       console.error(" Cleanup error:", err);
//     }
//   });

// };


import cron from "node-cron";
import Contact from "../models/Contact.js";

export const startLeadCleanup = () => {
  if (process.env.NODE_ENV !== "production") return;

  console.log("Lead cleanup job started");

  cron.schedule("0 0 * * *", async () => {
    try {
      const sevenDaysAgo = new Date(
        Date.now() - 7 * 24 * 60 * 60 * 1000
      );

      const result = await Contact.deleteMany({
        status: "lead",
        createdAt: { $lt: sevenDaysAgo },
      });

      console.log(`Deleted ${result.deletedCount} old leads`);
    } catch (err) {
      console.error(err);
    }
  });
};