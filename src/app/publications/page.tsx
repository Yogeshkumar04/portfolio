"use client";

import { motion } from "motion/react";
import { publications } from "@/data/publications";

const highlights = [
  "IEEE conference publications",
  "Author-presented work",
  "Best Paper Award recognition",
  "Research focused on secure systems and applied IoT",
];

export default function PublicationsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <motion.section
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-400">
          Academic Output
        </p>

        <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
          Publications
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          A selection of conference publications and presented work centered on
          secure systems, IoT-enabled platforms, and auditable technology for
          real-world use cases.
        </p>
      </motion.section>

      <section className="mt-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid gap-6 md:grid-cols-2"
        >
          {highlights.map((item) => (
            <motion.div
              key={item}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-slate-200">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Conference Papers
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.14,
              },
            },
          }}
          className="mt-6 space-y-6"
        >
          {publications.map((paper, index) => (
            <motion.div
              key={paper.title}
              variants={{
                hidden: { opacity: 0, y: 26 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10"
            >
              <div className="grid gap-8 md:grid-cols-[90px_1fr]">
                <div className="flex h-fit w-fit items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-300">
                  0{index + 1}
                </div>

                <div>
                  <h2 className="text-xl font-semibold leading-8 text-white md:text-2xl">
                    {paper.title}
                  </h2>

                  <p className="mt-3 text-slate-400">
                    {paper.venue} • {paper.year}
                  </p>

                  {paper.note ? (
                    <div className="mt-5">
                      <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                        {paper.note}
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-[2rem] border border-cyan-400/15 bg-cyan-400/5 p-8 md:p-10"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Research Focus
          </p>

          <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
            Practical systems research with real-world impact
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-300">
            My publications reflect a strong interest in trustworthy systems,
            secure digital platforms, auditable workflows, and technology
            designed for constrained or real-world deployment environments.
          </p>
        </motion.div>
      </section>
    </main>
  );
}