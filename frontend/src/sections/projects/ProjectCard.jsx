


import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className="group relative overflow-hidden rounded-2xl 
      border border-gray-200 dark:border-white/10
      bg-white dark:bg-white/[0.03]
      transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
      hover:-translate-y-1"
    >

      {/* IMAGE SECTION */}
      <div className="relative h-64 md:h-72 p-3">

        <div className="relative w-full h-full rounded-xl overflow-hidden border border-gray-200 dark:border-white/10">

          {/* IMAGE */}
          <img
            src={project.image || "/placeholder.png"}
            alt={project.title}
            className="w-full h-full object-cover 
            transition duration-700 
            group-hover:scale-110 group-hover:blur-[4px]"
          />

          {/* OVERLAY */}
          <div
            className={`
            absolute inset-0 flex items-center justify-center gap-6
            transition-all duration-500 backdrop-blur-xl rounded-xl bg-black/40

            ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
          `}
          >
            {/* GITHUB */}
          <a
  href={project.github}
  target="_blank"
  rel="noreferrer"
  onClick={(e) => e.stopPropagation()}
  className="group/icon relative w-14 h-14 flex items-center justify-center rounded-full
  border border-white/20 text-white text-lg hover:border-none
  backdrop-blur-md bg-white/10

  transition-all duration-300 ease-out
  hover:scale-110"
>
  {/* 🔥 GRADIENT GLOW */}
  <span className="absolute inset-0 rounded-full opacity-0 group-hover/icon:opacity-100 
  bg-gradient-to-r from-emerald-400 to-teal-300 blur-md transition duration-300" />

  {/* 🔥 BUTTON BG */}
  <span className="absolute inset-0 rounded-full opacity-0 group-hover/icon:opacity-100 
  bg-gradient-to-r from-emerald-400 to-teal-300 transition duration-300" />

  {/* ICON */}
  <FaGithub className="relative z-10 transition duration-300 group-hover/icon:text-black" />
</a>

            {/* LIVE */}
           <a
  href={project.live}
  target="_blank"
  rel="noreferrer"
  onClick={(e) => e.stopPropagation()}
  className="group/icon relative w-14 h-14 flex items-center justify-center rounded-full
  border border-white/20 hover:border-none text-white text-lg
  backdrop-blur-md bg-white/10

  transition-all duration-300 ease-out
  hover:scale-110"
>
  {/* 🔥 GRADIENT GLOW */}
  <span className="absolute inset-0 rounded-full opacity-0 group-hover/icon:opacity-100 
  bg-gradient-to-r from-emerald-400 to-teal-300 blur-md transition duration-300" />

  {/* 🔥 BUTTON BG */}
  <span className="absolute inset-0 rounded-full opacity-0 group-hover/icon:opacity-100 
  bg-gradient-to-r from-emerald-400 to-teal-300 transition duration-300" />

  {/* ICON */}
  <FaExternalLinkAlt className="relative z-10 transition duration-300 group-hover/icon:text-black" />
</a>
          </div>

        </div>
      </div>

      {/* CONTENT */}
      <div className="px-6 pb-6">

        {/* 🔥 TITLE UPGRADE */}
        <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-2 
        text-gray-800 dark:text-gray-200
        group-hover:text-emerald-400 transition-colors duration-300">
          {project.title}
        </h3>

        {/* 🔥 DESCRIPTION UPGRADE */}
        <p className="text-sm text-gray-600 dark:text-gray-400 
        leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* 🔥 PREMIUM BADGES */}
        <div className="flex flex-wrap gap-2">
          {project.tech?.map((t, i) => (
            <span
              key={i}
              className="text-[11px] px-3 py-1 rounded-full 
              border border-gray-200 dark:border-white/10
              bg-gray-100 dark:bg-white/[0.04]
              text-gray-700 dark:text-gray-300

              backdrop-blur-md
              transition-all duration-300

              hover:border-emerald-400/60
              hover:text-emerald-400"
            >
              {t}
            </span>
          ))}
        </div>

      </div>

    </div>
  );
};

export default ProjectCard;