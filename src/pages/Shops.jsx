import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ShopFilter from '../components/shops/ShopFilter';
import { allShops } from '../data/shopData';

const Shops = () => {
  const navigate = useNavigate();
  const [filteredCategories, setFilteredCategories] = useState([]);

  const filteredShops = filteredCategories.length
    ? allShops.filter((shop) =>
        filteredCategories.some(
          (category) =>
            shop.category === category || shop.location === category
        )
      )
    : allShops;

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <div className="flex justify-end mb-6">
          <ShopFilter onFilterChange={setFilteredCategories} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShops.map((shop) => (
            <div
              key={shop.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => navigate(`/shop-view/${shop.id}`)}
            >
              <img
                src={shop.image}
                alt={shop.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{shop.name}</h2>
                <p className="text-gray-500 mt-1">{shop.category}</p>
                <p className="text-gray-500">{shop.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Shops;
