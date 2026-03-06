export default function sitemap() {
  const baseUrl = "https://nodeskdeveloper.in";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/developers",
    "/book-services",
    "/careers",
    "/softwares-readymade",
    "/services/bugfixing",
    "/services/tech-consultency",
    "/services/maintenance",
    "/services/project-estimations",
    "/services/codeNscript",
    "/quickLinks/faq",
    "/quickLinks/terms",
    "/quickLinks/privacy-policy",
    "/quickLinks/licenses",
    "/quickLinks/cookies",
    "/quickLinks/docs",
    "/quickLinks/how-it-works",
  ];

  const routes = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority:
      route === ""
        ? 1
        : route === "/developers" || route === "/softwares-readymade"
          ? 0.9
          : 0.7,
  }));

  return routes;
}
