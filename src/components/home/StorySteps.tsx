

"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Foundation",
    text: "Built strong computer science fundamentals through systems, networks, databases, and algorithms.",
  },
  {
    number: "02",
    title: "Applied Engineering",
    text: "Worked on secure and auditable IoT systems designed for reliability in real-world environments.",
  },
  {
    number: "03",
    title: "Forensics Research",
    text: "Now focused on forensic imaging, NTFS analysis, artifact recovery, and evidentiary integrity.",
  },
];

export default function StorySteps() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div className="md:sticky md:top-28 md:self-start">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-400">
            Journey
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Building research through systems and evidence
          </h2>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.7, delay: index * 0.06 }}
              className="border-t border-white/10 pt-8"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                {step.number}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                {step.title}
              </h3>
              <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}