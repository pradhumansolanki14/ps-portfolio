// import { useEffect, useState } from "react";
// import { motion, AnimatePresence, easeOut } from "framer-motion";
// import { FaEnvelope } from "react-icons/fa";

// import {
//   getAllContacts,
//   updateContactStatus,
//   deleteContact,
// } from "../api/contact.api";

// import Pagination from "../components/Pagination";
// import toast from "react-hot-toast";

// const FILTERS = ["All", "Requests", "Ongoing", "Completed"];


// const AdminClients = () => {
//   const [clients, setClients] = useState([]);
//   const [filter, setFilter] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedClient, setSelectedClient] = useState(null);

//   const ITEMS_PER_PAGE = 5;

//   useEffect(() => {
//     fetchClients();
//   }, []);

//   const fetchClients = async () => {
//     const res = await getAllContacts();
//     setClients(res.data);
//   };

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [filter]);

//   const filteredClients =
//     filter === "All"
//       ? clients
//       : clients.filter((c) =>
//           filter === "Requests"
//             ? c.status === "lead"
//             : c.status === filter.toLowerCase()
//         );

//   const totalPages = Math.ceil(filteredClients.length / ITEMS_PER_PAGE);

//   const paginatedClients = filteredClients.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   const updateStatus = async (id, status) => {
//     const t = toast.loading("Updating...");
//     try {
//       await updateContactStatus(id, status);
//       toast.success("Updated", { id: t });
//       fetchClients();
//       setSelectedClient(null);
//     } catch {
//       toast.error("Failed", { id: t });
//     }
//   };

//   const handleDelete = async (id) => {
//     const t = toast.loading("Deleting...");
//     try {
//       await deleteContact(id);
//       toast.success("Deleted", { id: t });
//       fetchClients();
//     } catch {
//       toast.error("Failed", { id: t });
//     }
//   };

//   return (
//     <div className="space-y-10">

//       {/* HEADER */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
//       >
//         <div>
//           <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-1">
//             Admin
//           </p>

//           <h1 className="text-3xl md:text-4xl font-semibold whitespace-nowrap">
//             Client{" "}
//             <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
//               Manager
//             </span>
//           </h1>
//         </div>

//         {/* FILTER */}
//         <div className=" md:w-full flex justify-center md:justify-end ">
//           <div className="flex md:gap-2 p-1 md:p-2 rounded-full
//             border border-gray-200 dark:border-white/10
//             bg-white/60 dark:bg-white/[0.05]
//             backdrop-blur-md"
//           >
//             {FILTERS.map((f) => {
//               const isActive = filter === f;

//               return (
//                 <button
//                   key={f}
//                   onClick={() => setFilter(f)}
//                   className="relative px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm font-medium whitespace-nowrap group"
//                 >
//                   {isActive && (
//                     <motion.span
//                       layoutId="active-pill"
//                       className="absolute inset-0 rounded-full 
//                       bg-gradient-to-r from-emerald-400 to-teal-300"
//                     />
//                   )}

//                   <span className={`relative z-10 ${
//                     isActive ? "text-black" : "text-gray-700 dark:text-gray-300"
//                   }`}>
//                     {f}
//                   </span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </motion.div>

//       {/* LIST */}
//       <div className="space-y-4">
//         {paginatedClients.map((c, i) => (
//           <motion.div
//             key={c._id}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.25, ease: "easeOut"  }}
//             whileHover={{ y: -6, }}
//             className="group relative p-5 rounded-2xl 
//             border border-gray-200 dark:border-white/10
//             bg-white/70 dark:bg-white/[0.04]
//             backdrop-blur-xl
//             shadow-[0_8px_25px_rgba(0,0,0,0.05)]
//             dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
//           >

//             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
//               <div className="absolute inset-0 bg-emerald-400/10 blur-2xl" />
//             </div>

//             <div className="relative z-10">

//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="font-medium text-md md:text-lg group-hover:text-emerald-400 transition">
//                     {c.name}
//                   </h3>
//                   <p className="text-xs md:text-sm text-gray-500">{c.email}</p>
//                 </div>

//                 <span className="text-xs px-1.5 md:px-3 py-1 rounded-full font-medium
//                   bg-yellow-400/20 text-yellow-500">
//                   {c.status}
//                 </span>
//               </div>

             
//               <p
//                 onClick={() => setSelectedClient(c)}
//                 className=" text-xs md:text-sm  mt-3 line-clamp-2 cursor-pointer text-gray-600 dark:text-gray-400"
//               >
//                 {c.message}
//               </p>

             
//               <div className="flex gap-3 mt-4 flex-wrap">

//                 <motion.button
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setSelectedClient(c)}
//                   className="px-4 py-2 rounded-full border 
//                   border-gray-300 dark:border-white/10
//                   hover:border-emerald-400 hover:text-emerald-400 transition"
//                 >
//                   View
//                 </motion.button>

//                 <motion.button
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => handleDelete(c._id)}
//                   className="px-4 py-2 rounded-full border 
//                   border-red-300 dark:border-red-500/30
//                   text-red-500 hover:bg-red-500/10 transition"
//                 >
//                   Delete
//                 </motion.button>

//               </div>

//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* PAGINATION */}
//       {totalPages > 1 && (
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={setCurrentPage}
//         />
//       )}

//       {/* MODAL */}
//       <AnimatePresence>
//         {selectedClient && (
//           <motion.div
//             className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >

//             <div
//               className="absolute inset-0 bg-black/50 backdrop-blur-sm"
//               onClick={() => setSelectedClient(null)}
//             />

//             <motion.div
//               initial={{ scale: 0.9, y: 40 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 40 }}
//               className="relative z-10 w-full max-w-md p-6 rounded-2xl 
//               bg-white/80 dark:bg-white/[0.05]
//               backdrop-blur-xl border border-gray-200 dark:border-white/10
//               shadow-xl space-y-4"
//             >

//               <h3 className="text-lg font-semibold">{selectedClient.name}</h3>
//               <p className="text-sm text-gray-500">{selectedClient.email}</p>

//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 {selectedClient.message}
//               </p>

//               <div className="flex flex-wrap gap-3 pt-3">

//                 <a
//                   href={`mailto:${selectedClient.email}`}
//                   className="flex items-center gap-2 px-4 py-2 rounded-full border"
//                 >
//                   <FaEnvelope /> Email
//                 </a>

//                 {selectedClient.status === "lead" && (
//                   <button
//                     onClick={() => updateStatus(selectedClient._id, "ongoing")}
//                     className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 text-black"
//                   >
//                     Move to Ongoing
//                   </button>
//                 )}

//                 {selectedClient.status === "ongoing" && (
//                   <button
//                     onClick={() => updateStatus(selectedClient._id, "completed")}
//                     className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 text-white"
//                   >
//                     Mark Completed
//                   </button>
//                 )}

//               </div>

//             </motion.div>

//           </motion.div>
//         )}
//       </AnimatePresence>

//     </div>
//   );
// };

// export default AdminClients;



import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import toast from "react-hot-toast";

import {
  getAllContacts,
  updateContactStatus,
  deleteContact,
} from "../api/contact.api";

import Pagination from "../components/Pagination";
import ProjectModal from "../components/ProjectModal";
import Button from "../components/Button";
import  { createProject, toggleProject } from "../api/projects.api";


const FILTERS = ["All", "Requests", "Ongoing", "Completed"];

const AdminClients = () => {
  const [clients, setClients] = useState([]);
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedClient, setSelectedClient] = useState(null);
  const [showProjectForm, setShowProjectForm] = useState(false);

  const [showProjectModal, setShowProjectModal] = useState(false);
const [projectClient, setProjectClient] = useState(null);

const [deleteClient, setDeleteClient] = useState(null);
  

  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const res = await getAllContacts();
    setClients(res.data);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const filteredClients =
    filter === "All"
      ? clients
      : clients.filter((c) =>
          filter === "Requests"
            ? c.status === "lead"
            : c.status === filter.toLowerCase()
        );

  const totalPages = Math.ceil(filteredClients.length / ITEMS_PER_PAGE);

  const paginatedClients = filteredClients.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // ✅ STATUS UPDATE
  const updateStatus = async (id, status) => {
  console.log("Sending status:", status); // 👈 add this

  const t = toast.loading("Updating...");
  try {
    await updateContactStatus(id, status);
   toast.success(
  status === "ongoing"
    ? "Moved to ongoing"
    : "Status updated",
  { id: t }
);
    fetchClients();
    setSelectedClient(null);
  } catch {
    toast.error("Something went wrong. Try again", { id: t });
  }
};

  // ✅ DELETE
 const openDeleteModal = (client) => {
  setDeleteClient(client);
};

const confirmDelete = async () => {
  const t = toast.loading("Deleting request...");

  try {
    await deleteContact(deleteClient._id);

    toast.success("Client request deleted", { id: t });

    setDeleteClient(null);
    fetchClients();

  } catch {
    toast.error("Failed to delete request", { id: t });
  }
};



const handleToggleProject = async (client) => {
  const wasPublished = client.projectId?.published;

  const t = toast.loading("Updating project...");

  try {
    await toggleProject(client.projectId._id);

    setClients((prev) =>
      prev.map((c) =>
        c._id === client._id
          ? {
              ...c,
              projectId: {
                ...c.projectId,
                published: !wasPublished,
              },
            }
          : c
      )
    );

    toast.success(
  wasPublished
    ? "Project removed from portfolio"
    : "Project published to portfolio",
  { id: t }
);
  } catch {
    toast.error("Update failed", { id: t });
  }
};

  return (
    <div className="space-y-10">

      {/* HEADER */}
      
      <motion.div

         initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-1">
            Admin
          </p>

          <h1 className="text-3xl md:text-4xl font-semibold">
            Client{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Manager
            </span>
          </h1>
        </div>

        {/* FILTER */}
        <div className="flex justify-end">
          <div className="flex p-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.05] backdrop-blur-md">
            {FILTERS.map((f) => {
              const isActive = filter === f;

              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="relative px-5 py-2.5 text-sm font-medium"
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300"
                    />
                  )}

                  <span className={`relative z-10 ${
                    isActive ? "text-black" : "text-gray-700 dark:text-gray-300"
                  }`}>
                    {f}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* LIST */}
      <div className="space-y-4">
        {paginatedClients.map((c, i) => (
        <motion.div
  key={c._id}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.25, ease: "easeOut", delay: i * 0.05 }}
  whileHover={{ y: -6 }}
            className="group relative p-5 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.05)]
dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl"
          >

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
  <div className="absolute inset-0 bg-emerald-400/10 blur-2xl" />
</div>
            <div className="relative z-10">

              {/* TOP */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-lg">{c.name}</h3>
                  <p className="text-sm text-gray-500">{c.email}</p>
                </div>

               <span
  className={`text-xs px-3 py-1 rounded-full font-medium capitalize

  ${
    c.status === "lead" &&
    "bg-yellow-400/20 text-yellow-500 border border-yellow-400/30"
  }

  ${
    c.status === "ongoing" &&
    "bg-cyan-400/20 text-cyan-400 border border-cyan-400/30"
  }

  ${
    c.status === "completed" &&
    "bg-emerald-400/20 text-emerald-400 border border-emerald-400/30"
  }
`}
>
  {c.status}
</span>
              </div>

              <p className="text-md text-emerald-400 mt-2 capitalize">
  {c.projectType?.replace("_", " ")}
</p>

              {/* ACTIONS */}
              <div className="flex gap-3 mt-4 flex-wrap">

                {/* 🔹 REQUEST */}
                {c.status === "lead" && (
                  <>
                   <Button
  onClick={() => setSelectedClient(c)}
  variant="secondary"
  className=""
>
  View
</Button>

<Button
  onClick={() => openDeleteModal(c)}
  variant="danger"
  className=""
>
  Delete
</Button>
                  </>
                )}

                {/* 🔹 ONGOING */}
                {c.status === "ongoing" && (
                 <Button
  onClick={() => {
    setProjectClient(c);
    setShowProjectModal(true);
  }}
  
>
  Mark Completed
</Button>
                )}

                {/* 🔹 COMPLETED */}
    {c.status === "completed" && (
  <Button
    onClick={() => handleToggleProject(c)}
    variant={c.projectId?.published ? "secondary" : "primary"}
    className="px-5 py-2 text-sm"
  >
    {c.projectId?.published ? "Withdraw" : "Add"}
  </Button>
)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      {/* VIEW MODAL */}
     <AnimatePresence>
  {selectedClient && (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      exit={{ opacity: 0 }}
    >

      {/* BACKDROP */}
      <div
        className="absolute inset-0 dark:bg-black/70 bg-black/20 backdrop-blur-2xl"
        onClick={() => setSelectedClient(null)}
      />

      {/* MODAL */}
      <motion.div
      initial={{ scale: 0.9, y: 40 }}
animate={{ scale: 1, y: 0 }}
exit={{ scale: 0.9, y: 40 }}
transition={{ duration: 0.25, ease: "easeOut" }}
        className="
          relative z-10 w-full max-w-lg p-7 rounded-3xl
          bg-white/80 dark:bg-white/[0.05]
          backdrop-blur-xl
          border border-gray-200 dark:border-white/10
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        "
      >

        {/* ✨ SOFT GLOW */}
        <div className="absolute inset-0 rounded-3xl 
          bg-gradient-to-br from-red-500/10 to-transparent 
          blur-2xl opacity-40 pointer-events-none" />

        <div className="relative space-y-5">

          {/* 🔥 HEADER */}
          <div>
            <h3 className="text-xl font-semibold">
              Client Request
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              Review client details and take action
            </p>
          </div>

          {/* 👤 NAME */}
          <div>
            <p className="text-xs text-gray-500">Name</p>
<h3 className="font-medium text-lg group-hover:text-emerald-400 transition">
                {selectedClient.name}
            </h3>
          </div>

          {/* 📧 EMAIL */}
          <div>
            <p className="text-xs text-gray-500">Email</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 break-all">
              {selectedClient.email}
            </p>
          </div>

          <div>
  <p className="text-xs text-gray-500">Project Type</p>
  <p className="text-sm font-medium capitalize">
    {selectedClient.projectType?.replace("_", " ") || "Not specified"}
  </p>
</div>

          {/* 💬 MESSAGE */}
          <div>
            <p className="text-xs text-gray-500">Message</p>

            <div className="
              mt-2 p-4 rounded-xl
              bg-white/60 dark:bg-white/[0.03]
              border border-gray-200 dark:border-white/10
              text-sm text-gray-700 dark:text-gray-300
              leading-relaxed
            ">
              {selectedClient.message}
            </div>
          </div>

          {/* ⚡ ACTIONS */}
         <div className="flex flex-wrap gap-3 pt-3">

  {/* EMAIL */}
  <Button
    to={`mailto:${selectedClient.email}`}
    variant="secondary"
    className="px-5 py-2.5"
  >
    <FaEnvelope /> Email
  </Button>

  {/* MOVE TO ONGOING */}
  {selectedClient.status === "lead" && (
    <Button
onClick={() =>
updateStatus(selectedClient._id, "ongoing")}  
    className="px-6 py-2.5"
    >
      Move to Ongoing
    </Button>
  )}

</div>

        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

<AnimatePresence>
  {deleteClient && (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      {/* BACKDROP */}
      <div
        className="absolute inset-0  dark:bg-black/70 bg-black/20 backdrop-blur-2xl"
        onClick={() => setDeleteClient(null)}
      />

      {/* MODAL */}
      <motion.div
      initial={{ scale: 0.92, y: 40 }}
animate={{ scale: 1, y: 0 }}
exit={{ scale: 0.92, y: 40 }}
transition={{ duration: 0.25, ease: "easeOut" }}
        className="
          relative z-10 w-full max-w-sm p-7 rounded-3xl
          bg-white/80 dark:bg-white/[0.05]
          backdrop-blur-xl
          border border-gray-200 dark:border-white/10
           

          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        "
      >

          {/* SOFT GLOW */}
        <div className="
          absolute inset-0 rounded-3xl
          bg-gradient-to-br from-red-500/10 to-transparent
          blur-2xl opacity-40 pointer-events-none
        " />

        <div className="space-y-5 text-center">

          <h3 className="text-xl font-semibold">
            Delete Request
          </h3>

          <p className="text-sm text-gray-500">
            Are you sure you want to delete this request from{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              {deleteClient.name}
            </span>
            ?
          </p>

          <div className="flex justify-center gap-3 pt-3">

            <Button
              variant="secondary"
              onClick={() => setDeleteClient(null)}
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


<ProjectModal
  open={showProjectModal}
  mode="client"
  initialData={{
  title: projectClient?.projectType?.replaceAll("_", " ") || "",
  description: "",
}}
  onClose={() => {
    setShowProjectModal(false);
    setProjectClient(null);
  }}
  onSubmit={async (formData) => {
    try {
      const t = toast.loading("Completing project...");

      // 🔥 IMPORTANT: attach clientId
      formData.append("clientId", projectClient._id);

      // ✅ 1. CREATE PROJECT
      await createProject(formData);
     
       

      // ✅ 2. UPDATE CLIENT STATUS
     await updateContactStatus(projectClient._id, "completed");

         setClients((prev) =>
      prev.map((c) =>
        c._id === projectClient._id
          ? {
              ...c,
              status: "completed",
              approved: true,
            }
          : c
      )
    );

    toast.success("Project marked as completed and added", { id: t });

       await fetchClients();

      // ✅ CLOSE
      setShowProjectModal(false);
      setProjectClient(null);

    
    

      // ✅ SWITCH TAB
      setFilter("Completed");

    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  }}
/>


      {/* PROJECT FORM */}
      {showProjectForm && selectedClient && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <ProjectForm
            selected={selectedClient}
            refresh={async () => {
              await updateStatus(selectedClient._id, "completed");
              setShowProjectForm(false);
              setSelectedClient(null);
              setFilter("Completed");
              fetchClients();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default AdminClients;