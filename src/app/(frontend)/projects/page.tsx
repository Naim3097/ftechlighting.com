import HorizontalScroll from '@/components/HorizontalScroll';
import SliceHero from '@/components/projects/SliceHero';
import DiagonalSection from '@/components/projects/DiagonalSection';
import Footer from '@/components/Footer';
import { getProjects } from '@/lib/payload';

function getMediaUrl(media: unknown): string {
  if (media && typeof media === 'object' && 'filename' in media) {
    return `/uploads/${(media as { filename: string }).filename}`;
  }
  return '';
}

function splitTitle(name: string): string {
  const mid = Math.floor(name.length / 2);
  let best = name.indexOf(' ');
  if (best === -1) return name;
  for (let i = best + 1; i < name.length; i++) {
    if (name[i] === ' ' && Math.abs(i - mid) < Math.abs(best - mid)) {
      best = i;
    }
  }
  return name.slice(0, best) + '<br>' + name.slice(best + 1);
}

const categoryLabels: Record<string, string> = {
  commercial: 'Commercial Lighting',
  residential: 'Residential Lighting',
  hospitality: 'Hospitality Lighting',
  retail: 'Retail Lighting',
  outdoor: 'Outdoor & Landscape',
};

export default async function ProjectsPage() {
  const docs = await getProjects();

  const projects = docs.map((doc, i) => ({
    id: doc.slug,
    number: String(i + 1).padStart(2, '0'),
    title: splitTitle(doc.name),
    image: getMediaUrl(doc.featuredImage),
    location: doc.location ?? '',
    scope: categoryLabels[doc.category] ?? doc.category,
    completion: doc.year ? String(doc.year) : '',
    description: doc.description ?? '',
  }));

  const totalSections = projects.length + 2;

  return (
    <HorizontalScroll totalSections={totalSections} nextPageUrl="/contact" prevPageUrl="/services">
      {/* Section 1: Hero */}
      <SliceHero
        title="PROJECTS"
        backgroundImage="/assets/sections/projects/heroo.jpeg"
      />

      {/* Project Diagonal Sections */}
      {projects.map((project) => (
        <DiagonalSection key={project.id} project={project} />
      ))}

      {/* Footer */}
      <Footer
        title="Ready to Start?"
        description="With a focus on precision and creativity, we transform every vision into a functional and inspiring reality. Let's discuss your distinctive requirements."
        ctaText="Get in Touch"
        ctaLink="/contact"
      />
    </HorizontalScroll>
  );
}
