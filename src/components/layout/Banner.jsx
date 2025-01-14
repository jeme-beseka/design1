// src/components/layout/Banner.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Banner = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const banners = [
    { id: 1, image: '/api/placeholder/1200/200', alt: 'Special Offers' },
    { id: 2, image: '/api/placeholder/1200/200', alt: 'New Arrivals' },
    { id: 3, image: '/api/placeholder/1200/200', alt: 'Season Sale' },
  ];

  const nextBanner = () => {
    setCurrentBannerIndex((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBannerIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative h-[33.67vh] bg-gray-100">
      <div className="h-full relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out h-full"
          style={{ transform: `translateX(-${currentBannerIndex * 100}%)` }}
        >
          {banners.map((banner) => (
            <div key={banner.id} className="w-full h-full flex-shrink-0">
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <button
          onClick={prevBanner}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextBanner}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Banner;