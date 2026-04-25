import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  //  REAL DEVICE DETECTION
  useEffect(() => {
    const checkDevice = () => {
      const fine = window.matchMedia("(pointer: fine)").matches;
      setIsDesktop(fine);
    };

    checkDevice();
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const move = (e) => setPos({ x: e.clientX, y: e.clientY });

    const handleHover = (e) => {
      if (e.target.closest("a, button, .cursor-hover")) {
        setHover(true);
      } else {
        setHover(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [isDesktop]);

  //  HARD STOP ON TOUCH DEVICES
  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        animate={{
          x: pos.x - 2,
          y: pos.y - 2,
          scale: hover ? 0.85 : 1,
        }}
        transition={{ type: "spring", stiffness: 900, damping: 50 }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full 
        bg-emerald-400 z-100000 pointer-events-none"
      />

      <motion.div
        animate={{
          x: pos.x - (hover ? 13 : 11),
          y: pos.y - (hover ? 13 : 11),
          width: hover ? 26 : 22,
          height: hover ? 26 : 22,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 28 }}
        className="fixed top-0 left-0 rounded-full 
        border border-emerald-400/25
        bg-emerald-400/4
        z-99999 pointer-events-none"
      />

      <motion.div
        animate={{
          x: pos.x - (hover ? 18 : 16),
          y: pos.y - (hover ? 18 : 16),
          width: hover ? 34 : 28,
          height: hover ? 34 : 28,
          opacity: hover ? 0.08 : 0.05,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 25 }}
        className="fixed top-0 left-0 rounded-full 
        bg-emerald-400 blur-sm
        z-99998 pointer-events-none"
      />
    </>
  );
};

export default CustomCursor;