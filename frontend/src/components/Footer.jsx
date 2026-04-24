import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-black/10 dark:border-white/10 
      bg-white/40 dark:bg-black/40 backdrop-blur-xl"
    >
      {/* TOP GRADIENT LINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] 
        bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 
        flex flex-col md:flex-row items-center justify-between gap-4"
      >

        {/* LEFT */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm text-gray-600 dark:text-gray-400"
        >
          © {year} Pradhuman Solanki. All rights reserved.
        </motion.p>

        {/* RIGHT */}
        <div className="flex items-center gap-5">

          {/* GITHUB */}
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.15 }}
            className="relative p-2 rounded-full 
            text-gray-600 dark:text-gray-400 
            hover:text-emerald-500 dark:hover:text-emerald-400 
            transition-all duration-300"
          >
            <FaGithub size={18} />

            {/* subtle glow */}
            <span className="hidden dark:block absolute inset-0 blur-md opacity-0 hover:opacity-40 transition duration-300 bg-emerald-400 rounded-full" />
          </motion.a>

          {/* LINKEDIN */}
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.15 }}
            className="relative p-2 rounded-full 
            text-gray-600 dark:text-gray-400 
            hover:text-emerald-500 dark:hover:text-emerald-400 
            transition-all duration-300"
          >
            <FaLinkedin size={18} />

            <span className="hidden dark:block absolute inset-0 blur-md opacity-0 hover:opacity-40 transition duration-300 bg-emerald-400 rounded-full" />
          </motion.a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;