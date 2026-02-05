import HorizontalScroll from '@/components/HorizontalScroll';
import MaskHero from '@/components/services/MaskHero';
import StripExpand from '@/components/services/StripExpand';
import AccordionExpand from '@/components/services/AccordionExpand';
import Footer from '@/components/Footer';

// Core Competencies data (will be CMS-driven)
const coreCompetencies = [
  {
    id: 'design',
    num: '01',
    title: 'Design',
    image: '/assets/sections/core%20competencies/Interior%20and%20Exterior%20Lighting%20Design.jpg',
    description: 'FTECH offers complete lighting design services for both interior and exterior applications. Beyond visual aesthetics, FTECH provides advanced control system design and seamless integration to meet the modern demands of intelligent lighting environments. Our team delivers customized solutions tailored to each project, including adjustments to wattage, lumen output, colour temperature, CRI, beam angles, trims, and finishes. With smart controls and automation-ready integration, we ensure every lighting system performs efficiently, reliably, and in harmony with the overall project design.'
  },
  {
    id: 'customization',
    num: '02',
    title: 'Customization',
    image: '/assets/sections/service%20%26%20solution/bespoke%20lighting%20fitting%20customization/1.jpg',
    description: 'Specializing in bespoke luminaires and custom fabrication, we tailor lighting solutions to meet specific project requirements and architectural visions. From unique material selection to precision engineering, we transform creative concepts into tangible realities.'
  },
  {
    id: 'supply',
    num: '03',
    title: 'Supply',
    image: '/assets/sections/core%20competencies/Comprehensive%20Contract%20Services.jpg',
    description: 'We supply high-quality lighting products and systems, sourcing the best components to ensure durability, efficiency, and performance. Our procurement process is designed to meet the specific needs of each project, ensuring timely delivery and adherence to specifications.'
  },
  {
    id: 'project-management',
    num: '04',
    title: 'Project Management',
    image: '/assets/sections/service%20%26%20solution/design,%20installation,%20testing%20%26%20commissioning/1.jpg',
    description: 'Our dedicated project management team ensures seamless coordination across all phases, maintaining timeline adherence, budget control, and quality standards throughout the project lifecycle. We facilitate effective communication between all stakeholders.'
  },
  {
    id: 'testing-commissioning',
    num: '05',
    title: 'Testing & Commissioning',
    image: '/assets/sections/service%20%26%20solution/design,%20installation,%20testing%20%26%20commissioning/2.jpg',
    description: 'Our team conducts rigorous testing and commissioning to ensure all systems operate perfectly and meet safety and performance standards. We verify that every installation complies with the design intent and regulatory requirements before handover.'
  },
  {
    id: 'after-sales',
    num: '06',
    title: 'After Sales',
    image: '/assets/sections/core%20competencies/Control%20System%20Design%20and%20Integration.jpg',
    description: 'We offer continuous after-sales support and maintenance to ensure optimal performance and long-term reliability of all installed lighting systems. Our commitment extends beyond project completion, providing peace of mind and sustained quality.'
  }
];

// Services & Solutions data (will be CMS-driven)
const servicesSolutions = [
  {
    id: 'conceptual',
    num: '04',
    title: 'Conceptual',
    fullTitle: 'Conceptual Lighting Design',
    image: '/assets/sections/service%20%26%20solution/conceptual%20lighting%20design/1.jpg',
    description: 'Creating powerful experiences, we reinforce creative concepts through interplay of structural form.',
    capabilities: ['Visual Narrative', 'Mood Boarding', '3D Visualization', 'Design Strategy']
  },
  {
    id: 'bespoke',
    num: '05',
    title: 'Bespoke',
    fullTitle: 'Bespoke Customization',
    image: '/assets/sections/service%20%26%20solution/bespoke%20lighting%20fitting%20customization/1.jpg',
    description: 'Our customized and bespoke lighting services is central to our business here at FTECH.',
    capabilities: ['Custom Design & Fabrication', 'Decorative Lighting', 'Unique & Exclusive Fixtures', 'Integration with Smart Technology']
  },
  {
    id: 'architectural',
    num: '06',
    title: 'Architectural',
    fullTitle: 'Architectural Lighting',
    image: '/assets/sections/service%20%26%20solution/architectural%20lighting/2.jpg',
    description: 'Bringing together the art, science and technology, adding architectural lighting to property.',
    capabilities: ['Facade Lighting', 'Landscape Integration', 'Heritage Buildings', 'Urban Planning']
  },
  {
    id: 'commercial',
    num: '07',
    title: 'Commercial',
    fullTitle: 'Commercial & Residential',
    image: '/assets/sections/service%20%26%20solution/commercial%20and%20residential%20lighting/2.jpg',
    description: 'A full-service commercial and residential lighting contractor and E&E group of companies.',
    capabilities: ['Office Spaces', 'Retail Environments', 'Luxury Homes', 'Hospitality']
  },
  {
    id: 'installation',
    num: '08',
    title: 'Installation',
    fullTitle: 'Design & Installation',
    image: '/assets/sections/service%20%26%20solution/design,%20installation,%20testing%20%26%20commissioning/1.jpg',
    description: 'Covering all stages from lighting, consultancy and feasibility studies to design, testing and installation.',
    capabilities: ['Project Management', 'Testing & Commissioning', 'Maintenance', 'Safety Compliance']
  }
];

export default function ServicesPage() {
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
