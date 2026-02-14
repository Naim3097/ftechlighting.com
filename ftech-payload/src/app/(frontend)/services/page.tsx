import HorizontalScroll from '@/components/HorizontalScroll';
import MaskHero from '@/components/services/MaskHero';
import StripExpand from '@/components/services/StripExpand';
import AccordionExpand from '@/components/services/AccordionExpand';
import Footer from '@/components/Footer';
import { getServicesByCategory } from '@/lib/payload';

function getMediaUrl(media: unknown): string {
  if (media && typeof media === 'object' && 'filename' in media) {
    return `/uploads/${(media as { filename: string }).filename}`;
  }
  return '';
}

export default async function ServicesPage() {
  const [coreDocs, solutionDocs] = await Promise.all([
    getServicesByCategory('core-competencies'),
    getServicesByCategory('lighting-solutions'),
  ]);

  const coreCompetencies = coreDocs.map((doc, i) => ({
    id: doc.slug,
    num: String(i + 1).padStart(2, '0'),
    title: doc.name.split(' ')[0],
    image: getMediaUrl(doc.featuredImage),
    description: doc.shortDescription,
  }));

  const servicesSolutions = solutionDocs.map((doc, i) => ({
    id: doc.slug,
    num: String(i + 1).padStart(2, '0'),
    title: doc.name.split(' ')[0],
    fullTitle: doc.name,
    image: getMediaUrl(doc.featuredImage),
    description: doc.shortDescription,
    capabilities: (doc.features ?? []).map((f: { title: string }) => f.title),
  }));

  return (
    <HorizontalScroll totalSections={4} nextPageUrl="/projects" prevPageUrl="/">
      {/* Section 1: Hero */}
      <MaskHero
        title="SERVICES"
        subtitle="Comprehensive Lighting Solutions"
        backgroundImage="/assets/sections/service%20%26%20solution/servicehome.jpeg"
      />

      {/* Section 2: Core Competencies */}
      <StripExpand items={coreCompetencies} />

      {/* Section 3: Services & Solutions */}
      <AccordionExpand panels={servicesSolutions} />

      {/* Section 4: Footer */}
      <Footer
        title="Ready to Start?"
        description="With a focus on precision and creativity, we transform every vision into a functional and inspiring reality. Let's discuss your distinctive requirements."
        ctaText="Get in Touch"
        ctaLink="/contact"
      />
    </HorizontalScroll>
  );
}
