import HomeHero from "@/components/home/HomeHero";
import PrivacyPopup from "@/components/PrivacyPopup";

// This data will eventually come from Payload CMS
const heroPanels = [
    {
        title: "Welcome",
        heading: "Delivering Values<br>Solving Complexities",
        description: "Holistic & Innovative Lighting Solutions. We craft lighting solutions that transform industrial and commercial spaces into experiences.",
        ctaText: "Explore FTECH",
        ctaHref: "#",
    },
    {
        title: "About Us",
        heading: "Who We Are",
        description: "We are a team of dedicated professionals committed to excellence in lighting design and engineering. Discover our story and philosophy.",
        ctaText: "Read Our Story",
        ctaHref: "/about",
    },
    {
        title: "Services",
        heading: "What We Do",
        description: "From conceptual design to installation and commissioning, we offer a comprehensive range of lighting services tailored to your needs.",
        ctaText: "View Services",
        ctaHref: "/services",
    },
    {
        title: "Projects",
        heading: "Our Work",
        description: "Explore our portfolio of award-winning projects across various sectors, showcasing our expertise and innovation.",
        ctaText: "View Portfolio",
        ctaHref: "/projects",
    },
    {
        title: "Contact",
        heading: "Get in Touch",
        description: "Ready to transform your space? Connect with our team for consultations, quotes, and lighting design inquiries.",
        ctaText: "Contact Us",
        ctaHref: "/contact",
    },
];

export default function Home() {
    return (
        <main className="home-page">
            <HomeHero panels={heroPanels} />
            <PrivacyPopup />
        </main>
    );
}
