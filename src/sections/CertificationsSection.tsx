import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Award, Trophy, CheckCircle, ExternalLink, ArrowUpRight } from 'lucide-react';
import { content, CertificationItem } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export const CertificationsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.cert-card');
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      gsap.from(cards, {
        opacity: 0,
        y: 35,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, { scope: sectionRef, dependencies: [reducedMotion] });

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-24 md:py-32 bg-warm-alt border-y border-warm-border transition-colors relative"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Credentials & Honors"
          title="Certifications & Hackathon Achievements"
          subtitle="Continuous learning, professional verification, and competitive problem-solving in production AI architectures."
        />

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {content.certifications.map((item: CertificationItem, idx: number) => {
            const isWinner = item.type === 'achievement';

            return (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open certification: ${item.title}`}
                className="cert-card p-6 sm:p-8 rounded-3xl bg-warm-card border border-warm-border shadow-soft editorial-card flex flex-col justify-between group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="p-3 rounded-2xl bg-blush-soft border border-warm-border group-hover:scale-105 transition-transform">
                      {isWinner ? (
                        <Trophy className="w-6 h-6 text-charcoal" />
                      ) : (
                        <Award className="w-6 h-6 text-charcoal" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {item.highlight && (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-blush-soft text-charcoal border border-warm-border">
                          {item.highlight}
                        </span>
                      )}
                      <div className="w-8 h-8 rounded-full border border-warm-border bg-warm-bg flex items-center justify-center text-charcoal-muted group-hover:bg-charcoal group-hover:text-[#F6F0E8] group-hover:border-charcoal transition-all">
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal leading-snug mb-2 group-hover:text-blush-dark transition-colors">
                    {item.title}
                  </h3>

                  {/* Issuer & Year */}
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-4">
                    <span>{item.issuer}</span>
                    {item.year && (
                      <>
                        <span>&bull;</span>
                        <span>{item.year}</span>
                      </>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-charcoal-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Verification Link */}
                <div className="mt-6 pt-4 border-t border-hairline flex items-center justify-between text-xs text-charcoal-muted">
                  <span className="inline-flex items-center gap-1.5 font-medium text-charcoal group-hover:text-blush-dark transition-colors">
                    <CheckCircle className="w-3.5 h-3.5 text-blush-dark" />
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3 h-3 text-charcoal-light group-hover:text-blush-dark" />
                  </span>
                  <span className="font-mono text-[11px] text-charcoal-light">
                    {item.year || '2024'}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
