import React from 'react';
import { Search, Home, Settings, User, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../common/SearchBar';

const Header = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Back Button */}
        <button 
          onClick={handleBackClick}
          className="p-2 hover:bg-gray-100 rounded-full mr-2"
          aria-label="Go back"
        >
          <ArrowLeft size={24} />
        </button>

        {/* Logo with Link */}
        <div className="flex items-center">
          <Link to="/" aria-label="Go to homepage">
            <img src="/api/placeholder/40/40" alt="Logo" className="h-8 sm:h-10" />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4 sm:mx-8">
          <SearchBar />
        </div>

        {/* Navigation Icons */}
        <div className="hidden sm:flex items-center space-x-4 sm:space-x-6">
          <Link 
            to="/" 
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Home"
          >
            <Home size={24} />
          </Link>
          <Link 
            to="/Shops" 
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Shop"
          >
            <ShoppingBag size={24} />
          </Link>
          <Link 
            to="/settings" 
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Settings"
          >
            <Settings size={24} />
          </Link>
          <Link 
            to="/profile" 
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Profile"
          >
            <User size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
