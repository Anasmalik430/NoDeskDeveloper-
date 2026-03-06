import BookServicePage from "@/components/BooksService";
import React from "react";

export const metadata = {
  title: "Contact Us | NoDeskDeveloper",
  description:
    "Get in touch with NoDeskDeveloper for web and app development, UI/UX design, and IT consulting services. Reach out today!",
  keywords: [
    "contact NoDeskDeveloper",
    "web development inquiry",
    "IT services contact India",
    "hire developer contact",
  ],
  alternates: {
    canonical: "/contact",
  },
};

const Contact = () => {
  return (
    <>
      <BookServicePage />
    </>
  );
};

export default Contact;
