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