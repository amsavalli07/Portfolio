import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { navLinks, personal } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';
import logo from '@/assets/logo.png';

type Props = {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
};

export function Navbar({ theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const active = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between md:h-20">
        <button
          onClick={() => go('home')}
          className="inline-flex items-center"
          aria-label="Home"
        >
          <img src={logo} alt={personal.name} className="h-12 w-[4.5rem] object-contain" />
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                active === link.id
                  ? 'text-electric-500'
                  : 'text-[var(--text-muted)] hover:text-[var(--text)]'
              }`}
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-electric-500"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* <button
            onClick={onToggleTheme}
            className="grid h-10 w-10 place-items-center rounded-lg glass transition-colors hover:text-electric-500"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button> */}

          <a
            href={personal.resumePath}
            download
            className="hidden items-center gap-2 rounded-lg bg-electric-500 px-4 py-2.5 text-sm font-semibold text-navy-950 shadow-glow transition-transform hover:scale-105 sm:flex"
          >
            <Download size={16} />
            Resume
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-lg glass lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden glass border-t border-[var(--border)] lg:hidden"
          >
            <div className="section-shell flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => go(link.id)}
                  className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                    active === link.id
                      ? 'bg-electric-500/10 text-electric-500'
                      : 'text-[var(--text-muted)] hover:bg-[var(--border)]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={personal.resumePath}
                download
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-electric-500 px-4 py-3 text-sm font-semibold text-navy-950"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
