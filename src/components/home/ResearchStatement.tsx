"use client";

import { motion } from "motion/react";

export default function ResearchStatement() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 md:p-14"
      >
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-400">
          Research Direction
        </p>

        <h2 className="mt-5 max-w-4xl text-3xl font-bold leading-tight text-white md:text-5xl">
          I build tools and workflows that make digital evidence more reliable,
          verifiable, and useful in real-world investigations.
        </h2>

        <p className="mt-6 max-w-3xl leading-8 text-slate-300">
          My work combines storage analysis, forensic imaging, evidence integrity,
          secure system design, and applied engineering to create trustworthy
          investigation pipelines.
        </p>
      </motion.div>
    </section>
  );
}