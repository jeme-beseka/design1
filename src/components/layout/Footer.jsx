// src/components/layout/Footer.jsx
import React from 'react';
import { ShoppingCart, Heart, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white shadow-md mt-auto">
      <div className="container mx-auto py-4">
        <div className="flex justify-around items-center">
          <Link 
            to="/cart" 
            className="group relative p-2 hover:bg-gray-100 rounded-full"
          >
            <ShoppingCart size={24} />
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Go to Cart
            </span>
          </Link>

          <Link 
            to="/wishlist" 
            className="group relative p-2 hover:bg-gray-100 rounded-full"
          >
            <Heart size={24} />
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Wishlist
            </span>
          </Link>

          <Link 
            to="/bookmarked-shops" 
            className="group relative p-2 hover:bg-gray-100 rounded-full"
          >
            <Bookmark size={24} />
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Show Bookmarked Shops
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;