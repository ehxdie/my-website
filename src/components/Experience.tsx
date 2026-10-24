import { experience } from '../data';
import { Chips, Reveal, SectionHead } from './ui';

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-24 sm:py-32">
      <div className="wrap">
        <SectionHead
          index="03"
          label="Experience"
          title="Four years shipping production systems"
          intro="Mostly remote contracts with fintech, AI and real-estate companies, leading the backend and the integrations that move money and data."
        />
        <ol className="grid">
          {experience.map((r) => (
            <Reveal key={r.company} className="grid gap-4 border-t border-line py-8 md:grid-cols-[220px,1fr] md:gap-10">
              <div className="grid content-start gap-1">
                <div className="font-mono text-xs text-muted">{r.dates}</div>
                <div className="font-mono text-[11px] text-muted/80">{r.place}</div>
                {r.title.startsWith('Lead') && <span className="chip mt-2 w-fit border-accent/40 text-accent">Lead role</span>}
              </div>
              <div className="grid gap-4">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">{r.company}</h3>
                  <div className="text-muted">{r.title}</div>
                </div>
                <ul className="grid gap-2 leading-relaxed">
                  {r.points.map((p) => <li key={p} className="flex gap-3"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" />{p}</li>)}
                </ul>
                <Chips items={r.stack} />
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
