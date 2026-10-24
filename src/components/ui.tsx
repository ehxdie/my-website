import { useEffect, useRef, useState, type ReactNode } from 'react';

export const Arrow = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="square" aria-hidden><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const GitHubIcon = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" /></svg>
);

const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Fades its children in the first time they scroll into view. */
export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setShown(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`${className} ${shown ? 'animate-rise' : 'opacity-0'}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/** Section header styled as a terminal path: [01] // CLIENT_WORK */
export function SectionHead({ index, label, title, intro }: { index: string; label: string; title: ReactNode; intro?: ReactNode }) {
  return (
    <Reveal className="mb-10 grid gap-4 sm:mb-14">
      <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em]">
        <span className="neon">[{index}]</span>
        <span className="text-muted">//</span>
        <span className="text-ink/80">{label.toUpperCase().replace(/\s+/g, '_')}</span>
        <span className="h-px flex-1 bg-gradient-to-r from-accent/50 via-line to-transparent" />
      </div>
      <h2 className="section-title max-w-3xl">{title}</h2>
      {intro && <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
    </Reveal>
  );
}

export function Chips({ items }: { items: string[] }) {
  if (!items.length) return null;
  return <div className="flex flex-wrap gap-1.5">{items.map((s) => <span key={s} className="chip">{s}</span>)}</div>;
}

/** Text that types itself out once, with a blinking block cursor. */
export function TypeLine({ text, className = '', speed = 28 }: { text: string; className?: string; speed?: number }) {
  const [n, setN] = useState(() => (reducedMotion() ? text.length : 0));
  useEffect(() => {
    if (n >= text.length) return;
    const t = setTimeout(() => setN(n + 1), speed);
    return () => clearTimeout(t);
  }, [n, text, speed]);
  return (
    <span className={className}>
      {text.slice(0, n)}
      <span className="ml-0.5 inline-block h-[1em] w-[0.55em] translate-y-[0.15em] animate-blink bg-accent" aria-hidden />
    </span>
  );
}

/**
 * Drifting nodes that link up when close, like a mind mapped onto a network.
 * Nodes lean toward the pointer. Stops when off-screen; static frame for reduced motion.
 */
export function NeuralField({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const css = getComputedStyle(document.documentElement);
    const cyan = css.getPropertyValue('--accent').trim().split(' ').join(',');
    const hot = css.getPropertyValue('--hot').trim().split(' ').join(',');
    let w = 0, h = 0, raf = 0, visible = true;
    const pointer = { x: -9999, y: -9999 };
    type Node = { x: number; y: number; vx: number; vy: number; hot: boolean };
    let nodes: Node[] = [];
    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(110, (w * h) / 11000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        hot: Math.random() < 0.12,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const link = 130;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy);
          if (d < link) {
            ctx.strokeStyle = `rgba(${a.hot || b.hot ? hot : cyan},${(1 - d / link) * 0.35})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const pd = Math.hypot(a.x - pointer.x, a.y - pointer.y);
        if (pd < 180) {
          ctx.strokeStyle = `rgba(${cyan},${(1 - pd / 180) * 0.5})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(pointer.x, pointer.y); ctx.stroke();
        }
        ctx.fillStyle = `rgba(${a.hot ? hot : cyan},0.9)`;
        ctx.fillRect(a.x - 1, a.y - 1, 2, 2);
      }
    };
    const step = () => {
      for (const n of nodes) {
        const dx = pointer.x - n.x, dy = pointer.y - n.y, d = Math.hypot(dx, dy);
        if (d < 200 && d > 1) { n.vx += (dx / d) * 0.012; n.vy += (dy / d) * 0.012; }
        n.vx *= 0.995; n.vy *= 0.995;
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      draw();
      if (visible) raf = requestAnimationFrame(step);
    };
    resize();
    const still = reducedMotion();
    if (still) draw(); else raf = requestAnimationFrame(step);
    const onMove = (e: PointerEvent) => { const r = canvas.getBoundingClientRect(); pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top; };
    const onLeave = () => { pointer.x = -9999; pointer.y = -9999; };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible && !still) raf = requestAnimationFrame(step);
    });
    io.observe(canvas);
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(raf); io.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, []);
  return <canvas ref={ref} className={className} aria-hidden />;
}
