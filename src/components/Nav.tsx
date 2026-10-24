import { useEffect, useState } from 'react';
import { profile } from '../data';
import { ThemeToggle } from './ui';

const LINKS = [
  { href: '#sirius', label: 'Sirius' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
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
    <header className={`fixed inset-x-0 top-0 z-40 transition ${scrolled ? 'border-b border-line bg-bg/80 backdrop-blur-xl' : 'border-b border-transparent'}`}>
      <nav className="wrap flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-[13px] font-extrabold text-accent-ink">EE</span>
          <span className="hidden sm:inline">Edidiong Ephraim</span>
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => <a key={l.href} href={l.href} className="rounded-full px-3 py-1.5 text-sm text-muted transition hover:text-ink">{l.label}</a>)}
          </div>
          <a href="#contact" className="btn-ghost !px-4 !py-1.5">Contact</a>
          <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn-accent hidden !px-4 !py-1.5 sm:inline-flex">CV</a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
