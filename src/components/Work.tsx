import { clientWork, profile, projects, type Work } from '../data';
import { Arrow, Chips, GitHubIcon, Reveal, SectionHead } from './ui';

function ClientCard({ w, i }: { w: Work; i: number }) {
  return (
    <Reveal delay={(i % 2) * 90} className="group card flex flex-col overflow-hidden">
      <a href={w.link} target="_blank" rel="noopener noreferrer" className="shot relative block aspect-[16/10] overflow-hidden border-b border-accent/20 bg-bg" aria-label={`Open the ${w.name} demo`}>
        <img src={w.image} alt={`${w.name} screenshot`} loading="lazy" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]" />
        <span className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center border border-accent bg-bg/80 text-accent opacity-0 backdrop-blur transition group-hover:opacity-100"><Arrow /></span>
      </a>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="eyebrow mb-1.5">{w.kind}</div>
            <h3 className="text-2xl font-bold uppercase tracking-tight transition group-hover:text-accent">{w.name}</h3>
          </div>
          <span className="chip shrink-0">{w.year}</span>
        </div>
        <p className="leading-relaxed text-muted">{w.summary}</p>
        {w.points.length > 0 && (
          <ul className="grid gap-1.5 text-sm">
            {w.points.map((p) => <li key={p} className="flex gap-2.5"><span className="text-accent">→</span>{p}</li>)}
          </ul>
        )}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
          <Chips items={w.stack} />
          <div className="flex gap-4 text-sm">
            {w.repo && <a href={w.repo} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5"><GitHubIcon />Code</a>}
            {w.link && <a href={w.link} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1">Live demo <Arrow className="h-3.5 w-3.5" /></a>}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ProjectRow({ p }: { p: Work }) {
  return (
    <Reveal className="group grid gap-3 border-t border-line py-6 sm:grid-cols-[minmax(0,1fr),minmax(0,1.7fr),150px] sm:items-baseline sm:gap-8">
      <div>
        <h3 className="text-xl font-bold uppercase tracking-tight transition group-hover:text-accent">{p.name}</h3>
        <div className="font-mono text-[11px] text-muted">{p.kind} · {p.year}</div>
      </div>
      <div className="grid gap-3">
        <p className="leading-relaxed text-muted">{p.summary}</p>
        <Chips items={p.stack} />
      </div>
      <div className="flex gap-4 text-sm sm:justify-end">
        {p.repo && <a href={p.repo} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5"><GitHubIcon />Code</a>}
        {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1">Live <Arrow className="h-3.5 w-3.5" /></a>}
      </div>
    </Reveal>
  );
}

export default function WorkSection() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="wrap">
        <SectionHead
          index="01"
          label="Client work"
          title="Recent builds for clients"
          intro="Products I’ve built for clients this year. Both are live, so click through and try them."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {clientWork.map((w, i) => <ClientCard key={w.name} w={w} i={i} />)}
        </div>

        <div className="mt-24">
          <SectionHead index="02" label="Projects" title="Things I built to learn and to ship" />
          <div className="border-b border-line">
            {projects.map((p) => <ProjectRow key={p.name} p={p} />)}
          </div>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link mt-6 inline-flex items-center gap-2 text-sm">
            <GitHubIcon /> More on GitHub (65 public repositories)
          </a>
        </div>
      </div>
    </section>
  );
}
