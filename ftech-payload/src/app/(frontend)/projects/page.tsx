import HorizontalScroll from '@/components/HorizontalScroll';
import SliceHero from '@/components/projects/SliceHero';
import DiagonalSection from '@/components/projects/DiagonalSection';
import Footer from '@/components/Footer';

// Projects data (will be CMS-driven)
const projects = [
  {
    id: 'aria-klcc',
    number: '01',
    title: 'Aria<br>KLCC',
    image: '/assets/sections/projects/aria%20klcc%20kuala%20lumpur.jpg',
    location: 'Kuala Lumpur',
    scope: 'Luxury Residential Lighting',
    completion: '2019',
    description: 'A prestigious residential development where lighting design enhances the architectural elegance and creates an ambiance of sophisticated luxury.'
  },
  {
    id: 'menara-hap-seng-3',
    number: '02',
    title: 'Menara<br>Hap Seng 3',
    image: '/assets/sections/projects/menara%20hap%20seng%203%20kuala%20lumpur.jpg',
    location: 'Kuala Lumpur',
    scope: 'Facade & Interior Lighting',
    description: 'A landmark commercial tower featuring integrated facade lighting that accentuates its verticality and modern architectural form.',
    containStrict: true
  },
  {
    id: 'mercedes-showroom',
    number: '03',
    title: 'Mercedes<br>Showroom',
    image: '/assets/sections/projects/mercedes%20showroom%20puchong.webp',
    location: 'Puchong, Selangor',
    scope: 'Automotive Retail Experience',
    description: 'Precision lighting design tailored to highlight the sleek lines and premium finish of luxury automobiles in a retail environment.'
  },
  {
    id: 'autohaus-setia-alam',
    number: '04',
    title: 'Autohaus<br>Setia Alam',
    image: '/assets/sections/projects/autohaus%20setia%20alam%20selangor.jpg',
    location: 'Setia Alam, Selangor',
    scope: 'Showroom Lighting',
    description: 'Creating an inviting and dynamic atmosphere for automotive display, ensuring optimal color rendering and visual comfort.'
  },
  {
    id: 'sime-darby',
    number: '05',
    title: 'Sime<br>Darby',
    image: '/assets/sections/projects/sime%20darby%20business%20centre%20singapore.webp',
    location: 'Singapore',
    scope: 'Business Centre Lighting',
    description: 'Functional and aesthetic lighting solutions for a premier business centre, balancing corporate professionalism with architectural warmth.'
  },
  {
    id: 'akasa-cheras',
    number: '06',
    title: 'Akasa<br>Cheras',
    image: '/assets/sections/projects/akasa%20cheras%20south%20balakong.jpg',
    location: 'Cheras South, Selangor',
    scope: 'Exterior & Landscape',
    description: 'Enhancing the outdoor living experience through strategic landscape lighting that promotes safety, wayfinding, and visual appeal.'
  },
  {
    id: 'one-changi-city',
    number: '07',
    title: 'One @<br>Changi City',
    image: '/assets/sections/projects/one%20%40%20changi%20city%20singapore.jpg',
    location: 'Singapore',
    scope: 'Commercial Hub',
    description: 'Integrated lighting solutions for a bustling commercial hub, focusing on energy efficiency and creating a vibrant urban environment.'
  },
  {
    id: 'cmc-materials',
    number: '08',
    title: 'CMC<br>Materials',
    image: '/assets/sections/projects/cmc%20materials%20singapore.jpeg',
    location: 'Singapore',
    scope: 'Industrial Facility',
    description: 'High-performance industrial lighting designed to meet strict operational standards, ensuring safety and productivity in a manufacturing setting.'
  },
  {
    id: 'hap-seng-industrial',
    number: '09',
    title: 'Hap Seng<br>Industrial Park',
    image: '/assets/sections/projects/hap%20seng%20industrial%20park%20selangor.jpg',
    location: 'Selangor',
    scope: 'Industrial Park',
    description: 'Comprehensive lighting infrastructure for a modern industrial park, prioritizing durability, efficiency, and site-wide illumination.'
  },
  {
    id: 'singapore-botanic',
    number: '10',
    title: 'Singapore<br>Botanic Gardens',
    image: '/assets/sections/projects/singapore%20botanic%20gardens%20bukit%20timah%20gate.jpg',
    location: 'Singapore',
    scope: 'Landscape Lighting',
    description: 'Subtle and respectful lighting design for a UNESCO World Heritage site, enhancing the natural beauty while preserving the ecological balance.'
  }
];

export default function ProjectsPage() {
  return (
    <HorizontalScroll totalSections={12} nextPageUrl="/contact" prevPageUrl="/services">
      {/* Section 1: Hero */}
      <SliceHero
        title="PROJECTS"
        backgroundImage="/assets/sections/projects/heroo.jpeg"
      />

      {/* Sections 2-11: Project Diagonal Sections */}
      {projects.map((project) => (
        <DiagonalSection key={project.id} project={project} />
      ))}

      {/* Section 12: Footer */}
      <Footer
        title="Ready to Start?"
        description="With a focus on precision and creativity, we transform every vision into a functional and inspiring reality. Let's discuss your distinctive requirements."
        ctaText="Get in Touch"
        ctaLink="/contact"
      />
    </HorizontalScroll>
  );
}
