import { useMemo, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Cpu, Code2, Globe, BarChart3, type LucideIcon } from 'lucide-react';
import { projects, projectFilters, type Project } from '@/data/portfolio';
import { Reveal, SectionHeading } from '@/components/Reveal';

const projectImages: Record<number, string> = {
  1: 'https://images.pexels.com/photos/7188816/pexels-photo-7188816.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  2: 'https://images.pexels.com/photos/39219347/pexels-photo-39219347.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  3: 'https://images.pexels.com/photos/7662060/pexels-photo-7662060.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  4: 'https://images.pexels.com/photos/7620626/pexels-photo-7620626.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  5: 'https://images.pexels.com/photos/21287038/pexels-photo-21287038.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

const categoryIcons: Record<Project['category'], LucideIcon> = {
  'AI / ML': Cpu,
  'Python Backend': Code2,
  'Web Applications': Globe,
  'Data Science': BarChart3,
};

export function Projects() {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>('All');

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projects" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute top-20 right-10 h-80 w-80 rounded-full bg-electric-500/10 blur-3xl" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Featured Projects"
          title={
            <>
              Real-World <span className="gradient-text">Builds</span>
            </>
          }
          subtitle="Production applications spanning AI voice agents, e-commerce platforms, automation tools, and data-driven analytics."
        />

        {/* filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === f
                  ? 'bg-electric-500 text-navy-950 shadow-glow'
                  : 'glass text-[var(--text-muted)] hover:text-electric-500'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const CatIcon = categoryIcons[project.category];
              const img = projectImages[project.id];
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={reduce ? undefined : { opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="glass group flex flex-col overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:shadow-glow-lg"
                >
                  {/* image */}
                  <div className="relative h-48 overflow-hidden sm:h-56">
                    <img
                      src={img}
                      alt={`${project.title} — ${project.subtitle}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent" />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs font-medium text-electric-500">
                      <CatIcon size={13} />
                      {project.category}
                    </div>
                    <h3 className="absolute bottom-4 left-5 right-5 text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>

                  {/* body */}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm font-medium text-electric-500">{project.subtitle}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                      {project.description}
                    </p>

                    {/* tech badges */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-[var(--border)] bg-[var(--bg-alt)] px-2.5 py-1 text-xs font-medium text-[var(--text-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* links */}
                    <div className="mt-5 flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-electric-500 px-4 py-2 text-xs font-semibold text-navy-950 transition-transform hover:scale-105"
                        >
                          <ExternalLink size={14} />
                          View Project
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg glass px-4 py-2 text-xs font-semibold text-[var(--text-muted)] transition-colors hover:text-electric-500"
                        >
                          <ArrowUpRight size={14} />
                          GitHub
                        </a>
                      )}
                      {!project.liveUrl && !project.githubUrl && (
                        <span className="text-xs text-[var(--text-muted)]">
                          Details available on request
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
