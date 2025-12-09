"use client";
import useINRConverter from "@/utils/currencyConverter";
import HomeComponent from "@/components/Home/HomeComponent";
import TestimonialsComponent from "@/components/Testimonials/TestimonialsComponent";

const Home = () => {
  const { convertINR, loading } = useINRConverter();
  return (
    <>
      
      <div className="text-center text-4xl font-bold">
        Price: {loading ? "Loading price..." : convertINR(999)}
      </div>
     
      <HomeComponent />
    </>
  );
};

export default Home;
