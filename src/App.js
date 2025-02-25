import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Shops from './pages/Shops';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import ShopView from './components/shops/ShopView';
import ShopProfile from './components/shops/ShopProfile';
import ProductDetailModal from './components/products/ProductDetailModal';
import { ProductModalProvider } from './components/context/ProductModalContext';

const App = () => {
  return (
    <Router>
      <ProductModalProvider>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shops" element={<Shops />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/shop-view/:shopId" element={<ShopView />} />
            <Route path="/shop-profile/:shopId" element={<ShopProfile />} />
          </Routes>
          {/* Global modal that will appear when a product is selected */}
          <ProductDetailModal />
        </div>
      </ProductModalProvider>
    </Router>
  );
};

export default App;