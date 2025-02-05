import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AutoScrollCarousel = ({ 
  items, 
  renderItem, 
  title, 
  autoScrollInterval = 5000,
  className = "" 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        scroll('right');
      }, autoScrollInterval);

      return () => clearInterval(interval);
    }
  }, [isPaused, autoScrollInterval]);

  return (
    <div 
      className={`bg-white rounded-lg shadow-md py-6 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title && (
        <div className="px-6 mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
      )}
      
      <div className="relative">
        <div
          ref={containerRef}
          className="flex overflow-x-auto hide-scrollbar gap-4 px-6 scroll-smooth"
        >
          {items.map((item, index) => (
            <div key={item.id} className="flex-none">
              {renderItem(item, index)}
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

export default AutoScrollCarousel;