import api from "./axios";

//  CREATE
export const createReview = (data) =>
  api.post("/reviews", data);

//  PUBLIC (approved only)
export const getApprovedReviews = () =>
  api.get("/reviews/approved");

//  ADMIN
export const getAllReviews = () =>
  api.get("/reviews");

//  UPDATE STATUS
export const updateReviewStatus = (id, status) =>
  api.put(`/reviews/${id}`, { status });

//  DELETE
export const deleteReview = (id) =>
  api.delete(`/reviews/${id}`);