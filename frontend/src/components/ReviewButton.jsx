import { useState } from "react";
import { motion } from "framer-motion";
import { FaCommentAlt} from "react-icons/fa";
import ReviewModal from "./ReviewModal";

const ReviewFloatingButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FLOAT BUTTON */}
      <motion.button
  onClick={() => setOpen(true)}
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.9 }}
  className="
  fixed bottom-6 right-6 z-50
  w-14 h-14 flex items-center justify-center rounded-full

  bg-gradient-to-r from-emerald-400 to-teal-300
  text-black

  border border-white/40 dark:border-white/10
  backdrop-blur-xl

  shadow-[0_10px_30px_rgba(16,185,129,0.35)]
  hover:shadow-[0_0_40px_rgba(16,185,129,0.6)]

  transition-all duration-300
"
>
  <FaCommentAlt className="text-lg" />
  
</motion.button>

      {/* MODAL */}
      <ReviewModal open={open} setOpen={setOpen} />
    </>
  );
};

export default ReviewFloatingButton;