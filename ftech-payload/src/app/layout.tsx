import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FTECH - Holistic & Innovative Lighting Solutions",
    description: "FTECH delivers holistic and innovative lighting solutions",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // This is a pass-through layout - actual HTML structure is in route group layouts
    return children;
}
