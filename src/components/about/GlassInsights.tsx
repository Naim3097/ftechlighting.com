import Image from 'next/image';

interface GlassCard {
    title: string;
    content: string;
}

interface GlassInsightsProps {
    cards: GlassCard[];
}

export default function GlassInsights({ cards }: GlassInsightsProps) {
    return (
        <section className="glass-insights-section">
            <div className="glass-insights-overlay"></div>
            <div className="glass-cards-container">
                {cards.map((card, index) => (
                    <div key={index} className="glass-card">
                        <h3>{card.title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: card.content }} />
                    </div>
                ))}
            </div>
        </section>
    );
}
