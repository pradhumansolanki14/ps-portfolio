// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const CTASection = () => {
//   return (
//     <section className="relative py-28 px-6 md:px-12 text-center overflow-hidden">

//       {/* BACKGROUND */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 
//           bg-gradient-to-b from-transparent via-gray-50 to-transparent 
//           dark:via-gray-900/30" 
//         />

//         {/* centered glow */}
//         <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[500px] h-[500px] 
//           bg-emerald-300/10 dark:bg-emerald-500/10 blur-3xl" />
//       </div>

//       <div className="max-w-2xl mx-auto">

//         {/* HEADING */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-4xl md:text-5xl font-semibold leading-tight mb-6"
//         >
//           Let’s build something <br />
//           <span className="text-emerald-400">meaningful together</span>
//         </motion.h2>

//         {/* SUBTEXT */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="text-gray-600 dark:text-gray-400 text-lg mb-10"
//         >
//           Have a project in mind? I’m always open to discussing new ideas,
//           collaborations, or opportunities.
//         </motion.p>

//         {/* 🔥 PREMIUM CTA LINK (NOT BUTTON) */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//          <Link
//             to="/contact"
//             className=" group inline-flex items-center gap-3 px-6 py-3 rounded-full 
//             border border-gray-300 dark:border-gray-700 
//             hover:border-emerald-400 
//             transition-all duration-300"
//           >
//             <span className="text-sm font-medium">
//               Start a conversation
//             </span>

//             {/* Animated Arrow */}
//             <span className="transition-transform duration-300 group-hover:translate-x-1">
//               →
//             </span>
//           </Link>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default CTASection;



import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../components/Button";

const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden text-center">

      {/* BACKGROUND (keep for now) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 
          bg-gradient-to-b from-transparent via-gray-50 to-transparent 
          dark:via-gray-900/30" 
        />

        <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[500px] h-[500px] 
          bg-emerald-300/10 dark:bg-emerald-500/10 blur-3xl" />
      </div>

      {/* ✅ FIXED CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="max-w-2xl mx-auto">

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6"
          >
            Let’s build something{" "}
            <span className="block">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                meaningful together
              </span>
            </span>
          </motion.h2>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10"
          >
            Have a project in mind? I’m open to collaborations,
            new ideas, and building impactful products.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button to="/contact">
  Start a conversation →
</Button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;