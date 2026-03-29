"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { projects } from "@/data/projects";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";

export default function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionTitle
          eyebrow="Projects"
          title="Selected work"
          description="A mix of research, systems engineering, secure IoT, and application development."
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
        className="grid gap-6 md:grid-cols-2"
      >
        {featured.map((project) => (
          <motion.div
            key={project.slug}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-full rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
              {project.period}
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-white">
              {project.title}
            </h3>

            <p className="mt-2 text-slate-400">
              {project.role} • {project.organization}
            </p>

            <p className="mt-5 leading-8 text-slate-300">{project.summary}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10">
        <Link
          href="/projects"
          className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}