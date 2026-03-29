import Link from "next/link";
import { profile } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";

export default function ContactCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-10">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
            Let’s connect for research, collaboration, or engineering work
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-200">
            I’m interested in digital forensics, systems security, storage analysis,
            secure systems, and research-driven engineering opportunities.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950"
            >
              Email Me
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}