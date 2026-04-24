import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(null);

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle(
        "dark",
        savedTheme === "dark"
      );
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark"
    );
  };

  if (!theme) return null;

  const isDark = theme === "dark";

  return (
    <div
      onClick={toggleTheme}
      className="relative w-14 h-8 flex items-center 
      bg-gray-200 dark:bg-neutral-800 
      rounded-full cursor-pointer p-1 transition-colors duration-300"
    >
      {/* ICONS (background layer) */}
      <div className="absolute inset-0 flex justify-between items-center px-2 text-xs">
        <FaSun className="text-yellow-500" />
        <FaMoon className="text-emerald-500" />
      </div>

      {/* SLIDER */}
      <motion.div
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-6 h-6 bg-white dark:bg-black rounded-full shadow-md flex items-center justify-center z-10"
        animate={{
          x: isDark ? 24 : 0,
        }}
      >
        {/* ICON INSIDE TOGGLE */}
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
         
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <FaMoon className="text-emerald-500 text-xs" />
          ) : (
            <FaSun className="text-yellow-400 text-xs" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ThemeToggle;