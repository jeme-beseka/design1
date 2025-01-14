// src/components/layout/Header.jsx
import React from 'react';
import { Search, Home, Settings, User } from 'lucide-react';
import SearchBar from '../common/SearchBar';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/api/placeholder/40/40" alt="Logo" className="h-10" />
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* Navigation Icons */}
        <div className="flex items-center space-x-6">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Home size={24} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings size={24} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;