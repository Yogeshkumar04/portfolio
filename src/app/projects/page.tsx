"use client";

import { motion } from "motion/react";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      
      {/* HEADER */}
      <section>
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          Projects
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          A collection of research systems, secure platforms, and engineering
          projects focused on digital forensics, IoT security, and real-world
          system design.
        </p>
      </section>

      {/* PROJECT LIST */}
      <section className="mt-16 space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.05 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-10"
          >
            {/* TOP INFO */}
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
              {project.period}
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              {project.title}
            </h2>

            <p className="mt-2 text-slate-400">
              {project.role} • {project.organization}
            </p>

            {/* SUMMARY */}
            <p className="mt-6 max-w-3xl leading-8 text-slate-300">
              {project.summary}
            </p>

            {/* GRID CONTENT */}
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              
              {/* PROBLEM */}
              <div>
                <h3 className="text-lg font-semibold text-white">Problem</h3>
                <p className="mt-3 leading-8 text-slate-300">
                  {project.problem}
                </p>
              </div>

              {/* APPROACH */}
              <div>
                <h3 className="text-lg font-semibold text-white">Approach</h3>
                <ul className="mt-3 space-y-2 text-slate-300">
                  {project.approach.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* STACK */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-white">
                Technologies
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* OUTCOMES */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-white">Outcomes</h3>

              <ul className="mt-3 space-y-2 text-slate-300">
                {project.outcomes.map((outcome) => (
                  <li key={outcome}>• {outcome}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}