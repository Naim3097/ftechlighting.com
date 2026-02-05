'use client';

import { useState } from 'react';
import Image from 'next/image';

interface StripItemData {
  id: string;
  num: string;
  title: string;
  image: string;
  description: string;
}

interface StripExpandProps {
  items: StripItemData[];
}

export default function StripExpand({ items }: StripExpandProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="strip-section">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="strip-item"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="strip-bg">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 20vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority={index < 3}
            />
          </div>
          <div className="strip-num">{item.num}</div>
          <div className="strip-vertical-text">{item.title.toUpperCase()}</div>
          <div className="strip-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
