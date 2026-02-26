'use client';

import { useState } from 'react';
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

  const handlePointerEnter = (index: number, e: React.PointerEvent) => {
    if (e.pointerType !== 'touch') {
      setExpandedIndex(index);
    }
  };

  return (
    <section className="accordion-section">
      {panels.map((panel, index) => (
        <div
          key={panel.id}
          className={`accordion-panel ${expandedIndex === index ? 'expanded' : ''}`}
          onPointerEnter={(e) => handlePointerEnter(index, e)}
          onClick={() => setExpandedIndex(index)}
        >
          <div className="accordion-bg">
            {panel.image ? (
              <Image
                src={panel.image}
                alt={panel.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            ) : (
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #2a0a0a, #820000)' }} />
            )}
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
