import { FaCode, FaBolt, FaBrain, FaLayerGroup } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../components/Button";

const AboutHire = () => {
  const items = [
    {
      title: "Strong MERN Stack",
      desc: "Experienced in building full-stack applications",
      icon: FaLayerGroup,
    },
    {
      title: "Clean Code",
      desc: "Maintainable and scalable architecture",
      icon: FaCode,
    },
    {
      title: "Fast Learner",
      desc: "Quickly adapt to new technologies",
      icon: FaBolt,
    },
    {
      title: "Problem Solver",
      desc: "Strong analytical thinking",
      icon: FaBrain,
    },
  ];

  return (
    <section className="py-15 md:py-28">

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 md:mb-20 max-w-xl"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
            Value
          </p>

          <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            What I{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Deliver
            </span>
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-10">

          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative p-5 sm:p-6 md:p-7 rounded-2xl 
                border border-gray-200 dark:border-white/10
                bg-white/60 dark:bg-white/[0.03]
                backdrop-blur-md

                hover:border-emerald-400/80
                hover:-translate-y-[3px]
                hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]
                transition-all duration-300"
              >

                {/* GLOW */}
                <div className="absolute inset-0 rounded-2xl opacity-0 
                group-hover:opacity-100 transition duration-500 
                bg-emerald-400/5 blur-xl" />

                <div className="relative z-10 flex gap-4">

                  {/* ICON */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center 
                  rounded-lg border border-gray-200 dark:border-white/10 
                  text-emerald-400 
                  group-hover:scale-110 transition">
                    <Icon size={18} />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h4 className="font-semibold mb-1 
                    group-hover:text-emerald-400 transition">
                      {item.title}
                    </h4>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 flex justify-center"
        >
         <Button to="/contact">
  Hire me →
</Button>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutHire;