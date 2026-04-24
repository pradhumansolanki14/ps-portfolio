import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function LogoStroke() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const move = (e) => {
      x.set((e.clientX - window.innerWidth / 2) / 50);
      y.set((e.clientY - window.innerHeight / 2) / 50);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const rotateX = useTransform(y, [-15, 15], [4, -4]);
  const rotateY = useTransform(x, [-15, 15], [-4, 4]);

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-neutral-50 dark:bg-black">

     
{/* 🌫️ DARK MODE AMBIENT GLOW */}
<div className="
  absolute w-[600px] h-[600px] rounded-full blur-[180px]
  opacity-0 dark:opacity-100
  bg-emerald-400/10
" />

{/* 🌫️ DARK DEPTH GLOW */}
<div className="
  absolute w-[700px] h-[700px] rounded-full blur-[200px]
  opacity-0 dark:opacity-70
  bg-emerald-500/5
" />
      {/* 🔮 ORB CONTAINER */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative flex items-center justify-center"
      >

        {/* 🔵 Soft Edge Glow (behind) */}
        <div className="absolute w-[260px] h-[260px] rounded-full bg-emerald-400/5 blur-3xl" />

        {/* 🔘 GLASS ORB */}
        <motion.div
          className="
            relative w-[200px] h-[200px] rounded-full
            bg-white/60 dark:bg-white/[0.05]
            backdrop-blur-xl
            border border-gray-200 dark:border-white/10
            flex items-center justify-center
          "
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        >

          {/* ✨ INNER LIGHT (KEY FIX) */}
          <div className="
            absolute inset-0 rounded-full
            bg-gradient-to-br from-emerald-400/10 to-transparent
            opacity-30
            pointer-events-none
          " />

          {/* 🌊 SOFT LIQUID (REDUCED INTENSITY) */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-30"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 12, repeat: Infinity }}
            style={{
              background: `linear-gradient(120deg, #10b981, #14b8a6, #059669)`,
              backgroundSize: "200% 200%",
              filter: "blur(40px)",
            }}
          />

          {/* ✍️ PS LOGO */}
          <motion.svg
            viewBox="0 0 200 200"
            className="w-[140px] z-10"
          >
            {/* P */}
            <motion.path
              d="M45 140 V50 H85 Q130 50 130 85 Q130 120 85 120 H45"
              stroke="url(#grad)"
              strokeWidth="5.5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.3 }}
            />

            {/* S (SMOOTH FIXED CURVE) */}
            <motion.path
                 d="M150 70 Q115 40 85 70 Q55 100 115 120 Q175 140 140 170 Q105 200 70 170"

              stroke="url(#grad)"
              strokeWidth="5.5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, delay: 0.3 }}
            />

           

            <defs>
              <linearGradient id="grad">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#059669" />
                <stop offset="100%" stopColor="#064e3b" />
              </linearGradient>
            </defs>
          </motion.svg>

        </motion.div>

      </motion.div>
    </div>
  );
}