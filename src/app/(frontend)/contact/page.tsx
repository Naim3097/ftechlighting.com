import HorizontalScroll from '@/components/HorizontalScroll';
import ContactHero from '@/components/contact/ContactHero';
import LocationsSection from '@/components/contact/LocationsSection';
import ContactForm from '@/components/contact/ContactForm';
import { getLocations } from '@/lib/payload';

const locationsFallback = [
  {
    id: 'selangor',
    tag: 'Headquarters',
    title: 'Selangor',
    company: 'FTECH Solutions Sdn Bhd',
    address: [
      '10-2, Jln USJ 9/5N, Subang Business Centre',
      '47600 Subang Jaya, Selangor',
    ],
    phone: '+60 3 8021 7905',
    email: 'ftechsolutions.sb@gmail.com',
    hours: [
      { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
      { day: 'Saturday', time: '9:00 AM - 1:00 PM' },
      { day: 'Sunday', time: 'Closed' },
    ],
  },
];

export default async function ContactPage() {
  const docs = await getLocations();

  const locations = docs.length > 0
    ? docs.map((doc) => ({
        id: String(doc.id),
        tag: doc.isHeadquarters ? 'Headquarters' : 'Office',
        title: doc.city,
        company: 'FTECH Solutions Sdn Bhd',
        address: [
          [doc.address?.building, doc.address?.street].filter(Boolean).join(', '),
          [doc.address?.postalCode, doc.city, doc.country].filter(Boolean).join(' '),
        ],
        phone: doc.contact?.phone ?? '+60 3 8021 7905',
        email: doc.contact?.email ?? 'ftechsolutions.sb@gmail.com',
        hours: (doc.businessHours as { day: string; time: string }[] | undefined)?.length
          ? (doc.businessHours as { day: string; time: string }[]).map((h) => ({ day: h.day, time: h.time }))
          : [
              { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
              { day: 'Saturday', time: '9:00 AM - 1:00 PM' },
              { day: 'Sunday', time: 'Closed' },
            ],
      }))
    : locationsFallback;

  return (
    <main className="contact-page">
    <HorizontalScroll totalSections={3} prevPageUrl="/projects">
      {/* Section 1: Hero */}
      <ContactHero />

      {/* Section 2: Locations */}
      <LocationsSection locations={locations} />

      {/* Section 3: Contact Form */}
      <ContactForm />
    </HorizontalScroll>
    </main>
  );
}
