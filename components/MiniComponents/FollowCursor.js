"use client";
import { useMotionValue, useSpring, motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { useEffect } from "react";
const FollowCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);
  return (
    <>
      {/* Magical Cursor */}
      <motion.div
        className="fixed top-0 left-0 size-12 border border-white/20 shadow-xl shadow-zinc-900 grid place-items-center bg-radial-[at_25%_25%] from-white to-zinc-900 to-55%  rounded-full pointer-events-none z-50 mix-blend-screen  cursor-pointer "
        style={{ translateX: cursorXSpring, translateY: cursorYSpring }}
      >
        <Code2 color="#ffff" className="bg-linear-to-tl from-blue-400 via-sky-400 to-teal-500 text-transparent bg-clip-text"/>
      </motion.div>
    </>
  );
};

export default FollowCursor;
