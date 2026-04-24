// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { getProjects } from "../../api/projects.api";
// import ProjectCard from "./ProjectCard";
// import FilterBar from "./FilterBar";

// const ProjectsGrid = () => {
//   const [projects, setProjects] = useState([]);
//   const [filter, setFilter] = useState("All");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getProjects().then((res) => {
//       setProjects(res.data || []);
//       setLoading(false);
//     });
//   }, []);

//   const filtered =
//     filter === "All"
//       ? projects
//       : projects.filter((p) =>
//           p.tech?.some((t) =>
//             t.toLowerCase().includes(filter.toLowerCase())
//           )
//         );

//   return (
//     <section className="relative py-10  md:px-10 overflow-hidden">

//       {/* BACKGROUND */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 
//           bg-gradient-to-b from-transparent via-gray-50 to-transparent 
//           dark:via-gray-900/30" 
//         />
//         <div className="absolute right-0 top-10 w-96 h-96 
//           bg-emerald-400/10 blur-3xl" />
//       </div>

//       <div className="max-w-6xl mx-auto">

//         {/* 🔥 HEADER + FILTER COMBINED */}
// <motion.div
//   initial={{ opacity: 0, y: 40 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true }}
//   className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
// >

//   {/* LEFT → TITLE */}
//   <div>
//     <p className="text-xs uppercase tracking-[0.4em] text-gray-500 ">
//       Projects
//     </p>

//     <h2 className="text-3xl md:text-4xl font-semibold leading-normal">
//       My Work & <span className="text-emerald-400">Experiments</span>
//     </h2>
//   </div>

//   {/* RIGHT → FILTER */}
//   <div className="flex justify-start md:justify-end">
//     <FilterBar selected={filter} setSelected={setFilter} />
//   </div>

// </motion.div>

//         {/* GRID */}
//         <div className="mt-10">

//           {loading && (
//             <div className="text-center text-gray-500 py-10">
//               Loading projects...
//             </div>
//           )}

//           {!loading && filtered.length === 0 && (
//             <div className="text-center text-gray-500 py-10">
//               No projects found.
//             </div>
//           )}

//           {/* 🔥 FIXED GRID */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             {filtered.map((p, i) => (
//               <motion.div
//                 key={p._id}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.08 }}
//                 viewport={{ once: true }}
//               >
//                 <ProjectCard project={p} />
//               </motion.div>
//             ))}
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default ProjectsGrid;




/////////////////////////////



import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getProjects } from "../../api/projects.api";
import ProjectCard from "./ProjectCard";
import FilterBar from "./FilterBar";
import Pagination from "../../components/Pagination";

const ProjectsGrid = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
const projectsPerPage = 6;

  useEffect(() => {
    getProjects().then((res) => {
      setProjects(res.data || []);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
  setCurrentPage(1);
}, [filter]);

const filterMap = {
  Frontend: "frontend",
  Backend: "backend",
  Fullstack: "fullstack",
};

const filtered =
  filter === "All"
    ? projects
    : projects.filter(
        (p) => p.category === filterMap[filter]
      );

      const indexOfLast = currentPage * projectsPerPage;
const indexOfFirst = indexOfLast - projectsPerPage;

const currentProjects = filtered.slice(indexOfFirst, indexOfLast);

const totalPages = Math.ceil(filtered.length / projectsPerPage);
  return (
    <section className="py-16 md:py-24">

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">

        {/* HEADER + FILTER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >

          {/* TITLE */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
              Projects
            </p>

            <h2 className="text-4xl  md:text-5xl font-bold tracking-tight">
              My Work &{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Experiments
              </span>
            </h2>
          </div>

          {/* FILTER */}
          <div className="w-full md:w-auto flex justify-center md:mt-3 md:justify-end">
            <FilterBar selected={filter} setSelected={setFilter} />
          </div>

        </motion.div>

        {/* CONTENT */}
        <div>

          {/* LOADING */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-30 gap-4">

  {/* SPINNER */}
  <div className="w-9 h-9 border-4 border-emerald-400/30 border-t-emerald-400 rounded-full animate-spin" />

  {/* TEXT */}
  <p className="text-sm text-gray-500 dark:text-gray-400">
    Loading projects...
  </p>

</div>
          )}

          {/* EMPTY */}
          {!loading && filtered.length === 0 && (
            <div className="text-center text-gray-500 py-10">
              No projects found.
            </div>
          )}

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
         {currentProjects.map((p, i) => (
              <motion.div
                key={p._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </div>

          {totalPages > 1 && (
  <div className="flex justify-center mt-12">
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  </div>
)}

        </div>

      </div>
    </section>
  );
};

export default ProjectsGrid;