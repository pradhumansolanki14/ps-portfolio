import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },

    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },

    projectType: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["lead", "ongoing", "completed"],
      default: "lead",
    },

    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

contactSchema.index({ status: 1 });

export default mongoose.model("Contact", contactSchema);