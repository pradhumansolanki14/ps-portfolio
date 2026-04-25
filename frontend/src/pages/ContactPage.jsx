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

        <ContactSection />

      </div>

    </div>
  );
};

export default ContactPage;