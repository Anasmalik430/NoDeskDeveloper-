import { API_BASE } from "@/lib/api";
import ProductDetailClient from "@/components/ReadyMadeProduct/ProductDetailClient";

export async function generateMetadata({ params }) {
  const { id } = params;

  try {
    const res = await fetch(`${API_BASE}/project/${id}`, {
      cache: "no-store",
    });

    if (
      !res.ok ||
      !res.headers.get("content-type")?.includes("application/json")
    ) {
      return { title: "Product Not Found | Nodesk Developer" };
    }

    const { success, data: product } = await res.json();

    if (!success || !product) {
      return { title: "Product Not Found | Nodesk Developer" };
    }

    // Clean title & description
    const title = `${product.name} - Ready Made App`;
    const cleanDescription = product.description
      ? product.description
          .replace(/<[^>]*>/g, "")
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 180) + "..."
      : "Production-ready, fully customizable app by Nodesk Developer";

    // Product ki first image (agar nahi hai to fallback)
    const ogImage = product.screenshots?.[0]?.startsWith("http")
      ? product.screenshots[0]
      : `https://www.nodeskdeveloper.com${
          product.screenshots?.[0] || "/default-og.jpg"
        }`;

    return {
      title,
      description: cleanDescription,

      openGraph: {
        title,
        description: cleanDescription,
        url: `https://www.nodeskdeveloper.com/softwares-readymade/${id}`,
        siteName: "Nodesk Developer",
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: product.name,
          },
        ],
        locale: "en_IN",
        type: "website",
      },

      twitter: {
        card: "summary_large_image",
        title,
        description: cleanDescription,
        images: [ogImage],
      },

      robots: {
        index: true,
        follow: true,
      },
    };
  } catch (error) {
    console.error("Metadata fetch failed:", error);
    return {
      title: "Loading... | Nodesk Developer",
    };
  }
}

export default function ProductDetailPage() {
  return <ProductDetailClient />;
}
