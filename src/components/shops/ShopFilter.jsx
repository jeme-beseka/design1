// src/components/shops/ShopFilter.jsx
import React, { useState } from 'react';
import { Filter } from 'lucide-react';

const ShopFilter = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    "Location",
    "Electronics",
    "Beauty",
    "Fashion",
    "Home & Living",
    "Books",
  ];

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    onFilterChange(updatedCategories);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50"
      >
        <Filter size={20} />
        <span>Filter Shops</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-10">
          <h3 className="font-semibold mb-3">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="rounded"
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopFilter;