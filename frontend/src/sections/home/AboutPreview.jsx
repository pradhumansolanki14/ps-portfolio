import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../components/Button";

const AboutPreview = () => {
  return (
    <section className="relative py-15 md:py-25 px-6 md:px-12">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg"
        >
          {/* LABEL */}
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
            About Me
          </p>

          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            Crafting scalable systems{" "}
            <span className="block">
              with{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                precision & clarity
              </span>
            </span>
          </h2>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-md"
        >
          {/* TEXT */}
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            I build high-performance applications with clean UI and scalable
            architecture—combining design thinking with engineering to create
            meaningful digital experiences.
          </p>

          {/* CTA */}
      <Button to="/about">
  Read More →
</Button>

        </motion.div>

      </div>
    </section>
  );
};

export default AboutPreview;