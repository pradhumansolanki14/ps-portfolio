import ContactSection from "../sections/contact/ContactSection";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="relative py-20 md:py-28">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 
          bg-gradient-to-b from-transparent via-gray-50 to-transparent 
          dark:via-gray-900/30" 
        />

        <div className="absolute right-0 top-10 w-[500px] h-[500px] 
          bg-emerald-400/10 blur-3xl" />
      </div>

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">

        {/* 🔥 HEADER */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 max-w-2xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
            Contact
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Get In{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <p className="mt-5 text-gray-600 dark:text-gray-400 leading-relaxed">
            Have a project in mind or just want to say hi? I’m always open to
            discussing new ideas, collaborations, or opportunities.
          </p>
        </motion.div> */}

        {/* 🔥 CONTACT SECTION */}
        <ContactSection />

      </div>

    </div>
  );
};

export default ContactPage;