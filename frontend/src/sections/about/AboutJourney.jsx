// import { motion } from "framer-motion";

// const AboutJourney = () => {
//   const steps = [
//     {
//       title: "Started Web Development",
//       desc: "Learned HTML, CSS, JavaScript fundamentals",
//     },
//     {
//       title: "MERN Stack",
//       desc: "Built full-stack apps using MongoDB, Express, React, Node.js",
//     },
//     {
//       title: "Advanced Projects",
//       desc: "Developed admin panels & scalable APIs",
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

//       <div className="max-w-4xl mx-auto">

//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mb-20"
//         >
//           <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-1">
//             Experience
//           </p>

//           <h2 className="text-4xl md:text-5xl font-semibold">
//             Growth <span className="text-emerald-400">Timeline</span>
//           </h2>
//         </motion.div>

//         {/* TIMELINE */}
//         <div className="relative">

//           {/* 🔥 ANIMATED LINE */}
//           <motion.div
//             initial={{ height: 0 }}
//             whileInView={{ height: "100%" }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="absolute left-2 top-0 w-[2px] 
//             bg-gradient-to-b from-emerald-400 to-transparent
//             origin-top"
//           />

//           <div className="flex flex-col gap-14">

//             {steps.map((step, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.15, duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className="relative pl-12 group"
//               >

//                 {/* 🔥 DOT (FIXED ABOVE LINE) */}
//                 <div className="absolute left-0 top-2 z-10 
//                 w-4 h-4 rounded-full 
//                 bg-white dark:bg-black 
//                 border-2 border-emerald-400" />

//                 {/* CONTENT */}
//                 <div className="relative p-6 rounded-2xl 
//                 border border-gray-200 dark:border-white/10 
//                 bg-white dark:bg-white/[0.03]
//                 transition-all duration-300

//                 hover:border-emerald-400/50
//                 hover:-translate-y-1">

//                   {/* STEP NUMBER */}
//                   <span className="text-xs text-gray-400 mb-2 block">
//                     0{i + 1}
//                   </span>

//                   {/* TITLE */}
//                   <h4 className="font-semibold mb-2 
//                   group-hover:text-emerald-400 transition">
//                     {step.title}
//                   </h4>

//                   {/* DESC */}
//                   <p className="text-sm text-gray-600 dark:text-gray-400">
//                     {step.desc}
//                   </p>

//                 </div>

//               </motion.div>
//             ))}

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutJourney;




import { motion } from "framer-motion";

const AboutJourney = () => {
  const steps = [
    {
      title: "Started Web Development",
      desc: "Learned HTML, CSS, JavaScript fundamentals",
    },
    {
      title: "MERN Stack",
      desc: "Built full-stack apps using MongoDB, Express, React, Node.js",
    },
    {
      title: "Advanced Projects",
      desc: "Developed admin panels & scalable APIs",
    },
  ];

  return (
    <section className="py-15 md:py-28">

      {/* ✅ GLOBAL CONTAINER */}
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
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Growth{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
        </motion.div>

        {/* 🔥 CENTERED TIMELINE FIX */}
        <div className="flex justify-center">

          <div className="relative w-full md:max-w-3xl">

            {/* LINE */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute left-[7px] top-0 w-[2px] 
              bg-gradient-to-b from-emerald-400 via-emerald-400/60 to-transparent"
            />

            <div className="flex flex-col gap-12">

              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative pl-12 group"
                >

                  {/* DOT */}
                  <div className="absolute left-0 top-2 z-10 
                  w-4 h-4 rounded-full 
                  bg-white dark:bg-black 
                  border-2 border-emerald-400">

                    {/* glow */}
                    <div className="absolute inset-0 rounded-full 
                    bg-emerald-400/30 blur-md opacity-0 
                    group-hover:opacity-100 transition" />
                  </div>

                  {/* CARD */}
                  <div className="relative p-6 rounded-2xl 
                  border border-gray-200 dark:border-white/10 
                  bg-white/60 dark:bg-white/[0.03]
                  backdrop-blur-md

                  hover:border-emerald-400/50
                  hover:-translate-y-[4px]
                  hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  transition-all duration-300">

                    {/* STEP */}
                    <span className="text-xs text-gray-400 mb-2 block">
                      0{i + 1}
                    </span>

                    {/* TITLE */}
                    <h4 className="font-semibold mb-2 
                    group-hover:text-emerald-400 transition">
                      {step.title}
                    </h4>

                    {/* DESC */}
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {step.desc}
                    </p>

                  </div>

                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutJourney;