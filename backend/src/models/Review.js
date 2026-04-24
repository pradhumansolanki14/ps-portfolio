import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    role: {
      type: String,
      trim: true,
      default: "",
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

   
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },



    status: {
      type: String,
      enum: ["pending", "approved"],
      default: "pending",
    },
  },
  { timestamps: true }
);

reviewSchema.index({ createdAt: -1 });

export default mongoose.model("Review", reviewSchema);