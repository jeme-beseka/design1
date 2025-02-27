import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { fetchProducts } from '../../services/dataService';
import { useProductModal } from '../context/ProductModalContext';

const SimilarProductsCarousel = ({ product }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { openModal } = useProductModal();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setAllProducts(data);
      } catch (err) {
        setError('Failed to load products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    loadProducts();
  }, []);

  // Filter similar products based on tags or shop
  const similarProducts = allProducts.filter((p) => {
    if (p.id === product.id) return false; // Exclude current product
  
    // Split categories into arrays, handling both comma-separated strings and single categories
    const productCategories = product.category.toLowerCase().split(',').map(cat => cat.trim());
    const compareCategories = p.category.toLowerCase().split(',').map(cat => cat.trim());
    
    // Check if there's at least one matching category
    const hasMatchingCategory = productCategories.some(category => 
      compareCategories.includes(category)
    );
  
    // Return true if product matches any of our similarity criteria
    return (
      hasMatchingCategory || 
      p.shopId === product.shopId || 
      p.name === product.name
    );
  });
  //   (p) =>
  //     p.id !== product.id && // Exclude the current product
  //     (p.category === product.category || p.shopId === product.shopId || p.name === product.name) // Match category or shop or name
  // );

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        {error}
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-center p-4">Loading similar products...</div>
    );
  }

  return (
    <div className="flex overflow-x-auto hide-scrollbar hover:scroll-auto snap-x snap-mandatory scroll-smooth gap-4 pb-4 px-4">
      {similarProducts.map((p) => (
        <div 
          key={p.id} 
          className="flex-none w-60 snap-start cursor-pointer hover:shadow-lg transition-all duration-300"
          onClick={() => openModal(p)}
          tabIndex={0}
          role="button"
          aria-label={`View ${p.name} details`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              openModal(p);
            }
          }}
        >
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
};

export default SimilarProductsCarousel;



// import React, { useState, useEffect } from 'react';
// import ProductCard from './ProductCard';
// import { fetchProducts } from '../../services/dataService';
// import { useProductModal } from '../context/ProductModalContext';

// const SimilarProductsCarousel = ({ product }) => {
//   const { openModal } = useProductModal();
//   const [allProducts, setAllProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const data = await fetchProducts();
//         setAllProducts(data);
//       } catch (err) {
//         setError('Failed to load products');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     loadProducts();
//   }, []);

//   // Filter similar products based on tags or shop
//   const similarProducts = allProducts.filter((p) => {
//     if (p.id === product.id) return false; // Exclude current product
  
//     // Split categories into arrays, handling both comma-separated strings and single categories
//     const productCategories = product.category.toLowerCase().split(',').map(cat => cat.trim());
//     const compareCategories = p.category.toLowerCase().split(',').map(cat => cat.trim());
    
//     // Check if there's at least one matching category
//     const hasMatchingCategory = productCategories.some(category => 
//       compareCategories.includes(category)
//     );
  
//     // Return true if product matches any of our similarity criteria
//     return (
//       hasMatchingCategory || 
//       p.shopId === product.shopId || 
//       p.name === product.name
//     );
//   });
//   //   (p) =>
//   //     p.id !== product.id && // Exclude the current product
//   //     (p.category === product.category || p.shopId === product.shopId || p.name === product.name) // Match category or shop or name
//   // );

//   if (error) {
//     return (
//       <div className="text-red-500 text-center p-4">
//         {error}
//       </div>
//     );
//   }

//   if (loading) {
//     return (
//       <div className="text-center p-4">Loading similar products...</div>
//     );
//   }

//   return (
//     <div className="flex overflow-x-auto hide-scrollbar hover:scroll-auto snap-x snap-mandatory scroll-smooth gap-4 pb-4 px-4">
//       {similarProducts.map((p) => (
//         <div key={p.id} className="flex-none w-60 snap-start">
//           <ProductCard product={p} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SimilarProductsCarousel;
