import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { getProjects } from "../../api/projects.api";
import Button from "../../components/Button";

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((res) => {
      setProjects(res.data?.slice(0, 3) || []);
    });
  }, []);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">

      {/* BACKGROUND (unchanged) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 
          bg-gradient-to-b from-transparent via-gray-50 to-transparent 
          dark:via-gray-900/30" 
        />
        <div className="absolute right-0 top-20 w-96 h-96 
          bg-emerald-200/20 dark:bg-emerald-500/10 blur-3xl" />
      </div>

      {/* ✅ FIXED CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">

         <motion.div
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }}
>
  <motion.p
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 },
    }}
    className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2"
  >
    Projects
  </motion.p>

  <motion.h2
    variants={{
      hidden: { opacity: 0, y: 30 },
      show: { opacity: 1, y: 0 },
    }}
    className="text-4xl md:text-5xl font-semibold"
  >
    Featured{" "}
    <span className="text-emerald-400">Works</span>
  </motion.h2>
</motion.div>

          {/* 👉 DESKTOP BUTTON */}
        <Button to="/projects">
  View all projects →
</Button>

        </div>

        {/* 🔥 GRID (UNCHANGED) */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl 
              border border-gray-200 dark:border-gray-800 
              bg-white/60 dark:bg-black/40 backdrop-blur-md"
            >
              {/* IMAGE */}
              <div className="relative h-52 overflow-hidden p-3">
                <div className="w-full h-full rounded-xl overflow-hidden border border-gray-200 dark:border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover 
                    transition duration-700 
                    group-hover:scale-110 group-hover:blur-[4px]"
                  />

                  <div className="absolute inset-0 flex items-center justify-center gap-4
                    opacity-0 group-hover:opacity-100
                    transition duration-300
                    backdrop-blur-xl bg-black/40"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full
                      border border-white/20 text-white
                      hover:bg-emerald-400 hover:text-black transition"
                    >
                      <FaGithub />
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full
                      border border-white/20 text-white
                      hover:bg-emerald-400 hover:text-black transition"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1 
                group-hover:text-emerald-400 transition">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 👉 MOBILE BUTTON (AFTER CARDS) */}
        <div className="mt-10 flex justify-center md:hidden">
        <Button to="/projects">
  View all projects →
</Button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;