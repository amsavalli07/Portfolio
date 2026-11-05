import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personal, navLinks } from '@/data/portfolio';

export function Footer() {
  const reduce = useReducedMotion();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });

  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--bg-alt)]">
      <div className="section-shell py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <button
              onClick={() => go('home')}
              className="font-display text-xl font-bold gradient-text"
            >
              {personal.name}
            </button>
            <p className="mt-3 max-w-xs text-sm text-[var(--text-muted)]">
              {personal.headline}
            </p>
            <div className="mt-4 flex gap-3">
              {[
                { href: personal.github, icon: Github, label: 'GitHub' },
                { href: personal.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${personal.email}`, icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-lg glass text-[var(--text-muted)] transition-all hover:-translate-y-0.5 hover:text-electric-500"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--text)]">
              Navigation
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => go(link.id)}
                    className="text-sm text-[var(--text-muted)] transition-colors hover:text-electric-500"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--text)]">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
              <li>
                <a href={`mailto:${personal.email}`} className="hover:text-electric-500">
                  {personal.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personal.phone}`} className="hover:text-electric-500">
                  {personal.phone}
                </a>
              </li>
              <li>{personal.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--border)] pt-6 text-center text-sm text-[var(--text-muted)]">
          © 2026 {personal.name}. All Rights Reserved.
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() =>
              window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
            }
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-electric-500 text-navy-950 shadow-glow transition-transform hover:scale-110"
          >
            <ArrowUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
