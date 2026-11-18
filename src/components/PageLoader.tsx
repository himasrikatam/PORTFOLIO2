import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface PageLoaderProps {
  onComplete?: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [removed, setRemoved] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setRemoved(true);
      onComplete?.();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setRemoved(true);
          onComplete?.();
        }
      });

      tl.to(textRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.45,
        delay: 0.4,
        ease: 'power2.inOut'
      })
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.75,
        ease: 'power3.inOut'
      }, '-=0.15');
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion, onComplete]);

  if (removed) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#F5DCDA] text-charcoal select-none"
      aria-hidden="true"
    >
      <div ref={textRef} className="text-center px-4">
        <span className="font-serif text-3xl md:text-4xl italic text-charcoal font-medium tracking-tight">
          Himasri Reddy
        </span>
        <div className="mt-2 text-xs uppercase tracking-widest text-charcoal-muted font-sans font-medium">
          Software Engineer &bull; Agentic AI
        </div>
      </div>
    </div>
  );
};

