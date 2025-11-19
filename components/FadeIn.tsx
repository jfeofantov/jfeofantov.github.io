'use client';

import { useEffect, useRef, useState } from 'react';

type FadeInProps = React.HTMLAttributes<HTMLDivElement> & {
  delay?: number;
};

export default function FadeIn({ children, className = '', delay = 0, style, ...props }: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileQuery = window.matchMedia('(max-width: 640px)');
    const updatePreference = () => setReduceMotion(motionQuery.matches || mobileQuery.matches);
    updatePreference();
    motionQuery.addEventListener('change', updatePreference);
    mobileQuery.addEventListener('change', updatePreference);
    return () => {
      motionQuery.removeEventListener('change', updatePreference);
      mobileQuery.removeEventListener('change', updatePreference);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [reduceMotion]);

  const animate = !reduceMotion;
  const visibilityClass = animate ? (isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0') : 'opacity-100';
  const transitionClass = animate ? 'transition-all duration-700 ease-out' : '';

  return (
    <div
      ref={ref}
      className={`${transitionClass} ${visibilityClass} ${className}`}
      style={{ ...(style || {}), ...(animate ? { transitionDelay: `${delay}ms` } : {}) }}
      {...props}
    >
      {children}
    </div>
  );
}
