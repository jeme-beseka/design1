import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import ProductCard from '../../components/products/ProductCard';
import ShopFilter from '../../components/shops/ShopFilter';
import { Bookmark } from 'lucide-react';
import DiscountedProductsCarousel from '../../components/products/DiscountedProductsCarousel';

const ShopView = () => {
  const navigate = useNavigate();
  const { shopId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [shopData, setShopData] = useState(null);

  useEffect(() => {
    const fetchShopData = () => {
      const dummyShopData = {
        id: shopId,
        bannerImage: 'https://via.placeholder.com/1200x300',
        shopLogo: 'https://via.placeholder.com/150',
        name: 'Shop Electro',
        products: [
          { id: 1, name: 'iPhone 13', category: 'iPhone', price: 799, inStock: 73, popularity: 13, discounted: false, image: 'https://via.placeholder.com/200' },
          { id: 2, name: 'Samsung Galaxy S20+', category: 'Samsung', price: 299, inStock: 15, popularity: 4, discounted: false, image: 'https://via.placeholder.com/200' },
          { id: 3, name: 'MacBook Pro 2013', category: 'Laptop', price: 1099, inStock: 5, popularity: 2, discounted: true, image: 'https://via.placeholder.com/200' },
          { id: 4, name: 'JBL Bluetooth Speaker', category: 'Bluetooth Speakers', price: 149, inStock: 84, popularity: 43, discounted: false, image: 'https://via.placeholder.com/200' },
          { id: 5, name: 'Tablet Pro', category: 'Tablet', price: 359, inStock: 15, popularity: 4, discounted: true, image: 'https://via.placeholder.com/200' },
          { id: 6, name: 'HP Gaming Laptop', category: 'Laptop', price: 1499, inStock: 4, popularity: 5, discounted: false, image: 'https://via.placeholder.com/200' },
          { id: 7, name: 'Smart Watch T3', category: 'Wearable', price: 119, inStock: 25, popularity: 4, discounted: true, image: 'https://via.placeholder.com/200' },
          { id: 8, name: 'Wireless Earbuds TWS-2', category: 'Audio', price: 149, inStock: 109, popularity: 4, discounted: false, image: 'https://via.placeholder.com/200' },
          { id: 11, name: 'iPhone 15', category: 'iPhone', price: 899, inStock: 44, popularity: 16, discounted: false, image: 'https://via.placeholder.com/200' },
          { id: 12, name: 'Samsung Galaxy S22 Ultra', category: 'Samsung', price: 699, inStock: 5, popularity: 4, discounted: false, image: 'https://via.placeholder.com/200' },
          { id: 13, name: 'MacBook Pro 2017', category: 'Laptop', price: 1299, inStock: 32, popularity: 12, discounted: false, image: 'https://via.placeholder.com/200' },
          { id: 14, name: 'Sony Bluetooth Speaker', category: 'Bluetooth Speakers', price: 99, inStock: 40, popularity: 13, discounted: false, image: 'https://via.placeholder.com/200' },
          { id: 15, name: 'Tablet Pro3', category: 'Tablet', price: 409, inStock: 15, popularity: 4, discounted: false, image: 'https://via.placeholder.com/200' },
          { id: 16, name: 'Gaming Laptop DMX', category: 'Laptop', price: 1499, inStock: 14, popularity: 8, discounted: false, image: 'https://via.placeholder.com/200' },
          { id: 17, name: 'Smart Watch T6', category: 'Wearable', price: 199, inStock: 25, popularity: 4, discounted: true, image: 'https://via.placeholder.com/200' },
          { id: 18, name: 'Wireless Earbuds X16', category: 'Audio', price: 149, inStock: 30, popularity: 4, discounted: false, image: 'https://via.placeholder.com/200' },
          { id: 21, name: 'iPhone 13 Pro Max', category: 'iPhone', price: 799, inStock: 10, popularity: 5, discounted: true, image: 'https://via.placeholder.com/200' },
          { id: 22, name: 'Samsung Galaxy S22', category: 'Samsung', price: 699, inStock: 5, popularity: 4, discounted: false, image: 'https://via.placeholder.com/200' },
          { id: 23, name: 'MacBook Pro 2022', category: 'Laptop', price: 1299, inStock: 2, popularity: 5, discounted: true, image: 'https://via.placeholder.com/200' },
          { id: 24, name: 'Hisense Bluetooth Speaker', category: 'Bluetooth Speakers', price: 99, inStock: 20, popularity: 3, discounted: false, image: 'https://via.placeholder.com/200' },
          { id: 25, name: 'Tablet Pro4', category: 'Tablet', price: 499, inStock: 15, popularity: 4, discounted: true, image: 'https://via.placeholder.com/200' },
          { id: 26, name: 'Gaming Laptop XC', category: 'Laptop', price: 1499, inStock: 4, popularity: 5, discounted: false, image: 'https://via.placeholder.com/200' },
          { id: 27, name: 'Smart Watch T7', category: 'Wearable', price: 199, inStock: 25, popularity: 4, discounted: true, image: 'https://via.placeholder.com/200' },
          { id: 28, name: 'Oraimo Wireless Earbuds', category: 'Audio', price: 149, inStock: 30, popularity: 68, discounted: false, image: 'https://via.placeholder.com/200' },
        ],
      };
      setShopData(dummyShopData);
    };

    fetchShopData();
  }, [shopId]);

  const filterProducts = (filters) => {
    if (!shopData) return;
    
    let products = shopData.products;

    if (filters.category.length) {
      products = products.filter((product) => filters.category.includes(product.category));
    }

    if (filters.sortBy && filters.order) {
        const compareValue = filters.order === 'asc' ? 1 : -1;
        
        products.sort((a, b) => {
          switch (filters.sortBy) {
            case 'availability':
              return (a.inStock - b.inStock) * compareValue;
            case 'price':
              return (a.price - b.price) * compareValue;
            case 'popularity':
              return (a.popularity - b.popularity) * compareValue;
            default:
              return 0;
          }
        });
      }
      
      if (filters.price) {
        products = products.filter((product) => product.price <= filters.price);
      }
      
      if (filters.inStock) {
        products = products.filter((product) => product.inStock > 0);
      }
      
      if (filters.popularity) {
        products = products.filter((product) => product.popularity >= filters.popularity);
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

  return (
    <Layout>
      <div className="container mx-auto py-8">
        {/* Banner Section */}
        <div className="relative h-48 md:h-64 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={shopData.bannerImage}
            alt="Shop Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-[-36px] left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-500 overflow-hidden">
              <img
                src={shopData.shopLogo}
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
              src={shopData.shopLogo}
              alt="Shop Logo"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
          </div>
        </div>

        {/* Shop Information */}
        <div className="mt-16 text-center">
          <h1 className="text-3xl font-bold">{shopData.name}</h1>
          <p className="text-gray-600">Location: {shopData.location}</p>
          <p className="text-gray-600">Contact: {shopData.contact}</p>
          <p className="text-gray-600 mt-4">{shopData.description}</p>
        </div>

        {/* Shop Filter */}
        <div className="my-8">
          <ShopFilter
            onFilterChange={(filters) => filterProducts(filters)}
            tags={['iPhone', 'Samsung', 'Tablet', 'Laptop', 'Bluetooth Speakers', 'Wearable', 'Audio']}
          />
        </div>

        {/* Discounted Products Carousel */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Discounted Products</h2>
          <DiscountedProductsCarousel
            products={filteredProducts.length ? filteredProducts.filter((p) => p.discounted) : shopData.products.filter((p) => p.discounted)}
          />
        </div>

        {/* Display Product Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.length ? filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          )) : shopData.products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ShopView;
