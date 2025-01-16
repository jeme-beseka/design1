// // src/components/products/ProductGrid.jsx
// import React, { useState } from 'react';
// import ProductFilter from './ProductFilter';
// import TrendingProductsCarousel from './TrendingProductsCarousel';
// import TopShopCarousel from '../shops/TopShopCarousel';
// import ProductCard from './ProductCard';

// const ProductGrid = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1);

//   const loadMoreProducts = async () => {
//     setLoading(true);
//     // Implement API call to load more products
//     setPage(prev => prev + 1);
//     setLoading(false);
//   };

//   return (
//     <div>
//       <div className="flex justify-end mb-6">
//         <ProductFilter onFilterChange={(categories) => {
//           // Implement filter logic
//         }} />
//       </div>

//       {/* First section of products */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {products.slice(0, 8).map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>

//       {/* Trending Products Carousel */}
//       <TrendingProductsCarousel />

//       {/* Second section of products */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {products.slice(8, 16).map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>

//       {/* Top Shops Carousel */}
//       <TopShopCarousel />

//       {/* Remaining products */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {products.slice(16).map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>

//       <div className="mt-8 text-center">
//         <button
//           onClick={loadMoreProducts}
//           disabled={loading}
//           className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
//         >
//           {loading ? 'Loading...' : 'Show More'}
//         </button>
//       </div>
//     </div>
//   );
// };



import React, { useState } from 'react';
import ProductFilter from './ProductFilter';
import DiscountedProductsCarousel from './DiscountedProductsCarousel';
import TrendingProductsCarousel from './TrendingProductsCarousel';
import TopShopCarousel from '../shops/TopShopCarousel';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const PRODUCTS_PER_SECTION = 8; // 2 rows of 4 products

  const loadMoreProducts = async () => {
    setLoading(true);
    // Implement API call to load more products
    setPage(prev => prev + 1);
    setLoading(false);
  };

  const renderProductSection = (startIndex, endIndex) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.slice(startIndex, endIndex).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-end mb-6">
        <ProductFilter onFilterChange={(categories) => {
          // Implement filter logic
        }} />
      </div>

      {/* First section of products */}
      {renderProductSection(0, PRODUCTS_PER_SECTION)}

      {/* Discounted Products Carousel */}
      <DiscountedProductsCarousel />

      {/* Second section of products */}
      {renderProductSection(PRODUCTS_PER_SECTION, PRODUCTS_PER_SECTION * 2)}

      {/* Trending Products Carousel */}
      <TrendingProductsCarousel />

      {/* Third section of products */}
      {renderProductSection(PRODUCTS_PER_SECTION * 2, PRODUCTS_PER_SECTION * 3)}

      {/* Top Shops Carousel */}
      <TopShopCarousel />

      {/* Remaining products */}
      {products.length > PRODUCTS_PER_SECTION * 3 && (
        renderProductSection(PRODUCTS_PER_SECTION * 3, products.length)
      )}

      <div className="mt-8 text-center">
        <button
          onClick={loadMoreProducts}
          disabled={loading}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? 'Loading...' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;