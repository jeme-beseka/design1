import React, { useState } from 'react';
import { ShoppingCart, Heart, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductDetailModal from './ProductDetailModal';

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    // Implement cart functionality
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    // Implement wishlist functionality
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
        {/* Product Image */}
        <div onClick={() => setIsModalOpen(true)} className="cursor-pointer relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover"
          />
          {product.discounted && (
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {product.discount}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between p-2">
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
          >
            <ShoppingCart size={18} />
          </button>
          <button
            onClick={handleWishlist}
            className={`p-2 rounded-full transition-colors duration-200 ${
              isWishlisted 
                ? 'bg-red-500 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Heart size={18} fill={isWishlisted ? 'white' : 'none'} />
          </button>
        </div>

        {/* Product Information */}
        <div className="p-4">
          <h3 
            className="font-semibold text-lg mb-2 line-clamp-2 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            {product.name}
          </h3>
          <div className="flex items-center justify-between mb-2">
            {product.discounted && (
              <span className="text-gray-400 line-through">${product.originalPrice?.toFixed(2) || 'N/A'}</span>
            )}
            <span className={`text-lg font-bold ${product.discounted ? 'text-red-500' : 'text-blue-600'}`}>
              ${product.discounted ? product.discountPrice?.toFixed(2) : product.price?.toFixed(2) || 'N/A'}
            </span>
          </div>
        </div>
      </div>

      <ProductDetailModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
};

export default ProductCard;