// import { motion } from "framer-motion";
// import { FaStar } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import { getApprovedReviews } from "../../api/review.api";

// const ReviewsSection = () => {
//   const [reviews, setReviews] = useState([]);

//   // 🔥 FETCH APPROVED REVIEWS
//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   const fetchReviews = async () => {
//     try {
//       const res = await getApprovedReviews();
//       setReviews(res.data);
//     } catch (err) {
//       console.error("Failed to fetch reviews");
//     }
//   };

//   const isScrollable = reviews.length > 2;

//   return (
//     <section className="relative py-15 md:py-24 px-6 md:px-12 overflow-hidden">

//       {/* BACKGROUND */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 
//           bg-gradient-to-b from-transparent via-gray-50 to-transparent 
//           dark:via-gray-900/30" 
//         />
//         <div className="absolute left-1/2 -translate-x-1/2 top-10 w-96 h-96 
//           bg-emerald-400/10 blur-3xl" />
//       </div>

//       <div className="max-w-6xl mx-auto">

//         {/* HEADER */}
//         <div className="mb-14 text-center">
//           <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-2">
//             Testimonials
//           </p>

//           <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
//             What Clients{" "}
//             <span className="
//               bg-gradient-to-r from-emerald-400 to-teal-300
//               bg-clip-text text-transparent
//             ">
//               Say
//             </span>
//           </h2>
//         </div>

//         {/* 🔥 SCROLLER */}
//         <div className="relative overflow-hidden py-2">

//           <motion.div
//             className="flex gap-6"
//             animate={
//               isScrollable
//                 ? { x: ["0%", "-50%"] }
//                 : { x: "0%" }
//             }
//             transition={
//               isScrollable
//                 ? {
//                     repeat: Infinity,
//                     duration: 20,
//                     ease: "linear",
//                   }
//                 : {}
//             }
//           >

//             {/* 🔥 DUPLICATE FOR LOOP */}
//             {[...reviews, ...reviews].map((r, i) => (
//               <div
//                 key={i}
//                 className="
//                 group relative

//                 w-[200px] sm:w-[230px] md:w-[350px]
//                 flex-shrink-0

//                 p-4 md:p-5 rounded-2xl 

//                 border border-gray-200 dark:border-white/10
//                 bg-white/70 dark:bg-white/[0.04]
//                 backdrop-blur-xl

//                 transition-all duration-300
//                 hover:-translate-y-1
//                 hover:border-emerald-400/40
//               "
//               >

//                 {/* GLOW */}
//                 <div className="
//                   absolute inset-0 rounded-2xl opacity-0 
//                   group-hover:opacity-100 transition duration-500
//                   bg-emerald-400/5 blur-xl
//                 " />

//                 <div className="relative z-10">

//                   {/* ⭐ STARS */}
//                   <div className="flex gap-1 mb-2 text-emerald-400">
//                     {Array.from({ length: r.rating }).map((_, i) => (
//                       <FaStar key={i} className="text-[10px] md:text-xs" />
//                     ))}
//                   </div>

//                   {/* MESSAGE */}
//                   <p
//                     className="
//                     w-full
//                     text-xs sm:text-sm md:text-base
//                     font-medium leading-relaxed
//                     text-gray-700 dark:text-gray-200
//                     break-words whitespace-normal
//                     line-clamp-4
//                     mb-3
//                   "
//                   >
//                     “{r.message}”
//                   </p>

//                   {/* USER */}
//                   <div className="mt-2">
//                     <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
//                       {r.name}
//                     </p>

//                     <p className="text-[10px] sm:text-xs text-gray-500 tracking-wide">
//                       {r.role}
//                     </p>
//                   </div>

//                 </div>

//               </div>
//             ))}

//           </motion.div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default ReviewsSection;





import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getApprovedReviews } from "../../api/review.api";

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await getApprovedReviews();
      setReviews(res.data);
    } catch (err) {
      console.error("Failed to fetch reviews");
    }
  };

  const isScrollable = reviews.length > 2;

  return (
    <section className="relative py-15 md:py-24 px-6 md:px-12 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 
          bg-gradient-to-b from-transparent via-gray-50 to-transparent 
          dark:via-gray-900/30" 
        />
        <div className="absolute left-1/2 -translate-x-1/2 top-10 w-96 h-96 
          bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* 🔥 HEADER */}
      <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mb-14 text-center"
>
  <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-2">
    Testimonials
  </p>

  <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
    What Clients{" "}
    <span className="
      bg-gradient-to-r from-emerald-400 to-teal-300
      bg-clip-text text-transparent
    ">
      Say
    </span>
  </h2>
</motion.div>

        {/* 🔥 SCROLLER */}
        <div
          className="relative overflow-hidden py-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          <motion.div
            className="flex gap-6"
            animate={
              isScrollable && !paused
                ? { x: ["0%", "-50%"] }
                : { x: "0%" }
            }
            transition={
              isScrollable
                ? {
                    repeat: Infinity,
                    duration: 25, // smoother slower scroll
                    ease: "linear",
                  }
                : {}
            }
          >

            {[...reviews, ...reviews].map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{
                  y: -8,
                  scale: 1.04,
                }}
                className="
                group relative

                w-[200px] sm:w-[230px] md:w-[350px]
                flex-shrink-0

                p-4 md:p-5 rounded-2xl 

                border border-gray-200 dark:border-white/10
                bg-white/70 dark:bg-white/[0.04]
                backdrop-blur-xl

                transition-all duration-300
              "
              >

                {/* 🔥 PREMIUM GLOW */}
                <div className="
                  absolute inset-0 rounded-2xl opacity-0 
                  group-hover:opacity-100 transition duration-500
                ">
                  <div className="
                    absolute inset-0 
                    bg-gradient-to-r from-emerald-400/10 to-teal-300/10
                    blur-2xl
                  " />
                </div>

                {/* 🔥 SHIMMER EFFECT */}
                <div className="
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  transition duration-700
                  bg-gradient-to-r from-transparent via-white/10 to-transparent
                  translate-x-[-100%] group-hover:translate-x-[100%]
                " />

                <div className="relative z-10">

                  {/* ⭐ STARS */}
                  <div className="flex gap-1 mb-2 text-emerald-400">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <FaStar key={i} className="text-[10px] md:text-xs" />
                    ))}
                  </div>

                  {/* MESSAGE */}
                  <p className="
                    w-full
                    text-xs sm:text-sm md:text-base
                    font-medium leading-relaxed
                    text-gray-700 dark:text-gray-200
                    break-words whitespace-normal
                    line-clamp-4
                    mb-3
                  ">
                    “{r.message}”
                  </p>

                  {/* USER */}
                  <div className="mt-2">
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                      {r.name}
                    </p>

                    <p className="text-[10px] sm:text-xs text-gray-500 tracking-wide">
                      {r.role}
                    </p>
                  </div>

                </div>

              </motion.div>
            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;