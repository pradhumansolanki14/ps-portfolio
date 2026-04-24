import express from "express";
import {
  submitContact,
  getAllContacts,
  updateContactStatus,
   deleteContact
} from "../controllers/contact.controller.js";

import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

// PUBLIC
router.post("/", submitContact);

// ADMIN
router.get("/", protect, getAllContacts);
router.put("/:id", protect, updateContactStatus);
router.delete("/:id", protect, deleteContact);

export default router;