// src/components/common/SearchBar.jsx
import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="flex-1 max-w-2xl mx-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
      </div>
    </div>
  );
};

export default SearchBar;