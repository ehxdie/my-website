import { profile, stack } from '../data';
import { Arrow, NeuralField, TypeLine } from './ui';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-28 sm:pt-36">
      {/* Neural field behind everything, a perspective grid floor below */}
      <NeuralField className="absolute inset-0 h-full w-full opacity-70" />
      <div aria-hidden className="pointer-events-none absolute inset-x-[-20%] bottom-0 h-[45%] animate-grid grid-floor opacity-40" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgb(var(--bg))_85%)]" />

      <div className="wrap relative">
        <div className="mb-8 animate-rise font-mono text-[12px] text-muted sm:text-[13px]">
          <span className="text-accent">ephraim@abuja</span>:<span className="text-hot">~</span>$ <TypeLine text="./boot --profile software_engineer --mode remote" />
        </div>

        {/* Status bar: three HUD badges */}
        <div className="mb-7 flex animate-rise flex-wrap gap-2.5 font-mono text-[12px] font-medium uppercase tracking-[0.16em] sm:text-[13px]">
          <span className="badge border-volt/70 bg-volt/10 text-volt shadow-[0_0_22px_rgb(246_255_0/0.25)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 animate-ping bg-volt opacity-70" />
              <span className="relative h-2.5 w-2.5 bg-volt shadow-[0_0_10px_rgb(246_255_0/0.9)]" />
            </span>
            Online <span className="text-volt/60">//</span> available for contracts
          </span>
          <span className="badge border-accent/60 bg-accent/10 text-accent shadow-[0_0_22px_rgb(0_238_255/0.2)]">
            <span aria-hidden>▣</span>{profile.role}
          </span>
          <span className="badge border-hot/60 bg-hot/10 text-hot shadow-[0_0_22px_rgb(255_46_210/0.2)]">
            <span aria-hidden>◎</span>{profile.location}
          </span>
        </div>

        <h1 className="max-w-5xl animate-rise font-display text-[2.4rem] font-bold uppercase leading-[0.98] tracking-tight [animation-delay:80ms] sm:text-7xl lg:text-[5.4rem]">
          I build payment rails, AI search and{' '}
          <span className="glitch neon whitespace-nowrap" data-text="data pipelines">data pipelines</span>{' '}
          that run on <span className="neon-hot">their own</span>.
        </h1>

        <div className="mt-10 grid animate-rise gap-10 [animation-delay:160ms] lg:grid-cols-[1.2fr,1fr] lg:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-ink/75">
            I’m Edidiong Ephraim, a software engineer who has led backend work for fintech and AI startups:
            cross-border card payments, KYC, eSIM provisioning, escrow payouts, RAG search. Today I build property-operations
            software and data pipelines for a real-estate investment firm. On the side I built{' '}
            <a href="#sirius" className="link text-accent">Sirius</a>, a trading EA that finds, sizes and manages its own trades.
          </p>
          <div className="card grid gap-3 p-5 text-sm">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em]">
              <span className="text-accent">&gt; status</span>
              <span className="text-muted">live</span>
            </div>
            <div className="flex items-start justify-between gap-4">
              <div><div className="font-medium">Software Engineer · AB Investments</div><div className="text-muted">Property operations system, lead-gen pipelines, scrapers</div></div>
              <span className="chip shrink-0">2026 –</span>
            </div>
            <div className="h-px bg-line" />
            <div className="flex items-start justify-between gap-4">
              <div><div className="font-medium">Building · Sirius</div><div className="text-muted">Forward testing the automated trading engine</div></div>
              <span className="chip shrink-0 !border-hot/40 !text-hot">2026</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:240ms]">
          <a href="#work" className="btn-accent">Enter the work <Arrow /></a>
          <a href={profile.cv} download className="btn-ghost">Download CV.pdf</a>
        </div>
      </div>

      {/* Stack ticker */}
      <div className="relative mt-20 border-y border-accent/20 bg-bg/60 py-3 backdrop-blur sm:mt-24" aria-label="Technologies I work with">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-mono text-[13px] uppercase tracking-wider text-muted hover:[animation-play-state:paused]">
          {[...stack, ...stack].map((s, i) => (
            <span key={i} className="flex items-center gap-8">{s}<span className={i % 3 === 0 ? 'text-hot' : 'text-accent'}>◆</span></span>
          ))}
        </div>
      </div>
    </section>
  );
}
