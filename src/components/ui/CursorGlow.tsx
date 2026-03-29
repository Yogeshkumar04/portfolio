"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const springX = useSpring(mouseX, {
    stiffness: 120,
    damping: 25,
    mass: 0.4,
  });

  const springY = useSpring(mouseY, {
    stiffness: 120,
    damping: 25,
    mass: 0.4,
  });

  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const updatePointerType = () => setIsDesktop(media.matches);
    updatePointerType();

    media.addEventListener("change", updatePointerType);

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleLeave);

    return () => {
      media.removeEventListener("change", updatePointerType);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
    };
  }, [mouseX, mouseY]);

  const glowOpacity = useTransform(
    () => (isDesktop && isVisible ? 1 : 0)
  );

  if (!isDesktop) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden"
      style={{ opacity: glowOpacity }}
    >
      <motion.div
        className="absolute h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: springX,
          top: springY,
          background:
            "radial-gradient(circle, rgba(34,211,238,0.16) 0%, rgba(34,211,238,0.08) 28%, rgba(34,211,238,0.03) 52%, rgba(34,211,238,0) 72%)",
          filter: "blur(24px)",
        }}
      />
    </motion.div>
  );
}