// // src/components/layout/Banner.jsx
import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const bannerContent = [
    {
      title: "Welcome to Online Mall",
      subtitle: "Here is how you can manage students",
      description: "View all the students stored in our database."
    },
    {
      title: "New Arrivals",
      subtitle: "Easily manage your student roster",
      description: "Add other student to the system quickly and efficiently."
    },
    {
      title: "Season Sales",
      subtitle: "Keep your records up to date",
      description: "Edit and delete users on the system as needed."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === bannerContent.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[33.67 vh] bg-grey-100 shadow-lg rounded-lg overflow-hidden">
      <div 
        className="transition-transform duration-500 ease-in-out flex"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {bannerContent.map((content, index) => (
          <div 
            key={index}
            className="min-w-full p-6"
          >
            <h1 className="text-2xl font-bold mb-2">{content.title}</h1>
            <h2 className="text-lg mb-2">{content.subtitle}</h2>
            <p className="text-gray-600">{content.description}</p>
          </div>
        ))}
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerContent.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const Banner = () => {
//   const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

//   const banners = [
//     { id: 1, image: '/api/placeholder/1200/200', alt: 'Special Offers' },
//     { id: 2, image: '/api/placeholder/1200/200', alt: 'New Arrivals' },
//     { id: 3, image: '/api/placeholder/1200/200', alt: 'Season Sale' },
//   ];

//   const nextBanner = () => {
//     setCurrentBannerIndex((prev) => (prev + 1) % banners.length);
//   };

//   const prevBanner = () => {
//     setCurrentBannerIndex((prev) => (prev - 1 + banners.length) % banners.length);
//   };

//   return (
//     <div className="relative h-[33.67vh] bg-gray-100">
//       <div className="h-full relative overflow-hidden">
//         <div
//           className="flex transition-transform duration-300 ease-in-out h-full"
//           style={{ transform: `translateX(-${currentBannerIndex * 100}%)` }}
//         >
//           {banners.map((banner) => (
//             <div key={banner.id} className="w-full h-full flex-shrink-0">
//               <img
//                 src={banner.image}
//                 alt={banner.alt}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={prevBanner}
//           className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
//         >
//           <ChevronLeft size={24} />
//         </button>
//         <button
//           onClick={nextBanner}
//           className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
//         >
//           <ChevronRight size={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Banner;