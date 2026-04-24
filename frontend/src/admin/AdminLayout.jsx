// import { useEffect, useState } from "react";
// import { Outlet, useNavigate } from "react-router-dom";
// import AdminSidebar from "./AdminSidebar";
// import Navbar from "../components/Navbar";

// const AdminLayout = () => {
//   const [showLogoutModal, setShowLogoutModal] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const navigate = useNavigate();

//    useEffect(() => {
//     const interval = setInterval(() => {
//       const expiry = localStorage.getItem("tokenExpiry");

//       if (expiry && Date.now() > Number(expiry)) {
//         // 🔥 AUTO LOGOUT
//         localStorage.removeItem("token");
//         localStorage.removeItem("tokenExpiry");

//         navigate("/admin/login");
//       }
//     }, 5000); 

//     return () => clearInterval(interval);
//   }, [navigate]);

//   return (
//     <>
//       {/* NAVBAR */}
//       <Navbar onMenuClick={() => setSidebarOpen(true)} 
//         onLogoutClick={()=> setShowLogoutModal(true)}/>

//       <div className="flex pt-16 min-h-screen">

//         {/* SIDEBAR */}
//         <div className="hidden md:block w-64 fixed left-0 top-16 h-[calc(100vh-4rem)]">
//           <AdminSidebar
//             isOpen={sidebarOpen}
//             onClose={() => setSidebarOpen(false)}
//             onLogoutClick={() => setShowLogoutModal(true)} // 🔥 PASS HERE
//           />
//         </div>

//         {/* MAIN */}
//         <main
//           className={`flex-1 md:ml-64 p-4 md:p-8 transition-all duration-300 ${
//             showLogoutModal ? "blur-md" : ""
//           }`}
//         >
//           <div
//             className="min-h-[calc(100vh-100px)] rounded-2xl 
//             border border-gray-200 dark:border-white/10
//             bg-white dark:bg-black mt-3.5 md:mt-0"
//           >
//             <div className="p-6 md:p-8">
//               <Outlet />
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* 🔥 ONLY ONE MODAL EXISTS NOW */}
//       {showLogoutModal && (
//         <div className="fixed inset-0 z-[9999] flex items-center justify-center">

//           {/* BACKDROP */}
//           <div
//             className="absolute inset-0 bg-black/50 backdrop-blur-sm"
//             onClick={() => setShowLogoutModal(false)}
//           />

//           {/* MODAL */}
//           <div
//             className="relative z-[10000] w-80 p-6 rounded-2xl 
//             border border-gray-300/10 dark:border-white/10 
//             bg-white/80 dark:bg-black/80 backdrop-blur-xl text-center"
//           >
//             <h2 className="text-lg font-medium mb-2 text-black dark:text-white">
//               Logout
//             </h2>

//             <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
//               Are you sure you want to exit?
//             </p>

//             <div className="flex gap-3 justify-center">
//               <button
//                 onClick={() => {
//                   localStorage.removeItem("token");
//                   window.location.href = "/";
//                 }}
//                 className="px-4 py-2 rounded-full bg-emerald-500 text-black font-medium hover:bg-emerald-600"
//               >
//                 Yes
//               </button>

//               <button
//                 onClick={() => setShowLogoutModal(false)}
//                 className="px-4 py-2 rounded-full border border-gray-300/20 dark:border-white/20 
//                 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default AdminLayout;




import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const AdminLayout = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const expiry = localStorage.getItem("tokenExpiry");

      if (expiry && Date.now() > Number(expiry)) {
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiry");
        navigate("/admin/login");
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <>
      {/* NAVBAR */}
      <Navbar
        onMenuClick={() => setSidebarOpen(true)}
        onLogoutClick={() => setShowLogoutModal(true)}
      />

      <div className="flex pt-16 min-h-screen">

        {/* SIDEBAR */}
        <div className="hidden md:block w-64 fixed left-0 top-16 h-[calc(100vh-4rem)]">
          <AdminSidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            onLogoutClick={() => setShowLogoutModal(true)}
          />
        </div>

        {/* MAIN */}
        <main
          className={`flex-1 md:ml-64 p-4 md:p-8 transition-all duration-300 ${
            showLogoutModal ? "blur-md" : ""
          }`}
        >
          <div
            className="min-h-[calc(100vh-100px)] rounded-3xl 
            border border-gray-200 dark:border-white/10

            bg-white/70 dark:bg-white/[0.03]
            backdrop-blur-xl

            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            dark:shadow-[0_20px_80px_rgba(0,0,0,0.8)]

            mt-3.5 md:mt-0 overflow-hidden"
          >

            {/* subtle glow (dark only) */}
            <div className="hidden dark:block absolute inset-0 
            bg-emerald-400/5 blur-2xl opacity-20 pointer-events-none" />

            <div className="relative z-10 p-6 md:p-8">
              <Outlet />
            </div>
          </div>
        </main>

      </div>

      {/* 🔥 LOGOUT MODAL */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">

          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setShowLogoutModal(false)}
          />

          {/* MODAL */}
          <div
            className="relative z-[10000] w-[90%] max-w-sm p-7 rounded-3xl 
            border border-white/10
            bg-white/80 dark:bg-white/[0.05]
            backdrop-blur-xl text-center

            shadow-[0_20px_60px_rgba(0,0,0,0.2)]
            dark:shadow-[0_20px_80px_rgba(0,0,0,0.9)]"
          >

            {/* glow */}
            <div className="absolute inset-0 rounded-3xl 
            bg-gradient-to-br from-emerald-400/10 to-transparent 
            blur-2xl opacity-30 pointer-events-none" />

            <div className="relative z-10">

              <h2 className="text-xl font-semibold mb-2">
                Logout
              </h2>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Are you sure you want to exit?
              </p>

              <div className="flex gap-3 justify-center">
           <Button
  onClick={() => setShowLogoutModal(false)}
  variant="secondary"
  className="px-5 py-2.5"
>
  Cancel
</Button>
               
               <Button
  onClick={() => {
    localStorage.removeItem("token");
    window.location.href = "/";
  }}
  variant="danger"
  className="px-5 py-2.5"
>
  Confirm Logout
</Button>

              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminLayout;