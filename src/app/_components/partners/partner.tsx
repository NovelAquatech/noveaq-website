'use client';
import React, { useState, useEffect } from 'react';

const PartnersCarousel = ({ logos }) => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleCount = isMobile ? 1 : 4;

  const next = () => setIndex((prev) => (prev + visibleCount) % logos.length);
  const prev = () =>
    setIndex((prev) => (prev - visibleCount + logos.length) % logos.length);

  const visibleLogos = logos.slice(index, index + visibleCount);

  return (
    <div className="w-4/5 mx-auto text-center py-8">
      <h2 className="text-2xl font-bold mb-6">Our Partner</h2>
      <div className="flex items-center justify-center gap-4">
        <button onClick={prev} className="text-3xl font-bold">&lt;</button>
        <div className="flex gap-6 overflow-hidden">
          {visibleLogos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Partner ${i}`}
              className="h-24 object-contain mx-auto"
            />
          ))}
        </div>
        <button onClick={next} className="text-3xl font-bold">&gt;</button>
      </div>
    </div>
  );
};


