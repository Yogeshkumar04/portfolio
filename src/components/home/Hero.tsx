

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import HeroAmbient from "@/components/home/HeroAmbient";

export default function Hero() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const update = () => setIsDesktop(media.matches);

    update();
    media.addEventListener("change", update);

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      media.removeEventListener("change", update);
      window.removeEventListener("mousemove", handleMove);
    };
  }, [mouseX, mouseY]);

  const springX = useSpring(mouseX, {
    stiffness: 40,
    damping: 20,
    mass: 0.7,
  });

  const springY = useSpring(mouseY, {
    stiffness: 40,
    damping: 20,
    mass: 0.7,
  });

  const textX = useTransform(springX, [0, 1], [-16, 16]);
  const textY = useTransform(springY, [0, 1], [-10, 10]);

  const imageX = useTransform(springX, [0, 1], [-22, 22]);
  const imageY = useTransform(springY, [0, 1], [-14, 14]);

  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center overflow-hidden px-6 py-10 md:px-8 md:py-14">
      <HeroAmbient />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(6,17,29,0.08)_48%,rgba(6,17,29,0.28)_100%)]" />

      <div className="relative z-10 grid w-full items-center gap-12 md:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={isDesktop ? { x: textX, y: textY } : undefined}
          className="max-w-3xl"
        >
          <p className="mb-5 text-sm uppercase tracking-[0.32em] text-cyan-400">
            Researcher • Systems Security • Digital Forensics
          </p>

          <h1 className="text-5xl font-bold leading-[0.92] text-white md:text-7xl lg:text-[5.2rem]">
            Building trustworthy
            <br />
            forensic systems
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            {profile.title}
          </p>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
            {profile.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/research"
              className="rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Explore Research
            </Link>

            <Link
              href="/projects"
              className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              View Projects
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          style={isDesktop ? { x: imageX, y: imageY } : undefined}
          className="flex justify-center md:justify-end md:pr-6"
        >
          {/* <div className="relative h-[320px] w-[260px] overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 shadow-xl transition duration-500 hover:scale-[1.02] md:h-[420px] md:w-[320px]">
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/10 via-transparent to-black/20" />
            <Image
              src="/images/profile/profile_img.jpeg"
              alt="Yogesh Kumar Bandhe"
              fill
              priority
              sizes="(max-width: 768px) 260px, (max-width: 1200px) 320px, 340px"
              className="object-cover"
            />
          </div> */}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
          Scroll
        </div>
      </motion.div>
    </section>
  );
}