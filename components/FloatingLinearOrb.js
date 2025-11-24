"use client";
import { useEffect, useState } from "react";

const FloatingLinearOrb = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouse = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);
  return (
    <>
      {/* Floating linear Orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-cyan-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-blue-700/30 rounded-full blur-3xl animate-pulse delay-700" />
        <div
          className="absolute w-96 h-96 bg-linear-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl"
          style={{
            top: `${mousePosition.y - 300}px`,
            left: `${mousePosition.x - 300}px`,
            transform: "translate(-50%, -50%)",
            transition: "all 0.4s ease-out",
          }}
        />
      </div>
    </>
  );
};

export default FloatingLinearOrb;
