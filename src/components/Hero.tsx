import { profile, stack } from '../data';
import { Arrow } from './ui';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      {/* Accent glow behind the headline */}
      <div aria-hidden className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" />
      <div className="wrap relative">
        <div className="eyebrow mb-6 flex animate-rise flex-wrap items-center gap-x-3 gap-y-1">
          <span className="inline-flex items-center gap-2 text-ink"><span className="h-2 w-2 rounded-full bg-accent" />Available for contracts</span>
          <span>{profile.role}</span>
          <span>{profile.location}</span>
        </div>

        <h1 className="max-w-5xl animate-rise font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tight [animation-delay:80ms] sm:text-7xl lg:text-[5.6rem]">
          I build payment rails, AI products and <span className="relative whitespace-nowrap text-accent">trading systems</span> that run on their own.
        </h1>

        <div className="mt-10 grid animate-rise gap-10 [animation-delay:160ms] lg:grid-cols-[1.2fr,1fr] lg:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            I’m Edidiong Ephraim, a software engineer who leads backend and full-stack work for fintech and AI startups:
            cross-border card payments, KYC, eSIM provisioning, escrow payouts, RAG search. On the side I built{' '}
            <a href="#sirius" className="link text-ink">Sirius</a>, a platform that trades prop-firm accounts by itself.
          </p>
          <div className="card grid gap-3 p-5 text-sm">
            <div className="eyebrow">Right now</div>
            <div className="flex items-start justify-between gap-4">
              <div><div className="font-medium">Lead Software Engineer · TM-Labs</div><div className="text-muted">USD→NGN virtual cards, Stripe, Sum-Sub KYC, eSIM</div></div>
              <span className="chip shrink-0">2025 –</span>
            </div>
            <div className="h-px bg-line" />
            <div className="flex items-start justify-between gap-4">
              <div><div className="font-medium">Building · Sirius</div><div className="text-muted">Forward testing the automated trading engine</div></div>
              <span className="chip shrink-0">2026</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:240ms]">
          <a href="#work" className="btn-accent">See the work <Arrow /></a>
          <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn-ghost">Read my CV</a>
        </div>
      </div>

      {/* Stack marquee */}
      <div className="mt-20 border-y border-line py-4 sm:mt-28" aria-label="Technologies I work with">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-mono text-sm text-muted hover:[animation-play-state:paused]">
          {[...stack, ...stack].map((s, i) => (
            <span key={i} className="flex items-center gap-10">{s}<span className="text-accent">✦</span></span>
          ))}
        </div>
      </div>
    </section>
  );
}
