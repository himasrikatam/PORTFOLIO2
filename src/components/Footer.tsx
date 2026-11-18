import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { content } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-warm-alt border-t border-warm-border pt-16 pb-12 transition-colors">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-warm-border">
          {/* Brand info */}
          <div className="md:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-blush-soft border border-warm-border flex items-center justify-center font-serif text-sm font-semibold text-charcoal">
                HK
              </span>
              <span className="font-serif text-xl font-medium text-charcoal">
                {content.personal.fullName}
              </span>
            </div>
            <p className="text-charcoal-muted text-sm max-w-md leading-relaxed">
              Software Engineer specializing in Agentic AI, autonomous multi-agent reasoning, enterprise hybrid RAG, and production full-stack systems. Based in Hyderabad, India.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={content.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="w-9 h-9 rounded-full bg-warm-bg border border-warm-border flex items-center justify-center text-charcoal hover:bg-blush-soft hover:border-blush transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={content.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-9 h-9 rounded-full bg-warm-bg border border-warm-border flex items-center justify-center text-charcoal hover:bg-blush-soft hover:border-blush transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${content.personal.socials.email}`}
                aria-label="Send email"
                className="w-9 h-9 rounded-full bg-warm-bg border border-warm-border flex items-center justify-center text-charcoal hover:bg-blush-soft hover:border-blush transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-charcoal font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-charcoal-muted">
              <li>
                <a href="#about" className="hover:text-charcoal transition-colors">
                  About & Background
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-charcoal transition-colors">
                  Experience & Timeline
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-charcoal transition-colors">
                  Featured AI Systems
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-charcoal transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-charcoal transition-colors">
                  Certifications & Awards
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-charcoal transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Back to top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-charcoal font-semibold mb-2">
                Location
              </h4>
              <p className="text-sm text-charcoal-muted">Hyderabad, Telangana, India</p>
              <p className="text-xs text-charcoal-light mt-1">Available for full-time roles & high-impact AI engineering</p>
            </div>
            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-warm-border bg-warm-bg text-xs font-medium text-charcoal hover:bg-blush-soft transition-colors shadow-soft"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-blush-dark" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-muted gap-4">
          <p>
            &copy; {new Date().getFullYear()} {content.personal.fullName}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed with warm minimalism &bull; Built with React, Vite, Tailwind & GSAP
          </p>
        </div>
      </div>
    </footer>
  );
};

