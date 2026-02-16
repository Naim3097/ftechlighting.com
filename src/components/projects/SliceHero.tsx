'use client';

import { useEffect, useState } from 'react';

interface SliceHeroProps {
  title: string;
  backgroundImage: string;
}

export default function SliceHero({ title, backgroundImage }: SliceHeroProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <section className={`slice-section ${isActive ? 'active' : ''}`}>
      {[0, 1, 2, 3, 4].map((index) => (
        <div key={index} className="slice-strip">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={backgroundImage}
            alt={`Hero ${index + 1}`}
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
