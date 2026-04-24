import { motion } from "framer-motion";

const FilterBar = ({ selected, setSelected }) => {
  const filters = ["All", "Frontend", "Backend", "Fullstack"];

  return (
    <div className="w-full flex justify-center md:justify-end">

      <div
        className="flex gap-1 md:gap-2 p-1 md:p-2 rounded-full
        border border-gray-200 dark:border-white/10
        bg-white/60 dark:bg-white/[0.05]
        backdrop-blur-md md:mt-1.5"
      >
        {filters.map((f) => {
          const isActive = selected === f;

          return (
            <button
              key={f}
              onClick={() => setSelected(f)}
              className="relative px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm font-medium whitespace-nowrap group"
            >

              {/* 🔥 ACTIVE PILL */}
              {isActive && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full 
                  bg-gradient-to-r from-emerald-400 to-teal-300
                  shadow-[0_6px_20px_rgba(16,185,129,0.35)]"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                  }}
                />
              )}

              {/* TEXT */}
              <span
                className={`relative z-10 transition-all duration-300 ${
                  isActive
                    ? "text-black"
                    : "text-gray-700 dark:text-gray-300 group-hover:text-emerald-400"
                }`}
              >
                {f}
              </span>

            </button>
          );
        })}
      </div>

    </div>
  );
};

export default FilterBar;