import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import "../globals.css";

export const metadata: Metadata = {
    title: "FTECH - Holistic & Innovative Lighting Solutions",
    description: "FTECH delivers holistic and innovative lighting solutions, transforming industrial and commercial spaces into experiences. Based in Selangor, Malaysia.",
    keywords: "lighting design, lighting solutions, FTECH, Malaysia, Selangor, commercial lighting, industrial lighting",
    authors: [{ name: "FTECH Solutions Sdn Bhd" }],
    openGraph: {
        type: "website",
        url: "https://ftechlighting.com/",
        title: "FTECH - Holistic & Innovative Lighting Solutions",
        description: "FTECH delivers holistic and innovative lighting solutions, transforming industrial and commercial spaces into experiences. Based in Selangor, Malaysia.",
        images: ["/assets/logo/logo%20with%20tagline.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "FTECH - Holistic & Innovative Lighting Solutions",
        description: "FTECH delivers holistic and innovative lighting solutions, transforming industrial and commercial spaces into experiences. Based in Selangor, Malaysia.",
        images: ["/assets/logo/logo%20with%20tagline.png"],
    },
    icons: {
        icon: "/assets/logo/favicon.png",
    },
};

export default function FrontendLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
