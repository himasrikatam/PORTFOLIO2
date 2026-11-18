import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { content } from '../data/content';
import { useScrollSpy } from '../hooks/useScrollSpy';

interface NavbarProps {
  onNavigate?: (id: string) => void;
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Credentials' },
    { id: 'contact', label: 'Contact' },
  ];

  const activeId = useScrollSpy(navLinks.map((l) => l.id), 120);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (onNavigate) {
      onNavigate(id);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    if (onOpenResume) {
      e.preventDefault();
      setIsOpen(false);
      onOpenResume();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F6F0E8]/85 backdrop-blur-md shadow-sm border-b border-warm-border/60 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')}
            className="group flex items-center gap-3 text-left focus-visible:outline-none"
            aria-label="Himasri Reddy Homepage"
          >
            <div className="w-9 h-9 rounded-full bg-blush-soft flex items-center justify-center border border-warm-border group-hover:border-blush transition-colors">
              <span className="font-serif font-semibold text-charcoal text-sm">HK</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-medium tracking-tight text-charcoal group-hover:text-blush-dark transition-colors">
                {content.personal.name}
              </span>
              <span className="text-[11px] font-sans text-charcoal-muted tracking-wide">
                Agentic AI Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#FBF8F3]/80 border border-warm-border px-3 py-1.5 rounded-full shadow-soft backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-charcoal bg-blush-soft font-semibold shadow-sm'
                      : 'text-charcoal-muted hover:text-charcoal hover:bg-black/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="sr-only">(current section)</span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={handleResumeClick}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border border-warm-border text-charcoal bg-transparent hover:bg-blush-soft/50 hover:border-blush transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-charcoal-muted" />
              <span>View Resume</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium bg-charcoal text-[#F6F0E8] hover:bg-[#433A37] transition-colors shadow-soft"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleResumeClick}
              type="button"
              aria-label="View Resume"
              className="p-2 rounded-full border border-warm-border bg-blush-soft/40 text-charcoal"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-full border border-warm-border bg-blush-soft/60 text-charcoal hover:bg-blush-soft focus:outline-none"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#F6F0E8] border-b border-warm-border shadow-soft-lg px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blush-soft text-charcoal font-semibold'
                      : 'text-charcoal-muted hover:text-charcoal hover:bg-blush-soft/30'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-4 border-t border-warm-border flex flex-col gap-2.5">
              <button
                onClick={handleResumeClick}
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border border-warm-border text-charcoal bg-blush-soft/40 hover:bg-blush-soft"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-charcoal text-[#F6F0E8] hover:bg-[#433A37]"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
