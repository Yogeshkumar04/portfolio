"use client";

import { motion } from "motion/react";
import { profile } from "@/data/profile";

const contactReasons = [
  "Research collaboration",
  "PhD opportunities",
  "Digital forensics discussions",
  "Systems security and engineering work",
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <motion.section
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-400">
          Contact
        </p>

        <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
          Let’s connect
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          I’m open to research collaborations, PhD opportunities, technical
          discussions, and engineering work related to digital forensics,
          systems security, storage analysis, and trustworthy system design.
        </p>
      </motion.section>

      <section className="mt-16 grid gap-10 md:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-fit rounded-[2rem] border border-white/10 bg-white/5 p-8 md:sticky md:top-28"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Open To
          </p>

          <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
            Opportunities and collaboration
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {contactReasons.map((reason) => (
              <span
                key={reason}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200"
              >
                {reason}
              </span>
            ))}
          </div>

          <p className="mt-8 leading-8 text-slate-300">
            Whether it’s a research discussion, an academic opportunity, or a
            technical collaboration, I’d be glad to connect.
          </p>

          <div className="mt-8">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Email Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Contact Details
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                Email
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-2 block text-lg font-medium text-white hover:text-cyan-300"
              >
                {profile.email}
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                GitHub
              </p>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block break-all text-lg font-medium text-white hover:text-cyan-300"
              >
                {profile.github}
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                LinkedIn
              </p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block break-all text-lg font-medium text-white hover:text-cyan-300"
              >
                {profile.linkedin}
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-16 rounded-[2rem] border border-cyan-400/15 bg-cyan-400/5 p-8 md:p-10"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
          Closing Note
        </p>

        <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
          Interested in building trustworthy systems and impactful research
        </h2>

        <p className="mt-6 max-w-4xl leading-8 text-slate-300">
          I’m particularly motivated by work that combines rigorous systems
          thinking, practical engineering, and research impact in digital
          forensics and security.
        </p>
      </motion.section>
    </main>
  );
}