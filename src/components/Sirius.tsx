import { sirius } from '../data';
import { Chips, Reveal, SectionHead } from './ui';

const FLOW = [
  { name: 'MetaTrader 5', sub: 'MQL5 Expert Advisor' },
  { name: 'Sirius server', sub: 'Node · Fastify · live engine' },
  { name: 'PostgreSQL', sub: '10.5M candles · deals · orders' },
  { name: 'Dashboard', sub: 'React · socket.io' },
];

export default function Sirius() {
  return (
    <section id="sirius" className="border-t border-line py-24 sm:py-32">
      <div className="wrap">
        <SectionHead
          index="05"
          label="Case study"
          title={<>Sirius: {sirius.tagline}</>}
          intro={sirius.summary}
        />

        <Reveal className="grid gap-3 sm:grid-cols-3">
          {sirius.stats.map((s) => (
            <div key={s.label} className="card p-6">
              <div className="font-display text-5xl font-extrabold tracking-tight text-accent">{s.value}</div>
              <div className="mt-2 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </Reveal>

        {/* Architecture: how a trade flows */}
        <Reveal className="card mt-3 overflow-x-auto p-6">
          <div className="eyebrow mb-5">How it fits together</div>
          <div className="flex min-w-[640px] items-stretch">
            {FLOW.map((f, i) => (
              <div key={f.name} className="flex flex-1 items-center">
                <div className="flex-1 rounded-xl border border-line bg-bg px-4 py-3">
                  <div className="font-medium">{f.name}</div>
                  <div className="font-mono text-[11px] text-muted">{f.sub}</div>
                </div>
                {i < FLOW.length - 1 && (
                  <div className="flex w-10 shrink-0 flex-col items-center gap-1 text-accent" aria-hidden>
                    <svg viewBox="0 0 40 12" className="w-8"><path d="M0 6h36M30 1l6 5-6 5" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted">
            Bars, account state and fills flow in; orders flow back to the EA only after the risk guard approves them. If equity nears a loss limit, the engine closes everything and pauses on its own.
          </p>
        </Reveal>

        <div className="mt-3 grid gap-3 lg:grid-cols-[1fr,1.35fr]">
          <Reveal className="card p-6">
            <div className="eyebrow mb-4">What I built</div>
            <ul className="grid gap-3 text-[15px] leading-relaxed">
              {sirius.built.map((b) => <li key={b} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{b}</li>)}
            </ul>
            <div className="mt-6 grid gap-3">
              <Chips items={sirius.stackList} />
              <div className="font-mono text-[11px] text-muted">{sirius.status}</div>
            </div>
          </Reveal>
          <Reveal className="grid gap-3" delay={100}>
            {sirius.images.map((img) => (
              <figure key={img.src} className="card overflow-hidden">
                <img src={img.src} alt={img.alt} loading="lazy" className="block w-full" />
                <figcaption className="border-t border-line px-4 py-2.5 text-xs text-muted">{img.alt}</figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
        <p className="mt-4 text-xs text-muted">Pass rate is a simulation over 2007–2026 with trading costs doubled to approximate live conditions; past performance does not guarantee future results.</p>
      </div>
    </section>
  );
}
