import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import DiscountedProductsCarousel from '../components/products/DiscountedProductsCarousel';
import TrendingProductsCarousel from '../components/products/TrendingProductsCarousel';
import TopShopCarousel from '../components/shops/TopShopCarousel';
import ProductGrid from '../components/products/ProductGrid';


const Home = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Dummy data for the product grid
    const dummyProducts = Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      name: `Product ${i + 1}`,
      description: `Description for Product ${i + 1}`,
      price: (Math.random() * 100).toFixed(2),
      image: `https://via.placeholder.com/200?text=Product+${i + 1}`,
      shopId: i % 5 + 1,
      shopName: `Shop ${i % 5 + 1}`,
    }));

    setProductData(dummyProducts);
  }, []);

  return (
    <Layout>
      {/* Discounted Products Carousel */}
      <DiscountedProductsCarousel autoScroll />

      {/* Product Grid with Dummy Data: First Section */}
      <div className="my-8">
        <ProductGrid products={productData.slice(0, 8)} />
      </div>

      {/* Trending Products Carousel */}
      <TrendingProductsCarousel autoScroll />

      {/* Product Grid with Dummy Data: Second Section */}
      <div className="my-8">
        <ProductGrid products={productData.slice(8, 16)} />
      </div>

      {/* Top Shops Carousel */}
      <TopShopCarousel autoScroll />

      {/* Product Grid with Dummy Data: Remaining Products */}
      <div className="my-8">
        <ProductGrid products={productData.slice(16)} />
      </div>
    </Layout>
  );
};

export default Home;
// // src/pages/Home.jsx
// import React, { useEffect, useRef} from 'react';
// import Layout from '../components/layout/Layout';
// import DiscountedProductsCarousel from '../components/products/DiscountedProductsCarousel';
// import TrendingProductsCarousel from '../components/products/TrendingProductsCarousel';
// import TopShopCarousel from '../components/shops/TopShopCarousel';
// import ProductGrid from '../components/products/ProductGrid';

// const Home = () => {
//   return (
//     <Layout>
//       {/* Discounted Products Carousel */}
//       <DiscountedProductsCarousel autoScroll />

//       {/* Product Grid: First Section */}
//       <div className="my-8">
//         <ProductGrid section="first" />
//       </div>

//       {/* Trending Products Carousel */}
//       <TrendingProductsCarousel autoScroll />

//       {/* Product Grid: Second Section */}
//       <div className="my-8">
//         <ProductGrid section="second" />
//       </div>

//       {/* Top Shops Carousel */}
//       <TopShopCarousel autoScroll/>

//       {/* Product Grid: Remaining Products */}
//       <div className="my-8">
//         <ProductGrid section="remaining" />
//       </div>
//     </Layout>
//   );
// };

// export default Home;
