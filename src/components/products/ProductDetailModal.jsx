import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Heart, Share2, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SimilarProductsCarousel from './SimilarProductsCarousel';
import { useProductModal } from '../context/ProductModalContext';

const ProductDetailModal = () => {
  const { isOpen, currentProduct, closeModal } = useProductModal();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef(null);

  // Handle modal visibility with animation
  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure DOM is ready for the animation
      const timer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  useEffect(() => {
    // Update browser history when modal opens
    if (isOpen && currentProduct) {
      window.history.pushState(
        { productId: currentProduct.id },
        `Product: ${currentProduct.name}`,
        `/products/${currentProduct.id}`
      );
    }

    // Handle back button
    const handlePopState = () => {
      closeModal();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [isOpen, currentProduct, closeModal]);

  useEffect(() => {
    // Keyboard accessibility
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: currentProduct.name,
        text: currentProduct.description,
        url: window.location.href,
      });
    } catch (err) {
      // Fallback to copying link to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // Trap focus within modal for accessibility
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modal = modalRef.current;
    const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
    const focusableContent = modal.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[focusableContent.length - 1];

    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return;
      
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    };

    modal.addEventListener('keydown', handleTabKey);
    
    // Set focus on first element
    firstFocusableElement.focus();
    
    return () => {
      modal.removeEventListener('keydown', handleTabKey);
    };
  }, [isOpen]);

  if (!isOpen || !currentProduct) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? 'bg-opacity-50 opacity-100' : 'bg-opacity-0 opacity-0'}`}
      onClick={closeModal}
    >
      <div 
        ref={modalRef}
        className={`bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-transform duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          {/* Product Image */}
          <div className="mb-6">
            <img
              src={currentProduct.image}
              alt={currentProduct.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={handleShare}
              className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Share product"
            >
              <Share2 size={20} />
            </button>
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`p-2 rounded-lg flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isWishlisted 
                  ? 'bg-red-500 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart size={20} fill={isWishlisted ? 'white' : 'none'} />
            </button>
            <button 
              className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
              aria-label="Add to cart"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold" id="modal-title">{currentProduct.name}</h2>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-blue-600">
                ${currentProduct.price.toFixed(2)}
              </span>
              {currentProduct.discounted && (
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm">
                  Discounted
                </span>
              )}
            </div>

            {/* Description */}
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{currentProduct.description || "No description available."}</p>
            </div>

            {/* Similar Products List */}
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-4">Similar Products</h3>
              <SimilarProductsCarousel product={currentProduct} />
            </div>
          </div>
        </div>
        
        {/* Vendor Shop Link */}
        <div className="border-t m-0 p-1 bg-blue-200">
          <Link 
            to={`/shop-view/${currentProduct.shopId}`}
            className="text-black-600 hover:text-blue-600 flex items-center gap-1 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {currentProduct.shopName}<ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;

// import React, { useState } from 'react';
// import { ShoppingCart, Heart, Share2, X, ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import SimilarProductsCarousel from './SimilarProductsCarousel';

// const ProductDetailModal = ({ isOpen, onClose, product }) => {
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   if (!isOpen || !product) return null;

//   const handleShare = async () => {
//     try {
//       await navigator.share({
//         title: product.name,
//         text: product.description,
//         url: window.location.href,
//       });
//     } catch (err) {
//       // Fallback to copying link to clipboard
//       navigator.clipboard.writeText(window.location.href);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md"
//         >
//           <X size={24} />
//         </button>

//         <div className="p-6">
//           {/* Product Image */}
//           <div className="mb-6">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-96 object-cover rounded-lg"
//             />
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-4 mb-6">
//             <button
//               onClick={handleShare}
//               className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200"
//             >
//               <Share2 size={20} />
//             </button>
//             <button
//               onClick={() => setIsWishlisted(!isWishlisted)}
//               className={`p-2 rounded-lg flex items-center justify-center gap-2 ${
//                 isWishlisted 
//                   ? 'bg-red-500 text-white' 
//                   : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//               }`}
//             >
//               <Heart size={20} fill={isWishlisted ? 'white' : 'none'} />
//             </button>
//             <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2">
//               <ShoppingCart size={20} />
//               Add to Cart
//             </button>
//           </div>

//           {/* Product Details */}
//           <div className="space-y-4">
//             <h2 className="text-2xl font-bold">{product.name}</h2>
//             <div className="flex items-center gap-2">
//               <span className="text-2xl font-bold text-blue-600">
//                 ${product.price.toFixed(2)}
//               </span>
//               {product.discounted && (
//                 <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm">
//                   Discounted
//                 </span>
//               )}
//             </div>

//             {/* Description */}
//             <div className="border-t pt-4">
//               <h3 className="font-semibold mb-2">Description</h3>
//               <p className="text-gray-600">{product.description || "No description available."}</p>
//             </div>

//             {/* Similar Products Carousel */}
//             <div className="border-t pt-4">
//               <h3 className="font-semibold mb-4">Similar Products</h3>
//               <SimilarProductsCarousel product={product} />
//             </div>
//           </div>
//         </div>
//         {/* Vendor Shop Link */}
//         <div className="border-t m-0 p-1 bg-blue-200">
//               <Link 
//                 to={`/shop-view/${product.shopId}`}
//                 className="text-black-600 hover:text-blue-600 flex items-center gap-1"
//               >
//                 {product.shopName}<ArrowRight size={20} />
//               </Link>
//             </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailModal;

// // import React, { useState } from 'react';
// // import { ShoppingCart, Heart, Share2, Star, X, ChevronLeft, ChevronRight } from 'lucide-react';
// // import { Link } from 'react-router-dom';

// // const ProductDetailModal = ({ isOpen, onClose, product }) => {
// //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
// //   const [isWishlisted, setIsWishlisted] = useState(false);

// //   if (!isOpen) return null;

// //   const handleShare = async () => {
// //     try {
// //       await navigator.share({
// //         title: product.name,
// //         text: product.description,
// //         url: window.location.href,
// //       });
// //     } catch (err) {
// //       // Fallback to copying link to clipboard
// //       navigator.clipboard.writeText(window.location.href);
// //     }
// //   };

// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
// //       <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
// //         {/* Close Button */}
// //         <button
// //           onClick={onClose}
// //           className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md"
// //         >
// //           <X size={24} />
// //         </button>

// //         <div className="p-6">
// //           {/* Image Gallery */}
// //           <div className="relative mb-6">
// //             <div className="aspect-w-16 aspect-h-9 mb-4">
// //               <img
// //                 src={product.images[currentImageIndex]}
// //                 alt={product.name}
// //                 className="w-full h-96 object-cover rounded-lg"
// //               />
// //             </div>
            
// //             {/* Image Navigation */}
// //             {product.images.length > 1 && (
// //               <div className="flex gap-2 overflow-x-auto">
// //                 {product.images.map((image, index) => (
// //                   <button
// //                     key={index}
// //                     onClick={() => setCurrentImageIndex(index)}
// //                     className={`flex-none w-20 h-20 rounded-md overflow-hidden ${
// //                       currentImageIndex === index ? 'ring-2 ring-blue-500' : ''
// //                     }`}
// //                   >
// //                     <img
// //                       src={image}
// //                       alt={`${product.name} ${index + 1}`}
// //                       className="w-full h-full object-cover"
// //                     />
// //                   </button>
// //                 ))}
// //               </div>
// //             )}
// //           </div>

// //           {/* Action Buttons */}
// //           <div className="flex gap-4 mb-6">
// //             <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2">
// //               <ShoppingCart size={20} />
// //               Add to Cart
// //             </button>
// //             <button
// //               onClick={() => setIsWishlisted(!isWishlisted)}
// //               className={`p-2 rounded-lg flex items-center justify-center gap-2 ${
// //                 isWishlisted 
// //                   ? 'bg-red-500 text-white' 
// //                   : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
// //               }`}
// //             >
// //               <Heart size={20} fill={isWishlisted ? 'white' : 'none'} />
// //             </button>
// //             <button
// //               onClick={handleShare}
// //               className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200"
// //             >
// //               <Share2 size={20} />
// //             </button>
// //           </div>

// //           {/* Product Details */}
// //           <div className="space-y-4">
// //             <h2 className="text-2xl font-bold">{product.name}</h2>
// //             <div className="flex items-center justify-between">
// //               <span className="text-2xl font-bold text-blue-600">
// //                 ${product.price.toFixed(2)}
// //               </span>
// //               <Link 
// //                 to={`/shop/${product.shopId}`}
// //                 className="text-gray-600 hover:text-blue-500 flex items-center gap-1"
// //               >
// //                 {product.shopName}
// //               </Link>
// //             </div>

// //             {/* Description */}
// //             <div className="border-t pt-4">
// //               <h3 className="font-semibold mb-2">Description</h3>
// //               <p className="text-gray-600">{product.description}</p>
// //             </div>

// //             {/* Ratings */}
// //             <div className="border-t pt-4">
// //               <div className="flex items-center gap-2 mb-2">
// //                 <Star className="fill-yellow-400 text-yellow-400" size={24} />
// //                 <span className="font-bold text-lg">{product.rating}</span>
// //                 <span className="text-gray-500">
// //                   ({product.reviewCount} reviews)
// //                 </span>
// //               </div>
// //             </div>

// //             {/* Recommended Products */}
// //             <div className="border-t pt-4">
// //               <h3 className="font-semibold mb-4">Similar Products</h3>
// //               <div className="relative">
// //                 <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4">
// //                   {product.recommendedProducts.map((recProduct) => (
// //                     <div
// //                       key={recProduct.id}
// //                       className="flex-none w-48 bg-white rounded-lg shadow-md"
// //                     >
// //                       <img
// //                         src={recProduct.image}
// //                         alt={recProduct.name}
// //                         className="w-full h-32 object-cover rounded-t-lg"
// //                       />
// //                       <div className="p-3">
// //                         <h4 className="font-semibold line-clamp-2">
// //                           {recProduct.name}
// //                         </h4>
// //                         <div className="flex items-center justify-between mt-2">
// //                           <span className="font-bold text-blue-600">
// //                             ${recProduct.price.toFixed(2)}
// //                           </span>
// //                           <span className="text-sm text-gray-500">
// //                             {recProduct.shopName}
// //                           </span>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDetailModal;