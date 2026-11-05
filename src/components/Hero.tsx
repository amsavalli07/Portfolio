import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, FolderOpen } from 'lucide-react';
import { personal, roles, heroBadges } from '@/data/portfolio';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import portraitCutout from '@/assets/Good.png';
import portraitWithBackdrop from '@/assets/Futuristic Neon Portrait on Marble Platform.png';
import pythonLogo from '@/assets/python.png';
import FastAPILogo from '@/assets/Fastapi.jpeg';
import PytorchLogo from '@/assets/pytorch.jpeg';
import TensorFlowLogo from '@/assets/tensorflow.jpeg';
import AiLogo from '@/assets/ai.jpeg';
import MlLogo from '@/assets/ml.jpeg';
import DevOpsLogo from '@/assets/devops.jpeg';

function useTypewriter(words: string[], speed = 90, pause = 1600) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    const current = words[index % words.length];

    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1),
          );
        },
        deleting ? speed / 2 : speed,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

export function Hero({ theme }: { theme: 'dark' | 'light' }) {
  const reduce = useReducedMotion();
  const progress = useScrollProgress();
  const typed = useTypewriter(roles);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });

  const badgeIcons: Record<string, { from: string; to: string; angle: number }> = {
    Python: { from: 'top-2 -left-1', to: 'animate-float', angle: 0 },
    ML: { from: 'top-24 -right-8', to: 'animate-float', angle: 0 },
    DevOps: { from: 'bottom-32 -left-10', to: 'animate-float', angle: 0 },
    // ML: { from: 'bottom-10 -right-6', to: 'animate-float', angle: 0 },
    PyTorch: { from: 'bottom-20 -right-6', to: 'animate-float', angle: 0 },
    TensorFlow: { from: 'top-1/2 -right-12', to: 'animate-float', angle: 0 },
    // PyTorch: { from: 'top-12 left-1/2', to: 'animate-float', angle: 0 },
    FastAPI: { from: '-top-8 left-1/2 -translate-x-1/2', to: 'animate-float', angle: 0 },
    AI: { from: 'bottom-1/2 -left-12', to: 'animate-float', angle: 0 },
  };

  return (
    <section id="home" className="relative grid-bg overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-20 h-96 w-96 rounded-full bg-electric-500/20 blur-3xl animate-pulse-slow" />
        <div className="absolute top-40 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/15 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl animate-pulse-slow" />
      </div>

      <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
        {/* Left */}
        <div className="text-center lg:text-left">
          <motion.span
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow justify-center lg:justify-start"
          >
            {/* <Sparkles size={14} /> */}
            HELLO, I'M
          </motion.span>

          <motion.h1
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          >
            <span className="gradient-text">{personal.name}</span>
          </motion.h1>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-xl font-semibold text-[var(--text)] sm:text-2xl"
          >
            <span className="text-electric-500">{typed}</span>
            <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-electric-500 align-middle" />
          </motion.div>

          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 max-w-xl text-[var(--text-muted)] text-balance lg:mx-0"
          >
            Building scalable backend systems, intelligent machine learning solutions, and
            AI-powered applications that solve real-world problems.
          </motion.p>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="group inline-flex items-center gap-2 rounded-lg bg-electric-500 px-5 py-3 text-sm font-semibold text-navy-950 shadow-glow transition-transform hover:scale-105"
            >
              <FolderOpen size={18} />
              View My Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            {/* <a
              href={personal.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-lg glass px-5 py-3 text-sm font-semibold transition-colors hover:text-electric-500"
            >
              <Download size={18} />
              Download Resume
            </a> */} 
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 rounded-lg border border-electric-500/40 px-5 py-3 text-sm font-semibold text-electric-500 transition-colors hover:bg-electric-500/10"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center justify-center gap-4 lg:justify-start"
          >
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
                className="grid h-11 w-11 place-items-center rounded-lg glass text-[var(--text-muted)] transition-all hover:-translate-y-0.5 hover:text-electric-500"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — visual */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.9 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg"
        >
          <div className="absolute inset-0 grid place-items-center">
            <div
              className={`absolute bottom-[13%] aspect-square rounded-full ${
                theme === 'dark'
                  ? 'h-[62%] bg-electric-500 shadow-[0_0_90px_rgba(255,212,0,0.32)]'
                  : 'h-[58%] bg-electric-500/15 blur-sm'
              }`}
            />
            <div className="absolute inset-8 rounded-full border border-electric-500/35 animate-pulse-slow" />
            <div className="absolute inset-16 rounded-full border border-electric-500/20" />
            {theme === 'dark' && (
              <div className="absolute bottom-0 left-[8%] right-[8%] h-[11%] rounded-t-sm border-t-4 border-electric-500 bg-gradient-to-b from-navy-800 to-navy-950 shadow-[0_-8px_32px_rgba(255,212,0,0.24)]" />
            )}
            <img
              src={theme === 'dark' ? portraitWithBackdrop : portraitCutout}
              alt={`${personal.name} portrait`}
              className="absolute bottom-0 z-[1] h-[98%] max-w-none object-contain object-bottom drop-shadow-[0_12px_28px_rgba(0,0,0,0.5)]"
            />
          </div>

          {/* floating tech badges */}
          {!reduce &&
            heroBadges.map((badge, i) => {
              const pos = badgeIcons[badge];
              return (
                <motion.div
                  key={badge}
                  className={`absolute ${pos.from} z-10`}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4 + i * 0.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.3,
                  }}
                >
                  <span className="inline-flex items-center gap-2 rounded-lg glass px-3 py-1.5 text-xs font-semibold text-electric-500 shadow-glow">
                    {badge === 'Python' && (
                      <img src={pythonLogo} alt="" aria-hidden="true" className="h-4 w-4" />
                    )}
                    {badge === 'FastAPI' && (
                      <img src={FastAPILogo} alt="" aria-hidden="true" className="h-4 w-4" />
                    )}
                    {badge === 'PyTorch' && (
                      <img src={PytorchLogo} alt="" aria-hidden="true" className="h-4 w-4" />
                    )}  
                    {badge === 'TensorFlow' && (
                      <img src={TensorFlowLogo} alt="" aria-hidden="true" className="h-4 w-4" />
                    )}   
                    {badge === 'AI' && (
                      <img src={AiLogo} alt="" aria-hidden="true" className="h-4 w-4" />
                    )}
                    {badge === 'ML' && (
                      <img src={MlLogo} alt="" aria-hidden="true" className="h-4 w-4" />
                    )}
                    {badge === 'DevOps' && (
                      <img src={DevOpsLogo} alt="" aria-hidden="true" className="h-4 w-4" />
                    )}
                    {badge}
                  </span>                  
                </motion.div>
              );
            })}
        </motion.div>
      </div>

      {/* scroll progress indicator */}
      <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-electric-500 to-cyan-400 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  );
}
