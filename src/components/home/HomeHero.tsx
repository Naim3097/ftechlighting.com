'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AccordionPanelProps {
    index: number;
    title: string;
    heading: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    image: string;
    isExpanded: boolean;
    onHover: () => void;
    onClick: () => void;
    onCtaClick?: (e: React.MouseEvent) => void;
}

export function AccordionPanel({
    index,
    title,
    heading,
    description,
    ctaText,
    ctaHref,
    image,
    isExpanded,
    onHover,
    onClick,
    onCtaClick,
}: AccordionPanelProps) {
    const handleClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains('accordion-cta')) return;

        if (window.innerWidth > 768) {
            if (onCtaClick) {
                onCtaClick(e);
            } else {
                window.location.href = ctaHref;
            }
        } else {
            if (isExpanded) {
                if (onCtaClick) {
                    onCtaClick(e);
                } else {
                    window.location.href = ctaHref;
                }
            } else {
                onClick();
            }
        }
    };

    return (
        <div
            className={`accordion-panel ${isExpanded ? 'expanded' : ''}`}
            data-index={index}
            onMouseEnter={() => window.innerWidth > 768 && onHover()}
            onClick={handleClick}
        >
            <Image
                src={image}
                alt={title}
                fill
                sizes="(min-width: 769px) 60vw, 100vw"
                priority={index === 0}
                className="accordion-panel-bg"
            />
            <div className="accordion-title">{title}</div>
            <div className="accordion-content">
                <h2>{heading.split('<br>').map((part, i, arr) => (
                    <span key={i}>{part}{i < arr.length - 1 && <br />}</span>
                ))}</h2>
                <p>{description}</p>
                {onCtaClick ? (
                    <button className="accordion-cta" onClick={onCtaClick}>
                        {ctaText}
                    </button>
                ) : (
                    <Link href={ctaHref} className="accordion-cta">
                        {ctaText}
                    </Link>
                )}
            </div>
        </div>
    );
}

interface HomeHeroProps {
    panels: {
        title: string;
        heading: string;
        description: string;
        ctaText: string;
        ctaHref: string;
        image: string;
    }[];
}

export default function HomeHero({ panels }: HomeHeroProps) {
    const [isActive, setIsActive] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsActive(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const handleExplore = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setExpandedIndex(1);

        if (window.innerWidth <= 768) {
            setTimeout(() => {
                const aboutPanel = document.querySelector('.accordion-panel[data-index="1"]');
                if (aboutPanel) {
                    aboutPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 300);
        }
    };

    return (
        <section className={`curtain-reveal ${isActive ? 'active' : ''}`}>
            <div className="mobile-hero-background"></div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span className="scroll-text">Scroll</span>
            </div>

            <div className="curtain-bg">
                {/* Accordion Section */}
                <section className="accordion-section">
                    {panels.map((panel, index) => (
                        <AccordionPanel
                            key={index}
                            index={index}
                            title={panel.title}
                            heading={panel.heading}
                            description={panel.description}
                            ctaText={panel.ctaText}
                            ctaHref={panel.ctaHref}
                            image={panel.image}
                            isExpanded={expandedIndex === index}
                            onHover={() => setExpandedIndex(index)}
                            onClick={() => setExpandedIndex(index)}
                            onCtaClick={index === 0 ? handleExplore : undefined}
                        />
                    ))}
                </section>
            </div>

            {/* Curtain Panels Overlay */}
            <div className="curtain-panels">
                {[...Array(7)].map((_, i) => (
                    <div key={i} className="curtain-panel"></div>
                ))}
            </div>
        </section>
    );
}
