import React from 'react';
import { Bell, Menu, Search } from 'lucide-react';

const Header = ({ toggleMobileMenu }) => {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-4">
      <div className="flex items-center">
        <button 
          onClick={toggleMobileMenu} 
          className="mr-2 text-gray-600 lg:hidden"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold text-gray-800 lg:hidden">VendorHub</h1>
      </div>
      
      <div className="hidden md:block flex-1 max-w-xl mx-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-600">
          <Bell size={20} />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
            VS
          </div>
          <span className="hidden md:inline text-sm font-medium">Vendor Store</span>
        </div>
      </div>
    </header>
  );
};

export default Header;