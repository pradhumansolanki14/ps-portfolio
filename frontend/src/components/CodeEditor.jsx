import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CodeEditor = () => {
  const files = ["profile.js", "stack.js", "philosophy.js"];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((prev) => (prev + 1) % files.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 🔥 SMOOTH SPRING (key improvement)
  const smoothX = useSpring(x, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 20 });

  // 🔥 STRONGER BUT SMOOTH TILT
  const rotateX = useTransform(smoothY, [-100, 100], [8, -8]);
  const rotateY = useTransform(smoothX, [-100, 100], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(px);
    y.set(py);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: 1,
        y: [0, -3, 0], // 🔥 very subtle float
      }}
      transition={{
        opacity: { duration: 1 },
        y: {
          duration: 12, // 🔥 slower
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="relative ml-auto"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.03 }} // 🔥 adds depth
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        className="rounded-2xl overflow-hidden border 
border-gray-200 dark:border-white/10 
bg-white dark:bg-[#0a0a0a] 
shadow-[0_10px_40px_rgba(0,0,0,0.12)] 
dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)]

w-[310px] md:w-[380px]   // 🔥 slightly more widthh-70 md:h-85

transition-all duration-300
will-change-transform
perspective-1000"
      >

        {/* TOP BAR */}
        <div className="flex items-center justify-between px-3 py-2 
        border-b border-gray-200 dark:border-white/10">

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
          </div>

          <span className="text-[10px] text-gray-500">VSCode</span>
        </div>

        <div className="flex h-full">

          {/* SIDEBAR */}
<div className="w-28 border-r border-gray-200 dark:border-white/10 text-[11px]">            {files.map((f, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`px-2 py-2 cursor-pointer transition ${
                  active === i
                    ? "bg-gray-100 dark:bg-white/10 text-emerald-400"
                    : "text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5"
                }`}
              >
                {f}
              </div>
            ))}
          </div>

          {/* CODE AREA */}
<div className="flex-1 p-3 font-mono text-[11px] md:text-xs relative overflow-hidden">
<div className="absolute left-2 top-3 text-gray-400 text-[10px] space-y-1">
                  {[1,2,3,4,5,6,7,8].map(n => <p key={n}>{n}</p>)}
            </div>

            <motion.div
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
className="ml-7 space-y-1.5 text-gray-700 dark:text-gray-300"            >
              {active === 0 && (
                <>
                  <p><span className="text-purple-500">const</span> developer = {"{"}</p>
                  <p className="ml-3">name: <span className="text-emerald-500">"Pradhuman Solanki"</span>,</p>
                  <p className="ml-3">role: <span className="text-emerald-500">"Full Stack Engineer"</span>,</p>
                  <p>{"};"}</p>
                </>
              )}

              {active === 1 && (
                <>
                  <p><span className="text-purple-500">const</span> stack = [</p>
                  <p className="ml-3"><span className="text-emerald-500">"React"</span>,</p>
                  <p className="ml-3"><span className="text-emerald-500">"Node.js"</span>,</p>
                  <p className="ml-3"><span className="text-emerald-500">"MongoDB"</span>,</p>
                  <p>];</p>
                </>
              )}

              {active === 2 && (
                <>
                  <p><span className="text-purple-500">function</span> build() {"{"}</p>
                  <p className="ml-3">return <span className="text-emerald-500">"Real-world impact"</span>;</p>
                  <p>{"}"}</p>
                </>
              )}
            </motion.div>

            <span className="absolute bottom-3 right-4 w-[3px] h-3 bg-emerald-400 animate-pulse" />
          </div>
        </div>
      </motion.div>

<div className="absolute -inset-10 bg-emerald-400/15 blur-3xl -z-10 hidden sm:block" />    </motion.div>
  );
};

export default CodeEditor;