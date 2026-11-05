import {
  Code2,
  Server,
  BarChart3,
  Brain,
  Network,
  Eye,
  Sparkles,
  Database,
  Cloud,
  type LucideIcon,
} from 'lucide-react';
import { skillCategories } from '@/data/portfolio';
import { Reveal, SectionHeading } from '@/components/Reveal';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Server,
  BarChart3,
  Brain,
  Network,
  Eye,
  Sparkles,
  Database,
  Cloud,
};

export function Skills() {
  return (
    <section id="skills" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-electric-500/10 blur-3xl" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Technical Skills"
          title={
            <>
              Tools That Power <span className="gradient-text">My Work</span>
            </>
          }
          subtitle="A full-spectrum toolkit spanning backend engineering, data science, machine learning, and AI integration."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Sparkles;
            return (
              <Reveal key={cat.title} delay={(i % 3) * 0.08}>
                <div className="glass h-full rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-glow">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-electric-500/10 text-electric-500">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-semibold text-[var(--text)]">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-[var(--border)] bg-[var(--bg-alt)] px-3 py-1.5 text-xs font-medium text-[var(--text-muted)] transition-colors hover:border-electric-500/40 hover:text-electric-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
