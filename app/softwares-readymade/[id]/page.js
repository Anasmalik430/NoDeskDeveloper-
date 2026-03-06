import { API_BASE } from "@/lib/api";
import ProductDetailClient from "@/components/ReadyMadeProduct/ProductDetailClient";

export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const res = await fetch(`${API_BASE}/project/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return { title: "Product Not Found" };
    }

    const { success, data: product } = await res.json();

    if (!success || !product) {
      return { title: "Product Not Found" };
    }

    const title = `${product?.name} - Buy Ready-Made App | NoDeskDeveloper`;
    const description =
      product.description?.replace(/<[^>]*>/g, "").slice(0, 155) ||
      "Production-ready app available for purchase on NoDeskDeveloper.";

    const ogImage = product.screenshots?.[0] || "/og-image.png";

    return {
      title,
      description,
      keywords: [
        product?.name,
        product?.category,
        "buy ready-made app",
        "clone app India",
        "NoDeskDeveloper software",
      ].filter(Boolean),
      alternates: {
        canonical: `/softwares-readymade/${id}`,
      },
      openGraph: {
        title,
        description,
        url: `https://nodeskdeveloper.in/softwares-readymade/${id}`,
        siteName: "NoDeskDeveloper",
        images: [ogImage],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
      },
    };
  } catch (error) {
    return { title: "Loading..." };
  }
}

export default function ProductDetailPage() {
  return <ProductDetailClient />;
}
