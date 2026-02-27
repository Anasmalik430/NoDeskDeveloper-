import Navbar from "@/components/Navbar";
import "./globals.css";
import FloatingLinearOrb from "@/components/FloatingLinearOrb";
import FooterComponent from "@/components/Footer";
import FollowCursor from "@/components/MiniComponents/FollowCursor";
import TawkToChat from "@/components/TawkToChat";
import { Analytics } from "@vercel/analytics/next";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "NoDeskDeveloper - Best Web & App Development Services in India",
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
  ],
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
