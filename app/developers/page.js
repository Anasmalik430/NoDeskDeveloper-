import DevelopersPage from "@/components/Developer/DeveloperListComponent";
import HowItWorksTimeline from "@/components/HowItWorks/HowItWorksVerticalTimeline";
import TestimonialsComponent from "@/components/Testimonials/TestimonialsComponent";
import React from "react";

const page = () => {
  return (
    <>
      <DevelopersPage />
      <HowItWorksTimeline />
      <TestimonialsComponent />
    </>
  );
};

export default page;
