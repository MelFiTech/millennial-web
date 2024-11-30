'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface TickerProps {
  images: {
    src: string;
    alt: string;
  }[];
  speed?: number;
}

export default function Ticker({ images, speed = 1 }: TickerProps) {
  const tickerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const ticker = tickerRef.current;
    const content = contentRef.current;
    
    if (!ticker || !content) return;

    const clone1 = content.cloneNode(true);
    const clone2 = content.cloneNode(true);
    ticker.appendChild(clone1);
    ticker.appendChild(clone2);

    const animate = () => {
      if (!ticker) return;
      
      if (ticker.scrollLeft >= content.offsetWidth) {
        ticker.scrollLeft = 0;
      } else {
        ticker.scrollLeft += speed;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const pauseAnimation = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    const resumeAnimation = () => {
      animationRef.current = requestAnimationFrame(animate);
    };

    ticker.addEventListener('mouseenter', pauseAnimation);
    ticker.addEventListener('mouseleave', resumeAnimation);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      ticker.removeEventListener('mouseenter', pauseAnimation);
      ticker.removeEventListener('mouseleave', resumeAnimation);
    };
  }, [speed]);

  return (
    <div 
      className="overflow-hidden whitespace-nowrap"
      style={{ 
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
      }}
    >
      <div 
        ref={tickerRef}
        className="overflow-x-hidden whitespace-nowrap"
        style={{ willChange: 'scroll-position' }}
      >
        <div 
          ref={contentRef}
          className="inline-flex gap-6"
        >
          {images.map((image, index) => (
            <div key={index} className="relative w-[300px] h-[200px] rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
