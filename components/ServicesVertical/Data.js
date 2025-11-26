import {
  Globe,
  Smartphone,
  Palette,
  Database,
  Cloud,
  ShoppingBag,
} from "lucide-react";

export const serviceSlide = [
  {
    icon: Globe,
    title: "Web Development",
    tagline: "Crafting digital experiences that captivate and convert",
    description:
      "From responsive websites to complex web applications, we build scalable solutions that drive results.",
    features: ["React & Next.js", "Full-Stack", "SEO Optimized"],
    iconBg: "from-blue-500 to-cyan-500",
    position: "left",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    tagline: "Your ideas, pocket-sized and powerful",
    description:
      "Native iOS, Android, and cross-platform apps designed for performance and user delight.",
    features: ["iOS & Android", "React Native", "Flutter"],
    iconBg: "from-purple-500 to-pink-500",
    position: "right",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    tagline: "Where beauty meets functionality",
    description:
      "Intuitive interfaces that users love, backed by research and refined through iteration.",
    features: ["User Research", "Prototyping", "Design Systems"],
    iconBg: "from-teal-500 to-emerald-500",
    position: "left",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    tagline: "The engine that powers your digital ecosystem",
    description:
      "Robust, scalable backend systems with secure APIs that handle millions of requests.",
    features: ["Microservices", "RESTful APIs", "Database Design"],
    iconBg: "from-orange-500 to-red-500",
    position: "right",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    tagline: "Deploy faster, scale smarter, sleep better",
    description:
      "Complete cloud infrastructure setup with CI/CD pipelines and automated deployments.",
    features: ["AWS & Azure", "Docker", "Kubernetes"],
    iconBg: "from-indigo-500 to-purple-500",
    position: "left",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    tagline: "Turn browsers into buyers with seamless shopping",
    description:
      "End-to-end e-commerce platforms with payment integration and inventory management.",
    features: ["Payment Gateway", "Admin Panel", "Analytics"],
    iconBg: "from-pink-500 to-rose-500",
    position: "right",
  },
];
