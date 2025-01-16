// // src/components/products/DiscountedProductsCarousel.jsx
import React from 'react';
import AutoScrollCarousel from '../common/AutoScrollCarousel';

const DiscountedProductsCarousel = () => {
  const discountedProducts = [
    // Sample data - replace with actual API call
    { id: 1, name: "Product 1", originalPrice: 100, discountedPrice: 80, discount: "20%", image: "/api/placeholder/200/200" },
    { id: 2, name: "Product 1", originalPrice: 100, discountedPrice: 80, discount: "20%", image: "/api/placeholder/200/200" },
    { id: 3, name: "Product 1", originalPrice: 100, discountedPrice: 80, discount: "20%", image: "/api/placeholder/200/200" },
    { id: 4, name: "Product 1", originalPrice: 100, discountedPrice: 80, discount: "20%", image: "/api/placeholder/200/200" },
    { id: 5, name: "Product 1", originalPrice: 100, discountedPrice: 80, discount: "20%", image: "/api/placeholder/200/200" },
    { id: 6, name: "Product 1", originalPrice: 100, discountedPrice: 80, discount: "20%", image: "/api/placeholder/200/200" },
    { id: 7, name: "Product 1", originalPrice: 100, discountedPrice: 80, discount: "20%", image: "/api/placeholder/200/200" },
    // Add more products...
  ];

  const renderDiscountedProduct = (product) => (
    <div className="w-64 bg-white rounded-lg shadow-sm p-4 h-50 hide-scrollbar">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-32 object-cover rounded-md"
      />
      <div className="mt-4">
        <h3 className="font-semibold">{product.name}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-gray-400 line-through">${product.originalPrice}</span>
          <span className="text-red-500 font-bold">${product.discountedPrice}</span>
          <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm">
            {product.discount} OFF
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <AutoScrollCarousel
      items={discountedProducts}
      renderItem={renderDiscountedProduct}
      title="Special Offers"
      autoScrollInterval={6000}
    />
  );
};
// import React, { useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const DiscountedProductsCarousel = ({ autoScroll }) => {
//   const scrollContainer = useRef(null);
  
//   useEffect(() => {
//     if (autoScroll) {
//       const interval = setInterval(() => {
//         scroll('right');
//       }, 1500);
//       return () => clearInterval(interval);
//     }
//   }, [autoScroll]);
//   // Sample data - replace with actual API call
//   const discountedProducts = [
//     { id: 1, name: "Product 1", originalPrice: 100, discountedPrice: 80, discount: "20%", image: "/api/placeholder/200/200" },
//     { id: 2, name: "Product 1", originalPrice: 100, discountedPrice: 80, discount: "20%", image: "/api/placeholder/200/200" },
//     { id: 3, name: "Product 1", originalPrice: 100, discountedPrice: 80, discount: "20%", image: "/api/placeholder/200/200" },
//     { id: 4, name: "Product 1", originalPrice: 100, discountedPrice: 80, discount: "20%", image: "/api/placeholder/200/200" },
//     { id: 5, name: "Product 1", originalPrice: 100, discountedPrice: 80, discount: "20%", image: "/api/placeholder/200/200" },
//     { id: 6, name: "Product 1", originalPrice: 100, discountedPrice: 80, discount: "20%", image: "/api/placeholder/200/200" },
//     { id: 7, name: "Product 1", originalPrice: 100, discountedPrice: 80, discount: "20%", image: "/api/placeholder/200/200" },
//   ];

//   const scroll = (direction) => {
//     const container = document.getElementById('discounted-products');
//     const scrollAmount = direction === 'left' ? -300 : 300;
//     container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//   };

//   return (
//     <div className="relative w-full py-6 bg-gray-50">
//       <h2 className="text-2xl font-bold mb-4 px-6">Special Offers</h2>
//       <div className="relative">
//         <div
//           id="discounted-products"
//           className="flex overflow-x-auto hide-scrollbar gap-4 px-6"
//           style={{ scrollBehavior: 'smooth' }}
//         >
//           {discountedProducts.map((product) => (
//             <div 
//               key={product.id}
//               className="flex-none w-64 bg-white rounded-lg shadow-md p-4"
//             >
//               <img 
//                 src={product.image} 
//                 alt={product.name}
//                 className="w-full h-48 object-cover rounded-md"
//               />
//               <div className="mt-4">
//                 <h3 className="font-semibold">{product.name}</h3>
//                 <div className="flex items-center gap-2 mt-2">
//                   <span className="text-gray-400 line-through">${product.originalPrice}</span>
//                   <span className="text-red-500 font-bold">${product.discountedPrice}</span>
//                   <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm">
//                     {product.discount} OFF
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={() => scroll('left')}
//           className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md ml-2"
//         >
//           <ChevronLeft size={24} />
//         </button>
//         <button
//           onClick={() => scroll('right')}
//           className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md mr-2"
//         >
//           <ChevronRight size={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

export default DiscountedProductsCarousel;