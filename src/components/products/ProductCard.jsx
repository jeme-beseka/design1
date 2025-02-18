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
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          {/* Action Buttons */}
          <div className="absolute top-2 left-2 right-2 flex justify-between z-10">
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

          {/* Product Image */}
          <div 
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
          </div>
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
            <span className="text-lg font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <Link 
            to={`/shop-view/:shopId${product.shopId}`}
            className="text-sm text-gray-600 hover:text-blue-500 flex items-center gap-1"
          >
            <LinkIcon size={14} />
            {product.shopName}
          </Link>
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
