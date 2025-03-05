import React, {useState} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import VendorDashboard from './Dashboard';
import Sidebar from './vCommon/Sidebar';
import Header from './vCommon/Header';
import VendorInventory from './vPages/InventoryContent';
import VendorOrders from './vPages/Orders';
import VendorAnalytics from './vPages/Analytics';
import VendorDelivery from './vPages/Delivery';
import VendorCustomers from './vPages/Customers';

const VendorApp = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add mobile menu toggle function
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="min-h-screen bg-gray-100">
    <Sidebar onSwitchToBuyer={() => navigate('/home')}
     isMobileMenuOpen={isMobileMenuOpen}
     toggleMobileMenu={toggleMobileMenu}
    />
    <div className="lg:pl-64">
      <Header />
      <main className="p-4 md:p-6">

        <Routes>
          <Route index element={<VendorDashboard />} />
          <Route path="inventory" element={<VendorInventory />} />
          <Route path="orders" element={<VendorOrders />} />
          <Route path="analytics" element={<VendorAnalytics />} />
          <Route path="customers" element={<VendorCustomers />} />
          <Route path="delivery" element={<VendorDelivery />} />
        </Routes>
      </main>
    </div>
  </div>
  );
};

export default VendorApp;
