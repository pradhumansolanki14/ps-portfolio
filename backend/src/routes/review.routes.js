import express from "express";
import {
  createReview,
  getAllReviews,
  getApprovedReviews,
  toggleReviewStatus,
  deleteReview,
} from "../controllers/review.controller.js";

import  protect from "../middlewares/authMiddleware.js";

const router = express.Router();

// 🔥 PUBLIC
router.post("/", createReview);
router.get("/approved", getApprovedReviews);

// 🔥 ADMIN
router.get("/", protect, getAllReviews);
router.put("/:id", protect, toggleReviewStatus);
router.delete("/:id", protect, deleteReview);


export default router;