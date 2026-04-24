// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const AboutPreview = () => {
//   return (
//     <section className="relative py-15 md:py-28 px-6 md:px-12 overflow-hidden">

//       {/* BACKGROUND LAYER */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50 to-transparent dark:via-gray-900/30" />
        
//         {/* soft glow */}
//         <div className="absolute left-0 top-10 w-80 h-80 bg-emerald-200/20 dark:bg-emerald-500/10 blur-3xl" />
//       </div>

//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

//         {/* LEFT SIDE */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <p className="text-xs uppercase tracking-[0.35em] text-gray-500 mb-1">
//             About Me
//           </p>

//           <h2 className="text-4xl md:text-5xl font-semibold leading-[1.1]">
//             Crafting scalable systems <br />
//             with <span className="text-emerald-400">precision & clarity</span>
//           </h2>
//         </motion.div>

//         {/* RIGHT SIDE */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="relative"
//         >
//           <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
//             I’m a full-stack developer focused on building high-performance
//             applications with clean UI and scalable architecture. I combine
//             design thinking with engineering to deliver impactful digital
//             experiences.
//           </p>

//           {/* 🔥 PREMIUM CTA LINK */}
//           <Link
//             to="/about"
//             className="group inline-flex items-center gap-3 px-6 py-3 rounded-full 
//             border border-gray-300 dark:border-gray-700 
//             hover:border-emerald-400 
//             transition-all duration-300"
//           >
//             <span className="text-sm font-medium">
//               Read More
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

// export default AboutPreview;


import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../components/Button";

const AboutPreview = () => {
  return (
    <section className="relative py-15 md:py-25 px-6 md:px-12">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg"
        >
          {/* LABEL */}
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
            About Me
          </p>

          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            Crafting scalable systems{" "}
            <span className="block">
              with{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                precision & clarity
              </span>
            </span>
          </h2>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-md"
        >
          {/* TEXT */}
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            I build high-performance applications with clean UI and scalable
            architecture—combining design thinking with engineering to create
            meaningful digital experiences.
          </p>

          {/* CTA */}
      <Button to="/about">
  Read More →
</Button>

        </motion.div>

      </div>
    </section>
  );
};

export default AboutPreview;