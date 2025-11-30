import { type HTMLAttributes } from 'react';
import clsx from 'clsx';

type FadeInProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
};

export default function FadeIn({ children, className = '', delay = 0, style, ...props }: FadeInProps) {
  return (
    <div
      className={clsx('fade-in', className)}
      style={{
        ...(style || {}),
        animationDelay: `${delay}ms`
      }}
      {...props}
    >
      {children}
    </div>
  );
}
