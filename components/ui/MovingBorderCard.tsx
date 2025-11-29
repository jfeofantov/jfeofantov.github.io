'use client';

import type { ReactNode } from 'react';

import { cn } from '../../lib/utils';

type CardProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Card({ children, className, containerClassName }: CardProps) {
  return (
    <div className={cn('relative', containerClassName)}>
      <div className={cn('rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white/85 backdrop-blur', className)}>{children}</div>
    </div>
  );
}
