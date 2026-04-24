// import { useEffect, useState } from "react";
// import { getHome } from "../../api/home.api";
// import { motion } from "framer-motion";

// const HeroSection = () => {
//   const [home, setHome] = useState({
//     name: "",
//     titles: [],
//     tagline: "",
//     resume: "",
//   });

//   useEffect(() => {
//     getHome().then((res) => {
//       setHome(res.data);
//     });
//   }, []);

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center px-6"
//     >
//       <div className="text-center max-w-3xl">

//         {/* NAME */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-4xl md:text-6xl font-bold mb-4"
//         >
//           Hi, I'm{" "}
//           <span className="text-black dark:text-white">
//             {home.name}
//           </span>
//         </motion.h1>

//         {/* TITLES */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4"
//         >
//           {home.titles.map((t, i) => (
//             <span key={i}>
//               {t}
//               {i !== home.titles.length - 1 && " • "}
//             </span>
//           ))}
//         </motion.div>

//         {/* TAGLINE */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-gray-500 mb-6 leading-relaxed"
//         >
//           {home.tagline}
//         </motion.p>

//         {/* BUTTONS */}
//         <div className="flex justify-center gap-4">

//           {/* Resume */}
//           {home.resume && (
//             <a
//               href={home.resume}
//               target="_blank"
//               className="bg-black text-white dark:bg-white dark:text-black  px-6 py-2 rounded-lg hover:opacity-90 transition"
//             >
//               View Resume
//             </a>
//           )}

//           {/* Contact scroll */}
//           <a
//             href="#contact"
//             className="border px-6 py-2 rounded-lg hover:bg-gray-100 transition"
//           >
//             Contact Me
//           </a>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




////////////////////////




// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// const HeroSection = () => {

//   const roles = ["Web Developer", "Full Stack Developer", "React Developer"];
// const [index, setIndex] = useState(0);

// useEffect(() => {
//   const interval = setInterval(() => {
//     setIndex((prev) => (prev + 1) % roles.length);
//   }, 1000); // change every 1 second
//   return () => clearInterval(interval);
// }, []);
//   return (
// <section className="relative z-10 min-h-[calc(100vh-80px)] -mt-24 pt-24 px-6 overflow-hidden">
//       {/* GRID BACKGROUND */}
//      {/* BACKGROUND */}
// <div className="absolute inset-0 z-0">

//   {/* LIGHT MODE GRID */}
//   <div
//     className="absolute inset-0 dark:hidden"
//     style={{
//       backgroundImage: `
//         linear-gradient(to right, rgba(0,0,0,0.1) 0.3px, transparent 0.5px),
//         linear-gradient(to bottom, rgba(0,0,0,0.1) 0.3px, transparent 0.5px)
//       `,
//       backgroundSize: "60px 60px",
//     }}
//   />

//   {/* DARK MODE GRID */}
//   <div
//     className="absolute inset-0 hidden dark:block"
//     style={{
//       backgroundImage: `
//         linear-gradient(to right, rgba(255,255,255,0.08) 0.3px, transparent 1px),
//         linear-gradient(to bottom, rgba(255,255,255,0.08) 0.3px, transparent 1px)
//       `,
//       backgroundSize: "60px 60px",
//     }}
//   />

// </div>

//       <div className="relative max-w-6xl mx-auto w-full">

//         {/* STATUS BADGE */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="inline-flex items-center gap-2 px-4 py-1 rounded-full border 
//           border-gray-300 dark:border-gray-700 text-sm mb-6"
//         >
//           <span className="w-2 h-2 bg-emerald-400 rounded-full" />
//           Available for Projects
//         </motion.div>

//         {/* NAME */}
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl md:text-8xl font-extrabold leading-[0.85]"
//         >
//           <span className="block text-black dark:text-gray-300">
//             PRADHUMAN
//           </span>
//           <span className="block text-emerald-500">
//             SOLANKI
//           </span>
//         </motion.h1>

//         {/* ROLE + DESCRIPTION */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="mt-6 max-w-xl"
//         >
//           <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-3">
//             Developer & Designer
//           </p>

//           <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
//             Crafting high-performance digital interfaces with a focus on
//             functional minimalism and clean architecture.
//           </p>
//         </motion.div> */}

// <motion.div
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ delay: 0.3 }}
//   className="mt-15 max-w-xl flex items-center text-xl md:text-4xl font-medium text-gray-600 dark:text-gray-400"
// >
//   <span className="mr-2">I am a</span>
//   <AnimatePresence mode="wait">
//     <motion.span
//       key={index} // force re-render for animation
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -10 }}
//       transition={{ duration: 0.4 }}
//       className="inline-block"
//     >
//       {roles[index]}
//     </motion.span>
//   </AnimatePresence>
// </motion.div>
        

//         {/* BUTTONS */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="mt-8 flex gap-4 flex-wrap"
//         >
//           {/* PRIMARY */}
//           <a
//             href="/contact"
//             className="px-6 py-3 rounded-full bg-black text-white 
//             dark:bg-white dark:text-black 
//             hover:scale-105 transition-all duration-300"
//           >
//             Collaborate →
//           </a>

//           {/* SECONDARY */}
//           <a
//             href="/resume.pdf"
//             className="px-6 py-3 rounded-full border border-gray-300 
//             dark:border-gray-700 hover:border-emerald-400 
//             hover:text-emerald-400 transition-all duration-300"
//           >
//             Resume ↓
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;





////////////////////////////////////////////////////////////////////////////

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import CodeEditor from "../../components/CodeEditor";

// const HeroSection = () => {
//   const lines = [
//     "scalable web applications",
//     "high-performance user interfaces",
//     "robust backend systems",
//   ];

//   const [index, setIndex] = useState(0);
//   const [text, setText] = useState("");
//   const current = lines[index];

//   // 🔥 TYPEWRITER
//   useEffect(() => {
//     let i = 0;

//     const type = () => {
//       if (i < current.length) {
//         setText(current.slice(0, i + 1));
//         i++;
//         setTimeout(type, 40);
//       } else {
//         setTimeout(() => {
//           setIndex((prev) => (prev + 1) % lines.length);
//         }, 1600);
//       }
//     };

//     setText("");
//     type();
//   }, [index]);

//   return (
//     <section className="relative min-h-screen px-6 flex items-center justify-center overflow-hidden">

//       {/* GRID */}
//       <div className="absolute inset-0 opacity-30">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
//               linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
//             `,
//             backgroundSize: "60px 60px",
//           }}
//         />
//       </div>

// <div className="max-w-6xl mx-auto grid md:grid-cols-[1.4fr_1.3fr] gap-12 md:gap-16 items-center">
//         {/* 🔥 LEFT */}
//         <div className="max-w-lg">

//           {/* STATUS */}
//           <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border 
//           border-white/10 text-xs mb-6">
//             <span className="w-2 h-2 bg-emerald-400 rounded-full" />
//             Available for Work
//           </div>

//           {/* NAME */}
//           <h1 className="text-4xl md:text-5xl font-semibold mb-3">
//             Pradhuman <span className="text-emerald-400">Solanki</span>
//           </h1>

//           {/* MEANINGFUL HEADLINE */}
//           <h2 className="text-xl md:text-2xl text-gray-400 mb-4 leading-relaxed">
//             I design and build{" "}
//             <span className="text-emerald-400 font-medium">
//               {text}
//               <span className="animate-pulse">|</span>
//             </span>
//           </h2>

//           {/* DESCRIPTION */}
//           <p className="text-gray-500 mb-8 leading-relaxed">
//             Focused on delivering clean architecture, efficient systems, and
//             intuitive user experiences that solve real-world problems.
//           </p>

//           {/* CTA */}
//           <div className="flex gap-4">
//             <a className="px-6 py-3 rounded-full bg-emerald-400 text-black font-medium">
//               Hire Me →
//             </a>

//             <a className="px-6 py-3 rounded-full border border-white/10">
//               View Work
//             </a>
//           </div>

//         </div>

//         {/* 🔥 RIGHT (MEANINGFUL CODE) */}
//        <div className="flex justify-end mb-14 md:mb-0"> <CodeEditor/></div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;


///////////////////////////////////////////////////


// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import CodeEditor from "../../components/CodeEditor";

// const HeroSection = () => {
//   const lines = [
//     "scalable web apps",
//     "high-performance interfaces",
//     "robust backend systems",
//   ];

//   const [index, setIndex] = useState(0);
//   const [text, setText] = useState("");
//   const current = lines[index];

//   useEffect(() => {
//     let i = 0;

//     const type = () => {
//       if (i < current.length) {
//         setText(current.slice(0, i + 1));
//         i++;
//         setTimeout(type, 35);
//       } else {
//         setTimeout(() => {
//           setIndex((prev) => (prev + 1) % lines.length);
//         }, 1400);
//       }
//     };

//     setText("");
//     type();
//   }, [index]);

//   return (
//     <section className="relative min-h-screen flex items-center px-6">

//       <div className="max-w-7xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-16 items-center w-full">

//         {/* LEFT */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="max-w-xl"
//         >

//           {/* STATUS */}
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 text-xs mb-8 backdrop-blur-md bg-white/5">
//             <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
//             Available for Work
//           </div>

//           {/* NAME */}
//           <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
//             Pradhuman{" "}
//             <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
//               Solanki
//             </span>
//           </h1>

//           {/* ROLE */}
//           <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
//             Fullstack Developer
//           </p>

//           {/* HEADLINE */}
//           <h2 className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
//             I build{" "}
//             <span className="text-emerald-400 font-semibold">
//               {text}
//               <span className="animate-pulse">|</span>
//             </span>
//           </h2>

//           {/* DESCRIPTION */}
//           <p className="text-gray-500 mb-10 leading-relaxed max-w-md">
//             Crafting clean, scalable systems with a focus on performance and
//             seamless user experience.
//           </p>

//           {/* CTA */}
//           <div className="flex gap-4">

//             {/* PRIMARY */}
//             <a className="relative px-7 py-3 rounded-full font-medium text-black bg-gradient-to-r from-emerald-400 to-teal-300 transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
//               Hire Me →
//             </a>

//             {/* SECONDARY */}
//             <a className="px-7 py-3 rounded-full border border-white/10 backdrop-blur-md bg-white/5 hover:bg-white/10 transition">
//               View Work
//             </a>

//           </div>
//         </motion.div>

//         {/* RIGHT */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9, y: 40 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="flex justify-center md:justify-end"
//         >
//           <div className="scale-[1.05] md:scale-[1.15] drop-shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
//             <CodeEditor />
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;


/////////////////////////////////



import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CodeEditor from "../../components/CodeEditor";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const HeroSection = () => {
 const lines = [
  "scalable applications",
  "high-speed interfaces",
  "reliable backend systems",
];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = lines[index];
    let timeout;

    if (!isDeleting) {
      // typing
      if (text.length < current.length) {
        timeout = setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, 40);
      } else {
        // pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1200);
      }
    } else {
      // deleting
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(current.slice(0, text.length - 1));
        }, 25);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % lines.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-16 items-center w-full">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >

          {/* STATUS */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 text-xs mb-8 backdrop-blur-md bg-white/5">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Available for Work
          </div>

          {/* NAME */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
            Pradhuman{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Solanki
            </span>
          </h1>

          {/* ROLE */}
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
            Fullstack Developer
          </p>

          {/* HEADLINE */}
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
            I build{" "}
            <span className="text-emerald-400 font-semibold">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-500 mb-10  leading-relaxed max-w-md">
            Crafting clean, scalable systems with a focus on performance and
            seamless user experience.
          </p>

          {/* CTA */}
     

<div className="flex gap-4">

  {/* 🔥 PRIMARY BUTTON */}
  <Button to="/contact">
  Hire Me →
</Button>


  {/* 🔥 SECONDARY BUTTON */}
  <Button to="/projects" variant="secondary">
  View Work
</Button>

</div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
         <div className="relative scale-[1.05] md:scale-[1.1]">

  {/* Soft neutral shadow (realistic) */}
  <div className="absolute inset-0 blur-3xl opacity-40 bg-black/20 rounded-[30px]" />

  {/* subtle highlight glow (very controlled) */}
  <div className="absolute -inset-6 bg-gradient-to-tr from-emerald-400/10 to-transparent blur-2xl rounded-[40px]" />

  {/* actual component */}
  <div className="relative">
    <CodeEditor />
  </div>

</div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;