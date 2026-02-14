import HorizontalScroll from '@/components/HorizontalScroll';
import DynamicTabs from '@/components/about/DynamicTabs';
import GlassInsights from '@/components/about/GlassInsights';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { getCompanyInfo, getServicesByCategory } from '@/lib/payload';

function getMediaUrl(media: unknown): string {
    if (media && typeof media === 'object' && 'filename' in media) {
        return `/uploads/${(media as { filename: string }).filename}`;
    }
    return '';
}

export default async function AboutPage() {
    const [companyInfo, coreDocs] = await Promise.all([
        getCompanyInfo(),
        getServicesByCategory('core-competencies'),
    ]);

    const glassCards = [
        {
            title: 'Vision',
            content: companyInfo?.aboutCompany?.vision ?? '',
        },
        {
            title: 'Mission',
            content: companyInfo?.aboutCompany?.mission ?? '',
        },
        {
            title: 'Company Values',
            content: (companyInfo?.aboutCompany?.values ?? [])
                .map((v: { title: string; description: string }) => `<strong>${v.title}:</strong> ${v.description}`)
                .join('<br>'),
        },
    ];

    const tabsData = coreDocs.map((doc, i) => ({
        id: i + 1,
        title: doc.name.split(' ')[0],
        description: doc.shortDescription,
        image: getMediaUrl(doc.featuredImage),
    }));

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
