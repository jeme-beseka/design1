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
// import TrendingProductsCarousel from './TrendingProductsCarousel';
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
      {/* {products.slice(startIndex, endIndex).map((product) => (
        <ProductCard key={product.id} product={product} /> */}
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );

  const dummyProducts = [
    {
      id: 1,
      name: "Stylish T-Shirt",
      price: 29.99,
      image: "https://example.com/tshirt.jpg",
      shopId: "shop1",
      shopName: "Fashion Outlet"
    },
    {
      id: 2,
      name: "Comfortable Jeans",
      price: 59.99,
      image: "https://example.com/jeans.jpg",
      shopId: "shop2",
      shopName: "Denim World"
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 89.99,
      image: "https://example.com/shoes.jpg",
      shopId: "shop3",
      shopName: "Sports Gear"
    },
    {
      id: 4,
      name: "Leather Wallet",
      price: 39.99,
      image: "https://example.com/wallet.jpg",
      shopId: "shop4",
      shopName: "Accessories Plus"
    },
    {
      id: 5,
      name: "Smartwatch",
      price: 199.99,
      image: "https://example.com/smartwatch.jpg",
      shopId: "shop5",
      shopName: "Tech Haven"
    },
    {
      id: 6,
      name: "Sunglasses",
      price: 79.99,
      image: "https://example.com/sunglasses.jpg",
      shopId: "shop6",
      shopName: "Sunny Shades"
    },
    {
      id: 71,
      name: "Stylish T-Shirt",
      price: 29.99,
      image: "https://example.com/tshirt.jpg",
      shopId: "shop1",
      shopName: "Fashion Outlet"
    },
    {
      id: 27,
      name: "Comfortable Jeans",
      price: 59.99,
      image: "https://example.com/jeans.jpg",
      shopId: "shop2",
      shopName: "Denim World"
    },
    {
      id: 83,
      name: "Running Shoes",
      price: 89.99,
      image: "https://example.com/shoes.jpg",
      shopId: "shop3",
      shopName: "Sports Gear"
    },
    {
      id: 49,
      name: "Leather Wallet",
      price: 39.99,
      image: "https://example.com/wallet.jpg",
      shopId: "shop4",
      shopName: "Accessories Plus"
    },
    {
      id: 58,
      name: "Smartwatch",
      price: 199.99,
      image: "https://example.com/smartwatch.jpg",
      shopId: "shop5",
      shopName: "Tech Haven"
    },
    {
      id: 56,
      name: "Sunglasses",
      price: 79.99,
      image: "https://example.com/sunglasses.jpg",
      shopId: "shop6",
      shopName: "Sunny Shades"
    },
    {
      id: 21,
      name: "Stylish T-Shirt",
      price: 29.99,
      image: "https://example.com/tshirt.jpg",
      shopId: "shop1",
      shopName: "Fashion Outlet"
    },
    {
      id: 22,
      name: "Comfortable Jeans",
      price: 59.99,
      image: "https://example.com/jeans.jpg",
      shopId: "shop2",
      shopName: "Denim World"
    },
    {
      id: 32,
      name: "Running Shoes",
      price: 89.99,
      image: "https://example.com/shoes.jpg",
      shopId: "shop3",
      shopName: "Sports Gear"
    },
    {
      id: 42,
      name: "Leather Wallet",
      price: 39.99,
      image: "https://example.com/wallet.jpg",
      shopId: "shop4",
      shopName: "Accessories Plus"
    },
    {
      id: 25,
      name: "Smartwatch",
      price: 199.99,
      image: "https://example.com/smartwatch.jpg",
      shopId: "shop5",
      shopName: "Tech Haven"
    },
    {
      id: 26,
      name: "Sunglasses",
      price: 79.99,
      image: "https://example.com/sunglasses.jpg",
      shopId: "shop6",
      shopName: "Sunny Shades"
    },
    {
      id: 11,
      name: "Stylish T-Shirt",
      price: 29.99,
      image: "https://example.com/tshirt.jpg",
      shopId: "shop1",
      shopName: "Fashion Outlet"
    },
    {
      id: 12,
      name: "Comfortable Jeans",
      price: 59.99,
      image: "https://example.com/jeans.jpg",
      shopId: "shop2",
      shopName: "Denim World"
    },
    {
      id: 13,
      name: "Running Shoes",
      price: 89.99,
      image: "https://example.com/shoes.jpg",
      shopId: "shop3",
      shopName: "Sports Gear"
    },
    {
      id: 14,
      name: "Leather Wallet",
      price: 39.99,
      image: "https://example.com/wallet.jpg",
      shopId: "shop4",
      shopName: "Accessories Plus"
    },
    {
      id: 15,
      name: "Smartwatch",
      price: 199.99,
      image: "https://example.com/smartwatch.jpg",
      shopId: "shop5",
      shopName: "Tech Haven"
    },
    {
      id: 16,
      name: "Sunglasses",
      price: 79.99,
      image: "https://example.com/sunglasses.jpg",
      shopId: "shop6",
      shopName: "Sunny Shades"
    },
    
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-end mb-6">
        <ProductFilter onFilterChange={(categories) => {
          // Implement filter logic
        }} />
      </div>
      <DiscountedProductsCarousel />
      {/* First section of products */}
      {renderProductSection(0, PRODUCTS_PER_SECTION)}

      {/* Discounted Products Carousel */}
      
      <TopShopCarousel />
      {/* Second section of products */}
      {renderProductSection(PRODUCTS_PER_SECTION, PRODUCTS_PER_SECTION * 2)}

      {/* Trending Products Carousel */}
      {/* <TrendingProductsCarousel /> */}

      {/* Third section of products */}
      {renderProductSection(PRODUCTS_PER_SECTION * 2, PRODUCTS_PER_SECTION * 3)}

      {/* Top Shops Carousel */}
      {/* <TopShopCarousel /> */}

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