'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function MaskHero({ title, subtitle, backgroundImage }: HeroProps) {
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth <= 768 || !bgRef.current) return;
      const x = (window.innerWidth - e.pageX * 2) / 50;
      const y = (window.innerHeight - e.pageY * 2) / 50;
      bgRef.current.style.transform = `scale(1.05) translate(${x}px, ${y}px)`;
    };

    const handleMouseLeave = () => {
      if (window.innerWidth <= 768 || !bgRef.current) return;
      bgRef.current.style.transform = 'scale(1)';
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      hero.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
        hero.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className={`mask-hero ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1>{title}</h1>
      <div className="hero-subtitle">{subtitle}</div>
      <div className="mask-hero-bg">
        <Image
          ref={bgRef}
          src={backgroundImage}
          alt={`${title} Background`}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </section>
  );
}
