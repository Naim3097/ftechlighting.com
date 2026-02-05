'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface AccordionPanelData {
  id: string;
  num: string;
  title: string;
  fullTitle: string;
  image: string;
  description: string;
  capabilities: string[];
}

interface AccordionExpandProps {
  panels: AccordionPanelData[];
}

export default function AccordionExpand({ panels }: AccordionExpandProps) {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePanelInteraction = (index: number, type: 'enter' | 'click') => {
    if (type === 'enter' && !isMobile) {
      setExpandedIndex(index);
    } else if (type === 'click') {
      setExpandedIndex(index);
    }
  };

  return (
    <section className="accordion-section">
      {panels.map((panel, index) => (
        <div
          key={panel.id}
          className={`accordion-panel ${expandedIndex === index ? 'expanded' : ''}`}
          onMouseEnter={() => handlePanelInteraction(index, 'enter')}
          onClick={() => handlePanelInteraction(index, 'click')}
        >
          <div className="accordion-bg">
            <Image
              src={panel.image}
              alt={panel.title}
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
          </div>
          <div className="accordion-num">{panel.num}</div>
          <div className="accordion-title">{panel.title}</div>
          <div className="accordion-content">
            <h3>{panel.fullTitle}</h3>
            <p>{panel.description}</p>
            <ul className="service-capabilities">
              {panel.capabilities.map((capability, capIndex) => (
                <li key={capIndex}>{capability}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
