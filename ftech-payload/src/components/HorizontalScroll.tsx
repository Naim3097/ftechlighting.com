'use client';

import { useRef, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface HorizontalScrollProps {
    children: ReactNode;
    totalSections: number;
    nextPageUrl?: string;
    prevPageUrl?: string;
}

export default function HorizontalScroll({ 
    children, 
    totalSections, 
    nextPageUrl,
    prevPageUrl = '/'
}: HorizontalScrollProps) {
    const [currentSection, setCurrentSection] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const updateSection = (index: number) => {
        if (index < 0) index = 0;
        if (index >= totalSections) index = totalSections - 1;
        setCurrentSection(index);
    };

    // Wheel Event Handler
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (window.innerWidth <= 768) return;
            e.preventDefault();

            if (isScrolling) return;
            if (Math.abs(e.deltaY) < 15) return;

            if (e.deltaY > 0) {
                if (currentSection < totalSections - 1) {
                    setIsScrolling(true);
                    updateSection(currentSection + 1);
                    setTimeout(() => setIsScrolling(false), 700);
                } else if (nextPageUrl) {
                    router.push(nextPageUrl);
                }
            } else {
                if (currentSection > 0) {
                    setIsScrolling(true);
                    updateSection(currentSection - 1);
                    setTimeout(() => setIsScrolling(false), 700);
                }
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [currentSection, isScrolling, totalSections, nextPageUrl, router]);

    // Touch Events
    useEffect(() => {
        let touchStartX = 0;
        let touchEndX = 0;

        const handleTouchStart = (e: TouchEvent) => {
            if (window.innerWidth <= 768) return;
            touchStartX = e.changedTouches[0].screenX;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (window.innerWidth <= 768) return;
            touchEndX = e.changedTouches[0].screenX;
            
            const swipeThreshold = 50;
            if (touchStartX - touchEndX > swipeThreshold) {
                if (currentSection < totalSections - 1) updateSection(currentSection + 1);
            }
            if (touchEndX - touchStartX > swipeThreshold) {
                if (currentSection > 0) updateSection(currentSection - 1);
            }
        };

        window.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchend', handleTouchEnd, { passive: false });
        
        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [currentSection, totalSections]);

    const handlePrev = (e: React.MouseEvent) => {
        e.preventDefault();
        if (currentSection === 0 && prevPageUrl) {
            router.push(prevPageUrl);
        } else {
            updateSection(currentSection - 1);
        }
    };

    const handleNext = (e: React.MouseEvent) => {
        e.preventDefault();
        updateSection(currentSection + 1);
    };

    return (
        <>
            {/* Navigation Arrows */}
            <div className="nav-arrows">
                <a href="#" className="nav-arrow" onClick={handlePrev}>←</a>
                <a 
                    href="#" 
                    className="nav-arrow" 
                    onClick={handleNext}
                    style={{
                        opacity: currentSection === totalSections - 1 ? 0.5 : 1,
                        pointerEvents: currentSection === totalSections - 1 ? 'none' : 'auto'
                    }}
                >→</a>
            </div>

            {/* Page Indicators */}
            <div className="page-indicators">
                {Array.from({ length: totalSections }).map((_, index) => (
                    <div 
                        key={index}
                        className={`indicator-dot ${index === currentSection ? 'active' : ''}`}
                        onClick={() => updateSection(index)}
                    />
                ))}
            </div>

            {/* Horizontal Scroll Container */}
            <div 
                ref={containerRef}
                id="fullpage"
                style={{
                    display: 'flex',
                    width: `${totalSections * 100}vw`,
                    height: '100vh',
                    transition: 'transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                    willChange: 'transform',
                    transform: `translateX(-${currentSection * 100}vw)`
                }}
            >
                {children}
            </div>
        </>
    );
}
