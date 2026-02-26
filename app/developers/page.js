import DevelopersPage from "@/components/Developer/DeveloperListComponent";
import HowItWorksTimeline from "@/components/HowItWorks/HowItWorksVerticalTimeline";
import TestimonialsComponent from "@/components/Testimonials/TestimonialsComponent";
import React from "react";

export const metadata = {
  title: "Hire Best Web & App Developers in India | NoDeskDeveloper",
  description: "Looking to hire top software developers? NoDeskDeveloper connects you with verified, expert talent for custom web apps, mobile apps, and UI/UX design.",
};

const page = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Hire Developers",
    "description": "Hire expert frontend, backend, and full-stack developers for your custom software needs."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <DevelopersPage />
      <HowItWorksTimeline />
      <TestimonialsComponent />
    </>
  );
};

export default page;
