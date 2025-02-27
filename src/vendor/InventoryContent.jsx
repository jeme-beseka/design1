// File: src/components/InventoryContent.js
import React from 'react';
import StatCard from './vComponents/StatCard';
import ProductList from './vComponents/ProductList';
import { Package, DollarSign } from 'lucide-react';

const InventoryContent = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
          + Add Product
        </button>
      </div>
      
      {/* Inventory Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Products" 
          value="84" 
          change="+2.5%" 
          icon={<Package className="text-blue-500" size={24} />} 
        />
        
        <StatCard 
          title="Low Stock Items" 
          value="12" 
          change="+4" 
          icon={<Package className="text-yellow-500" size={24} />} 
        />
        
        <StatCard 
          title="Out of Stock" 
          value="5" 
          change="-2" 
          icon={<Package className="text-red-500" size={24} />} 
        />
        
        <StatCard 
          title="Inventory Value" 
          value="$45,340" 
          change="+8.3%" 
          icon={<DollarSign className="text-green-500" size={24} />} 
        />
      </div>
      
      {/* Product List */}
      <ProductList />
    </div>
  );
};

export default InventoryContent;