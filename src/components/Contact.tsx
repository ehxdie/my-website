import { profile } from '../data';
import { Arrow, GitHubIcon, Reveal } from './ui';

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-24 sm:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-[1.1fr,1fr]">
        <Reveal className="grid content-start gap-6">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em]"><span className="neon">[06]</span><span className="text-muted">//</span><span className="text-ink/80">OPEN_CHANNEL</span><span className="h-px flex-1 bg-gradient-to-r from-accent/50 via-line to-transparent" /></div>
          <h2 className="font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight sm:text-6xl">Have a product that has to work? <span className="glitch neon-hot" data-text="Let’s talk.">Let’s talk.</span></h2>
          <p className="max-w-md text-lg text-muted">I take on contract work: payments and fintech backends, integrations, AI features and automation. I usually reply within a day.</p>
          <div className="grid gap-2 text-sm">
            <a href={`mailto:${profile.email}`} className="link w-fit text-lg text-ink">{profile.email}</a>
            <div className="flex gap-5 pt-2">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1">LinkedIn <Arrow className="h-3.5 w-3.5" /></a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5"><GitHubIcon />GitHub</a>
              <a href={profile.cv} download className="link inline-flex items-center gap-1">CV <Arrow className="h-3.5 w-3.5" /></a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <form action={profile.formAction} method="POST" className="card grid gap-4 p-6 sm:p-8">
            {[
              { name: 'name', label: 'Your name', type: 'text', auto: 'name' },
              { name: 'email', label: 'Email', type: 'email', auto: 'email' },
            ].map((f) => (
              <label key={f.name} className="grid gap-1.5 text-sm">
                <span className="text-muted">{f.label}</span>
                <input required name={f.name} type={f.type} autoComplete={f.auto}
                  className="border border-line bg-bg/80 px-4 py-3 font-mono text-sm outline-none transition focus:border-accent focus:shadow-[0_0_16px_rgb(0_238_255/0.25)]" />
              </label>
            ))}
            <label className="grid gap-1.5 text-sm">
              <span className="text-muted">What are you building?</span>
              <textarea required name="message" rows={5}
                className="resize-y border border-line bg-bg/80 px-4 py-3 font-mono text-sm outline-none transition focus:border-accent focus:shadow-[0_0_16px_rgb(0_238_255/0.25)]" />
            </label>
            <button type="submit" className="btn-accent mt-2 justify-center !py-3.5">Send message <Arrow /></button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
