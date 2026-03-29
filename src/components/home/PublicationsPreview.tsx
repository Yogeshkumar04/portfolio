"use client";

import { motion } from "motion/react";
import { publications } from "@/data/publications";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";

export default function PublicationsPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionTitle
          eyebrow="Publications"
          title="Conference work and research outcomes"
        />
      </Reveal>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="space-y-6"
      >
        {publications.map((paper) => (
          <motion.div
            key={paper.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <h3 className="text-xl font-semibold text-white">{paper.title}</h3>
            <p className="mt-2 text-slate-400">
              {paper.venue} • {paper.year}
            </p>
            {paper.note ? (
              <p className="mt-3 text-cyan-300">{paper.note}</p>
            ) : null}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}