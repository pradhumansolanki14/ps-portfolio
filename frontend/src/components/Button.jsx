import { Link } from "react-router-dom";

const Button = ({
  to,
  onClick,
  children,
  variant = "primary",
  className = "",
}) => {

  const base =
    "group relative inline-flex items-center gap-2 px-7 py-3 rounded-full font-medium overflow-hidden transition-all duration-300 cursor-pointer";

  const variants = {
    primary: `
      text-black
      bg-gradient-to-r from-emerald-400 to-teal-300
      shadow-[0_6px_20px_rgba(16,185,129,0.25)]
      hover:scale-[1.04]
      hover:shadow-[0_10px_35px_rgba(16,185,129,0.45)]
      active:scale-[0.97]
    `,

    secondary: `
      border border-black/10 dark:border-white/10
      bg-white/60 dark:bg-white/[0.05]
      backdrop-blur-md
      text-gray-800 dark:text-gray-200
      hover:scale-[1.03]
      hover:border-emerald-400/40
    `,

    danger: `
  text-white
      bg-gradient-to-r from-red-500 to-rose-600
      hover:scale-[1.04]
      active:scale-[0.97]
      shadow-[0_10px_35px_rgba(239,68,68,0.45)]
  

  hover:shadow-[0_10px_40px_rgba(239,68,68,0.6)]

    `,

    

    
  };

  const content = (
    <>
      {/* Glow */}
      <span className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition duration-500
        bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.35),transparent_70%)]
      " />

      {/* Sweep */}
      <span className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition duration-700
        bg-gradient-to-r from-transparent via-white/30 to-transparent
        translate-x-[-100%] group-hover:translate-x-[100%]
      " />

      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </>
  );

  // 🔥 NAVIGATION BUTTON
  if (to) {
    return (
      <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  // 🔥 ACTION BUTTON
  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
};

export default Button;