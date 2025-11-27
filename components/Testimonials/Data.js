// Slides Data
export const testimonialsData = [
  {
    name: "Sarah Mitchell",
    role: "CEO at TechFlow",
    company: "TechFlow Inc.",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "Working with this team transformed our digital presence completely. The attention to detail and commitment to excellence is unmatched. Our conversion rates increased by 340% within just 3 months!",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Michael Chen",
    role: "Founder & CTO",
    company: "DataSync Solutions",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    text: "Exceptional developers who truly understand both the technical and business aspects. They delivered our complex enterprise platform ahead of schedule and under budget. Highly recommend!",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "FinTech Innovations",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    text: "The UI/UX design exceeded all our expectations. Our users love the new interface, and we've seen a significant drop in support tickets. Professional, creative, and results-driven team.",
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    name: "David Park",
    role: "Marketing Director",
    company: "GrowthLabs",
    image: "https://i.pravatar.cc/150?img=14",
    rating: 5,
    text: "From concept to launch, every phase was handled with expertise. The e-commerce platform they built scaled seamlessly during our peak season. Couldn't ask for a better development partner.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Jessica Williams",
    role: "Operations Lead",
    company: "CloudServe Pro",
    image: "https://i.pravatar.cc/150?img=9",
    rating: 5,
    text: "Their DevOps expertise saved us thousands in infrastructure costs. The automated deployment pipeline they set up is rock solid. Best investment we've made in our tech stack.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    name: "Ryan Thompson",
    role: "Startup Founder",
    company: "AppVenture",
    image: "https://i.pravatar.cc/150?img=13",
    rating: 5,
    text: "As a non-technical founder, I needed a team I could trust. They guided me through every decision and delivered a beautiful mobile app that our users absolutely love. 10/10 experience!",
    gradient: "from-pink-500 to-rose-500",
  },
];

// ===================================================================================================================
// =============================================== Animations Data ===================================================
// ===================================================================================================================

export const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
    rotateY: direction > 0 ? 45 : -45,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
  },
  exit: (direction) => ({
    x: direction > 0 ? -1000 : 1000,
    opacity: 0,
    scale: 0.8,
    rotateY: direction > 0 ? -45 : 45,
  }),
};
