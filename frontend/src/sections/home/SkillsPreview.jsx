
// import { motion } from "framer-motion";

// const SkillsPreview = () => {
//   const techStack = [
//     "React", "Next.js", "Node.js", "Express",
//     "MongoDB", "PostgreSQL", "Tailwind CSS",
//     "TypeScript", "Redux", "Firebase",
//     "JWT Auth", "REST APIs", "Git", "Docker", "Vercel"
//   ];

//   // 🔥 animation
//   const container = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.05,
//       },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20, scale: 0.9 },
//     show: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.4, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="relative py-15  md:py-28 px-6 md:px-12 overflow-hidden text-center">

//       {/* BACKGROUND */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 
//           bg-gradient-to-b from-transparent via-gray-50 to-transparent 
//           dark:via-gray-900/30" 
//         />

//         <div className="absolute left-1/2 -translate-x-1/2 top-20 w-96 h-96 
//           bg-emerald-200/20 dark:bg-emerald-500/10 blur-3xl" />
//       </div>

//       <div className="max-w-4xl mx-auto">

//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-14"
//         >
//           <p className="text-xs uppercase tracking-[0.35em] text-gray-500 mb-1">
//             Tech Stack
//           </p>

//           <h2 className="text-4xl md:text-5xl font-semibold">
//             Tech Behind <span className="text-emerald-400">My Work</span>
//           </h2>
//         </motion.div>

//         {/* 🔥 BADGES */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center gap-4"
//         >

//           {techStack.map((tech) => (
//             <motion.div
//               key={tech}
//               variants={item}
//               whileHover={{ y: -4, scale: 1.05 }}
//               className="relative group"
//             >

//               {/* 🔥 OUTER GLOW */} 
//               <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
//               transition duration-500 bg-emerald-400/20 blur-xl" />

//               {/* 🔥 BADGE */}
//               <div
//                 className="relative px-5 md:px-10 py-2 md:py-3 rounded-full text-sm font-medium
//                 border border-gray-200 dark:border-white/10
//                 bg-white/70 dark:bg-white/3
//                 backdrop-blur-md

//                 text-gray-700 dark:text-gray-300
//                 transition-all duration-300

//                 group-hover:border-emerald-400/50
//                 group-hover:text-emerald-400"
//               >
//                 {tech}
//               </div>

//             </motion.div>
//           ))}

//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default SkillsPreview;



import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiRedux,
  SiVercel,
} from "react-icons/si";



const techStack = [
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Next.js", icon: <SiVercel />, color: "text-black dark:text-white" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express", icon: <SiExpress />, color: "text-gray-400" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
  { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
  { name: "Docker", icon: <FaDocker />, color: "text-blue-400" },
  { name: "Vercel", icon: <SiVercel />, color: "text-black dark:text-white" },
];

const SkillsPreview = () => {

  const [iconSize, setIconSize] = useState(40);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 640) {
      setIconSize(36); // mobile
    } else if (window.innerWidth < 1024) {
      setIconSize(44); // tablet
    } else {
      setIconSize(52); // desktop
    }
  };

  handleResize(); // run once
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-15 md:py-28 overflow-hidden text-center">

      {/* ❌ KEEP YOUR BACKGROUND (unchanged) */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 
          bg-gradient-to-b from-transparent via-gray-50 to-transparent 
          dark:via-gray-900/30"
        />

        <div
          className="absolute left-1/2 -translate-x-1/2 top-20 w-96 h-96 
          bg-emerald-200/20 dark:bg-emerald-500/10 blur-3xl"
        />
      </div>

      {/* ✅ FIXED CONTAINER ALIGNMENT ONLY */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* HEADER (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-gray-500 mb-1">
            Tech Stack
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold">
            Tech Behind <span className="text-emerald-400">My Work</span>
          </h2>
        </motion.div>

        {/* BADGES */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={item}
              whileHover={{ y: -4, scale: 1.05 }}
              className="relative group"
            >
              {/* 🔥 YOUR ORIGINAL GLOW */}
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
                transition duration-500 bg-emerald-400/20 blur-xl"
              />

              {/* 🔥 BADGE (ONLY ICON ADDED) */}
              <div
                className="
                relative flex items-center gap-2
                px-5 md:px-10 py-2 md:py-3 rounded-full text-sm font-medium

                border border-gray-200 dark:border-white/10
                bg-white/70 dark:bg-white/3
                backdrop-blur-md

                text-gray-700 dark:text-gray-300
                transition-all duration-300

                group-hover:border-emerald-400/50
                group-hover:text-emerald-400
                "
              >
                {/* ICON */}
                <span className={`text-base ${tech.color}`}>
                  {tech.icon}
                </span>

                {/* TEXT */}
                {tech.name}
              </div>
            </motion.div>
          ))}
        </motion.div>


        {/* 🔥 ICON SCROLLER */}
<div className="relative mt-20 overflow-hidden">

  {/* LEFT FADE */}
<div className="absolute left-0 top-0 w-20 h-full 
  bg-gradient-to-r 
  from-gray-50 via-gray-50/80 to-transparent
  dark:from-black dark:via-black/80
  z-10" />

  {/* RIGHT FADE */}
 <div className="absolute right-0 top-0 w-20 h-full 
  bg-gradient-to-l 
  from-gray-50 via-gray-50/80 to-transparent
  dark:from-black dark:via-black/80
  z-10" />

  <motion.div
    className="flex gap-12 w-max"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      repeat: Infinity,
      duration: 20,
      ease: "linear",
    }}
  >
    {[...techStack, ...techStack].map((tech, i) => (
      <div
        key={i}
        className="text- md:text-4xl opacity-70 hover:opacity-100 transition"
      >
      <span className={tech.color}>
  {React.cloneElement(tech.icon, { size: iconSize })}
</span>
      </div>
    ))}
  </motion.div>
</div>

      </div>
    </section>
  );
};

export default SkillsPreview;