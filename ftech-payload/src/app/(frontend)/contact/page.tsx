import HorizontalScroll from '@/components/HorizontalScroll';
import ContactHero from '@/components/contact/ContactHero';
import LocationsSection from '@/components/contact/LocationsSection';
import ContactForm from '@/components/contact/ContactForm';

// Locations data (will be CMS-driven)
const locations = [
  {
    id: 'selangor',
    tag: 'Headquarters',
    title: 'Selangor',
    company: 'FTECH Solutions Sdn Bhd',
    address: [
      '10-2, Jln USJ 9/5N, Subang Business Centre',
      '47600 Subang Jaya, Selangor'
    ],
    phone: '03-8021 7905'
  }
];

export default function ContactPage() {
  return (
    <HorizontalScroll totalSections={3} prevPageUrl="/projects">
      {/* Section 1: Hero */}
      <ContactHero />

      {/* Section 2: Locations */}
      <LocationsSection locations={locations} />

      {/* Section 3: Contact Form */}
      <ContactForm />
    </HorizontalScroll>
  );
}
