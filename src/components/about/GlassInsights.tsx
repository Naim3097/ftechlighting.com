import Image from 'next/image';

interface ValueItem {
    title: string;
    description: string;
}

interface GlassCard {
    title: string;
    content: string;
    values?: ValueItem[];
}

interface GlassInsightsProps {
    cards: GlassCard[];
}

export default function GlassInsights({ cards }: GlassInsightsProps) {
    return (
        <section className="glass-insights-section">
            <Image
                src="/assets/sections/about/vision.jpg"
                alt="City skyline"
                fill
                style={{ objectFit: 'cover' }}
                className="glass-insights-bg"
            />
            <div className="glass-insights-overlay"></div>
            <div className="glass-cards-container">
                {cards.map((card, index) => (
                    <div key={index} className="glass-card">
                        <h3>{card.title}</h3>
                        {card.values ? (
                            <p>
                                {card.values.map((v, i) => (
                                    <span key={i}>
                                        <strong>{v.title}:</strong> {v.description}
                                        {i < card.values!.length - 1 && <br />}
                                    </span>
                                ))}
                            </p>
                        ) : (
                            <p>{card.content}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
