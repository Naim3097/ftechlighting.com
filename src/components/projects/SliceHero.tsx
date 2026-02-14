'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface SliceHeroProps {
  title: string;
  backgroundImage: string;
}

export default function SliceHero({ title, backgroundImage }: SliceHeroProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setIsActive(true);
  }, []);

  return (
    <section className={`slice-section ${isActive ? 'active' : ''}`}>
      {[0, 1, 2, 3, 4].map((index) => (
        <div key={index} className="slice-strip">
          <Image
            src={backgroundImage}
            alt={`Hero ${index + 1}`}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      ))}
      <div className="hero-overlay"></div>
      <div className="slice-content">
        <h1>{title}</h1>
      </div>
    </section>
  );
}
