import { Briefcase, Layers, FolderGit2, Rocket } from 'lucide-react';
import { aboutParagraphs, stats } from '@/data/portfolio';
import { Reveal, SectionHeading } from '@/components/Reveal';

const statIcons = [Briefcase, Layers, FolderGit2, Rocket];

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              Engineering <span className="gradient-text">Intelligent</span> Solutions
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3" delay={0.1}>
            <div className="space-y-5 text-[var(--text-muted)] leading-relaxed">
              {aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full glass px-4 py-1.5 text-sm font-medium text-[var(--text-muted)]">
                📍 Tenkasi, Tamil Nadu, India
              </span>
              <span className="rounded-full glass px-4 py-1.5 text-sm font-medium text-[var(--text-muted)]">
                💼 3+ Years Experience
              </span>
              <span className="rounded-full glass px-4 py-1.5 text-sm font-medium text-[var(--text-muted)]">
                ⚡ Available for opportunities
              </span>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const Icon = statIcons[i % statIcons.length];
                return (
                  <div
                    key={stat.label}
                    className="glass group rounded-2xl p-6 text-center transition-transform hover:-translate-y-1"
                  >
                    <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-xl bg-electric-500/10 text-electric-500 transition-transform group-hover:scale-110">
                      <Icon size={22} />
                    </div>
                    <div className="text-2xl font-bold text-[var(--text)] sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-[var(--text-muted)]">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
