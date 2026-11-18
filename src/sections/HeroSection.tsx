import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowDown, ArrowUpRight, FileText, MapPin, Eye } from 'lucide-react';
import { content } from '../data/content';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface HeroSectionProps {
  onNavigate?: (id: string) => void;
  onOpenResume?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenResume }) => {
  const containerRef = useRef<HTMLElement>(null);
  const headlineWordsRef = useRef<HTMLSpanElement[]>([]);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const headlineLines = [
    "I build full-stack GenAI products:",
    "RAG pipelines, multi-agent workflows,",
    "and the interfaces around them."
  ];

  useGSAP(() => {
    if (reducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 0.35,
        defaults: { ease: 'power3.out' }
      });

      if (badgesRef.current) {
        tl.from(badgesRef.current, {
          opacity: 0,
          y: -15,
          duration: 0.7,
        });
      }

      const words = headlineWordsRef.current.filter(Boolean);
      if (words.length > 0) {
        tl.fromTo(
          words,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
          },
          '-=0.4'
        );
      }

      if (subtitleRef.current) {
        tl.from(subtitleRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.7,
        }, '-=0.4');
      }

      if (ctaRef.current) {
        tl.from(ctaRef.current.children, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.1,
        }, '-=0.4');
      }
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef, dependencies: [reducedMotion] });

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      const navOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 md:py-36 overflow-hidden"
    >
      <div
        className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-blush-soft/40 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-[#EFE6DA]/70 blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Availability & Location Badges */}
        <div ref={badgesRef} className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide bg-blush-soft/70 border border-warm-border text-charcoal">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blush-deep opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blush-deep" />
            </span>
            <span>{content.personal.title}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide bg-warm-card border border-warm-border text-charcoal-muted">
            <MapPin className="w-3 h-3 text-blush-dark" />
            <span>{content.personal.location}</span>
          </div>
        </div>

        {/* Name presentation */}
        <div className="mb-4">
          <h1 className="font-sans text-xs uppercase tracking-widest text-charcoal-muted font-semibold">
            {content.personal.fullName}
          </h1>
        </div>

        {/* Editorial Headline with masked line reveal */}
        <div className="max-w-4xl mb-8">
          <div className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-normal text-charcoal leading-[1.15] tracking-tight">
            {headlineLines.map((line, idx) => (
              <span key={idx} className="block overflow-hidden py-1">
                <span
                  ref={(el) => {
                    if (el) headlineWordsRef.current[idx] = el;
                  }}
                  className="block will-change-transform"
                >
                  {line}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-base sm:text-lg md:text-xl text-charcoal-muted max-w-2xl font-sans leading-relaxed mb-10"
        >
          {content.personal.subheadline}
        </p>

        {/* Action Buttons */}
        <div ref={ctaRef} className="flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, 'projects')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-charcoal text-[#F6F0E8] hover:bg-[#433A37] transition-all shadow-soft hover:shadow-soft-lg group"
          >
            <span>View work</span>
            <ArrowDown className="w-4 h-4 text-blush group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-warm-border text-charcoal bg-warm-card hover:bg-blush-soft/50 hover:border-blush transition-all shadow-soft"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-4 h-4 text-charcoal-muted" />
          </a>

          {/* View Full Resume Modal Button */}
          <button
            onClick={() => onOpenResume?.()}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border border-warm-border text-charcoal bg-blush-soft/30 hover:bg-blush-soft/70 hover:border-blush transition-colors shadow-soft"
          >
            <Eye className="w-4 h-4 text-charcoal" />
            <span>View full resume</span>
          </button>

          {/* Download Resume Direct Link */}
          <a
            href={content.personal.socials.resumeUrl}
            download="Himasri_Reddy_Katamareddy_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-xs font-medium text-charcoal-muted hover:text-charcoal transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-blush-dark" />
            <span>Download PDF</span>
          </a>
        </div>

        {/* Highlights Strip */}
        <div className="mt-16 pt-8 border-t border-hairline grid grid-cols-2 md:grid-cols-4 gap-6">
          {content.personal.keyStats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="font-serif text-2xl sm:text-3xl font-medium text-charcoal">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-charcoal font-semibold">
                {stat.label}
              </div>
              <p className="text-[11px] text-charcoal-muted hidden sm:block">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
