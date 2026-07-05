import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.faureconstruction.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Faure Construction Inc. | Premium Construction & Remodeling in Puerto Rico",
    template: "%s | Faure Construction Inc.",
  },
  description:
    "Faure Construction Inc. is a family-owned construction company in Puerto Rico delivering high-end craftsmanship in commercial construction, residential construction, remodeling, interior finishes, project management, and consulting.",
  keywords: [
    "Faure Construction",
    "construction company Puerto Rico",
    "luxury remodeling Puerto Rico",
    "residential construction",
    "commercial construction",
    "interior finishes",
    "project management",
    "general contractor Puerto Rico",
  ],
  authors: [{ name: "Faure Construction Inc." }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Faure Construction Inc.",
    title: "Faure Construction Inc. | Premium Construction & Remodeling in Puerto Rico",
    description:
      "Family-owned. High-end craftsmanship. Personalized service. Unmatched quality. Discover Faure Construction Inc.",
    images: [
      {
        url: "/images/projects/construction-team.jpg",
        width: 1448,
        height: 1086,
        alt: "Faure Construction crew on site during a commercial buildout in Puerto Rico.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faure Construction Inc.",
    description:
      "Family-owned construction company in Puerto Rico. Built for excellence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Faure Construction Inc.",
  telephone: "+1-787-994-2349",
  email: "faureconstructionllc@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "PR",
    addressCountry: "US",
  },
  areaServed: "Puerto Rico",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.instagram.com/faure.construction/",
    "https://www.facebook.com/faure.construction",
  ],
  description:
    "Family-owned construction company in Puerto Rico specializing in commercial construction, residential construction, remodeling, interior finishes, project management, and consulting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-charcoal">
        {children}
      </body>
    </html>
  );
}
