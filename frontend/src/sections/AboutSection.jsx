import { useEffect, useState } from "react";
import { getAbout } from "../api/about.api";
import { motion } from "framer-motion";

const AboutSection = () => {
  const [about, setAbout] = useState({
    description1: "",
    description2: "",
  });

  useEffect(() => {
    getAbout().then((res) => {
      setAbout({
        description1: res.data?.description1 || "",
        description2: res.data?.description2 || "",
      });
    });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-3xl text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-semibold mb-6"
        >
          About Me
        </motion.h2>

        {/* Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-600 dark:text-gray-400 mb-4"
        >
          {about.description1}
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-600 dark:text-gray-400"
        >
          {about.description2}
        </motion.p>

      </div>
    </section>
  );
};

export default AboutSection;