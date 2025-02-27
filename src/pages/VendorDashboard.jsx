import React, { useState } from 'react';
import Sidebar from '../vendor/vCommon/Sidebar';
import Header from '../vendor/vCommon/Header';
import DashboardContent from '../vendor/vPages/DashboardContent';
import InventoryContent from '../vendor/vPages/InventoryContent';

const VendorDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      
      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <Header 
          toggleMobileMenu={toggleMobileMenu} 
        />
        
        {/* Main Content */}
        <main className="p-4 md:p-6">
          {activeTab === 'dashboard' ? (
            <DashboardContent />
          ) : activeTab === 'inventory' ? (
            <InventoryContent />
          ) : (
            <div className="flex items-center justify-center h-64 bg-white p-6 rounded-lg shadow">
              <div className="text-center">
                <p className="text-gray-500">Select a tab from the sidebar to view content</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default VendorDashboard;