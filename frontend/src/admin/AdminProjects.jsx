// import { useEffect, useState } from "react";
// import {
//   getProjects,
//   createProject,
//   updateProject,
//   deleteProject,
// } from "../api/projects.api";
// import { motion, AnimatePresence } from "framer-motion";

// const AdminProjects = () => {
//   const [projects, setProjects] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [editingId, setEditingId] = useState(null);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     tech: "",
//     github: "",
//     live: "",
//     image: null,
//   });

//   const fetchProjects = () => {
//     getProjects().then((res) => setProjects(res.data));
//   };

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const handleChange = (e) => {
//     if (e.target.name === "image") {
//       setForm({ ...form, image: e.target.files[0] });
//     } else {
//       setForm({ ...form, [e.target.name]: e.target.value });
//     }
//   };

//   const handleSubmit = async () => {
//     const formData = new FormData();

//     Object.keys(form).forEach((key) => {
//       formData.append(key, form[key]);
//     });

//     if (editingId) {
//       await updateProject(editingId, formData);
//     } else {
//       await createProject(formData);
//     }

//     setShowModal(false);
//     setEditingId(null);
//     setForm({
//       title: "",
//       description: "",
//       tech: "",
//       github: "",
//       live: "",
//       image: null,
//     });

//     fetchProjects();
//   };

//   const handleEdit = (p) => {
//     setForm({
//       title: p.title,
//       description: p.description,
//       tech: p.tech.join(", "),
//       github: p.github,
//       live: p.live,
//       image: null,
//     });

//     setEditingId(p._id);
//     setShowModal(true);
//   };

//   const handleDelete = async (id) => {
//     if (confirm("Delete project?")) {
//       await deleteProject(id);
//       fetchProjects();
//     }
//   };

//   return (
//     <div>

//       {/* HEADER */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="flex justify-between items-center mb-8"
//       >
//         <div>
//           <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
//             Admin
//           </p>
//           <h2 className="text-2xl font-semibold">
//             Projects
//           </h2>
//         </div>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => setShowModal(true)}
//           className="px-5 py-2 rounded-full bg-emerald-400 text-black font-medium"
//         >
//           + Add Project
//         </motion.button>
//       </motion.div>

//       {/* GRID */}
//       <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//         {projects.map((p, i) => (
//           <motion.div
//             key={p._id}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.08 }}
//             whileHover={{ y: -6 }}
//             className="group rounded-2xl overflow-hidden 
//             border border-gray-200 dark:border-white/10
//             bg-white/70 dark:bg-white/[0.04]
//             transition-all duration-300
//             hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
//             dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
//           >

//             {/* IMAGE */}
//             <div className="h-44 overflow-hidden">
//               <motion.img
//                 src={`http://localhost:5000${p.image}`}
//                 className="w-full h-full object-cover"
//                 whileHover={{ scale: 1.08 }}
//                 transition={{ duration: 0.4 }}
//               />
//             </div>

//             {/* CONTENT */}
//             <div className="p-5">

//               <h3 className="font-semibold mb-3 text-lg group-hover:text-emerald-400 transition ml-1.5">
//                 {p.title}
//               </h3>

//               {/* ACTIONS */}
//               <div className="flex gap-3">

//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => handleEdit(p)}
//                   className="px-3 py-1.5 text-sm rounded-full 
//                   border border-gray-200 dark:border-white/10
//                   hover:border-emerald-400 hover:text-emerald-400 transition"
//                 >
//                   Edit
//                 </motion.button>

//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => handleDelete(p._id)}
//                   className="px-3 py-1.5 text-sm rounded-full 
//                   border border-red-400/30 text-red-400
//                   hover:bg-red-400/10 transition"
//                 >
//                   Delete
//                 </motion.button>

//               </div>

//             </div>

//           </motion.div>
//         ))}

//       </div>

//       {/* 🔥 PREMIUM MODAL */}
//       <AnimatePresence>
//         {showModal && (
//           <motion.div
//             className="fixed inset-0 z-[9999] flex items-center justify-center p-10 md:p-0"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >

//             {/* BACKDROP */}
//             <div
//               className="absolute inset-0 bg-black/50 backdrop-blur-sm"
//               onClick={() => setShowModal(false)}
//             />

//             {/* MODAL */}
//             <motion.div
//               initial={{ scale: 0.9, y: 40 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 40 }}
//               transition={{ type: "spring", stiffness: 120 }}
//               className="relative z-10 w-[420px] p-6 rounded-2xl 
//               bg-white/40 dark:bg-white/[0.05]
//               backdrop-blur-xl
//               border border-gray-200/40 dark:border-white/10
//               shadow-xl space-y-4"
//             >

//               <h3 className="text-lg font-semibold">
//                 {editingId ? "Edit Project" : "Add Project"}
//               </h3>

//               {/* INPUTS */}
//               <input name="title" placeholder="Project Title" value={form.title} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-emerald-400 outline-none" />

//               <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-emerald-400 outline-none" />

//               <input name="tech" placeholder="Tech (React, Node)" value={form.tech} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-emerald-400 outline-none" />

//               <input name="github" placeholder="GitHub URL" value={form.github} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-emerald-400 outline-none" />

//               <input name="live" placeholder="Live URL" value={form.live} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-emerald-400 outline-none" />

//               <input type="file" name="image" onChange={handleChange} />

//               {/* ACTIONS */}
//               <div className="flex justify-end gap-3 pt-2">

//                 <button
//                   onClick={() => setShowModal(false)}
//                   className="px-4 py-2 rounded-full border border-gray-300 dark:border-white/10"
//                 >
//                   Cancel
//                 </button>

//                 <motion.button
//                   whileTap={{ scale: 0.95 }}
//                   onClick={handleSubmit}
//                   className="px-5 py-2 rounded-full bg-emerald-400 text-black font-medium"
//                 >
//                   {editingId ? "Update" : "Create"}
//                 </motion.button>

//               </div>

//             </motion.div>

//           </motion.div>
//         )}
//       </AnimatePresence>

//     </div>
//   );
// };

// export default AdminProjects;





import { useEffect, useState } from "react";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../api/projects.api";
import { motion, AnimatePresence } from "framer-motion";
import Pagination from "../components/Pagination";
import CustomSelect from "../components/CustomSelect";
import ProjectModal from "../components/ProjectModal";
import Button from "../components/Button";
import toast from "react-hot-toast";

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [modalMode, setModalMode] = useState("create");
const [editingProject, setEditingProject] = useState(null);
  
const [deleteId, setDeleteId] = useState(null);
const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    tech: "",
    github: "",
    live: "",
    category:"",
    image: null,
  });
  const [currentPage, setCurrentPage] = useState(1);
const projectsPerPage = 6;

  const fetchProjects = () => {
    getProjects().then((res) => setProjects(res.data));
  };

 useEffect(() => {
  fetchProjects();
}, []);

useEffect(() => {
  setCurrentPage(1);
}, [projects]);

  const indexOfLast = currentPage * projectsPerPage;
const indexOfFirst = indexOfLast - projectsPerPage;

const currentProjects = projects.slice(indexOfFirst, indexOfLast);

const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };
const handleSubmit = async () => {
  const formData = new FormData();

  Object.keys(form).forEach((key) => {
    formData.append(key, form[key]);
  });

  try {
    const t = toast.loading(editingId ? "Updating..." : "Creating...");

    if (editingId) {
      await updateProject(editingId, formData);
      toast.success("Project updated", { id: t });
    } else {
      await createProject(formData);
      toast.success("Project created", { id: t });
    }

    setShowModal(false);
    setEditingId(null);
    setEditingProject(null);

    setForm({
      title: "",
      description: "",
      tech: "",
      github: "",
      live: "",
      category: "",
      image: null,
    });

    fetchProjects();

  } catch (err) {
    toast.error("Operation failed");
  }
};

  const handleEdit = (p) => {
    setForm({
      title: p.title,
      description: p.description,
      tech: p.tech.join(", "),
      github: p.github,
      live: p.live,
      category: p.category || "",
      image: null,
    });

    setEditingId(p._id);
    setShowModal(true);
  };

 const handleDelete = (id) => {
  setDeleteId(id);
  setShowDeleteModal(true);
};

const confirmDelete = async () => {
  const t = toast.loading("Deleting project...");

  try {
    await deleteProject(deleteId);

    toast.success("Project deleted successfully", { id: t });

    setShowDeleteModal(false);
    setDeleteId(null);

    fetchProjects();

  } catch (err) {
    toast.error("Failed to delete project", { id: t });
      setShowDeleteModal(false); 
  }
};
  

  return (
  
  <div className="relative">

    {/* 🔥 THIS WRAPS YOUR WHOLE PAGE */}
    <div
      className={`
        transition-all duration-300
        ${showModal ? "blur-lg scale-95 opacity-60 pointer-events-none" : ""}
      `}
    >

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8"      >
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-2">
            Admin
          </p>
        <h1 className="text-3xl md:text-4xl font-semibold">
          Projects{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            Manager
          </span>
        </h1>
        </div>

        {/* 🔥 UPDATED CTA */}
       <Button
  onClick={() => {
    setModalMode("create");
    setEditingProject(null);
    setShowModal(true);
  }}
  className="text-center"
>
  + Add Project
</Button>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">

       {currentProjects.map((p, i) => (
          <motion.div
            key={p._id || i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group rounded-2xl overflow-hidden 
            border border-gray-200 dark:border-white/10
            bg-white/70 dark:bg-white/[0.04]
            backdrop-blur-xl
            transition-all duration-300
            hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
            dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          >

            {/* IMAGE */}
            <div className="h-44 overflow-hidden">
              <motion.img
                src={p.image}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">

             <h3 className="text-lg font-semibold tracking-tight mb-3 
group-hover:text-emerald-400 transition ml-1.5">
                {p.title}
              </h3>

              {/* ACTIONS */}
              <div className="flex gap-3">

              <Button
  onClick={() => {
    setModalMode("edit");
    setEditingProject(p);
    setEditingId(p._id);
    setShowModal(true);
  }}
  variant="secondary"
  className=""
>
  Edit
</Button>


{!p.isClientProject && (
  <Button
    onClick={() => handleDelete(p._id)}
    variant="danger"
   
  >
    Delete
  </Button>
)}
              </div>

            </div>

          </motion.div>
        ))}

      </div>

      {totalPages > 1 && (
  <div className="flex justify-center mt-10">
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  </div>
)}

  </div>
      {/* 🔥 PREMIUM MODAL */}
<ProjectModal
  open={showModal}
  mode={modalMode}
  initialData={editingProject}
  onClose={() => {
    setShowModal(false);
    setEditingId(null);
    setEditingProject(null);
  }}
  onSubmit={async (formData) => {
  const t = toast.loading(
    modalMode === "edit" ? "Updating project..." : "Creating project..."
  );

  try {
    if (modalMode === "edit") {
      await updateProject(editingId, formData);
      toast.success("Project updated successfully", { id: t });
    } else {
      await createProject(formData);
      toast.success("Project created successfully", { id: t });
    }

    setShowModal(false);
    setEditingId(null);
    setEditingProject(null);

    fetchProjects();

  } catch (err) {
    console.error(err);
    toast.error("Something went wrong", { id: t });
  }
}}
/>


<AnimatePresence>
  {showDeleteModal && (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      {/* BACKDROP */}
      <div
        className="absolute inset-0 dark:bg-black/70 bg-black/20 backdrop-blur-2xl"
        onClick={() => setShowDeleteModal(false)}
      />

      {/* MODAL */}
      <motion.div
        initial={{ scale: 0.92, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.92, y: 40 }}
        className="
          relative z-10 w-full max-w-sm p-7 rounded-3xl
          bg-white/80 dark:bg-white/[0.05]
          backdrop-blur-xl
          border border-gray-200 dark:border-white/10
           

          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        "
      >
          <div className="
          absolute inset-0 rounded-3xl
          bg-gradient-to-br from-red-500/10 to-transparent
          blur-2xl opacity-40 pointer-events-none
        " />


        <div className="space-y-5 text-center">

          <h3 className="text-xl font-semibold">
            Delete Project
          </h3>

          <p className="text-sm text-gray-500">
            Are you sure you want to delete this project?
          </p>

          <div className="flex gap-3 justify-center pt-3">

            <Button
              variant="secondary"
              onClick={() => setShowDeleteModal(false)}
              className="px-5 py-2 text-sm"
            >
              Cancel
            </Button>

            <Button
             variant="danger"
              onClick={confirmDelete}
              className="px-5 py-2 text-sm"
            >
              Delete
            </Button>

          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
};

export default AdminProjects;