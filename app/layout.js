import Navbar from "@/components/Navbar";
import "./globals.css";
import FloatingLinearOrb from "@/components/FloatingLinearOrb";
import FooterComponent from "@/components/Footer";
import FollowCursor from "@/components/MiniComponents/FollowCursor";
import TawkToChat from "@/components/TawkToChat";
import { Analytics } from "@vercel/analytics/next";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  metadataBase: new URL("https://nodeskdeveloper.in"),
  title: {
    default: "NoDeskDeveloper - Best Web & App Development Services in India",
    template: "%s | NoDeskDeveloper",
  },
  description:
    "Your ultimate destination for top developers, custom web apps, mobile app development, UI/UX design, and software consulting. Elevate your projects with NoDeskDeveloper.",
  keywords: [
    "NoDeskDeveloper",
    "web development services",
    "app development company",
    "UI/UX design services",
    "software consulting",
    "best web developers in India",
    "custom web apps",
    "mobile app development",
    "hire developers India",
    "software development agency",
    "ready-made software",
    "tech consulting India",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NoDeskDeveloper - Best Web & App Development Services in India",
    description:
      "India's premium tech platform. Hire top developers, buy ready-made software, or get expert tech consulting. Elevate your projects with NoDeskDeveloper.",
    url: "https://nodeskdeveloper.in",
    siteName: "NoDeskDeveloper",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NoDeskDeveloper - Best Web & App Development Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NoDeskDeveloper - Best Web & App Development Services in India",
    description:
      "India's premium tech platform. Hire top developers, buy ready-made software, or get expert tech consulting.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NoDeskDeveloper",
    url: "https://nodeskdeveloper.in",
    description:
      "Top-rated IT agency offering web development services, mobile app development, UI/UX design, and software consulting in India.",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`antialiased`}>
        <AuthProvider>
          <Analytics />
          <Navbar />
          <FollowCursor />
          <FloatingLinearOrb />
          {children}
          <FooterComponent />
          <TawkToChat />
        </AuthProvider>
      </body>
    </html>
  );
}
