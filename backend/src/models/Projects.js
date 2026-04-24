import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    tech: [
      {
        type: String,
        trim: true,
      },
    ],

    github: {
      type: String,
      trim: true,
    },

    live: {
      type: String,
      trim: true,
    },

    image: {
      type: String,
      default: "",
    },

    public_id: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      enum: ["frontend", "backend", "fullstack"],
      required: true,
    },

    published: {
      type: Boolean,
      default: true,
    },

    isClientProject: {
      type: Boolean,
      default: false,
    },

    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contact",
    },
  },
  { timestamps: true }
);

projectSchema.index({ createdAt: -1 });

export default mongoose.model("Project", projectSchema);