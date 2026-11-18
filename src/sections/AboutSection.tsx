import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { GraduationCap, Award, Compass, ShieldCheck, Zap, Network } from 'lucide-react';
import { content } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current?.children || [], {
        opacity: 0,
        y: 35,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, { scope: sectionRef, dependencies: [reducedMotion] });

  const philosophies = [
    {
      icon: <Network className="w-5 h-5 text-blush-dark" />,
      title: "Agentic Systems over Rigid Chains",
      desc: "Architecting stateful, dynamic supervisor-worker topologies in LangGraph that can recover from errors, self-correct, and reason through branching tool workflows."
    },
    {
      icon: <Zap className="w-5 h-5 text-blush-dark" />,
      title: "High-Precision Hybrid Retrieval",
      desc: "Going beyond naive cosine similarity: combining Reciprocal Rank Fusion, BM25 keyword matching, cross-encoder re-ranking, and semantic chunking to guarantee grounded accuracy."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blush-dark" />,
      title: "Governance, Auditability & Tracing",
      desc: "Embedding zero-trust policy enforcement (OPA), prompt-injection guardrails, and granular Langfuse telemetry from day one so enterprise clients can safely audit AI actions."
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-warm-alt border-y border-warm-border transition-colors"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Profile & Background"
          title="Bridging research models and enterprise-grade software"
          subtitle="How I think about engineering autonomous AI systems and shipping production products."
        />

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-warm-card border border-warm-border shadow-soft editorial-card">
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium mb-5">
                Engineering with ownership & domain depth
              </h3>
              <div className="space-y-4 text-charcoal-muted leading-relaxed text-base sm:text-lg">
                {content.personal.bioParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-warm-border flex flex-wrap items-center gap-4 text-xs font-medium text-charcoal">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-soft border border-warm-border">
                  <Compass className="w-3.5 h-3.5 text-blush-dark" />
                  Full-Lifecycle Ownership
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-soft border border-warm-border">
                  <ShieldCheck className="w-3.5 h-3.5 text-blush-dark" />
                  Zero-Trust AI Guardrails
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-soft border border-warm-border">
                  <GraduationCap className="w-3.5 h-3.5 text-blush-dark" />
                  ICFAI Tech Alum
                </span>
              </div>
            </div>

            {/* Core Philosophies list */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-charcoal font-semibold px-2">
                Engineering Principles
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {philosophies.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-warm-card/80 border border-warm-border shadow-soft editorial-card"
                  >
                    <div className="p-2 w-fit rounded-xl bg-blush-soft mb-3">
                      {item.icon}
                    </div>
                    <h5 className="font-serif text-base font-semibold text-charcoal mb-2 leading-snug">
                      {item.title}
                    </h5>
                    <p className="text-xs text-charcoal-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Quick Facts Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="p-8 rounded-3xl bg-warm-card border border-warm-border shadow-soft editorial-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-blush-soft border border-warm-border">
                  <GraduationCap className="w-6 h-6 text-charcoal" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-charcoal-muted font-medium">
                    Education
                  </span>
                  <h4 className="font-serif text-xl font-medium text-charcoal">
                    {content.personal.education.degree}
                  </h4>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-warm-border text-sm">
                <div className="flex justify-between items-center py-1">
                  <span className="text-charcoal-muted">Institution</span>
                  <span className="font-medium text-charcoal text-right">
                    {content.personal.education.institution}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-charcoal-muted">Academic Merit</span>
                  <span className="inline-flex items-center gap-1 font-serif text-charcoal font-semibold bg-blush-soft px-2.5 py-0.5 rounded-full text-xs">
                    CGPA {content.personal.education.cgpa}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-charcoal-muted">Period</span>
                  <span className="text-charcoal font-medium">
                    {content.personal.education.period}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-charcoal-muted">Location</span>
                  <span className="text-charcoal font-medium">
                    {content.personal.education.location}
                  </span>
                </div>
              </div>

              <div className="mt-5 p-3.5 rounded-2xl bg-blush-soft/50 border border-warm-border flex items-start gap-2.5">
                <Award className="w-4 h-4 text-blush-dark mt-0.5 flex-shrink-0" />
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  <strong className="text-charcoal font-semibold">Hackathon Recognition:</strong> {content.personal.education.note} for RailMadad complaint triage.
                </p>
              </div>
            </div>

            {/* Stakeholder & Delivery Approach Card */}
            <div className="p-8 rounded-3xl bg-[#FBF8F3] border border-warm-border shadow-soft editorial-card">
              <h4 className="font-serif text-xl font-medium text-charcoal mb-3">
                Working with Stakeholders
              </h4>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Whether defining tax categorization thresholds with finance teams, mapping human-in-the-loop validation checkpoints with operations leads, or aligning HR data confidentiality with enterprise compliance officers, I translate domain constraints directly into reliable software architectures.
              </p>

              <div className="mt-6 pt-5 border-t border-warm-border grid grid-cols-2 gap-4 text-center">
                <div className="p-3 rounded-2xl bg-warm-bg border border-warm-border">
                  <div className="font-serif text-xl font-bold text-charcoal">Rapid POCs</div>
                  <div className="text-[11px] text-charcoal-muted uppercase mt-0.5">Whiteboard to Working MVP</div>
                </div>
                <div className="p-3 rounded-2xl bg-warm-bg border border-warm-border">
                  <div className="font-serif text-xl font-bold text-charcoal">Clean Code</div>
                  <div className="text-[11px] text-charcoal-muted uppercase mt-0.5">Typed, Tested & Governed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

