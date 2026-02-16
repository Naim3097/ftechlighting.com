import HorizontalScroll from '@/components/HorizontalScroll';
import DynamicTabs from '@/components/about/DynamicTabs';
import GlassInsights from '@/components/about/GlassInsights';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { getCompanyInfo, getServicesByCategory } from '@/lib/payload';

function getMediaUrl(media: unknown): string {
    if (media && typeof media === 'object') {
        if ('url' in media && (media as { url?: string }).url) {
            return (media as { url: string }).url;
        }
        if ('filename' in media && (media as { filename?: string }).filename) {
            return `/api/media/file/${(media as { filename: string }).filename}`;
        }
    }
    return '';
}

export default async function AboutPage() {
    const [companyInfo, coreDocs] = await Promise.all([
        getCompanyInfo(),
        getServicesByCategory('core-competencies'),
    ]);

    const visionFallback = 'To evolve as one of the key players in the lighting design industries, setting new standards for innovation and sustainability.';
    const missionFallback = 'Our mission at FTECH is to deliver values by solving complexities in every lighting project we are involved in, ensuring functional and aesthetic excellence.';
    const valuesFallback = [
        { title: 'Quality Striving', description: 'Excellence in every aspect.' },
        { title: 'Care', description: 'Deep respect for clients and team.' },
        { title: 'Agility', description: 'Proactive and flexible mindset.' },
        { title: 'Integrity', description: 'Honesty and accountability.' },
    ];

    const valuesArray = companyInfo?.aboutCompany?.values?.length
        ? companyInfo.aboutCompany.values
        : valuesFallback;

    const glassCards = [
        {
            title: 'Vision',
            content: companyInfo?.aboutCompany?.vision || visionFallback,
        },
        {
            title: 'Mission',
            content: companyInfo?.aboutCompany?.mission || missionFallback,
        },
        {
            title: 'Company Values',
            content: '',
            values: valuesArray as { title: string; description: string }[],
        },
    ];

    const tabsFallback = [
        {
            id: 1,
            title: 'Design',
            description: 'We provide comprehensive lighting design services, from conceptualization to detailed planning and simulation, ensuring functional and aesthetic excellence.',
            image: '/assets/sections/service %26 solution/conceptual lighting design/1.jpg',
        },
        {
            id: 2,
            title: 'Customization',
            description: 'Bespoke luminaire design and fabrication tailored to your project requirements, combining creative vision with technical precision.',
            image: '/assets/sections/service %26 solution/bespoke lighting fitting customization/1.jpg',
        },
        {
            id: 3,
            title: 'Supply',
            description: 'Sourcing and supplying high-quality lighting products from trusted manufacturers worldwide, ensuring reliability and performance.',
            image: '/assets/sections/service %26 solution/commercial and residential lighting/1.jpg',
        },
        {
            id: 4,
            title: 'Project Management',
            description: 'End-to-end project coordination from planning through execution, ensuring timely delivery and seamless integration of lighting systems.',
            image: '/assets/sections/projects/menara hap seng 3 kuala lumpur.jpg',
        },
        {
            id: 5,
            title: 'Testing & Commissioning',
            description: 'Rigorous testing and commissioning processes to guarantee optimal performance, safety compliance, and energy efficiency of all installations.',
            image: '/assets/sections/service %26 solution/design, installation, testing %26 commissioning/1.jpg',
        },
        {
            id: 6,
            title: 'After Sales',
            description: 'Dedicated after-sales support including maintenance programs, warranty management, and technical assistance for long-term system performance.',
            image: '/assets/sections/service %26 solution/architectural lighting/1.jpg',
        },
    ];

    const tabsData = coreDocs.length > 0
        ? coreDocs.map((doc, i) => ({
            id: i + 1,
            title: doc.name.split(' ')[0],
            description: doc.shortDescription,
            image: getMediaUrl(doc.featuredImage) || tabsFallback[i]?.image || '/assets/sections/about/editorial-right.jpg',
        }))
        : tabsFallback;

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
                                src="/assets/sections/about/editorial-right.jpg"
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
