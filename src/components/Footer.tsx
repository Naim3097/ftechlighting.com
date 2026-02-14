import Link from 'next/link';

interface FooterProps {
    title?: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
}

export default function Footer({ 
    title = "Ready to Start?",
    description = "With a focus on precision and creativity, we transform every vision into a functional and inspiring reality. Let's discuss your distinctive requirements.",
    ctaText = "Get in Touch",
    ctaLink = "/contact"
}: FooterProps) {
    return (
        <section className="footer-section">
            <div className="footer-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <Link href={ctaLink} className="footer-btn">{ctaText}</Link>
            </div>
        </section>
    );
}
