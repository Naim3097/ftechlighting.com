'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav>
                <Link href="/" className={`logo ${isMenuOpen ? 'active' : ''}`}>
                    <Image 
                        src="/assets/logo/logo%20no%20tagline.png" 
                        alt="FTECH" 
                        width={144}
                        height={50}
                        priority
                    />
                </Link>
                <div 
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
                    onClick={toggleMenu}
                >
                    <span className="menu-text">{isMenuOpen ? 'Close' : 'Menu'}</span>
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>

            <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}>
                <div className="menu-links">
                    <Link href="/" className="menu-link" onClick={() => setIsMenuOpen(false)}>
                        Home <span>01</span>
                    </Link>
                    <Link href="/about" className="menu-link" onClick={() => setIsMenuOpen(false)}>
                        About <span>02</span>
                    </Link>
                    <Link href="/services" className="menu-link" onClick={() => setIsMenuOpen(false)}>
                        Services <span>03</span>
                    </Link>
                    <Link href="/projects" className="menu-link" onClick={() => setIsMenuOpen(false)}>
                        Projects <span>04</span>
                    </Link>
                    <Link href="/contact" className="menu-link" onClick={() => setIsMenuOpen(false)}>
                        Contact <span>05</span>
                    </Link>
                </div>
                <div className="menu-footer">
                    <p>FTECH Solutions Sdn Bhd</p>
                    <p>Selangor, Malaysia</p>
                </div>
            </div>
        </>
    );
}
