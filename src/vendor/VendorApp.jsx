import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VendorDashboard from './Dashboard';
import VendorInventory from './Inventory';
import VendorOrders from './Orders';
import VendorAnalytics from './Analytics';
import VendorSidebar from './Sidebar';
import VendorHeader from './Header';

const VendorApp = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <VendorSidebar />
        <div className="lg:pl-64">
          <VendorHeader />
          <main className="p-4 md:p-6">
            <Routes>
              <Route path="/" element={<VendorDashboard />} />
              <Route path="/inventory" element={<VendorInventory />} />
              <Route path="/orders" element={<VendorOrders />} />
              <Route path="/analytics" element={<VendorAnalytics />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default VendorApp;
