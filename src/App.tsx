import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Sirius from './components/Sirius';
import WorkSection from './components/Work';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import { profile } from './data';

// Paths from the old site (and links already shared, like the CV's /my-website/) land on the right section.
const OLD_PATHS: Record<string, string> = { '/aboutpage': 'about', '/contactpage': 'contact', '/my-website': 'top' };

export default function App() {
  useEffect(() => {
    const target = OLD_PATHS[window.location.pathname.toLowerCase().replace(/\/$/, '')];
    if (target && target !== 'top') document.getElementById(target)?.scrollIntoView();
  }, []);

  return (
    <div className="grain">
      <Nav />
      <main>
        <Hero />
        <Sirius />
        <WorkSection />
        <Experience />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-line py-10">
        <div className="wrap flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with React, TypeScript and Tailwind · hosted on Vercel</span>
        </div>
      </footer>
    </div>
  );
}
