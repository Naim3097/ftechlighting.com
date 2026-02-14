import HorizontalScroll from '@/components/HorizontalScroll';
import ContactHero from '@/components/contact/ContactHero';
import LocationsSection from '@/components/contact/LocationsSection';
import ContactForm from '@/components/contact/ContactForm';
import { getLocations } from '@/lib/payload';

export default async function ContactPage() {
  const docs = await getLocations();

  const locations = docs.map((doc) => ({
    id: String(doc.id),
    tag: doc.isHeadquarters ? 'Headquarters' : 'Office',
    title: doc.city,
    company: 'FTECH Solutions Sdn Bhd',
    address: [
      [doc.address?.building, doc.address?.street].filter(Boolean).join(', '),
      [doc.address?.postalCode, doc.city, doc.country].filter(Boolean).join(' '),
    ],
    phone: doc.contact?.phone ?? '',
  }));

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
