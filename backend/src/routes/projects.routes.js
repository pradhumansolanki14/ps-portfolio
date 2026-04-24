import express from "express";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
 toggleProjectPublish,
} from "../controllers/projects.controller.js";
import protect from "../middlewares/authMiddleware.js";
import upload from "../middlewares/uploadMiddleware.js";

const router = express.Router();

// PUBLIC
router.get("/", getProjects);

// PROTECTED
router.post("/", protect, upload.single("image"), createProject);
router.put("/:id", protect, upload.single("image"), updateProject);
router.delete("/:id", protect, deleteProject);
router.patch("/toggle/:id", protect, toggleProjectPublish);

export default router;