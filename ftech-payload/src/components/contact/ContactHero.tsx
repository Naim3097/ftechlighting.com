'use client';

import { useState, useEffect } from 'react';

export default function ContactHero() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <section className={`contact-hero ${isActive ? 'active' : ''}`}>
      <div className="contact-hero-bg"></div>
      <div className="contact-hero-content">
        <h1>LET&apos;S<br />CONNECT</h1>
        <p>Start your lighting journey with us</p>
      </div>
    </section>
  );
}
