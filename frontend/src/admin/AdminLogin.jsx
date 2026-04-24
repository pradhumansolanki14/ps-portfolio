// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// const AdminLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [show, setShow] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password }
//       );

//       const token = res.data.token;

//       localStorage.setItem("token", token);
//       localStorage.setItem("tokenExpiry", Date.now() + 24 * 60 * 60 * 1000 );

//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//       navigate("/admin");
//     } catch (err) {
//       setError("Invalid credentials. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <section className="relative min-h-screen flex items-center px-6 overflow-hidden">

//         {/* 🔥 BACKGROUND */}
//         <div className="absolute inset-0 -z-10">

//           {/* GRID */}
//           <div
//             className="absolute inset-0 opacity-30"
//             style={{
//               backgroundImage: `
//                 linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
//                 linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
//               `,
//               backgroundSize: "60px 60px",
//             }}
//           />

//           {/* GLOW */}
//           <div className="absolute left-1/3 top-20 w-[400px] h-[400px] bg-emerald-400/10 blur-3xl" />
//           <div className="absolute right-10 bottom-10 w-[300px] h-[300px] bg-purple-500/10 blur-3xl" />

//         </div>

//         {/* 🔥 SPLIT LAYOUT */}
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">

//           {/* 🔥 LEFT SIDE (BRANDING) */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="hidden md:block"
//           >
//             <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-4">
//               Secure Access
//             </p>

//             <h1 className="text-4xl font-semibold leading-snug mb-4">
//               Admin <span className="text-emerald-400">Dashboard</span>
//             </h1>

//             <p className="text-gray-500 max-w-md">
//               Access your system dashboard, manage projects, and control content
//               with a secure and streamlined interface.
//             </p>

//             {/* subtle divider */}
//             <div className="mt-8 w-20 h-[2px] bg-gradient-to-r from-emerald-400 to-transparent" />
//           </motion.div>

//           {/* 🔥 RIGHT SIDE (FORM) */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95, y: 30 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             className="w-full max-w-md mx-auto md:ml-auto"
//           >

//             <div className="p-8 rounded-2xl border 
//             border-gray-200 dark:border-white/10
//             bg-white/70 dark:bg-white/[0.04]
//             backdrop-blur-xl
//             shadow-[0_20px_60px_rgba(0,0,0,0.08)] 
//             dark:shadow-[0_20px_60px_rgba(0,0,0,0.7)]">

//               {/* HEADER */}
//               <div className="mb-8">
//                 <h2 className="text-2xl font-semibold mb-1">
//                   Welcome back
//                 </h2>
//                 <p className="text-sm text-gray-500">
//                   Please enter your credentials
//                 </p>
//               </div>

//               {/* ERROR */}
//               {error && (
//                 <div className="mb-4 text-sm text-red-500">
//                   {error}
//                 </div>
//               )}

//               {/* FORM */}
//               <div className="space-y-4">

//                 {/* EMAIL */}
//                 <div>
//                   <label className="text-xs text-gray-500 mb-1 block">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="admin@example.com"
//                     className="w-full px-4 py-2.5 rounded-lg 
//                     bg-gray-100 dark:bg-white/5 
//                     border border-gray-200 dark:border-white/10
//                     focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30
//                     outline-none text-sm transition"
//                   />
//                 </div>

//                 {/* PASSWORD */}
//                 <div>
//                   <label className="text-xs text-gray-500 mb-1 block">
//                     Password
//                   </label>

//                   <div className="relative">
//                     <input
//                       type={show ? "text" : "password"}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="••••••••"
//                       className="w-full px-4 py-2.5 pr-10 rounded-lg 
//                       bg-gray-100 dark:bg-white/5 
//                       border border-gray-200 dark:border-white/10
//                       focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30
//                       outline-none text-sm transition"
//                     />

//                     <button
//                       onClick={() => setShow(!show)}
//                       className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
//                     >
//                       {show ? <FaEyeSlash /> : <FaEye />}
//                     </button>
//                   </div>
//                 </div>

//                 {/* BUTTON */}
//                 <button
//                   onClick={handleLogin}
//                   disabled={loading}
//                   className="w-full mt-2 py-2.5 rounded-lg 
//                   bg-emerald-400 text-black font-medium 
//                   transition-all duration-200
//                   hover:scale-[1.02] active:scale-[0.98]
//                   disabled:opacity-60"
//                 >
//                   {loading ? "Authenticating..." : "Login →"}
//                 </button>

//               </div>

//             </div>

//           </motion.div>

//         </div>

//       </section>
//     </>
//   );
// };

// export default AdminLogin;





import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      const token = res.data.token;

      localStorage.setItem("token", token);
      localStorage.setItem("tokenExpiry", Date.now() + 24 * 60 * 60 * 1000);

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      navigate("/admin");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen flex items-center py-20 px-5 sm:px-6 md:px-8 overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute left-1/3 top-20 w-[400px] h-[400px] bg-emerald-400/10 blur-3xl" />
        </div>

        {/* 🔥 FIXED WIDTH (IMPORTANT) */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center w-full">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:block"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
              Secure Access
            </p>

            {/* 🔥 BIGGER TITLE */}
            <h1 className="text-5xl font-bold tracking-tight leading-tight mb-4">
              Admin{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Dashboard
              </span>
            </h1>

            <p className="text-gray-500 max-w-sm leading-relaxed">
              Manage your projects, content, and system settings securely.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-full max-w-md mx-auto md:ml-auto"
          >

            {/* 🔥 PREMIUM CARD */}
            <div className="relative p-8 rounded-3xl 
            border border-white/10
            bg-white/70 dark:bg-white/[0.03]
            backdrop-blur-2xl

            shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            dark:shadow-[0_20px_80px_rgba(0,0,0,0.8)]">

              {/* glow */}
              <div className="absolute inset-0 rounded-3xl 
              bg-gradient-to-br from-emerald-400/10 to-transparent 
              opacity-30 blur-2xl pointer-events-none" />

              {/* HEADER */}
              <div className="mb-8 relative z-10">
                <h2 className="text-2xl font-semibold mb-1">
                  Welcome back
                </h2>
                <p className="text-sm text-gray-500">
                  Enter your credentials to continue
                </p>
              </div>

              {/* ERROR */}
              {error && (
                <div className="mb-4 text-sm text-red-500">
                  {error}
                </div>
              )}

              {/* FORM */}
              <div className="space-y-4 relative z-10">

                {/* INPUT STYLE */}
                {[ 
                  {
                    type: "email",
                    value: email,
                    set: setEmail,
                    placeholder: "Email",
                  },
                ].map((field, i) => (
                  <input
                    key={i}
                    type={field.type}
                    value={field.value}
                    onChange={(e) => field.set(e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl 
                    bg-white/70 dark:bg-white/5
                    border border-gray-200 dark:border-white/10
                    focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20
                    outline-none text-sm transition"
                  />
                ))}

                {/* PASSWORD */}
                <div className="relative">
                 <input
  type={show ? "text" : "password"}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Password"
  className="appearance-none w-full px-4 py-3 pr-10 rounded-xl 
  bg-white/70 dark:bg-white/5
  border border-gray-200 dark:border-white/10
  focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20
  outline-none text-sm transition"
/>

                  <button
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {show ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {/* BUTTON */}
                <button
                  onClick={handleLogin}
                  disabled={loading}
                  className="group relative w-full py-3 rounded-full 
                  font-medium overflow-hidden

                  bg-gradient-to-r from-emerald-400 to-teal-300
                  text-black

                  hover:scale-[1.03]
                  transition-all duration-300
                  shadow-[0_8px_25px_rgba(16,185,129,0.3)]"
                >
                  {loading ? "Authenticating..." : "Login →"}
                </button>

              </div>

            </div>

          </motion.div>

        </div>

      </section>
    </>
  );
};

export default AdminLogin;