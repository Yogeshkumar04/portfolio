"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export default function HeroAmbient() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const update = () => setIsDesktop(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [isDesktop, mouseX, mouseY]);

  const springX = useSpring(mouseX, {
    stiffness: 35,
    damping: 18,
    mass: 0.8,
  });

  const springY = useSpring(mouseY, {
    stiffness: 35,
    damping: 18,
    mass: 0.8,
  });

  const groupX = useTransform(springX, [0, 1], [-120, 120]);
  const groupY = useTransform(springY, [0, 1], [-60, 60]);

  if (isDesktop) {
    return (
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ x: groupX, y: groupY }}
      >
        <motion.div
          className="absolute left-[48%] top-[8%] h-[88%] w-[260px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(38,221,211,0.20) 0%, rgba(38,221,211,0.11) 28%, rgba(38,221,211,0.04) 55%, rgba(38,221,211,0) 76%)",
            filter: "blur(60px)",
          }}
          animate={{
            opacity: [0.85, 1, 0.88],
            scaleY: [1, 1.04, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute left-[62%] top-[6%] h-[90%] w-[240px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(92,126,255,0.17) 0%, rgba(92,126,255,0.09) 30%, rgba(92,126,255,0.03) 58%, rgba(92,126,255,0) 78%)",
            filter: "blur(64px)",
          }}
          animate={{
            opacity: [0.75, 0.95, 0.78],
            scaleY: [1, 1.03, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        />

        <motion.div
          className="absolute left-[35%] top-[18%] h-[72%] w-[180px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(20,180,220,0.10) 0%, rgba(20,180,220,0.05) 34%, rgba(20,180,220,0.02) 58%, rgba(20,180,220,0) 78%)",
            filter: "blur(56px)",
          }}
          animate={{
            opacity: [0.55, 0.72, 0.58],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute left-1/2 top-[4%] h-[220px] w-[520px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(90,220,255,0.10) 0%, rgba(90,220,255,0.04) 42%, rgba(90,220,255,0) 72%)",
            filter: "blur(70px)",
          }}
          animate={{
            opacity: [0.5, 0.68, 0.52],
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div
          className="absolute left-[57%] top-[22%] h-[58%] w-[56px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(4,10,18,0) 0%, rgba(4,10,18,0.55) 28%, rgba(4,10,18,0.8) 50%, rgba(4,10,18,0.45) 72%, rgba(4,10,18,0) 100%)",
            filter: "blur(12px)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, rgba(6,17,29,0.10) 52%, rgba(6,17,29,0.42) 100%)",
          }}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        className="absolute left-[52%] top-[10%] h-[82%] w-[180px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(38,221,211,0.16) 0%, rgba(38,221,211,0.08) 32%, rgba(38,221,211,0.03) 58%, rgba(38,221,211,0) 78%)",
          filter: "blur(52px)",
        }}
        animate={{
          x: [-18, 14, -18],
          y: [-8, 10, -8],
          opacity: [0.7, 0.95, 0.72],
          scaleY: [1, 1.06, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-[68%] top-[12%] h-[76%] w-[150px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(92,126,255,0.13) 0%, rgba(92,126,255,0.07) 34%, rgba(92,126,255,0.02) 58%, rgba(92,126,255,0) 78%)",
          filter: "blur(54px)",
        }}
        animate={{
          x: [12, -14, 12],
          y: [8, -6, 8],
          opacity: [0.55, 0.78, 0.58],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute left-[32%] top-[22%] h-[60%] w-[120px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(20,180,220,0.08) 0%, rgba(20,180,220,0.04) 36%, rgba(20,180,220,0.015) 60%, rgba(20,180,220,0) 80%)",
          filter: "blur(46px)",
        }}
        animate={{
          x: [-10, 8, -10],
          opacity: [0.4, 0.62, 0.42],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(6,17,29,0.12) 52%, rgba(6,17,29,0.44) 100%)",
        }}
      />
    </motion.div>
  );
}