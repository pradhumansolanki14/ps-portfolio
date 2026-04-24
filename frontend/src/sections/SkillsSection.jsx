// import { motion } from "framer-motion";
// import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
// import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss } from "react-icons/si";

// const skills = [
//   {
//     title: "Frontend",
//     items: [
//       { name: "React", icon: <FaReact /> },
//       { name: "JavaScript", icon: <SiJavascript /> },
//       { name: "Tailwind CSS", icon: <SiTailwindcss /> },
//     ],
//   },
//   {
//     title: "Backend",
//     items: [
//       { name: "Node.js", icon: <FaNodeJs /> },
//       { name: "Express.js", icon: <SiExpress /> },
//     ],
//   },
//   {
//     title: "Database",
//     items: [
//       { name: "MongoDB", icon: <SiMongodb /> },
//     ],
//   },
//   {
//     title: "Tools",
//     items: [
//       { name: "Git", icon: <FaGitAlt /> },
//     ],
//   },
// ];

// const SkillsSection = () => {
//   return (
//     <section
//       id="skills"
//       className="min-h-screen px-6 py-20 flex items-center justify-center"
//     >
//       <div className="max-w-6xl w-full">
        
//         {/* Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-semibold text-center mb-12"
//         >
//           Skills
//         </motion.h2>

//         {/* Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {skills.map((category, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 
//               hover:shadow-lg transition"
//             >
//               <h3 className="text-xl font-medium mb-4">
//                 {category.title}
//               </h3>

//               <div className="flex flex-col gap-3">
//                 {category.items.map((skill, i) => (
//                   <div
//                     key={i}
//                     className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
//                   >
//                     <span className="text-lg">{skill.icon}</span>
//                     <span>{skill.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default SkillsSection;



///////////////////////////



import { useEffect, useState } from "react";
import { getSkills } from "../api/skills.api";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const [categories, setCategories] = useState([]);

  // 🔹 Fetch from backend
  useEffect(() => {
    getSkills()
      .then((res) => {
        setCategories(res.data?.categories || []);
      })
      .catch((err) => {
        console.error("Skills fetch error:", err);
      });
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-semibold text-center mb-12"
        >
          Skills
        </motion.h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-800"
            >
              {/* Category Title */}
              <h3 className="text-lg font-semibold mb-4">
                {cat.title}
              </h3>

              {/* Skills */}
              <div className="space-y-2">
                {cat.items.map((skill, i) => (
                  <div key={i} className="text-gray-600 dark:text-gray-400">
                    • {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default SkillsSection;