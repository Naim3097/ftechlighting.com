'use client';

interface LocationData {
  id: string;
  tag: string;
  title: string;
  company: string;
  address: string[];
  phone?: string;
  email?: string;
  hours?: { day: string; time: string }[];
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
                <p><strong>Phone:</strong> <a href={`tel:${location.phone.replace(/\s/g, '')}`}>{location.phone}</a></p>
              </>
            )}
            {location.email && (
              <p><strong>Email:</strong> <a href={`mailto:${location.email}`}>{location.email}</a></p>
            )}
            {location.hours && location.hours.length > 0 && (
              <div className="location-hours">
                <br />
                <p><strong>Business Hours</strong></p>
                {location.hours.map((h, index) => (
                  <p key={index} className="hours-row">
                    <span className="hours-day">{h.day}</span>
                    <span className="hours-time">{h.time}</span>
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
