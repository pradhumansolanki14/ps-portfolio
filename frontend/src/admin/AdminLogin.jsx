import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import api from "../api/axios";
import toast from "react-hot-toast";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

const handleLogin = async () => {
  try {
   
    if (!email || !password) {
      return toast.error("Please fill all fields");
    }

    setLoading(true);

    const res = await api.post("/auth/login", {
      email,
      password,
    });

    const token = res.data.token;

    localStorage.setItem("token", token);
    localStorage.setItem("tokenExpiry", Date.now() + 24 * 60 * 60 * 1000);

    toast.success("Login successful");

    navigate("/admin");
  } catch (err) {
    toast.error(err.response?.data?.message || "Login failed ");
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
                    onClick={(e) => {
    e.preventDefault();
    handleLogin();
  }}
                  disabled={loading}
                className={`group relative w-full py-3 rounded-full 
font-medium overflow-hidden
bg-gradient-to-r from-emerald-400 to-teal-300
text-black
transition-all duration-300
shadow-[0_8px_25px_rgba(16,185,129,0.3)]
${loading ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.03]"}`}
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