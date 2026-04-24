import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { getProjects } from "../api/projects.api";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((res) => {
      setProjects(res.data);
    });
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-semibold text-center mb-12"
        >
          Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl border border-gray-200 dark:border-gray-800 
              hover:shadow-lg transition flex flex-col overflow-hidden"
            >

              {/* IMAGE */}
              <img
                src={`http://localhost:5000${project.image}`}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-1">

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full 
                        bg-gray-200 dark:bg-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm hover:text-blue-500"
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-sm hover:text-blue-500"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;