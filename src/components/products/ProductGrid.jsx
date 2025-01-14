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




// src/components/products/ProductGrid.jsx
import React, { useState } from 'react';
import ProductFilter from './ProductFilter';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadMoreProducts = async () => {
    setLoading(true);
    // Implement API call to load more products
    // Update products state with new items
    setPage(prev => prev + 1);
    setLoading(false);
  };

  return (
    <div>
      <div className="flex justify-end mb-6">
        <ProductFilter onFilterChange={(categories) => {
          // Implement filter logic
        }} />
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-500 mt-1">{product.description}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-bold">${product.price}</span>
                <button className="text-blue-500 hover:text-blue-600">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <div className="mt-8 text-start">
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