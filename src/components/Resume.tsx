import { Download, Eye, FileText } from 'lucide-react';
import { personal } from '@/data/portfolio';
import { Reveal } from '@/components/Reveal';

export function Resume() {
  return (
    <section id="resume" className="section-pad">
      <div className="section-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-electric-500/20 blur-3xl" />
            </div>

            <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-electric-500/10 text-electric-500">
              <FileText size={30} />
            </div>

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-balance">
              Want to Know More About <span className="gradient-text">My Experience?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--text-muted)] text-balance">
              Explore my professional background, technical skills, experience, and projects in detail.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={personal.resumePath}
                download
                className="inline-flex items-center gap-2 rounded-lg bg-electric-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-glow transition-transform hover:scale-105"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href={personal.resumePath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg glass px-6 py-3 text-sm font-semibold transition-colors hover:text-electric-500"
              >
                <Eye size={18} />
                View Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
