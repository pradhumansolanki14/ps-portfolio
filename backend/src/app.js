// import express from "express";
// import cors from "cors";
// import path from "path";
// import protect from "./middlewares/authMiddleware.js";
// import authRoutes from "./routes/auth.routes.js";
// import projectRoutes from "./routes/projects.routes.js";
// import contactRoutes from "./routes/contact.routes.js";
// import reviewRoutes from "./routes/review.routes.js";
// import dashboardRoutes from "./routes/dashboard.routes.js";
// import { startLeadCleanup } from "./utils/cleanUpLeads.js";

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));



// app.use("/api/auth", authRoutes);
// app.use("/api/dashboard", dashboardRoutes);
// app.use("/api/projects", projectRoutes);
// app.use("/api/contact", contactRoutes);
// app.use("/api/reviews", reviewRoutes);
// app.use("/api/contacts", contactRoutes);


// startLeadCleanup();

// app.get("/api/test", protect, (req, res) => {
//   res.json({ message: "Protected route working" });
// });

// export default app;



import express from "express";
import cors from "cors";
import protect from "./middlewares/authMiddleware.js";

import authRoutes from "./routes/auth.routes.js";
import projectRoutes from "./routes/projects.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import reviewRoutes from "./routes/review.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";

import { startLeadCleanup } from "./utils/cleanUpLeads.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/reviews", reviewRoutes);


export default app;