import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaStar, FaTimes } from "react-icons/fa";
import { createReview } from "../api/review.api";
import toast from "react-hot-toast";

const ReviewModal = ({ open, setOpen }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const [form, setForm] = useState({
    name: "",
    role: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // 🔥 VALIDATION
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.role.trim()) {
      newErrors.role = "Role is required";
    }

    if (!form.message.trim()) {
      newErrors.message = "Experience is required";
    } else if (form.message.length < 15) {
      newErrors.message = "Write at least 15 characters";
    }

    if (rating === 0) {
      newErrors.rating = "Please select a rating";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handleSubmit = async () => {
  if (!validate()) return;

  try {
    await createReview({
      name: form.name,
      role: form.role,
      message: form.message,
      rating,
    });

    toast.success("Review submitted successfully");

    // reset
    setForm({ name: "", role: "", message: "" });
    setRating(0);
    setErrors({});
    setOpen(false);

  } catch (err) {
    toast.error("Failed to submit review");
  }
};

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-md"
          onClick={() => setOpen(false)}
        />

        {/* MODAL */}
        <motion.div
          initial={{ scale: 0.9, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 40 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="relative z-10 w-full max-w-md p-6 md:p-8 rounded-2xl
          border border-gray-200 dark:border-white/10
          bg-white/70 dark:bg-white/[0.05]
          backdrop-blur-xl shadow-2xl"
        >

          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-red-400 transition"
          >
            <FaTimes />
          </button>

          {/* TITLE */}
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-2">
            Share your{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="text-sm text-center text-gray-500 mb-6">
            Your feedback helps improve future projects
          </p>

          {/* ⭐ RATING */}
          <div className="flex flex-col items-center mb-6">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.button
                  key={star}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                >
                  <FaStar
                    className={`text-xl transition ${
                      (hover || rating) >= star
                        ? "text-emerald-400"
                        : "text-gray-300"
                    }`}
                  />
                </motion.button>
              ))}
            </div>

            {errors.rating && (
              <p className="text-xs text-red-400 mt-2">
                {errors.rating}
              </p>
            )}
          </div>

          {/* FORM */}
          <div className="space-y-4">

            {/* NAME */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className={`w-full px-4 py-3 rounded-xl
                bg-white/60 dark:bg-white/[0.05]
                border ${
                  errors.name
                    ? "border-red-400"
                    : "border-gray-200 dark:border-gray-800"
                }
                focus:border-emerald-400 outline-none transition`}
              />
              {errors.name && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* ROLE */}
            <div>
              <input
                type="text"
                placeholder="Your Role (e.g. Founder, Developer)"
                value={form.role}
                onChange={(e) =>
                  setForm({ ...form, role: e.target.value })
                }
                className={`w-full px-4 py-3 rounded-xl
                bg-white/60 dark:bg-white/[0.05]
                border ${
                  errors.role
                    ? "border-red-400"
                    : "border-gray-200 dark:border-gray-800"
                }
                focus:border-emerald-400 outline-none transition`}
              />
              {errors.role && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.role}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <textarea
                rows="4"
                placeholder="Write your experience..."
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className={`w-full px-4 py-3 rounded-xl
                bg-white/60 dark:bg-white/[0.05]
                border ${
                  errors.message
                    ? "border-red-400"
                    : "border-gray-200 dark:border-gray-800"
                }
                focus:border-emerald-400 outline-none resize-none transition`}
              />
              {errors.message && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-3 rounded-full font-medium
              bg-gradient-to-r from-emerald-400 to-teal-300
              text-black transition
              hover:scale-[1.02]
              disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Review →"}
            </motion.button>

          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ReviewModal;