import { useEffect, useState } from 'react';
import { profile } from '../data';
import { ScrollProgress } from './ui';

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#sirius', label: 'Sirius' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition ${scrolled ? 'border-b border-accent/20 bg-bg/80 backdrop-blur-xl' : 'border-b border-transparent'}`}>
      <nav className="wrap flex h-16 items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-8 w-9 place-items-center border border-accent font-mono text-[12px] font-bold text-accent shadow-[0_0_14px_rgb(0_238_255/0.45)] [clip-path:polygon(0_0,calc(100%-7px)_0,100%_7px,100%_100%,7px_100%,0_calc(100%-7px))]">EE</span>
          <span className="hidden font-mono text-[13px] uppercase tracking-[0.18em] sm:inline">
            ephraim<span className="text-accent">.</span>sys
          </span>
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="hidden items-center md:flex">
            {LINKS.map((l, i) => (
              <a key={l.href} href={l.href} className="px-3 py-1.5 font-mono text-[12px] uppercase tracking-wider text-muted transition hover:text-accent">
                <span className="text-accent/50">0{i + 1}.</span>{l.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="btn-ghost !px-4 !py-1.5">Contact</a>
          <a href={profile.cv} download className="btn-accent hidden !px-4 !py-1.5 sm:inline-flex">CV</a>
        </div>
      </nav>
      <ScrollProgress />
    </header>
  );
}
