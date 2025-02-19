import React, { useState } from 'react';
import { Filter } from 'lucide-react';

const ShopFilter = ({ onFilterChange, tags }) => {
  const [filters, setFilters] = useState({
    category: [],
    sortBy: '',
    order: 'asc',
    price: '',
    inStock: false,
    popularity: '',
  });

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'category') {
      const newCategories = checked
        ? [...filters.category, value]
        : filters.category.filter((category) => category !== value);
      setFilters({ ...filters, category: newCategories });
    } else {
      setFilters({ ...filters, [name]: value });
    }
    onFilterChange(filters);
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-semibold mb-2">Filter Products</h2>
      <div className="flex flex-wrap gap-2">
      {tags && tags.length > 0 ? (
      tags.map((tag) => (
      <label key={tag} className="flex items-center">
        <input
          type="checkbox"
          name="category"
          value={tag}
          onChange={handleFilterChange}
          className="mr-2"
        />
        {tag}
      </label>
      ))
      ) : (
        <div className="text-gray-500">No tags available</div>
      )}
        {/* {tags.map((tag) => (
          <label key={tag} className="flex items-center">
            <input
              type="checkbox"
              name="category"
              value={tag}
              onChange={handleFilterChange}
              className="mr-2"
            />
            {tag}
          </label>
        ))} */}
      </div>
      {/* Additional filter options can be added here */}
    </div>
  );
};

export default ShopFilter;
