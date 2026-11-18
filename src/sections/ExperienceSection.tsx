import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { content } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !timelineRef.current) return;

    const items = timelineRef.current.querySelectorAll('.timeline-item');
    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.from(items, {
        opacity: 0,
        y: 40,
        duration: 0.85,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, { scope: sectionRef, dependencies: [reducedMotion] });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 md:py-32 bg-warm-bg relative overflow-hidden"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career Timeline"
          title="Where I've built and engineered"
          subtitle="A track record of stepping into complex problem spaces and delivering resilient software systems."
        />

        <div ref={timelineRef} className="relative mt-12 space-y-8 sm:space-y-12">
          {/* Subtle vertical spine line for timeline on desktop */}
          <div
            className="hidden md:block absolute left-8 top-6 bottom-6 w-[2px] bg-warm-border pointer-events-none"
            aria-hidden="true"
          />

          {content.experiences.map((exp) => (
            <div
              key={exp.id}
              className="timeline-item relative md:pl-20 group"
            >
              {/* Timeline marker node */}
              <div
                className="hidden md:flex absolute left-6 top-8 -translate-x-1/2 w-5 h-5 rounded-full bg-warm-bg border-2 border-blush items-center justify-center group-hover:scale-125 group-hover:bg-blush transition-all duration-300 z-10 shadow-sm"
                aria-hidden="true"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-charcoal" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-warm-card border border-warm-border shadow-soft editorial-card relative">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-warm-border">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide bg-blush-soft text-charcoal border border-warm-border">
                          Present
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-charcoal-muted">
                      <span className="font-medium text-charcoal flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-blush-dark" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-blush-dark" />
                        {exp.location}
                      </span>
                      <span className="text-xs uppercase tracking-wider text-charcoal-light font-medium">
                        &bull; {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-charcoal bg-warm-bg border border-warm-border self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-blush-dark" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description & Highlights */}
                <div className="py-6 space-y-4">
                  <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-2.5">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-charcoal-muted leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-blush-deep mt-2 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-hairline flex flex-wrap items-center gap-2">
                  <span className="text-xs uppercase font-medium tracking-wider text-charcoal-muted mr-1">
                    Stack:
                  </span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-warm-bg border border-warm-border text-charcoal hover:bg-blush-soft/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

