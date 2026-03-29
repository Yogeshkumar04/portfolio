import { timeline } from "@/data/timeline";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Timeline() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionTitle
          eyebrow="Timeline"
          title="A journey through research and systems building"
        />
      </Reveal>

      <div className="space-y-6">
        {timeline.map((item) => (
          <Reveal key={item.year + item.title}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
                {item.year}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-slate-400">{item.organization}</p>
              <p className="mt-4 leading-8 text-slate-300">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}