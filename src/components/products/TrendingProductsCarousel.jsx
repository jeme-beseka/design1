// src/components/products/TrendingProductsCarousel.jsx
import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';

const TrendingProductsCarousel = ({ autoScroll }) => {
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
  const trendingProducts = [
    { id: 1, name: "Product Name", sales: 1234, price: 99.99, image: "/api/placeholder/200/200" },
    { id: 2, name: "Product Name", sales: 1100, price: 89.99, image: "/api/placeholder/200/200" },
    { id: 3, name: "Product Name", sales: 980, price: 79.99, image: "/api/placeholder/200/200" },
    { id: 1, name: "Product Name", sales: 1234, price: 99.99, image: "/api/placeholder/200/200" },
    { id: 2, name: "Product Name", sales: 1100, price: 89.99, image: "/api/placeholder/200/200" },
    { id: 3, name: "Product Name", sales: 980, price: 79.99, image: "/api/placeholder/200/200" },
    { id: 1, name: "Product Name", sales: 1234, price: 99.99, image: "/api/placeholder/200/200" },
    { id: 2, name: "Product Name", sales: 1100, price: 89.99, image: "/api/placeholder/200/200" },
    { id: 3, name: "Product Name", sales: 980, price: 79.99, image: "/api/placeholder/200/200" },
    { id: 1, name: "Product Name", sales: 1234, price: 99.99, image: "/api/placeholder/200/200" },
    { id: 2, name: "Product Name", sales: 1100, price: 89.99, image: "/api/placeholder/200/200" },
    { id: 3, name: "Product Name", sales: 980, price: 79.99, image: "/api/placeholder/200/200" },
    // Add more products as needed
  ];

  const scroll = (direction) => {
    const container = document.getElementById('trending-products');
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="bg-white rounded-lg shadow-md my-8 py-6">
      <div className="px-6 mb-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          Trending Products
          <TrendingUp size={24} className="text-red-500" />
        </h2>
      </div>
      
      <div className="relative">
      {/* <div
          ref={scrollContainer}
          className="flex overflow-x-auto hide-scrollbar gap-4 px-6"
        > */}
        <div
          id="trending-products"
          className="flex overflow-x-auto hide-scrollbar gap-4 px-6"
          style={{ scrollBehavior: 'smooth' }}
        >
          {trendingProducts.map((product) => (
            <div 
              key={product.id}
              className="flex-none w-64 bg-white rounded-lg shadow-sm p-4"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4">
                <h3 className="font-semibold">{product.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-bold text-lg">${product.price}</span>
                  <span className="text-gray-600">{product.sales} sold</span>
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

export default TrendingProductsCarousel;