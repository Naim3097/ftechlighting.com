'use client';

interface LocationData {
  id: string;
  tag: string;
  title: string;
  company: string;
  address: string[];
  phone?: string;
}

interface LocationsSectionProps {
  locations: LocationData[];
}

export default function LocationsSection({ locations }: LocationsSectionProps) {
  return (
    <section className="locations-section">
      <div className="locations-grid">
        {locations.map((location) => (
          <div key={location.id} className="location-card">
            <span className="region-tag">{location.tag}</span>
            <h3>{location.title}</h3>
            <p><strong>{location.company}</strong></p>
            {location.address.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            {location.phone && (
              <>
                <br />
                <p><strong>Phone:</strong> {location.phone}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
