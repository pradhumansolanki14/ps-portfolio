// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaStar, FaTrash } from "react-icons/fa";

// import {
//   getAllReviews,
//   updateReviewStatus,
//   deleteReview,
// } from "../api/review.api";

// const AdminReviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [selected, setSelected] = useState(null);

//   // 🔥 FETCH REVIEWS
//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   const fetchReviews = async () => {
//     try {
//       const res = await getAllReviews();
//       setReviews(res.data);
//     } catch (err) {
//       console.error("Failed to fetch reviews");
//     }
//   };

//   // 🔥 DELETE
//   const handleDelete = async (id) => {
//     try {
//       await deleteReview(id);
//       setSelected(null);
//       fetchReviews(); // refresh
//     } catch (err) {
//       console.error("Delete failed");
//     }
//   };

//   // 🔥 TOGGLE STATUS
//   const toggleStatus = async (id, currentStatus) => {
//     try {
//       const newStatus =
//         currentStatus === "approved" ? "pending" : "approved";

//       await updateReviewStatus(id, newStatus);
//       fetchReviews(); // refresh
//     } catch (err) {
//       console.error("Status update failed");
//     }
//   };

//   return (
//     <div className="space-y-12">

//       {/* 🔥 HEADER */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="space-y-2"
//       >
//         <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
//           Admin
//         </p>

//         <h1 className="text-3xl md:text-4xl font-semibold">
//           Client{" "}
//           <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
//             Reviews
//           </span>
//         </h1>
//       </motion.div>

//       {/* 🔥 GRID */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

//         {reviews.map((r, i) => (
//           <motion.div
//             key={r._id}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.08 }}
//             whileHover={{ y: -6, scale: 1.02 }}
//             className="group relative p-6 rounded-2xl 
//             border border-gray-200 dark:border-white/10
//             bg-white/70 dark:bg-white/[0.04]
//             backdrop-blur-xl

//             shadow-[0_8px_30px_rgba(0,0,0,0.06)]
//             dark:shadow-[0_10px_40px_rgba(0,0,0,0.7)]

//             overflow-hidden transition-all duration-300"
//           >

//             {/* GLOW */}
//             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
//               <div className="absolute inset-0 bg-emerald-400/10 blur-2xl" />
//             </div>

//             <div className="relative z-10">

//               {/* TOP */}
//               <div className="flex justify-between items-start mb-3">

//                 <div>
//                   <h3 className="font-medium text-lg group-hover:text-emerald-400 transition">
//                     {r.name}
//                   </h3>

//                   <p className="text-xs text-gray-500">
//                     {r.role}
//                   </p>
//                 </div>

//                 <motion.button
//                   whileHover={{ scale: 1.15 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={() => setSelected(r)}
//                   className="text-red-400 hover:text-red-500 transition"
//                 >
//                   <FaTrash />
//                 </motion.button>

//               </div>

//               {/* ⭐ STARS */}
//               <div className="flex gap-1 mb-3 text-emerald-400">
//                 {Array.from({ length: r.rating }).map((_, i) => (
//                   <FaStar key={i} className="text-sm" />
//                 ))}
//               </div>

//               {/* MESSAGE */}
//               <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
//                 “{r.message}”
//               </p>

//               <div className="mt-4 flex justify-between items-center">

//                 {/* STATUS */}
//                 <span
//                   className={`text-xs px-3 py-1 rounded-full font-medium
//                   ${
//                     r.status === "approved"
//                       ? "bg-emerald-400/20 text-emerald-400"
//                       : "bg-yellow-400/20 text-yellow-500"
//                   }`}
//                 >
//                   {r.status}
//                 </span>

//                 {/* ACTION */}
//                 <motion.button
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => toggleStatus(r._id, r.status)}
//                   className={`
//                   px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300

//                   ${
//                     r.status === "approved"
//                       ? "border border-red-400/40 text-red-400 hover:bg-red-400/10"
//                       : "bg-gradient-to-r from-emerald-400 to-teal-300 text-black hover:scale-105"
//                   }
//                 `}
//                 >
//                   {r.status === "approved" ? "Withdraw" : "Approve"}
//                 </motion.button>

//               </div>

//             </div>

//           </motion.div>
//         ))}

//       </div>

//       {/* 🔥 DELETE MODAL */}
//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >

//             <div
//               className="absolute inset-0 bg-black/50 backdrop-blur-sm"
//               onClick={() => setSelected(null)}
//             />

//             <motion.div
//               initial={{ scale: 0.9, y: 40 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 40 }}
//               className="relative z-10 w-full max-w-sm p-[1px] rounded-2xl
//               bg-gradient-to-b from-white/40 to-transparent
//               dark:from-white/10"
//             >

//               <div className="rounded-2xl p-6 text-center space-y-4
//               bg-white/80 dark:bg-black/70 backdrop-blur-xl
//               border border-gray-200 dark:border-white/10"
//               >

//                 <h3 className="text-lg font-semibold">
//                   Delete Review
//                 </h3>

//                 <p className="text-sm text-gray-500">
//                   This action cannot be undone.
//                 </p>

//                 <div className="flex justify-center gap-3 pt-2">

//                   <button
//                     onClick={() => setSelected(null)}
//                     className="px-4 py-2 rounded-full border 
//                     border-gray-300 dark:border-white/10"
//                   >
//                     Cancel
//                   </button>

//                   <motion.button
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => handleDelete(selected._id)}
//                     className="px-5 py-2 rounded-full 
//                     bg-gradient-to-r from-red-400 to-red-500
//                     text-white font-medium"
//                   >
//                     Delete
//                   </motion.button>

//                 </div>

//               </div>

//             </motion.div>

//           </motion.div>
//         )}
//       </AnimatePresence>

//     </div>
//   );
// };

// export default AdminReviews;





import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaTrash } from "react-icons/fa";
import Pagination from "../components/Pagination";
import Button from "../components/Button";
import toast from "react-hot-toast";

import {
  getAllReviews,
  updateReviewStatus,
  deleteReview,
} from "../api/review.api";

const AdminReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [selected, setSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
const reviewsPerPage = 6;

const indexOfLast = currentPage * reviewsPerPage;
const indexOfFirst = indexOfLast - reviewsPerPage;

const currentReviews = reviews.slice(indexOfFirst, indexOfLast);
const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  // 🔥 FETCH REVIEWS
  useEffect(() => {
    fetchReviews();
  }, []);


  useEffect(() => {
  const total = Math.ceil(reviews.length / reviewsPerPage);
  if (currentPage > total) setCurrentPage(1);
}, [reviews]);

  const fetchReviews = async () => {
    try {
      const res = await getAllReviews();
      setReviews(res.data);
    } catch (err) {
      console.error("Failed to fetch reviews");
    }
  };

  // 🔥 DELETE
  const handleDelete = async (id) => {
    try {
      await deleteReview(id);
      setSelected(null);
      fetchReviews(); // refresh
    } catch (err) {
      console.error("Delete failed");
    }
  };

  // 🔥 TOGGLE STATUS
  const toggleStatus = async (id, currentStatus) => {
    try {
      const newStatus =
        currentStatus === "approved" ? "pending" : "approved";

      await updateReviewStatus(id, newStatus);
      fetchReviews(); // refresh
    } catch (err) {
      console.error("Status update failed");
    }
  };

  return (
    <div className="space-y-12">

      {/* 🔥 HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
          Admin
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold">
          Client{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            Reviews
          </span>
        </h1>
      </motion.div>

      {/* 🔥 GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {currentReviews.map((r, i) => (
          <motion.div
            key={r._id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative p-6 rounded-2xl 
            border border-gray-200 dark:border-white/10
            bg-white/70 dark:bg-white/[0.04]
            backdrop-blur-xl

            shadow-[0_8px_30px_rgba(0,0,0,0.06)]
            dark:shadow-[0_10px_40px_rgba(0,0,0,0.7)]

            overflow-hidden transition-all duration-300"
          >

            {/* GLOW */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute inset-0 bg-emerald-400/10 blur-2xl" />
            </div>

            <div className="relative z-10">

              {/* TOP */}
              <div className="flex justify-between items-start mb-3">

                <div>
                  <h3 className="font-medium text-lg group-hover:text-emerald-400 transition">
                    {r.name}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {r.role}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelected(r)}
                  className="text-red-400 hover:text-red-500 transition"
                >
                  <FaTrash />
                </motion.button>

              </div>

              {/* ⭐ STARS */}
              <div className="flex gap-1 mb-3 text-emerald-400">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>

              {/* MESSAGE */}
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                “{r.message}”
              </p>

              <div className="mt-4 flex justify-between items-center">

                {/* STATUS */}
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium
                  ${
                    r.status === "approved"
                      ? "bg-emerald-400/20 text-emerald-400"
                      : "bg-yellow-400/20 text-yellow-500"
                  }`}
                >
                  {r.status}
                </span>

                {/* ACTION */}
                <Button
  onClick={() => toggleStatus(r._id, r.status)}
  variant={r.status === "approved" ? "danger" : "primary"}
  className="px-4 py-1.5 text-xs"
>
  {r.status === "approved" ? "Withdraw" : "Approve"}
</Button>

              </div>

            </div>

          </motion.div>
        ))}

      </div>


      <Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>

      {/* 🔥 DELETE MODAL */}
<AnimatePresence>
  {selected && (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      {/* BACKDROP */}
      <div
        className="absolute inset-0 dark:bg-black/70 bg-black/20 backdrop-blur-2xl"
        onClick={() => setSelected(null)}
      />

      {/* MODAL WRAPPER */}
      <motion.div
        initial={{ scale: 0.92, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.92, y: 40 }}
        className="
          relative z-10 w-full max-w-sm p-7 rounded-3xl

          bg-white/80 dark:bg-white/[0.05]
          backdrop-blur-xl

          border border-gray-200 dark:border-white/10

          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        "
      >

        {/* SOFT GLOW */}
        <div className="
          absolute inset-0 rounded-3xl
          bg-gradient-to-br from-red-500/10 to-transparent
          blur-2xl opacity-40 pointer-events-none
        " />

        <div className="relative space-y-5 text-center">

          {/* TITLE */}
          <h3 className="text-xl font-semibold">
            Delete Review
          </h3>

          {/* DESCRIPTION */}
          <p className="text-sm text-gray-500">
            This action cannot be undone. Are you sure you want to delete this review?
          </p>

          {/* ACTIONS */}
          <div className="flex justify-center gap-3 pt-3">

            <Button
              onClick={() => setSelected(null)}
              variant="secondary"
            >
              Cancel
            </Button>

            <Button
              onClick={() => handleDelete(selected._id)}
              variant="danger"
            >
              Delete
            </Button>

          </div>

        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
};

export default AdminReviews;