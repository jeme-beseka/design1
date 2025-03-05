import React from 'react';
import { 
  Home, Package, ShoppingBag, TrendingUp, Users, Truck, Settings, X 
} from 'lucide-react';
import { allShops } from '../data/shopData';
  
const Sidebar = ({ 
  onSwitchToBuyer, 
  activeTab, 
  setActiveTab, 
  isMobileMenuOpen, 
  toggleMobileMenu }) => {

  const shopData = allShops[0];

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transform transition-transform duration-300 lg:translate-x-0 ${
      isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <h1 className="text-xl font-bold">{shopData.name}</h1>
        <button onClick={toggleMobileMenu} className="lg:hidden text-white">
          <X size={24} />
        </button>
      </div>
      
      <div className="p-4">
        <div className="mb-6">
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Main Menu</p>
          <div className="space-y-1">
            <SidebarButton 
              icon={<Home size={20} />}
              label="Dashboard"
              isActive={activeTab === 'dashboard'}
              onClick={() => setActiveTab('dashboard')}
            />
            
            <SidebarButton 
              icon={<Package size={20} />}
              label="Inventory"
              isActive={activeTab === 'inventory'}
              onClick={() => setActiveTab('inventory')}
            />
            
            <SidebarButton 
              icon={<ShoppingBag size={20} />}
              label="Orders"
              onClick={() => {}}
            />
            
            <SidebarButton 
              icon={<TrendingUp size={20} />}
              label="Analytics"
              isActive={activeTab === 'analytics'}
              onClick={() => setActiveTab('analytics')}
            />
            
            <SidebarButton 
              icon={<Users size={20} />}
              label="Customers"
              onClick={() => {}}
            />
            
            <SidebarButton 
              icon={<Truck size={20} />}
              label="Delivery"
              onClick={() => {}}
            />
            
            <SidebarButton 
              icon={<ShoppingBag size={20} />}
              label="Shop as Buyer"
              onClick={() => {
                onSwitchToBuyer();
                toggleMobileMenu();
              }}
            />
          </div>
        </div>
        
        <div>
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Account</p>
          <div className="space-y-1">
            <SidebarButton 
              icon={<Settings size={20} />}
              label="Settings"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarButton = ({ icon, label, isActive = false, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center w-full space-x-3 p-2 rounded-lg transition-colors ${
        isActive ? 'bg-blue-700' : 'hover:bg-gray-800'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default Sidebar;