import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Bot, Server, Layout, Database, Cloud, ShieldCheck } from 'lucide-react';
import { content, SkillGroup } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'GenAI and Agents':
        return <Bot className="w-5 h-5 text-blush-dark" />;
      case 'Backend & Systems':
        return <Server className="w-5 h-5 text-blush-dark" />;
      case 'Frontend & UI':
        return <Layout className="w-5 h-5 text-blush-dark" />;
      case 'Data & Vector Stores':
        return <Database className="w-5 h-5 text-blush-dark" />;
      case 'Cloud & DevOps':
        return <Cloud className="w-5 h-5 text-blush-dark" />;
      case 'Observability & Governance':
        return <ShieldCheck className="w-5 h-5 text-blush-dark" />;
      default:
        return <Bot className="w-5 h-5 text-blush-dark" />;
    }
  };

  useGSAP(() => {
    if (reducedMotion || !containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('.skill-card');
    const tags = containerRef.current.querySelectorAll('.skill-pill');

    const ctx = gsap.context(() => {
      // Cards entrance
      gsap.from(cards, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Tags staggered micro-entrance
      gsap.from(tags, {
        opacity: 0,
        scale: 0.92,
        duration: 0.5,
        stagger: 0.02,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, { scope: sectionRef, dependencies: [reducedMotion] });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 md:py-32 bg-warm-bg relative overflow-hidden"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Capabilities"
          title="Tools & technologies I build with"
          subtitle="Specialized in the modern GenAI stack, backed by robust asynchronous backend services and clean frontend interfaces."
        />

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {content.skillGroups.map((group: SkillGroup) => (
            <div
              key={group.category}
              className="skill-card p-6 sm:p-8 rounded-3xl bg-warm-card border border-warm-border shadow-soft editorial-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-2xl bg-blush-soft border border-warm-border">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="font-serif text-xl font-medium text-charcoal">
                    {group.category}
                  </h3>
                </div>
                <p className="text-xs text-charcoal-muted leading-relaxed mb-6">
                  {group.description}
                </p>
              </div>

              {/* Grouped Pill Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-hairline">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill px-3 py-1.5 rounded-full text-xs font-medium bg-warm-bg border border-warm-border text-charcoal hover:bg-blush-soft hover:border-blush transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

