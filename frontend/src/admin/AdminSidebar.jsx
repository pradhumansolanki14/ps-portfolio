// import { useRef, useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   FaCommentAlt,
//   FaRegEnvelope,
//   FaProjectDiagram,
//   FaTachometerAlt,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { motion } from "framer-motion";

// const AdminSidebar = ({ onLogoutClick }) => {
//   const location = useLocation();
//   const containerRef = useRef(null);

//   const [indicator, setIndicator] = useState({
//     top: 0,
//     height: 0,
//   });

//   const navItems = [
//     { name: "Dashboard", path: "/admin", icon: FaTachometerAlt },
//     { name: "Projects", path: "/admin/projects", icon: FaProjectDiagram },
//     { name: "Messages", path: "/admin/messages", icon: FaRegEnvelope },
//     { name: "Reviews", path: "/admin/reviews", icon: FaCommentAlt },
//   ];

//   useEffect(() => {
//     const active = containerRef.current?.querySelector(".active-link");

//     if (active) {
//       setIndicator({
//         top: active.offsetTop,
//         height: active.offsetHeight,
//       });
//     }
//   }, [location.pathname]);

//   return (
//     <aside
//       className="hidden md:flex fixed top-16 left-0 w-64 h-[calc(100vh-4rem)]
//       flex-col px-4 py-6 z-40"
//     >
//       {/* HEADER */}
//       <div className="mb-6 px-3">
//         <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500">
//           Admin
//         </h2>
//       </div>

//       {/* NAV */}
//       <div ref={containerRef} className="relative flex flex-col gap-2">

//         {/* INDICATOR */}
//         <motion.div
//           animate={{
//             top: indicator.top,
//             height: indicator.height,
//           }}
//           transition={{ type: "spring", stiffness: 500, damping: 35 }}
//           className="absolute left-0 w-full rounded-full 
//           bg-emerald-400 shadow-md shadow-emerald-400/20"
//         />

//         {navItems.map((item) => {
//           const isActive = location.pathname === item.path;
//           const Icon = item.icon;

//           return (
//             <Link
//               key={item.name}
//               to={item.path}
//               className={`relative z-10 px-5 py-3 rounded-full flex items-center gap-4 text-base transition
//               ${
//                 isActive
//                   ? "text-white dark:text-black active-link"
//                   : "text-gray-800 dark:text-white"
//               }`}
//             >
//               <Icon className="text-sm" />
//               {item.name}
//             </Link>
//           );
//         })}
//       </div>

//       {/* LOGOUT */}
//       <div className="mt-auto pt-6">
//         <button
//           onClick={onLogoutClick} // 🔥 TRIGGER LAYOUT MODAL
//           className="w-full flex items-center gap-4 px-5 py-3 rounded-full text-base
//           text-red-400 hover:text-white hover:bg-red-500/10 transition"
//         >
//           <FaSignOutAlt className="text-sm" />
//           Logout
//         </button>
//       </div>
//     </aside>
//   );
// };

// export default AdminSidebar;




import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaCommentAlt,
  FaRegEnvelope,
  FaProjectDiagram,
  FaTachometerAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Button from "../components/Button";

const AdminSidebar = ({ onLogoutClick }) => {
  const location = useLocation();
  const containerRef = useRef(null);

  const [indicator, setIndicator] = useState({
    top: 0,
    height: 0,
  });

  const navItems = [
    { name: "Dashboard", path: "/admin", icon: FaTachometerAlt },
    { name: "Projects", path: "/admin/projects", icon: FaProjectDiagram },
    { name: "Clients", path: "/admin/clients", icon: FaRegEnvelope },
    { name: "Reviews", path: "/admin/reviews", icon: FaCommentAlt },
  ];

  useEffect(() => {
    const active = containerRef.current?.querySelector(".active-link");

    if (active) {
      setIndicator({
        top: active.offsetTop,
        height: active.offsetHeight,
      });
    }
  }, [location.pathname]);

  return (
    <aside
      className="hidden md:flex fixed top-16 left-0 w-64 h-[calc(100vh-4rem)]
      flex-col px-4 py-6 z-40"
    >
      {/* HEADER */}
      <div className="mb-8 px-3">
        <h2 className="text-xs uppercase tracking-[0.4em] text-gray-500">
          Admin Panel
        </h2>
      </div>

      {/* NAV */}
      <div ref={containerRef} className="relative flex flex-col gap-2">

        {/* 🔥 ACTIVE INDICATOR */}
        <motion.div
          animate={{
            top: indicator.top,
            height: indicator.height,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
          className="absolute left-0 w-full rounded-full
          bg-gradient-to-r from-emerald-400 to-teal-300

          shadow-[0_6px_20px_rgba(16,185,129,0.3)]
          dark:shadow-[0_6px_25px_rgba(16,185,129,0.6)]"
        />

        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.path}
             className={`group relative z-10 px-5 py-4 rounded-full flex items-center gap-4 text-sm font-medium transition-all duration-300
${
  isActive
    ? "text-black active-link"
    : "text-gray-700 dark:text-gray-300 group-hover:text-emerald-400"
}`}
            >
              <Icon className="text-base transition group-hover:scale-110" />
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* 🔥 LOGOUT */}
      <div className="mt-auto pt-8">

     <Button
  onClick={onLogoutClick}
  variant="danger"
  className="w-full justify-center px-5 py-3"
>
  <FaSignOutAlt />
  Logout
</Button>
      </div>
    </aside>
  );
};

export default AdminSidebar;