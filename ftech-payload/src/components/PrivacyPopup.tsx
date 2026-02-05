'use client';

import { useState, useEffect } from 'react';

export default function PrivacyPopup() {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && !localStorage.getItem('privacyAccepted')) {
            const timer = setTimeout(() => {
                setIsActive(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('privacyAccepted', 'true');
        setIsActive(false);
    };

    const handleClose = () => {
        setIsActive(false);
    };

    return (
        <div className={`privacy-popup ${isActive ? 'active' : ''}`}>
            <div className="privacy-content">
                <h3>Data Privacy</h3>
                <p>We use cookies to ensure you get the best experience on our website. By continuing to browse, you agree to our use of cookies and data privacy policy.</p>
                <div className="privacy-buttons">
                    <button className="privacy-btn accept" onClick={handleAccept}>Accept</button>
                    <button className="privacy-btn close" onClick={handleClose}>Close</button>
                </div>
            </div>
        </div>
    );
}
