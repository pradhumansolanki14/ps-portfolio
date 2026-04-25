import Review from "../models/Review.js";

//  CREATE (PUBLIC)
export const createReview = async (req, res) => {
  try {
    const { name, role, rating, message } = req.body;

    if (!name || !rating || !message) {
  return res.status(400).json({ message: "Missing required fields" });
}

    const review = await Review.create({
      name,
      role,
      rating,
      message,
    });

  return res.json(review);
  } catch (err) {
console.error(err);
res.status(500).json({ message: "Failed to create review" });  }
};

//  GET ALL (ADMIN)
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 }).lean();
   return res.json(reviews);
  }catch (err) {
  console.error(err);
  return res.status(500).json({ message: "Failed to fetch reviews" });
}
};

//  GET APPROVED (PUBLIC)
export const getApprovedReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ status: "approved" }).sort({
      createdAt: -1,
    }).lean();
 return res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch approved reviews" });
  }
};

// TOGGLE STATUS (APPROVE / WITHDRAW)
export const toggleReviewStatus = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    //  toggle logic (matches your frontend)
    review.status =
      review.status === "approved" ? "pending" : "approved";

    await review.save();

   return res.json(review);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update review" });
  }
};

//  DELETE
export const deleteReview = async (req, res) => {
  try {
 const deleted = await Review.findByIdAndDelete(req.params.id);

if (!deleted) {
  return res.status(404).json({ message: "Review not found" });
}

return res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete review" });
  }
};