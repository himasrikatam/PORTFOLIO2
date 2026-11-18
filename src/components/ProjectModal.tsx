import React, { useEffect } from 'react';
import { X, CheckCircle2, Layers, Cpu, BarChart3 } from 'lucide-react';
import { ProjectItem } from '../data/content';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-charcoal/50 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#FBF8F3] rounded-3xl border border-warm-border shadow-soft-lg overflow-y-auto p-6 sm:p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close project modal"
          className="absolute top-5 right-5 sm:top-7 sm:right-7 p-2 rounded-full border border-warm-border bg-warm-bg text-charcoal-muted hover:text-charcoal hover:bg-blush-soft transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-blush-soft text-charcoal border border-warm-border mb-3">
            <span>{project.category}</span>
          </div>
          <h3
            id="modal-title"
            className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-charcoal leading-snug"
          >
            {project.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-blush-dark tracking-wide">
            Role: {project.role}
          </p>
        </div>

        {/* Key Metrics Banner */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 p-4 rounded-2xl bg-warm-alt/60 border border-warm-border">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <div className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
                  {metric.value}
                </div>
                <div className="text-xs text-charcoal-muted font-sans uppercase tracking-wider mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Overview */}
        <div className="my-6 space-y-4">
          <h4 className="font-serif text-lg font-semibold text-charcoal flex items-center gap-2">
            <Cpu className="w-5 h-5 text-blush-dark" />
            Project Overview
          </h4>
          <p className="text-charcoal-muted leading-relaxed text-sm sm:text-base">
            {project.description}
          </p>
        </div>

        {/* Key Engineering Highlights */}
        <div className="my-6 space-y-3">
          <h4 className="font-serif text-lg font-semibold text-charcoal flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-blush-dark" />
            Key Engineering Highlights
          </h4>
          <ul className="space-y-2.5">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-charcoal-muted leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-blush-deep mt-2 flex-shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* System Architecture */}
        <div className="my-6 space-y-3">
          <h4 className="font-serif text-lg font-semibold text-charcoal flex items-center gap-2">
            <Layers className="w-5 h-5 text-blush-dark" />
            System Architecture & Pipeline
          </h4>
          <div className="space-y-2">
            {project.architecture.map((arch, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl bg-warm-bg border border-warm-border text-xs sm:text-sm text-charcoal"
              >
                <div className="w-6 h-6 rounded-full bg-blush-soft flex items-center justify-center font-mono text-xs font-semibold text-charcoal flex-shrink-0">
                  {i + 1}
                </div>
                <span>{arch}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-8 pt-6 border-t border-warm-border">
          <h4 className="text-xs uppercase font-medium tracking-wider text-charcoal-muted mb-3 flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4 text-blush-dark" />
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-blush-soft/60 border border-warm-border text-charcoal"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

