import { certifications, education } from '../data';
import { Arrow, Reveal, SectionHead } from './ui';

export default function About() {
  return (
    <section id="about" className="border-t border-line py-24 sm:py-32">
      <div className="wrap">
        <SectionHead
          index="05"
          label="About"
          title="Physics, then security, then software"
          intro={<>
            I studied Industrial Physics, then a Master’s in Computer Science with a cybersecurity focus, and wrote my thesis on blockchain voting.
            Since 2023 I’ve built software full-time. I like the parts of a product where correctness matters most: payments, identity, money movement and systems that make decisions without a person watching.
          </>}
        />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal className="card p-6">
            <div className="eyebrow mb-4">Education</div>
            <div className="grid gap-5">
              {education.map((e) => (
                <div key={e.degree} className="flex items-start justify-between gap-4">
                  <div><div className="font-medium">{e.degree}</div><div className="text-sm text-muted">{e.school} · {e.years}</div></div>
                  <span className="chip shrink-0">{e.grade}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="card p-6" delay={90}>
            <div className="eyebrow mb-4">Certifications</div>
            <ul className="grid gap-3">
              {certifications.map((c) => (
                <li key={c.name}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4">
                    <span className="link">{c.name}</span>
                    <Arrow className="h-3.5 w-3.5 shrink-0 text-muted transition group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
