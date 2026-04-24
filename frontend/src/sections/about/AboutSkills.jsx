// import {
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
// } from "react-icons/fa";

// import {
//   SiTailwindcss,
//   SiJavascript,
//   SiMongodb,
//   SiExpress,
//   SiPostman,
//   SiFigma,
//   SiNextdotjs,
//   SiTypescript,
// } from "react-icons/si";

// import { motion } from "framer-motion";

// const AboutSkills = () => {
//   const skills = [
//     {
//       title: "Frontend",
//       items: [
//         { name: "React", icon: FaReact },
//         { name: "Next.js", icon: SiNextdotjs },
//         { name: "Tailwind", icon: SiTailwindcss },
//         { name: "TypeScript", icon: SiTypescript },
//         { name: "JavaScript", icon: SiJavascript },
//       ],
//     },
//     {
//       title: "Backend",
//       items: [
//         { name: "Node.js", icon: FaNodeJs },
//         { name: "Express", icon: SiExpress },
//         { name: "MongoDB", icon: SiMongodb },
//       ],
//     },
//     {
//       title: "Tools",
//       items: [
//         { name: "Git", icon: FaGitAlt },
//         { name: "Postman", icon: SiPostman },
//         { name: "Figma", icon: SiFigma },
//       ],
//     },
//   ];

//   return (
//     <section className="relative py-28 px-6 md:px-12 overflow-hidden">

//       {/* BACKGROUND */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 
//           bg-gradient-to-b from-transparent via-gray-50 to-transparent 
//           dark:via-gray-900/40" 
//         />
//         <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[400px] h-[400px] 
//           bg-emerald-400/10 blur-3xl" />
//       </div>

//       <div className="max-w-6xl mx-auto">

//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mb-20"
//         >
//           <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-1.5">
//             Expertise
//           </p>

//           <h2 className="text-4xl md:text-5xl font-semibold">
//             Tech <span className="text-emerald-400">Stack</span>
//           </h2>

//         </motion.div>

//         {/* GRID */}
//         <div className="grid md:grid-cols-3 gap-10">

//           {skills.map((group, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.12, duration: 0.6 }}
//               viewport={{ once: true }}
//               className="group relative p-6 rounded-2xl 
//               border border-gray-200 dark:border-white/10
//               bg-white dark:bg-white/[0.03]
//               transition-all duration-300

//               hover:border-emerald-400/50
//               hover:-translate-y-1"
//             >

//               {/* HOVER GLOW */}
//               <div className="absolute inset-0 rounded-2xl opacity-0 
//               group-hover:opacity-100 transition duration-500 
//               bg-emerald-400/5 blur-xl" />

//               <div className="relative z-10">

//                 {/* CATEGORY */}
//                 <h3 className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-6">
//                   {group.title}
//                 </h3>

//                 {/* ITEMS */}
//                 <div className="flex flex-col gap-4">

//                   {group.items.map((item, idx) => {
//                     const Icon = item.icon;

//                     return (
//                       <div
//                         key={idx}
//                         className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
//                         transition-all duration-300
//                         group-hover:text-emerald-400"
//                       >
//                         {/* ICON BOX */}
//                         <div className="w-8 h-8 flex items-center justify-center 
//                         rounded-md border border-gray-200 dark:border-white/10
//                         text-emerald-400">
//                           <Icon className="text-sm" />
//                         </div>

//                         <span className="text-sm">{item.name}</span>
//                       </div>
//                     );
//                   })}

//                 </div>

//               </div>

//             </motion.div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutSkills;




import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiFigma,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

import { motion } from "framer-motion";

const AboutSkills = () => {
 const skills = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express", icon: SiExpress, color: "text-gray-500 dark:text-gray-300" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "Postman", icon: SiPostman, color: "text-orange-400" },
      { name: "Figma", icon: SiFigma, color: "text-pink-500" },
    ],
  },
];

  return (
    <section className="py-15 md:py-28">

      {/* ✅ FIXED CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-xl"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
            Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Tech{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {skills.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-2xl 
              border border-gray-200 dark:border-white/10
              bg-white/60 dark:bg-white/[0.03]
              backdrop-blur-md

              hover:border-emerald-400/50
              hover:-translate-y-[4px]
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              transition-all duration-300"
            >

              {/* subtle glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 
              group-hover:opacity-100 transition duration-500 
              bg-emerald-400/5 blur-xl" />

              <div className="relative z-10">

                {/* CATEGORY */}
                <h3 className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-6">
                  {group.title}
                </h3>

                {/* ITEMS */}
                <div className="flex flex-col gap-4">

                  {group.items.map((item, idx) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={idx}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                      >
                        {/* ICON BOX */}
                        <div className="w-9 h-9 flex items-center justify-center 
                        rounded-md border border-gray-200 dark:border-white/10
                        text-emerald-400
                        bg-white/70 dark:bg-white/[0.04]">
                          <Icon size={20} className={item.color}/>
                        </div>

                        <span className="text-sm font-medium group-hover:text-emerald-400 transition">
  {item.name}
</span>
                      </div>
                    );
                  })}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AboutSkills;