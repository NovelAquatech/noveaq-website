"use client";
import React, { useState, useEffect } from "react";
import { LogosItem } from "@/types/partners";

export default function Carousel({ logos }: { logos: LogosItem[] }) {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCount = isMobile ? 2 : 4;

  const next = () => setIndex((prev) => (prev + visibleCount) % logos.length);
  const prev = () =>
    setIndex((prev) => (prev - visibleCount + logos.length) % logos.length);

  const visibleLogos = logos.slice(index, index + visibleCount);
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={prev}
        className="flex items-center justify-center bg-gray-100 rounded-full w-8 h-8 text-md font-bold text-gray-600"
      >
        &lt;
      </button>
      <div className="flex gap-6 overflow-hidden">
        {visibleLogos.map((logo, i) => (
          <img
            key={i}
            src={`/${logo.logo}`}
            alt={`Partner ${i}`}
            className="h-16 w-36 object-contain mx-auto"
          />
        ))}
      </div>
      <button
        onClick={next}
        className="flex items-center justify-center bg-gray-100 rounded-full w-8 h-8 text-md font-bold text-gray-600"
      >
        &gt;
      </button>
    </div>
  );
}

