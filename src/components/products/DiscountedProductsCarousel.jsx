import React, { useState, useEffect } from 'react';
import AutoScrollCarousel from '../common/AutoScrollCarousel';
import { fetchDiscountedProducts } from '../../services/dataService';
import { useProductModal } from '../context/ProductModalContext';

const DiscountedProductsCarousel = () => {
  const { openModal } = useProductModal(); // Use the ProductModalContext
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchDiscountedProducts();
        setDiscountedProducts(data);
      } catch (err) {
        setError('Failed to load discounted products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    loadProducts();
  }, []);

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        {error}
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-center p-4">Loading discounted products...</div>
    );
  }

  const renderDiscountedProduct = (product) => (
    <div 
      className="w-56 sm:w-64 bg-white rounded-lg shadow-lg p-2 h-56 sm:h-64 hide-scrollbar border-2 mt-1 mb-1"
      onClick={() => openModal(product)} // Open modal on click
    >
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-32 sm:h-40 object-cover rounded-md"
      />
      <div className="mt-2 sm:mt-4">
        <h3 className="font-semibold text-sm sm:text-base">{product.name}</h3>
        <div className="flex items-center gap-1 sm:gap-2 mt-1 sm:mt-2">
          <span className="text-gray-400 line-through text-xs sm:text-sm">${product.originalPrice}</span>
          <span className="text-red-500 font-bold text-sm sm:text-base">${product.discountedPrice}</span>
          <span className="bg-red-100 text-red-600 px-1 sm:px-2 py-1 rounded-full text-xs sm:text-sm">
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
      autoScrollInterval={1500}
      hideScrollbar={true}
      itemsToShow={5}
    />
  );
};

export default DiscountedProductsCarousel;


// import React, { useState, useEffect } from 'react';
// import AutoScrollCarousel from '../common/AutoScrollCarousel';
// import { fetchDiscountedProducts } from '../../services/dataService';
// import ProductDetailModal from './ProductDetailModal';

// const DiscountedProductsCarousel = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [discountedProducts, setDiscountedProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const data = await fetchDiscountedProducts();
//         setDiscountedProducts(data);
//       } catch (err) {
//         setError('Failed to load discounted products');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     loadProducts();
//   }, []);

//   if (error) {
//     return (
//       <div className="text-red-500 text-center p-4">
//         {error}
//       </div>
//     );
//   }

//   if (loading) {
//     return (
//       <div className="text-center p-4">Loading discounted products...</div>
//     );
//   }

//   const renderDiscountedProduct = (product) => (
//     <div 
//       className="w-56 sm:w-64 bg-white rounded-lg shadow-lg p-2 h-56 sm:h-64 hide-scrollbar border-2 mt-1 mb-1"
//       onClick={() => {
//         setSelectedProduct(product);
//         setIsModalOpen(true);
//       }}
//     >
//       <img 
//         src={product.image} 
//         alt={product.name}
//         className="w-full h-32 sm:h-40 object-cover rounded-md"
//       />
//       <div className="mt-2 sm:mt-4">
//         <h3 className="font-semibold text-sm sm:text-base">{product.name}</h3>
//         <div className="flex items-center gap-1 sm:gap-2 mt-1 sm:mt-2">
//           <span className="text-gray-400 line-through text-xs sm:text-sm">${product.originalPrice}</span>
//           <span className="text-red-500 font-bold text-sm sm:text-base">${product.discountedPrice}</span>
//           <span className="bg-red-100 text-red-600 px-1 sm:px-2 py-1 rounded-full text-xs sm:text-sm">
//             {product.discount} OFF
//           </span>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <ProductDetailModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         product={selectedProduct}
//       />
//       <AutoScrollCarousel
//         items={discountedProducts}
//         renderItem={renderDiscountedProduct}
//         title="Special Offers"
//         autoScrollInterval={1500}
//         hideScrollbar={true}
//         itemsToShow={5}
//       />
//     </>
//   );
// };

// export default DiscountedProductsCarousel;
