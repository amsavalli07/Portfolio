import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { experience } from '@/data/portfolio';
import { Reveal, SectionHeading } from '@/components/Reveal';

export function Experience() {
  const reduce = useReducedMotion();
  return (
    <section id="experience" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/3 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Professional Experience"
          title={
            <>
              My <span className="gradient-text">Career Journey</span>
            </>
          }
        />

        <div className="relative mx-auto max-w-3xl">
          {/* vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-electric-500/60 via-electric-500/30 to-transparent sm:left-1/2" />

          {experience.map((job, idx) => (
            <Reveal key={job.position + job.company} delay={idx * 0.1}>
              <div className="relative mb-10 pl-12 sm:pl-0">
                {/* dot */}
                <div className="absolute left-4 top-3 z-10 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-electric-500 ring-4 ring-electric-500/20 sm:left-1/2" />

                <div className={`sm:w-1/2 ${idx % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:ml-auto sm:pl-10'}`}>
                  <motion.div
                    initial={reduce ? undefined : { opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6 }}
                    className="glass rounded-2xl p-6"
                  >
                    <div className={`flex items-center gap-2 ${idx % 2 === 0 ? 'sm:justify-end' : ''}`}>
                      <div className="grid h-9 w-9 place-items-center rounded-lg bg-electric-500/10 text-electric-500">
                        <Briefcase size={18} />
                      </div>
                      <h3 className="font-semibold text-[var(--text)]">{job.position}</h3>
                    </div>
                    <div className={`mt-2 text-electric-500 font-medium ${idx % 2 === 0 ? 'sm:text-right' : ''}`}>
                      {job.company}
                    </div>
                    <div className={`mt-1 inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] ${idx % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                      <Calendar size={13} />
                      {job.duration}
                    </div>
                    <ul className={`mt-4 space-y-2.5 text-sm text-[var(--text-muted)] ${idx % 2 === 0 ? 'sm:text-right' : ''}`}>
                      {job.points.map((point, pi) => (
                        <li key={pi} className={`flex gap-2 ${idx % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                          <ChevronRight size={15} className="mt-0.5 shrink-0 text-electric-500/60" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
