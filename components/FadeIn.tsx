'use client';

import { useEffect, useRef, useState, type HTMLAttributes } from 'react';

type FadeInProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
};

export default function FadeIn({ children, className = '', delay = 0, style, ...props }: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -5% 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? 'fade-in-visible' : ''} ${className}`}
      style={{ ...(style || {}), transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}
