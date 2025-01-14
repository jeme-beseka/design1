// src/pages/Shops.jsx
import React from 'react';
import Layout from '../components/layout/Layout';
import { Star } from 'lucide-react';

const Shops = () => {
  // Sample data - replace with actual API call
  const shops = [
    { id: 1, name: "Shop Name", rating: 4.8, totalRatings: 1234, image: "/api/placeholder/200/200" },
    { id: 2, name: "Shop Name", rating: 4.6, totalRatings: 1259, image: "/api/placeholder/200/200" },
    // Add more shops...
  ];

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">All Shops</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shops.map((shop) => (
            <div key={shop.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={shop.image}
                alt={shop.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{shop.name}</h2>
                <div className="flex items-center gap-2 mt-2">
                  <Star className="fill-yellow-400 text-yellow-400" size={16} />
                  <span className="font-medium">{shop.rating}</span>
                  <span className="text-gray-500">({shop.totalRatings} ratings)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Shops;