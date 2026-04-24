// import { motion } from "framer-motion";
// import { FaCheckCircle } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const AboutProof = () => {
//   const points = [
//     "Built 10+ full-stack applications",
//     "Admin dashboards with authentication",
//     "REST APIs with Node.js & Express",
//     "MongoDB database design",
//   ];

//   return (
//     <section className="relative mt-20">

     
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         className="mb-10"
//       >
//         <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-1">
//           Highlights
//         </p>

//         <h3 className="text-2xl md:text-5xl font-semibold leading-tight">
//           What I <span className="text-emerald-400">Build</span>
//         </h3>

//       </motion.div>

//       {/* 🔥 LIST */}
//       <ul className="grid md:grid-cols-2 gap-5">
//         {points.map((p, i) => (
//           <motion.li
//             key={i}
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.1 }}
//             viewport={{ once: true }}
//             className="group flex items-start gap-3 p-5 rounded-xl 
//             bg-white/60 dark:bg-black/40 backdrop-blur-md
//             border border-gray-200 dark:border-gray-800
//             hover:border-emerald-400 hover:-translate-y-1 
//             transition-all duration-300"
//           >

//             {/* ICON */}
//             <FaCheckCircle className="text-emerald-400 mt-1 flex-shrink-0" />

//             {/* TEXT */}
//             <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
//               {p}
//             </span>

//           </motion.li>
//         ))}
//       </ul>

//       {/* 🔥 CTA */}
//       <motion.div
//         initial={{ opacity: 0, y: 15 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3 }}
//         viewport={{ once: true }}
//         className="mt-10 text-center"
//       >
//         <Link
//             to="/projects"
//             className="group inline-flex items-center gap-3 px-6 py-3 rounded-full 
//             border border-gray-300 dark:border-gray-700 
//             hover:border-emerald-400 
//             transition-all duration-300"
//           >
//             <span className="text-sm font-medium">
//               See What I’ve Built
//             </span>

//             {/* Animated Arrow */}
//             <span className="transition-transform duration-300 group-hover:translate-x-1">
//               →
//             </span>
//           </Link>
//       </motion.div>

//     </section>
//   );
// };

// export default AboutProof;





import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const AboutProof = () => {
  const points = [
    "Built 10+ full-stack applications",
    "Admin dashboards with authentication",
    "REST APIs with Node.js & Express",
    "MongoDB database design",
  ];

  return (
    <section className="py-15 md:py-28">

      {/* ✅ FIXED CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-xl"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
            Highlights
          </p>

          <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            What I{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Build
            </span>
          </h3>
        </motion.div>

        {/* LIST */}
        <ul className="grid md:grid-cols-2 gap-5">
          {points.map((p, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex items-start gap-3 p-5 rounded-xl 
              bg-white/60 dark:bg-black/40 backdrop-blur-md
              border border-gray-200 dark:border-white/10

              hover:border-emerald-400/60 
              hover:-translate-y-[3px]
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              transition-all duration-300"
            >

              {/* ICON */}
              <FaCheckCircle className="text-emerald-400 mt-1 flex-shrink-0 text-lg" />

              {/* TEXT */}
              <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {p}
              </span>

            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <Button to="/projects">
  See What I’ve Built →
</Button>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutProof;