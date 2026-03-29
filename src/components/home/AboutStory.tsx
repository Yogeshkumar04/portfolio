import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";

export default function AboutStory() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionTitle
          eyebrow="Story"
          title="From software foundations to forensic-grade systems"
          description="My work sits at the intersection of digital forensics, systems security, and trustworthy engineering."
        />
      </Reveal>

      <Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-4 text-xl font-semibold text-white">
              Research Direction
            </h3>
            <p className="leading-8 text-slate-300">
              My current work centers on forensic disk imaging, NTFS internals,
              deleted artifact recovery, and post-incident analysis.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-4 text-xl font-semibold text-white">
              Engineering Focus
            </h3>
            <p className="leading-8 text-slate-300">
              I also build secure IoT-enabled systems, mobile apps, and practical
              tools that prioritize reliability and transparency.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}