import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Heading fade-up
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Animated slow line draw in blush pink
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0, transformOrigin: align === 'center' ? 'center' : 'left' },
          {
            scaleX: 1,
            duration: 1.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef, dependencies: [reducedMotion, align] });

  return (
    <div
      ref={containerRef}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full text-xs font-medium tracking-wider uppercase bg-blush-soft/60 text-charcoal border border-warm-border">
          <span className="w-1.5 h-1.5 rounded-full bg-blush-deep inline-block" />
          {eyebrow}
        </div>
      )}

      <div className={`relative inline-block ${align === 'center' ? 'mx-auto' : ''}`}>
        <h2
          ref={titleRef}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal tracking-tight leading-tight"
        >
          {title}
        </h2>
        <div
          ref={lineRef}
          className={`h-[2px] bg-blush rounded-full mt-3 ${
            align === 'center' ? 'w-24 mx-auto' : 'w-20'
          }`}
        />
      </div>

      {subtitle && (
        <p className={`mt-4 text-charcoal-muted text-base sm:text-lg max-w-2xl leading-relaxed ${
          align === 'center' ? 'mx-auto' : ''
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

