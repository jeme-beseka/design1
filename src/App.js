import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader/loader';
import Home from './pages/Home';
import Shops from './pages/Shops';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import ShopView from './components/shops/ShopView';
import ShopProfile from './components/shops/ShopProfile';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    return (
      <Router>
        {isLoading && (
          <Loader onLoadingComplete={() => setIsLoading(false)} />
        )}
 
        {/*Main Content after loading */}
        
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/shop-view/:shopId" element={<ShopView />} />
        <Route path="/shop-profile/:shopId" element={<ShopProfile />} />
      </Routes>
      
    </Router>
  );
};

export default App;

// 

