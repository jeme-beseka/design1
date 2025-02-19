import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
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
      <ProductGrid />
    </Layout>
  );
};

export default Home;
