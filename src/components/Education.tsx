import { GraduationCap, MapPin, Award, Calendar } from 'lucide-react';
import { education } from '@/data/portfolio';
import { Reveal, SectionHeading } from '@/components/Reveal';

export function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              Academic <span className="gradient-text">Background</span>
            </>
          }
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-electric-500/60 via-electric-500/30 to-transparent" />

          {education.map((edu, idx) => (
            <Reveal key={edu.degree} delay={idx * 0.1}>
              <div className="relative mb-8 pl-12 last:mb-0">
                <div className="absolute left-4 top-3 z-10 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-electric-500 ring-4 ring-electric-500/20" />
                <div className="glass rounded-2xl p-6 transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-3">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-electric-500/10 text-electric-500">
                      <GraduationCap size={22} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[var(--text)]">{edu.degree}</h3>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
                        <MapPin size={14} className="text-electric-500/60" />
                        {edu.institution}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-alt)] px-3 py-1 text-xs text-[var(--text-muted)]">
                          <Calendar size={13} className="text-electric-500/60" />
                          {edu.year}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-alt)] px-3 py-1 text-xs text-[var(--text-muted)]">
                          <Award size={13} className="text-electric-500/60" />
                          CGPA: {edu.cgpa}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
