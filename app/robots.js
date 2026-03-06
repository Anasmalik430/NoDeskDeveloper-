export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/auth/", "/api/"],
      },
    ],
    sitemap: "https://nodeskdeveloper.in/sitemap.xml",
  };
}
