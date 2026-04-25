import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../components/Button";

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-28 text-center">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 
          bg-gradient-to-b from-transparent via-gray-50 to-transparent 
          dark:via-gray-900/30" 
        />

        <div className="absolute left-1/2 -translate-x-1/2 top-10 w-80 h-80 
          bg-emerald-400/10 blur-3xl" />
      </div>

      {/* CONTENT */}
      <div className="max-w-2xl mx-auto px-5 sm:px-6 md:px-8">

        {/* 🔥 HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Let’s Work{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            Together
          </span>
        </motion.h2>

        {/* 🔥 SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed"
        >
          Have a project in mind? Let’s build something meaningful and impactful.
        </motion.p>

        {/* 🔥 PREMIUM BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
        <Button to="/contact">
  Contact me →
</Button>
        </motion.div>

      </div>

    </section>
  );
};

export default CTASection;