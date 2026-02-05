'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface ProjectData {
  id: string;
  number: string;
  title: string;
  image: string;
  location: string;
  scope: string;
  completion?: string;
  description: string;
  containStrict?: boolean;
}

interface DiagonalSectionProps {
  project: ProjectData;
  isActive?: boolean;
}

export default function DiagonalSection({ project, isActive = false }: DiagonalSectionProps) {
  const [active, setActive] = useState(isActive);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setActive(isActive);
  }, [isActive]);

  // Split title by line breaks
  const titleParts = project.title.split('<br>');

  return (
    <section 
      ref={sectionRef}
      className={`diagonal-section ${active ? 'active' : ''}`}
    >
      <div className="diagonal-bg"></div>
      <div className={`diagonal-image ${project.containStrict ? 'contain-strict' : ''}`}>
        <Image
          src={project.image}
          alt={project.title.replace('<br>', ' ')}
          fill
          sizes="60vw"
          style={{ objectFit: 'cover' }}
          priority={parseInt(project.number) <= 2}
        />
      </div>
      <div className="diagonal-content">
        <h2>
          {titleParts.map((part, index) => (
            <span key={index}>
              {part}
              {index < titleParts.length - 1 && <br />}
            </span>
          ))}
        </h2>
        <div className="thin-line"></div>
        <div className="project-meta">
          <p><strong>Location:</strong> {project.location}</p>
          <p><strong>Scope:</strong> {project.scope}</p>
          {project.completion && <p><strong>Completion:</strong> {project.completion}</p>}
          <p className="project-description">{project.description}</p>
        </div>
      </div>
      <div className="project-number">{project.number}</div>
    </section>
  );
}
