import React, { useState, useEffect } from 'react';
import ProductFilter from './ProductFilter';
import { fetchProducts } from '../../services/dataService';
import DiscountedProductsCarousel from './DiscountedProductsCarousel';
import TopShopCarousel from '../shops/TopShopCarousel';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to load products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    loadProducts();
  }, []);

  const PRODUCTS_PER_SECTION = 12; // 3 rows of 4 products

  const loadMoreProducts = async () => {
    setLoading(true);
    // Implement API call to load more products
    setPage(prev => prev + 1);
    setLoading(false);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const renderProductSection = (startIndex, endIndex) => {
    const shuffledProducts = shuffleArray(products);
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {shuffledProducts.slice(startIndex, endIndex).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  };

  return (
    <>
      {error && (
        <div className="text-red-500 text-center p-4">
          {error}
        </div>
      )}
      {loading ? (
        <div className="text-center p-4">Loading products...</div>
      ) : (
        <div className="space-y-8">
          <div className="flex justify-end mb-6">
            <ProductFilter onFilterChange={(categories) => {
              // Implement filter logic
            }} />
          </div>
          <DiscountedProductsCarousel />
          {/* First section of products */}
          {renderProductSection(0, PRODUCTS_PER_SECTION)}
          <TopShopCarousel />
          {/* Second section of products */}
          {renderProductSection(PRODUCTS_PER_SECTION, PRODUCTS_PER_SECTION * 2)}
          {/* Third section of products */}
          {renderProductSection(PRODUCTS_PER_SECTION * 2, PRODUCTS_PER_SECTION * 3)}
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
      )}
    </>
  );
};

export default ProductGrid;
