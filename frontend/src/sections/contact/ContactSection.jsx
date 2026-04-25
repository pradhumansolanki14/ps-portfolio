import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import { sendContact } from "../../api/contact.api";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import CustomSelect from "../../components/CustomSelect"

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "", 
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // 🔥 SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const toastId = toast.loading("Sending...");

    try {
      await sendContact({
        name: form.name,
        email: form.email,
        projectType: form.projectType,
        message: form.message,
      });

      toast.success("Message sent successfully ", { id: toastId });

      setForm({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      });

    } catch (error) {
      toast.error("Failed to send message ", { id: toastId });
    }

    setLoading(false);
  };

  return (
    <section className="relative  md:py-6 overflow-hidden">



      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 
        grid md:grid-cols-2 gap-10 md:gap-16 items-center"
      >

        {/* LEFT */}
        <div className="flex flex-col gap-6">

          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
            Contact
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight  -mt-5">
            Let’s{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
            Feel free to reach out for collaborations, freelance work, or just a
            friendly chat.
          </p>

          {/* CONTACT LINKS */}
          <div className="flex flex-col gap-3">

            <a
              href="mailto:your@email.com"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
              hover:text-emerald-400 transition"
            >
              <FaEnvelope /> your@email.com
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
              hover:text-emerald-400 transition"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
              hover:text-emerald-400 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>

          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 pb-5">

          {/* NAME */}
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="px-4 py-3 rounded-xl 
            bg-white/60 dark:bg-white/[0.05] backdrop-blur-md
            border border-gray-200 dark:border-gray-800
            focus:border-emerald-400 focus:outline-none transition w-full"
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="px-4 py-3 rounded-xl 
            bg-white/60 dark:bg-white/[0.05] backdrop-blur-md
            border border-gray-200 dark:border-gray-800
            focus:border-emerald-400 focus:outline-none transition w-full"
          />

          {/* PROJECT TYPE */}
      <CustomSelect
  value={form.projectType}
  onChange={(val) =>
    setForm({ ...form, projectType: val })
  }
  options={[
      { label: "Landing Page", value: "landing_page" },
  { label: "Business Website", value: "business_website" },
  { label: "Web Application", value: "web_application" },
  { label: "Dashboard / Admin Panel", value: "dashboard_admin" },
  { label: "E-commerce Store", value: "ecommerce" },
  ]}
  placeholder="Project Type"
/>

          {/* MESSAGE */}
          <textarea
            placeholder="Tell me about your project..."
            rows="5"
            required
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="px-4 py-3 rounded-xl 
            bg-white/60 dark:bg-white/[0.05] backdrop-blur-md
            border border-gray-200 dark:border-gray-800
            focus:border-emerald-400 focus:outline-none transition w-full"
          />

          {/* BUTTON */}
       <motion.button
  whileTap={{ scale: 0.96 }}
  type="submit"
  disabled={loading}
  className="
  group relative w-full inline-flex items-center justify-center gap-3 
  py-3 rounded-full font-medium overflow-hidden

  text-black

  bg-gradient-to-r from-emerald-400 to-teal-300

  shadow-[0_6px_20px_rgba(16,185,129,0.25)]

  transition-all duration-300
  hover:scale-[1.04]
  hover:shadow-[0_10px_35px_rgba(16,185,129,0.45)]

  disabled:opacity-60 disabled:cursor-not-allowed
"
>

  {/* 🔥 RADIAL GLOW */}
  <span
    className="
    absolute inset-0 opacity-0 group-hover:opacity-100
    transition duration-500
    bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.35),transparent_70%)]
  "
  />

  {/* ✨ LIGHT SWEEP */}
  {!loading && (
    <span
      className="
      absolute inset-0 opacity-0 group-hover:opacity-100
      transition duration-700
      bg-gradient-to-r from-transparent via-white/30 to-transparent
      translate-x-[-100%] group-hover:translate-x-[100%]
    "
    />
  )}

  {/* CONTENT */}
  <span className="relative z-10 flex items-center gap-2">

    {loading ? (
      <>
        {/* SPINNER */}
        <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
        Sending...
      </>
    ) : (
      <>
        Start Project
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </>
    )}

  </span>

</motion.button>
        </form>

      </motion.div>
    </section>
  );
};

export default ContactSection;