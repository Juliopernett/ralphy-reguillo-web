"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.3 });
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.3 });

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    // One-time client-only capability check on mount; safe despite the lint rule's
    // general cascading-render concern since this never loops or re-triggers itself.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(hasFinePointer);
    if (!hasFinePointer) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest("a, button, [role='button'], input, textarea"));
    };
    const hide = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", hide);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[200] hidden lg:block mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        opacity: visible ? 1 : 0,
      }}
    >
      <motion.div
        animate={{
          width: isPointer ? 52 : 20,
          height: isPointer ? 52 : 20,
          x: isPointer ? -26 : -10,
          y: isPointer ? -26 : -10,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="rounded-full bg-white"
      />
    </motion.div>
  );
}
