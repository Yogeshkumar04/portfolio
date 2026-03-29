// "use client";

// import { motion } from "motion/react";
// import { profile } from "@/data/profile";

// const quickFacts = [
//   "Digital Forensics Researcher",
//   "Junior Research Fellow at NIT Raipur",
//   "Best Paper Award recipient",
//   "Interested in PhD and research opportunities",
// ];

// export default function ResumePage() {
//   return (
//     <main className="mx-auto max-w-6xl px-6 py-20">
//       <motion.section
//         initial={{ opacity: 0, y: 28 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//       >
//         <p className="text-sm uppercase tracking-[0.28em] text-cyan-400">
//           Resume
//         </p>

//         <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
//           Curriculum Vitae
//         </h1>

//         <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
//           View or download my latest resume below. It summarizes my research
//           background, technical work, publications, and achievements in digital
//           forensics, systems security, and secure systems engineering.
//         </p>
//       </motion.section>

//       <section className="mt-16 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.15 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="h-fit rounded-[2rem] border border-white/10 bg-white/5 p-8 md:sticky md:top-28"
//         >
//           <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
//             Snapshot
//           </p>

//           <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
//             Professional summary
//           </h2>

//           <p className="mt-5 leading-8 text-slate-300">
//             I work at the intersection of digital forensics, systems security,
//             and storage analysis, with research interests in forensic soundness,
//             evidence integrity, and secure auditable systems.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-3">
//             {quickFacts.map((fact) => (
//               <span
//                 key={fact}
//                 className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200"
//               >
//                 {fact}
//               </span>
//             ))}
//           </div>

//           <div className="mt-8 flex flex-wrap gap-4">
//             <a
//               href={profile.resumePath}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
//             >
//               Open Resume PDF
//             </a>

//             <a
//               href={profile.resumePath}
//               download
//               className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
//             >
//               Download Resume
//             </a>
//           </div>

//           <div className="mt-8 space-y-3 text-sm text-slate-300">
//             <p>
//               <span className="font-semibold text-white">Email:</span>{" "}
//               {profile.email}
//             </p>
            
//           </div>
//         </motion.div>

//         {/* <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.12 }}
//           transition={{ duration: 0.65, ease: "easeOut" }}
//           className="overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl"
//         >
//           <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
//             <p className="text-sm font-medium text-slate-700">
//               Embedded Resume Preview
//             </p>
//           </div>

//           <iframe
//             src={profile.resumePath}
//             title="Resume PDF"
//             className="h-[900px] w-full"
//           />
//         </motion.div> */}
//       </section>

//       <motion.section
//         initial={{ opacity: 0, y: 24 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.15 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="mt-16 rounded-[2rem] border border-cyan-400/15 bg-cyan-400/5 p-8 md:p-10"
//       >
//         <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
//           Looking Ahead
//         </p>

//         <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
//           Open to research and advanced technical opportunities
//         </h2>

//         <p className="mt-6 max-w-4xl leading-8 text-slate-300">
//           I am especially interested in research collaborations, PhD
//           opportunities, and technically challenging roles related to digital
//           forensics, systems security, storage analysis, and trustworthy
//           system design.
//         </p>
//       </motion.section>
//     </main>
//   );
// }

"use client";

import { motion } from "motion/react";
import { profile } from "@/data/profile";

const quickFacts = [
  "Digital Forensics Researcher",
  "Junior Research Fellow at NIT Raipur",
  "Best Paper Award recipient",
  "Interested in PhD and research opportunities",
];

const highlights = [
  {
    title: "Research Focus",
    text: "Digital forensics, systems security, storage analysis, and evidence integrity.",
  },
  {
    title: "Current Role",
    text: "Junior Research Fellow working on forensic disk imaging and NTFS analysis.",
  },
  {
    title: "Publications",
    text: "Conference publications and award-winning work in secure systems and applied research.",
  },
  {
    title: "Looking For",
    text: "Research collaborations, PhD opportunities, and advanced technical roles.",
  },
];

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <motion.section
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-400">
          Resume
        </p>

        <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
          Curriculum Vitae
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          View or download my latest resume below. It summarizes my research
          background, technical work, publications, and achievements in digital
          forensics, systems security, and secure systems engineering.
        </p>
      </motion.section>

      <section className="mt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10"
        >
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                Snapshot
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                Professional summary
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                I work at the intersection of digital forensics, systems
                security, and storage analysis, with research interests in
                forensic soundness, evidence integrity, and secure auditable
                systems.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {quickFacts.map((fact) => (
                  <span
                    key={fact}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-black/10 p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-400">
                Resume Access
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                Open the latest PDF version or download it directly for academic,
                research, and professional applications.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={profile.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  Open Resume PDF
                </a>

                <a
                  href={profile.resumePath}
                  download
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  Download Resume
                </a>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6 text-sm text-slate-300">
                <p>
                  <span className="font-semibold text-white">Email:</span>{" "}
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-cyan-300 hover:underline"
                  >
                    {profile.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

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
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
            </motion.div>
          ))}
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
          Looking Ahead
        </p>

        <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
          Open to research and advanced technical opportunities
        </h2>

        <p className="mt-6 max-w-4xl leading-8 text-slate-300">
          I am especially interested in research collaborations, PhD
          opportunities, and technically challenging roles related to digital
          forensics, systems security, storage analysis, and trustworthy system
          design.
        </p>
      </motion.section>
    </main>
  );
}