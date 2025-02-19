// src/components/shops/ShopView.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import ProductCard from '../../components/products/ProductCard';
import ShopFilter from '../../components/shops/ShopFilter';
import { Bookmark } from 'lucide-react';
import DiscountedProductsCarousel from '../../components/products/DiscountedProductsCarousel';
import { allShops } from '../../data/shopData';
import { dummyProducts } from '../../data/productData';

const ShopView = () => {
  const navigate = useNavigate();
  const { shopId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [shopData, setShopData] = useState(null);

  useEffect(() => {
    // Find the shop data based on the shopId
    const shop = allShops.find(shop => shop.id === parseInt(shopId));
    if (shop) {
      setShopData(shop);
      
      // Filter products based on the shopId
      const productsForShop = dummyProducts.filter(product => product.shopId === parseInt(shopId));
      setFilteredProducts(productsForShop);
    }
  }, [shopId]);

  const filterProducts = (filters) => {
    if (!shopData) return;

    let products = filteredProducts;

    if (filters.category.length) {
      products = products.filter((product) => filters.category.includes(product.category));
    }

    setFilteredProducts(products);
  };

  if (!shopData) {
    return (
      <Layout>
        <div className="container mx-auto py-8">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  const discountedProducts = filteredProducts.filter(product => product.discounted);

  return (
    <Layout>
      <div className="container mx-auto py-8">
        {/* Banner Section */}
        <div className="relative h-48 md:h-64 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={shopData.image}
            alt="Shop Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-[-36px] left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-500 overflow-hidden">
              <img
                src={shopData.image}
                alt="Shop Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bookmark and Shop Profile Button */}
        <div className="flex justify-between items-center mt-4">
          <button
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => alert('Shop bookmarked!')}
          >
            <Bookmark size={20} /> Bookmark Shop
          </button>

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate(`/shop-profile/${shopId}`)}
          >
            <img
              src={shopData.image}
              alt="Shop Logo"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
          </div>
        </div>

        {/* Shop Information */}
        <div className="mt-16 text-center">
          <h1 className="text-3xl font-bold">{shopData.name}</h1>
          <p className="text-gray-600">Location: {shopData.location}</p>
          <p className="text-gray-600">Contact: +123 456 7890</p>
          <p className="text-gray-600 mt-4">{shopData.description}</p>
        </div>

        {/* Discounted Products Carousel */}
        {discountedProducts.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Discounted Products</h2>
            <DiscountedProductsCarousel
              products={discountedProducts}
            />
          </div>
        )}

        {/* Display Product Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ShopView;
