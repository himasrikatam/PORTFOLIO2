import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Mail, Linkedin, Github, Send, Copy, Check, ArrowUpRight, MapPin } from 'lucide-react';
import { content } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const reducedMotion = useReducedMotion();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(content.personal.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      subject || `Inquiry from ${name || 'Portfolio Visitor'}`
    );
    const bodyContent = `Hi Himasri,\n\nName: ${name}\n\nMessage:\n${message}\n\n`;
    const mailtoUrl = `mailto:${content.personal.socials.email}?subject=${mailtoSubject}&body=${encodeURIComponent(
      bodyContent
    )}`;
    window.location.href = mailtoUrl;
  };

  useGSAP(() => {
    if (reducedMotion || !formCardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(formCardRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formCardRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, { scope: sectionRef, dependencies: [reducedMotion] });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 bg-warm-bg relative overflow-hidden"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Initiate Conversation"
          title="Let's build something intelligent together"
          subtitle="Open to full-time engineering roles, high-impact enterprise AI contracts, and technical advisory."
        />

        <div
          ref={formCardRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Direct channels & Quick Connect */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-warm-card border border-warm-border shadow-soft editorial-card flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-charcoal font-semibold mb-2 block">
                Direct Channels
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal mb-4">
                Reach out directly
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed mb-8">
                Whether you have an upcoming multi-agent project, need a robust RAG architecture for complex domain data, or want to discuss AI engineering opportunities, my inbox is open.
              </p>

              {/* Email Box with One-Click Copy */}
              <div className="p-4 rounded-2xl bg-warm-bg border border-warm-border mb-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-xl bg-blush-soft text-charcoal">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] text-charcoal-light uppercase tracking-wider font-semibold">
                        Primary Email
                      </div>
                      <a
                        href={`mailto:${content.personal.socials.email}`}
                        className="text-sm font-medium text-charcoal hover:underline truncate block"
                      >
                        {content.personal.socials.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl border border-warm-border bg-warm-card hover:bg-blush-soft text-charcoal transition-colors flex-shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-charcoal-muted" />
                    )}
                  </button>
                </div>
                {copied && (
                  <p className="text-[11px] text-emerald-700 mt-2 font-medium">
                    ✓ Email address copied to clipboard!
                  </p>
                )}
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <a
                  href={content.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-warm-bg border border-warm-border hover:bg-blush-soft/50 hover:border-blush transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blush-soft text-charcoal">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-charcoal">LinkedIn</div>
                      <div className="text-xs text-charcoal-muted">Professional updates & networking</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-charcoal-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={content.personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-warm-bg border border-warm-border hover:bg-blush-soft/50 hover:border-blush transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blush-soft text-charcoal">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-charcoal">GitHub</div>
                      <div className="text-xs text-charcoal-muted">Open source contributions & repositories</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-charcoal-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-hairline flex items-center gap-2 text-xs text-charcoal-muted">
              <MapPin className="w-3.5 h-3.5 text-blush-dark" />
              <span>Based in Hyderabad, Telangana, India &bull; IST (UTC+5:30)</span>
            </div>
          </div>

          {/* Interactive Mailto Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-warm-card border border-warm-border shadow-soft editorial-card">
            <span className="text-xs uppercase tracking-widest text-charcoal font-semibold mb-2 block">
              Send a Message
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal mb-2">
              Start a project discussion
            </h3>
            <p className="text-xs text-charcoal-muted mb-6">
              Fills in a pre-formatted message in your default email client ready to send.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider text-charcoal font-semibold mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-warm-bg border border-warm-border text-charcoal placeholder-charcoal-light text-sm focus:outline-none focus:ring-1 focus:ring-blush focus:border-blush transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-xs uppercase tracking-wider text-charcoal font-semibold mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Agentic AI Role / Project"
                    className="w-full px-4 py-2.5 rounded-xl bg-warm-bg border border-warm-border text-charcoal placeholder-charcoal-light text-sm focus:outline-none focus:ring-1 focus:ring-blush focus:border-blush transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider text-charcoal font-semibold mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project, goals, or role..."
                  className="w-full px-4 py-3 rounded-xl bg-warm-bg border border-warm-border text-charcoal placeholder-charcoal-light text-sm focus:outline-none focus:ring-1 focus:ring-blush focus:border-blush transition-colors resize-y"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-medium bg-charcoal text-[#F6F0E8] hover:bg-[#433A37] transition-all shadow-soft hover:shadow-soft-lg"
                >
                  <span>Open in Mail Client</span>
                  <Send className="w-4 h-4 text-blush" />
                </button>
                <span className="text-[11px] text-charcoal-muted text-center sm:text-right">
                  Privacy guaranteed &bull; Direct mailto connection
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

