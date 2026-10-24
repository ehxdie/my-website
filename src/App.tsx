import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Sirius from './components/Sirius';
import WorkSection from './components/Work';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import { useCardSpotlight, WatClock } from './components/ui';
import { profile } from './data';

// Paths from the old site (and links already shared, like the CV's /my-website/) land on the right section.
const OLD_PATHS: Record<string, string> = { '/aboutpage': 'about', '/contactpage': 'contact', '/my-website': 'top' };

export default function App() {
  useEffect(() => {
    const target = OLD_PATHS[window.location.pathname.toLowerCase().replace(/\/$/, '')];
    if (target && target !== 'top') document.getElementById(target)?.scrollIntoView();
    // A hello for anyone who opens the console.
    console.log(
      '%c> ephraim.sys online %c\nLooking under the hood? I build systems like this for a living: ' + profile.email,
      'color:#00eeff;font:700 14px monospace;text-shadow:0 0 8px #00eeff',
      'color:#ff2ed2;font:12px monospace',
    );
  }, []);
  useCardSpotlight();

  return (
    <div className="crt">
      <Nav />
      <main>
        <Hero />
        <WorkSection />
        <Experience />
        <About />
        <Sirius />
        <Contact />
      </main>
      <footer className="border-t border-accent/20 py-10">
        <div className="wrap flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-wider text-muted">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="inline-flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping bg-accent opacity-60" />
              <span className="relative h-2 w-2 bg-accent" />
            </span>
            <span className="text-accent">System online</span>
            <span className="text-line">|</span>
            Abuja <WatClock />
          </span>
          <span>React · TypeScript · Tailwind · Vercel</span>
        </div>
      </footer>
    </div>
  );
}
