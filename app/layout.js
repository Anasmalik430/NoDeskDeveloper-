import Navbar from "@/components/Navbar";
import "./globals.css";
import FloatingLinearOrb from "@/components/FloatingLinearOrb";
import FooterComponent from "@/components/Footer";
import FollowCursor from "@/components/MiniComponents/FollowCursor";
import TawkToChat from "@/components/TawkToChat";
import { Analytics } from "@vercel/analytics/next";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "NoDeskDeveloper - Connect, Build, Grow",
  description:
    "Your ultimate destination for developers and ready-made software solutions. Connect with top talent, explore innovative tools, and elevate your projects with NoDeskDeveloper.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <AuthProvider>
          <Analytics />
          <Navbar />
          <FollowCursor />
          <FloatingLinearOrb />
          {children}
          <FooterComponent />
          {/* <TawkToChat /> */}
        </AuthProvider>
      </body>
    </html>
  );
}
