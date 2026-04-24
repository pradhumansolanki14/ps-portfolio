// import { useState, useRef, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import ThemeToggle from "./ThemeToggle";



// const Navbar = ({ onMenuClick, onLogoutClick }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { pathname } = useLocation();

//   const isAdmin = pathname.startsWith("/admin"); // 🔥 KEY LOGIC

//   const containerRef = useRef(null);

//   const [indicator, setIndicator] = useState({
//     left: 0,
//     width: 0,
//   });

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Projects", path: "/projects" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const adminItems = [
//      { name: "Dashboard", path: "/admin" },
//     { name: "Projects", path: "/admin/projects" },
//     { name: "Messages", path: "/admin/messages" },
//     { name: "Reviews", path: "/admin/reviews" },
//   ]
//   const isActive = (path) => pathname === path;

//   useEffect(() => {
//     if (isAdmin) return; // ❌ skip underline for admin

//     const active = containerRef.current?.querySelector(".active-link");

//     if (active) {
//       setIndicator({
//         left: active.offsetLeft,
//         width: active.offsetWidth,
//       });
//     }
//   }, [pathname, isAdmin]);

//   return (
//     <motion.nav
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4"
//     >
//       <div
//         className="flex items-center justify-between h-16 px-5 md:px-6 rounded-2xl
//         bg-white/70 dark:bg-black/60 backdrop-blur-xl
//         border border-gray-200 dark:border-white/10
//         shadow-[0_8px_30px_rgba(0,0,0,0.08)]
//         dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
//       >

//         {/* LOGO */}
//         <Link to="/" className="flex items-center gap-2">
//           <div className="w-9 h-9 flex items-center justify-center rounded-lg 
//           bg-gradient-to-br from-teal-400 to-emerald-600 text-white dark:text-black font-semibold">
//             PN
//           </div>

        

         

//           <span className="font-medium text-gray-800 dark:text-gray-200">
//             pradhuman<span className="text-gray-400">.dev</span>
//           </span>
//         </Link>

//         {/* 🔥 DESKTOP MENU (ONLY PUBLIC) */}
//         {!isAdmin && (
//           <div
//             ref={containerRef}
//             className="relative hidden md:flex items-center gap-6"
//           >
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`px-3 py-1 text-md font-medium transition ${
//                   isActive(item.path)
//                     ? "text-emerald-400 active-link"
//                     : "text-gray-600 dark:text-gray-300 hover:text-emerald-400"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}

//             {/* UNDERLINE */}
//             <motion.div
//               animate={{
//                 left: indicator.left,
//                 width: indicator.width,
//               }}
//               transition={{
//                 left: { type: "spring", stiffness: 350, damping: 30 },
//                 width: { type: "spring", stiffness: 250, damping: 25 },
//               }}
//               className="absolute bottom-0 h-[3px] rounded-full origin-left"
//             >
//               <motion.div
//                 className="w-full h-full rounded-full bg-emerald-400"
//               />
//             </motion.div>

//             <div className="ml-2">
//               <ThemeToggle />
//             </div>
//           </div>
//         )}

//         {/* 🔥 ADMIN RIGHT SIDE */}
//         {isAdmin && (
//           <div className="hidden md:flex items-center gap-3">
//             <ThemeToggle />
//           </div>
//         )}

//         {/* 🔥 MOBILE BUTTON */}
//         <button
//           onClick={()=>
//             setMenuOpen((prev) => !prev)
//           }
//           className="md:hidden text-lg text-gray-700 dark:text-gray-300"
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//      {/* 🔥 MOBILE MENU */}
// <AnimatePresence>
//   {menuOpen && (
//     <motion.div
//       initial={{ y: -10, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       exit={{ y: -10, opacity: 0 }}
//       className="md:hidden mt-3 rounded-2xl overflow-hidden
//       bg-white dark:bg-black
//       border border-gray-200 dark:border-white/10
//       shadow-lg"
//     >
//       <div className="flex flex-col px-5 py-5 gap-5">

//         {(isAdmin ? adminItems : navItems).map((item, i) => (
//           <motion.div
//             key={item.name}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.05 }}
//           >
//             <Link
//               to={item.path}
//               onClick={() => setMenuOpen(false)}
//               className={`flex justify-between items-center text-sm font-medium ${
//                 isActive(item.path)
//                   ? "text-emerald-400"
//                   : "text-gray-700 dark:text-gray-300"
//               }`}
//             >
//               {item.name}
//               <span>→</span>
//             </Link>
//           </motion.div>
//         ))}
        
//         {/* 🔥 ADMIN LOGOUT */}
// {isAdmin && (
//   <motion.div
//     initial={{ opacity: 0, y: 10 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay: 0.2 }}
//   >
//     <button
//       onClick={() => {
//         setMenuOpen(false);
//         onLogoutClick(); // 🔥 trigger layout modal
//       }}
//       className="flex justify-between items-center w-full text-sm font-medium 
//       text-red-400 hover:text-red-500 transition"
//     >
//       Logout
//       <span>→</span>
//     </button>
//   </motion.div>
// )}
//         <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-800">
//           <span className="text-sm text-gray-500">Theme</span>
//           <ThemeToggle />
//         </div>

//       </div>
//     </motion.div>
//   )}
// </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;

////////////////////////////////////////////////////////


import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ onMenuClick, onLogoutClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isAdmin = pathname.startsWith("/admin");
  const containerRef = useRef(null);

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
  });

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const adminItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Projects", path: "/admin/projects" },
    { name: "Clients", path: "/admin/clients" },
    { name: "Reviews", path: "/admin/reviews" },
  ];

  const isActive = (path) => pathname === path;

  useEffect(() => {
    if (isAdmin) return;

    const active = containerRef.current?.querySelector(".active-link");

    if (active) {
      setIndicator({
        left: active.offsetLeft,
        width: active.offsetWidth,
      });
    }
  }, [pathname, isAdmin]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4"
    >
      <div
        className="flex items-center justify-between h-16 px-5 md:px-6 rounded-2xl
        bg-white/70 dark:bg-black/60 backdrop-blur-xl
        border border-gray-200 dark:border-white/10
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
      >

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">

          {/* ICON WITH GLOW */}
          <div className="relative w-9 h-9 flex items-center justify-center rounded-lg 
          bg-gradient-to-br from-teal-400 to-emerald-600 text-white dark:text-black font-semibold">

            {/* glow only in dark */}
            <span className="hidden dark:block absolute inset-0 rounded-lg 
            bg-emerald-400/30 blur-md opacity-40" />

            <span className="relative z-10">PN</span>
          </div>

          {/* TEXT */}
          <span className="font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              pradhuman
            </span>
            <span className="text-gray-400">.dev</span>
          </span>

        </Link>

        {/* DESKTOP MENU */}
        {!isAdmin && (
          <div
            ref={containerRef}
            className="relative hidden md:flex items-center gap-6"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-1 text-md font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-emerald-400 active-link"
                    : "text-gray-600 dark:text-gray-300 hover:text-emerald-400"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* 🔥 PREMIUM UNDERLINE */}
            <motion.div
              animate={{
                left: indicator.left,
                width: indicator.width,
              }}
              transition={{
                left: { type: "spring", stiffness: 350, damping: 30 },
                width: { type: "spring", stiffness: 250, damping: 25 },
              }}
              className="absolute bottom-0 h-[3px] rounded-full origin-left"
            >
              <motion.div
                className="w-full h-full rounded-full 
                bg-gradient-to-r from-emerald-400 to-teal-300
                shadow-[0_2px_10px_rgba(16,185,129,0.5)]"
              />
            </motion.div>

            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>
        )}

        {/* ADMIN RIGHT */}
        {isAdmin && (
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
          </div>
        )}

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-lg text-gray-700 dark:text-gray-300"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            className="md:hidden mt-3 rounded-2xl overflow-hidden
            bg-white dark:bg-black
            border border-gray-200 dark:border-white/10
            shadow-lg"
          >
            <div className="flex flex-col px-5 py-5 gap-5">

              {(isAdmin ? adminItems : navItems).map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`flex justify-between items-center text-sm font-medium ${
                      isActive(item.path)
                        ? "text-emerald-400"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {item.name}
                    <span>→</span>
                  </Link>
                </motion.div>
              ))}

              {/* ADMIN LOGOUT */}
              {isAdmin && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onLogoutClick();
                    }}
                    className="flex justify-between items-center w-full text-sm font-medium 
                    text-red-400 hover:text-red-500 transition"
                  >
                    Logout
                    <span>→</span>
                  </button>
                </motion.div>
              )}

              <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-800">
                <span className="text-sm text-gray-500">Theme</span>
                <ThemeToggle />
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;