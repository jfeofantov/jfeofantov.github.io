'use client';

import Image from 'next/image';
import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { cn } from '../../lib/utils';

interface ImageComparisonSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  leftImage: string;
  rightImage: string;
  altLeft?: string;
  altRight?: string;
  initialPosition?: number;
  loading?: 'lazy' | 'eager';
}

export const ImageComparisonSlider = React.forwardRef<HTMLDivElement, ImageComparisonSliderProps>(
  (
    {
      className,
      leftImage,
      rightImage,
      altLeft = 'Left image',
      altRight = 'Right image',
      initialPosition = 50,
      loading = 'eager',
      ...props
    },
    ref
  ) => {
    const [sliderPosition, setSliderPosition] = React.useState(initialPosition);
    const [isDragging, setIsDragging] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement | null>(null);

    const handleMove = React.useCallback((clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let newPosition = (x / rect.width) * 100;
      newPosition = Math.max(0, Math.min(100, newPosition));
      setSliderPosition(newPosition);
    }, []);

    const handleMouseMove = React.useCallback(
      (event: MouseEvent) => {
        if (!isDragging) return;
        handleMove(event.clientX);
      },
      [handleMove, isDragging]
    );

    const handleTouchMove = React.useCallback(
      (event: TouchEvent) => {
        if (!isDragging) return;
        handleMove(event.touches[0]?.clientX ?? 0);
      },
      [handleMove, isDragging]
    );

    const handleInteractionStart = (event: React.MouseEvent | React.TouchEvent) => {
      setIsDragging(true);
      if ('clientX' in event) {
        handleMove(event.clientX);
      } else if (event.touches[0]) {
        handleMove(event.touches[0].clientX);
      }
    };

    const handleInteractionEnd = React.useCallback(() => setIsDragging(false), []);

    React.useEffect(() => {
      if (isDragging) {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('mouseup', handleInteractionEnd);
        document.addEventListener('touchend', handleInteractionEnd);
        document.body.style.cursor = 'ew-resize';
      } else {
        document.body.style.cursor = '';
      }

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('mouseup', handleInteractionEnd);
        document.removeEventListener('touchend', handleInteractionEnd);
        document.body.style.cursor = '';
      };
    }, [handleMouseMove, handleTouchMove, handleInteractionEnd, isDragging]);

    return (
      <div
        ref={(node) => {
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
          containerRef.current = node;
        }}
        className={cn('group relative h-full w-full select-none overflow-hidden', className)}
        onMouseDown={handleInteractionStart}
        onTouchStart={handleInteractionStart}
        {...props}
      >
        <Image
          src={rightImage}
          alt={altRight}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          draggable={false}
          loading={loading}
          fill
          sizes="(min-width: 1024px) 900px, 100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <Image
            src={leftImage}
            alt={altLeft}
            className="h-full w-full object-cover"
            draggable={false}
            loading={loading}
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
          />
        </div>
        <div className="absolute top-0 h-full w-1 cursor-ew-resize" style={{ left: `calc(${sliderPosition}% - 2px)` }}>
          <div className="absolute inset-y-0 w-1 bg-white/60 backdrop-blur-sm" />
          <div
            className={cn(
              'absolute top-1/2 flex h-12 w-12 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full bg-white/80 text-black shadow-xl backdrop-blur-md transition-all duration-300',
              'group-hover:scale-105',
              isDragging && 'scale-110 shadow-2xl shadow-black/30'
            )}
            role="slider"
            aria-valuenow={sliderPosition}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-orientation="horizontal"
            aria-label="Image comparison slider"
          >
            <div className="flex items-center text-black">
              <ChevronLeft className="h-5 w-5 drop-shadow-md" />
              <ChevronRight className="h-5 w-5 drop-shadow-md" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ImageComparisonSlider.displayName = 'ImageComparisonSlider';
