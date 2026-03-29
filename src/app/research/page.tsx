"use client";

import { motion } from "motion/react";
import { publications } from "@/data/publications";

const researchAreas = [
  "Digital Forensics & Incident Response",
  "File System Analysis (NTFS, Storage Internals)",
  "Forensic Disk Imaging & Evidence Integrity",
  "Systems Security & Post-Compromise Analysis",
  "Mobile & Embedded System Security",
  "Secure and Auditable Systems",
];

const achievements = [
  "Best Paper Award — ICSCA 2025",
  "Best Paper Award — IATMSI 2025",
  "GATE 2025 Qualified (CS & IT)",
  "Top 0.1% — PrepSAT Hackathon",
];

export default function ResearchPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <motion.section
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-400">
          Research Profile
        </p>

        <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
          Research
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          My work focuses on digital forensics, systems security, and
          storage-level analysis. I am particularly interested in forensic
          soundness, evidence integrity, file system reconstruction, and
          post-incident investigation.
        </p>
      </motion.section>

      <section className="mt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Research Interests
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
                staggerChildren: 0.12,
              },
            },
          }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          {researchAreas.map((item) => (
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
            Current Work
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mt-6 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
        >
          <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                Active Research
              </p>

              <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                Forensic Disk Imaging and NTFS Analysis
              </h3>

              <p className="mt-2 text-slate-400">
                Junior Research Fellow — NIT Raipur
              </p>

              <p className="mt-6 leading-8 text-slate-300">
                I am currently developing a forensic-grade disk imaging and
                analysis framework for Windows-based storage systems. The work
                emphasizes bit-stream acquisition, integrity verification using
                cryptographic hashing, NTFS metadata parsing, and reconstruction
                of deleted artifacts.
              </p>
            </div>

            <div className="border-t border-white/10 bg-cyan-400/5 p-8 md:border-l md:border-t-0 md:p-10">
              <h4 className="text-lg font-semibold text-white">
                Research Highlights
              </h4>

              <ul className="mt-5 space-y-3 text-slate-300">
                <li>• Bit-stream acquisition of physical and logical drives</li>
                <li>• MD5, SHA-1, SHA-256 based integrity validation</li>
                <li>• Parsing NTFS structures: $MFT, $Bitmap, runlists</li>
                <li>• Deleted file recovery and metadata reconstruction</li>
                <li>• Chain-of-custody logging for forensic soundness</li>
              </ul>
            </div>
          </div>
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
            Publications
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
          {publications.map((paper) => (
            <motion.div
              key={paper.title}
              variants={{
                hidden: { opacity: 0, y: 26 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-xl font-semibold text-white">{paper.title}</h3>

              <p className="mt-2 text-slate-400">
                {paper.venue} • {paper.year}
              </p>

              {paper.note && (
                <p className="mt-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                  {paper.note}
                </p>
              )}
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
            Achievements
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
                staggerChildren: 0.12,
              },
            },
          }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          {achievements.map((item) => (
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
          className="rounded-[2rem] border border-cyan-400/15 bg-cyan-400/5 p-8 md:p-10"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Future Direction
          </p>

          <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
            Building trustworthy forensic systems at scale
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-300">
            I aim to pursue advanced research in systems security and digital
            forensics, focusing on large-scale storage analysis, automated
            evidence reconstruction, and trustworthy forensic frameworks. My
            long-term goal is to contribute to research that improves the
            reliability, transparency, and scalability of digital investigations.
          </p>
        </motion.div>
      </section>
    </main>
  );
}