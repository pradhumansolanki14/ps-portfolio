// import { motion } from "framer-motion";

// const AboutIntro = () => {
//   return (
//     <section className="relative min-h-[600px] grid md:grid-cols-2 gap-12 items-center">

//       {/* IMAGE */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="flex justify-center"
//       >
//         <div className="relative w-[260px] h-[320px] md:w-[300px] md:h-[360px]">
//           <img
//             src="/profile.jpg"
//             alt="profile"
//             className="w-full h-full object-cover rounded-2xl 
//             border border-gray-200 dark:border-gray-800 shadow-lg"
//           />

//           {/* subtle glow */}
//           <div className="absolute inset-0 rounded-2xl 
//           bg-emerald-400/10 blur-2xl -z-10" />
//         </div>
//       </motion.div>

//       {/* CONTENT */}
//       <motion.div
//         initial={{ opacity: 0, x: 40 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="flex flex-col justify-center"
//       >

//         {/* LABEL */}
//         <p className="text-xs uppercase tracking-[0.4em] text-gray-500 ">
//           About
//         </p>

//         {/* TITLE */}
//         <h2 className="text-3xl md:text-5xl font-semibold mb-5 leading-snug">
//           My <span className="text-emerald-400">Overview</span>

//         </h2>

//         {/* DESCRIPTION */}
//         <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-lg">
//           I am a MERN Stack Developer specializing in building modern web solutions 
//           that are efficient, maintainable, and performance-driven. I focus on 
//           delivering clean architecture, intuitive interfaces, and reliable backend 
//           systems that solve real-world problems.
//         </p>

//         {/* PROFESSIONAL POINTS */}
//         <div className="space-y-3 mb-8">
//           <p className="text-sm text-gray-600 dark:text-gray-400">
//             • Strong emphasis on performance optimization and scalable architecture
//           </p>
//           <p className="text-sm text-gray-600 dark:text-gray-400">
//             • Experience in building full-stack applications using modern technologies
//           </p>
//           <p className="text-sm text-gray-600 dark:text-gray-400">
//             • Continuous learning mindset with focus on industry best practices
//           </p>
//         </div>

//         {/* STATS */}
//         <div className="grid grid-cols-3 gap-4 max-w-md">

//   {[
//     { value: "10+", label: "Projects" },
//     { value: "5+", label: "Technologies" },
//     { value: "100%", label: "Commitment" },
//   ].map((item, i) => (
//     <motion.div
//       key={i}
//       initial={{ opacity: 0, y: 15 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay: i * 0.1, duration: 0.5 }}
//       viewport={{ once: true }}
//       className="group relative p-4 rounded-xl 
//       border border-gray-200 dark:border-white/10
//       bg-white dark:bg-white/[0.02]
//       text-center

//       hover:border-emerald-400/50
//       hover:-translate-y-[2px]
//       transition-all duration-300"
//     >

//       {/* subtle glow */}
//       <div className="absolute inset-0 rounded-xl opacity-0 
//       group-hover:opacity-100 transition duration-500 
//       bg-emerald-400/5 blur-lg" />

//       <div className="relative z-10">

//         <h3 className="text-xl font-semibold text-emerald-400">
//           {item.value}
//         </h3>

//         <p className="text-[11px] tracking-wide text-gray-500 mt-1">
//           {item.label}
//         </p>

//       </div>

//     </motion.div>
//   ))}

// </div>

//       </motion.div>
//     </section>
//   );
// };

// export default AboutIntro;





import { motion } from "framer-motion";

const AboutIntro = () => {
  return (
    <section className="py-15 md:py-28">

      {/* ✅ FIXED CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-[260px] h-[320px] md:w-[300px] md:h-[360px]">

            {/* subtle shadow instead of heavy glow */}
            <div className="absolute inset-0 rounded-2xl bg-black/10 blur-2xl" />

            <img
              src="/profile.jpg"
              alt="profile"
              className="relative w-full h-full object-cover rounded-2xl 
              border border-gray-200 dark:border-white/10"
            />
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          {/* LABEL */}
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
            About
          </p>

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Overview
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-lg">
            I build modern web applications with a strong focus on performance,
            scalability, and clean architecture—delivering intuitive user
            experiences backed by reliable systems.
          </p>

          {/* 🔥 UPGRADED BULLETS */}
          <div className="space-y-3 mb-8">
            {[
              "Performance-focused and scalable architecture",
              "Full-stack applications using modern technologies",
              "Strong focus on clean code and best practices",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* STATS (kept your style, slightly refined) */}
          <div className="grid grid-cols-3 gap-4 max-w-md">
            {[
              { value: "10+", label: "Projects" },
              { value: "5+", label: "Technologies" },
              { value: "100%", label: "Commitment" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative p-4 rounded-xl 
                border border-gray-200 dark:border-white/10
                bg-white/60 dark:bg-white/[0.02]
                text-center

                hover:border-emerald-400/50
                hover:-translate-y-[2px]
                transition-all duration-300"
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-emerald-400">
                    {item.value}
                  </h3>

                  <p className="text-[11px] tracking-wide text-gray-500 mt-1">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutIntro;