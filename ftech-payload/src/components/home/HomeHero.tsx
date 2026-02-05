'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface AccordionPanelProps {
    index: number;
    title: string;
    heading: string;
    description: string;
    ctaText: string;
    ctaHref: string;
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
    isExpanded,
    onHover,
    onClick,
    onCtaClick
}: AccordionPanelProps) {
    const handleClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains('accordion-cta')) return;

        if (window.innerWidth > 768) {
            // Desktop: Navigate on click
            if (onCtaClick) {
                onCtaClick(e);
            } else {
                window.location.href = ctaHref;
            }
        } else {
            // Mobile: Expand first, then navigate
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
            <div className="accordion-bg">
                <Image
                    src="/assets/sections/home/mobilehero.jpg"
                    alt={title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={index === 0}
                />
            </div>
            <div className="accordion-title">{title}</div>
            <div className="accordion-content">
                <h2 dangerouslySetInnerHTML={{ __html: heading }} />
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
    }[];
}

export default function HomeHero({ panels }: HomeHeroProps) {
    const [isActive, setIsActive] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsActive(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    // Ensure video plays on mount
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.play().catch((e) => {
                console.log('Video autoplay failed:', e);
            });
        }
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
                <section className="accordion-section">
                    <video
                        ref={videoRef}
                        className="desktop-hero-background"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/assets/sections/home/desktophero.jpeg"
                    >
                        <source src="/assets/sections/home/videobg.mp4" type="video/mp4" />
                    </video>
                    {panels.map((panel, index) => (
                        <AccordionPanel
                            key={index}
                            index={index}
                            title={panel.title}
                            heading={panel.heading}
                            description={panel.description}
                            ctaText={panel.ctaText}
                            ctaHref={panel.ctaHref}
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
