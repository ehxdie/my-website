import { education } from '../data';
import { Reveal, SectionHead } from './ui';

export default function About() {
  return (
    <section id="about" className="border-t border-line py-24 sm:py-32">
      <div className="wrap">
        <SectionHead
          index="04"
          label="About"
          title="Physics, then security, then software"
          intro={<>
            I studied Industrial Physics, then a Master’s in Computer Science with a cybersecurity focus, and wrote my thesis on blockchain voting.
            Since 2023 I’ve built software full-time. I like the parts of a product where correctness matters most: payments, identity, money movement and systems that make decisions without a person watching.
          </>}
        />
        <div className="grid gap-3 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.degree} className="card grid gap-4 p-6" delay={i * 90}>
              <div className="flex items-center justify-between gap-4">
                <div className="eyebrow">Education · {e.years}</div>
                <span className="chip shrink-0">{e.grade}</span>
              </div>
              <div>
                <div className="font-display text-xl font-bold tracking-tight">{e.degree}</div>
                <div className="text-sm text-muted">{e.school}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
