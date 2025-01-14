// src/components/layout/Footer.jsx
import React from 'react';
import { ShoppingCart, Heart, Bookmark } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-md mt-auto">
      <div className="container mx-auto py-4">
        <div className="flex justify-around items-center">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ShoppingCart size={24} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Heart size={24} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bookmark size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;