import DeveloperDetailClient from "@/components/Developer/DeveloperDetailClient";
import { API_BASE } from "@/lib/api";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const res = await fetch(`${API_BASE}/developer/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return { title: "Developer Not Found" };
    }

    const { success, data: developer } = await res.json();

    if (!success || !developer) {
      return { title: "Developer Not Found | Nodesk Developer" };
    }

    // Clean title & description
    const title = `${developer?.name} - ${developer?.level} Developer`;
  
    // Developer photo as image (agar nahi hai to fallback)
    const ogImage = developer?.photo || "/dev.webp";

    return {
      title,
      openGraph: {
        title,
        description: `${developer?.name} - ${developer?.level} Developer with ${developer?.experience}+ years experience. Available for hire on Nodesk Developer.`, // ye addd kiya hai
        url: `https://www.nodeskdeveloper.vercel.app/developers/${id}`,
        siteName: "Nodesk Developer",
        images: [ogImage],
      },

      twitter: {
        card: "summary_large_image",
        title,
        description: `${developer?.name} - Experienced ${developer?.level} Developer`,  // ==== optional but added by me 
        images: [ogImage],
      },

     
    };
  } catch (error) {
    console.error("Metadata fetch failed:", error);
    return {
      title: "Loading... | Nodesk Developer",
    };
  }
}

const DeveloperDetailPage = () => {
  return (
    <>
      <DeveloperDetailClient />
    </>
  );
};

export default DeveloperDetailPage;
