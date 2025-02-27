import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './autoscroll.css';

const AutoScrollCarousel = ({ 
  items, 
  renderItem, 
  title, 
  autoScrollInterval = 2000,
  className = "" 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const totalItems = items.length;

  const scroll = (direction) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      // Update current index for infinite scrolling
      if (direction === 'right') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
      }
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
      className={`bg-white rounded-lg shadow-md py-4 sm:py-6 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title && (
        <div className="px-4 sm:px-6 mb-2 sm:mb-4">
          <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
        </div>
      )}
      
      <div className="relative">
        <div
          ref={containerRef}
          className="flex overflow-x-hidden hide-scrollbar gap-3 sm:gap-4 px-4 sm:px-6 scroll-smooth"
        >
          {/* Duplicate items for infinite scrolling effect */}
          {[...items, ...items].map((item, index) => (
            <div key={item.id} className="flex-none">
              {renderItem(item, index)}
            </div>
          ))}
        </div>
        
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-1 sm:p-2 rounded-full shadow-md ml-1 sm:ml-2"
        >
          <ChevronLeft size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-1 sm:p-2 rounded-full shadow-md mr-1 sm:mr-2"
        >
          <ChevronRight size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};

export default AutoScrollCarousel;
