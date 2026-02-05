'use client';

import HorizontalScroll from '@/components/HorizontalScroll';
import DynamicTabs from '@/components/about/DynamicTabs';
import GlassInsights from '@/components/about/GlassInsights';
import Footer from '@/components/Footer';
import Image from 'next/image';

// Data that will come from Payload CMS
const glassCards = [
    {
        title: "Vision",
        content: "To evolve as one of the key players in the lighting design industries, setting new standards for innovation and sustainability."
    },
    {
        title: "Mission",
        content: "Our mission at FTECH is to deliver values by solving complexities in every lighting project we are involved in, ensuring functional and aesthetic excellence."
    },
    {
        title: "Company Values",
        content: "<strong>Quality Striving:</strong> Excellence in every aspect.<br><strong>Care:</strong> Deep respect for clients and team.<br><strong>Agility:</strong> Proactive and flexible mindset.<br><strong>Integrity:</strong> Honesty and accountability."
    }
];

const tabsData = [
    { id: 1, title: "Design", description: "We provide comprehensive lighting design services, from conceptualization to detailed planning and simulation, ensuring functional and aesthetic excellence.", image: "/assets/sections/core%20competencies/Interior%20and%20Exterior%20Lighting%20Design.jpg" },
    { id: 2, title: "Customization", description: "Specializing in bespoke luminaires and custom fabrication, we tailor lighting solutions to meet specific project requirements and architectural visions.", image: "/assets/sections/service%20%26%20solution/bespoke%20lighting%20fitting%20customization/1.jpg" },
    { id: 3, title: "Supply", description: "We supply high-quality lighting products and systems, sourcing the best components to ensure durability, efficiency, and performance.", image: "/assets/sections/core%20competencies/Comprehensive%20Contract%20Services.jpg" },
    { id: 4, title: "Project Management", description: "Our dedicated project management team ensures seamless coordination across all phases, maintaining timeline adherence, budget control, and quality standards throughout the project lifecycle.", image: "/assets/sections/service%20%26%20solution/design,%20installation,%20testing%20%26%20commissioning/1.jpg" },
    { id: 5, title: "Testing & Commissioning", description: "Our team conducts rigorous testing and commissioning to ensure all systems operate perfectly and meet safety and performance standards.", image: "/assets/sections/service%20%26%20solution/design,%20installation,%20testing%20%26%20commissioning/2.jpg" },
    { id: 6, title: "After Sales", description: "We offer continuous after-sales support and maintenance to ensure optimal performance and long-term reliability of all installed lighting systems.", image: "/assets/sections/core%20competencies/Control%20System%20Design%20and%20Integration.jpg" }
];

export default function AboutPage() {
    return (
        <main className="about-page">
            <HorizontalScroll totalSections={5} nextPageUrl="/services" prevPageUrl="/">
                {/* Section 1: Hero */}
                <section className="focus-section">
                    <div className="focus-bg" style={{ backgroundImage: "url('/assets/sections/about/hero.jpeg')" }}></div>
                    <div className="focus-gradient"></div>
                    <div className="focus-content">
                        <h2>About<br/>Us</h2>
                    </div>
                    <div className="focus-overlay-text">
                        <h3>Who We Are</h3>
                        <p>Dedicated professionals committed to excellence.</p>
                    </div>
                </section>

                {/* Section 2: Editorial */}
                <section className="editorial-section" id="editorialSection">
                    <div className="editorial-bg"></div>
                    <div className="editorial-content">
                        <div className="editorial-text-col">
                            <h2>The Editorial</h2>
                            <p>As a full-service lighting solutions provider, FTECH Solutions Sdn Bhd (FTECH) delivers comprehensive expertise across all aspects of lighting design, site management, cabling works, installation, and maintenance. We are a CIDB-certified company, demonstrating our commitment to quality, professionalism, and compliance with industry standards. Our end-to-end approach covers every stage: Design, Customization, Supply, Project Management, Testing & Commissioning, and After Sales.</p>
                            <p>FTECH is a licensed professional entity specializing in bespoke luminaires, pole customization, and steel and aluminium fabrication works for construction projects within the commercial and industrial sectors.</p>
                            <p>The company&apos;s capabilities also encompass the design and installation of both indoor and outdoor lighting systems for various facilities, including office buildings, public transportation terminals, convention and event centers, educational institutions, libraries, and parliamentary complexes.</p>
                        </div>
                        <div className="editorial-img-col">
                            <Image 
                                src="/assets/sections/about/editorial%20right%20container%20image.jpg" 
                                alt="FTECH Office" 
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* Section 3: Glass Insights */}
                <GlassInsights cards={glassCards} />

                {/* Section 4: Dynamic Tabs */}
                <DynamicTabs tabs={tabsData} />

                {/* Section 5: Footer */}
                <Footer />
            </HorizontalScroll>
        </main>
    );
}
