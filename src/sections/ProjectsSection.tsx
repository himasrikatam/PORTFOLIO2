import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { content, ProjectItem } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectModal } from '../components/ProjectModal';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('.project-card');
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      gsap.from(cards, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, { scope: sectionRef, dependencies: [reducedMotion] });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 bg-warm-alt border-y border-warm-border transition-colors relative"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="Featured Systems"
            title="Production-grade AI architectures & POCs"
            subtitle="Autonomous multi-agent swarms, hybrid RAG pipelines, and vision-LLM document automation."
            className="mb-0"
          />
          <div className="mt-4 md:mt-0 text-xs text-charcoal-muted uppercase tracking-widest font-medium">
            {content.projects.length} Shipped Architectures
          </div>
        </div>

        {/* 12-column grid layout for cards */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          {content.projects.map((project, idx) => {
            // First two cards are featured with wider col-span for editorial balance
            const colSpan = idx === 0 || idx === 1 ? 'lg:col-span-6' : 'lg:col-span-6';

            return (
              <div
                key={project.id}
                className={`project-card ${colSpan} flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-warm-card border border-warm-border shadow-soft editorial-card cursor-pointer group`}
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                aria-label={`View details for ${project.title}`}
              >
                <div>
                  {/* Category Pill and Action Indicator */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-blush-soft text-charcoal border border-warm-border">
                      <Sparkles className="w-3 h-3 text-blush-dark" />
                      {project.category}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-warm-border bg-warm-bg flex items-center justify-center text-charcoal group-hover:bg-charcoal group-hover:text-[#F6F0E8] group-hover:border-charcoal transition-all">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Title & Role */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal group-hover:text-blush-dark transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-charcoal-muted">
                    {project.role}
                  </p>

                  {/* Summary */}
                  <p className="mt-4 text-sm text-charcoal-muted leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Metric Chips if available */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-3 my-5 py-3 border-y border-hairline">
                      {project.metrics.map((m, mi) => (
                        <div key={mi} className="text-left">
                          <span className="font-serif text-lg font-bold text-charcoal block leading-none">
                            {m.value}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-charcoal-light font-medium">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Tags and Trigger */}
                <div className="mt-6 pt-4 border-t border-hairline flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-warm-bg border border-warm-border text-charcoal"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded-full text-xs text-charcoal-light font-medium">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-medium text-charcoal pt-1">
                    <span className="text-blush-dark group-hover:underline flex items-center gap-1">
                      View architecture & pipeline details
                    </span>
                    <span className="text-charcoal-light">&rarr;</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

