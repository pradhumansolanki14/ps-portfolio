import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const CustomSelect = ({ value, onChange, options = [], placeholder }) => {
  const [open, setOpen] = useState(false);

  const selectedLabel =
    options.find((o) => o.value === value)?.label || "";

  return (
    <div className="relative w-full">

      {/* SELECT BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
        w-full px-4 py-3 rounded-xl 
        flex items-center justify-between

        bg-white/60 dark:bg-white/[0.05]
        backdrop-blur-md

      border border-gray-200 dark:border-gray-800
        focus:border-emerald-400 focus:outline-none

        transition-all duration-300
        text-left
      "
      >
        <span className={`${!value && "text-gray-400"}`}>
          {selectedLabel || placeholder || "Select"}
        </span>

        <FaChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180 text-emerald-400" : ""
          }`}
        />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div
          className="
          absolute left-0 top-full z-[9999] mt-2 w-full rounded-xl overflow-hidden

          bg-white/70 dark:bg-white/[0.04]
          backdrop-blur-xl

          border border-gray-200 dark:border-white/10

          shadow-[0_20px_40px_rgba(0,0,0,0.12)]
          dark:shadow-[0_20px_40px_rgba(0,0,0,0.6)]
        "
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className="
              w-full px-4 py-3 text-left text-sm

              text-gray-700 dark:text-gray-300

              hover:bg-emerald-400/10
              hover:text-emerald-400

              transition-all duration-200
            "
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
