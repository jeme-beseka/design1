import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { fetchProducts } from '../../services/dataService';

const SimilarProductsCarousel = ({ product }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  const similarProducts = allProducts.filter(
    (p) =>
      p.id !== product.id && // Exclude the current product
      (p.category === product.category || p.shopId === product.shopId) // Match category or shop
  );

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
    <div className="flex overflow-x-auto hide-scrollbar gap-4 pb-4">
      {similarProducts.map((p) => (
        <div key={p.id} className="flex-none w-48">
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
};

export default SimilarProductsCarousel;
