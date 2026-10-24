import { profile } from '../data';
import { Arrow, GitHubIcon, Reveal } from './ui';

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-24 sm:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-[1.1fr,1fr]">
        <Reveal className="grid content-start gap-6">
          <div className="eyebrow flex items-center gap-3"><span className="text-accent">06</span><span className="h-px w-10 bg-line" />Contact</div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">Have a product that has to work? <span className="text-accent">Let’s talk.</span></h2>
          <p className="max-w-md text-lg text-muted">I take on contract work: payments and fintech backends, integrations, AI features and automation. I usually reply within a day.</p>
          <div className="grid gap-2 text-sm">
            <a href={`mailto:${profile.email}`} className="link w-fit text-lg text-ink">{profile.email}</a>
            <div className="flex gap-5 pt-2">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1">LinkedIn <Arrow className="h-3.5 w-3.5" /></a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5"><GitHubIcon />GitHub</a>
              <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1">CV <Arrow className="h-3.5 w-3.5" /></a>
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
                  className="rounded-xl border border-line bg-bg px-4 py-3 text-base outline-none transition focus:border-accent" />
              </label>
            ))}
            <label className="grid gap-1.5 text-sm">
              <span className="text-muted">What are you building?</span>
              <textarea required name="message" rows={5}
                className="resize-y rounded-xl border border-line bg-bg px-4 py-3 text-base outline-none transition focus:border-accent" />
            </label>
            <button type="submit" className="btn-accent mt-2 justify-center !py-3.5">Send message <Arrow /></button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
