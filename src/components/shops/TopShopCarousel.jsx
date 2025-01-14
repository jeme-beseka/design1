// src/components/shops/TopShopsCarousel.jsx
import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopShopsCarousel = ({ autoScroll }) => {
  const scrollContainer = useRef(null);

  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        scroll('right');
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [autoScroll]);

  
  // Sample data - replace with actual API call
  const topShops = [
    { id: 1, name: "Shop Name", rating: 4.8, totalRatings: 1234, image: "/api/placeholder/200/200" },
    { id: 2, name: "Shop Name", rating: 4.7, totalRatings: 1100, image: "/api/placeholder/200/200" },
    { id: 3, name: "Shop Name", rating: 4.6, totalRatings: 980, image: "/api/placeholder/200/200" },
    { id: 1, name: "Shop Name", rating: 4.8, totalRatings: 1234, image: "/api/placeholder/200/200" },
    { id: 2, name: "Shop Name", rating: 4.7, totalRatings: 1100, image: "/api/placeholder/200/200" },
    { id: 3, name: "Shop Name", rating: 4.6, totalRatings: 980, image: "/api/placeholder/200/200" },
    { id: 1, name: "Shop Name", rating: 4.8, totalRatings: 1234, image: "/api/placeholder/200/200" },
    { id: 2, name: "Shop Name", rating: 4.7, totalRatings: 1100, image: "/api/placeholder/200/200" },
    { id: 3, name: "Shop Name", rating: 4.6, totalRatings: 980, image: "/api/placeholder/200/200" },
    { id: 1, name: "Shop Name", rating: 4.8, totalRatings: 1234, image: "/api/placeholder/200/200" },
    { id: 2, name: "Shop Name", rating: 4.7, totalRatings: 1100, image: "/api/placeholder/200/200" },
    { id: 3, name: "Shop Name", rating: 4.6, totalRatings: 980, image: "/api/placeholder/200/200" },    
    // Add more shops as needed
  ];

  const scroll = (direction) => {
    const container = document.getElementById('top-shops');
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="bg-white rounded-lg shadow-md my-8 py-6">
      <div className="px-6 mb-4">
        <Link to="/shops" className="group inline-block">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            Top Rated Shops
            <span className="text-gray-400 group-hover:text-gray-600">
              (View All)
            </span>
          </h2>
        </Link>
      </div>
      
      <div className="relative">
      {/* <div
          ref={scrollContainer}
          className="flex overflow-x-auto hide-scrollbar gap-4 px-6"
        > */}
        <div
          id="top-shops"
          className="flex overflow-x-auto hide-scrollbar gap-4 px-6"
          style={{ scrollBehavior: 'smooth' }}
        >
          {topShops.map((shop) => (
            <div 
              key={shop.id}
              className="flex-none w-64 bg-white rounded-lg shadow-sm p-4"
            >
              <img 
                src={shop.image} 
                alt={shop.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4">
                <h3 className="font-semibold">{shop.name}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <Star className="fill-yellow-400 text-yellow-400" size={16} />
                  <span className="font-medium">{shop.rating}</span>
                  <span className="text-gray-500">({shop.totalRatings})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md ml-2"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md mr-2"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TopShopsCarousel;