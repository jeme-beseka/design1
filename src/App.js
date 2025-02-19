import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


import LaunchAnimation from './components/LaunchAnimation/LaunchAnimation'; // Import Launch Animation
import  NavigationLoader from './components/Loader/NavigationLoader';
// Lazy-loaded components
const Home = lazy(() => import('./pages/Home.jsx'));
const LoginPage = lazy(() => import('./pages/Login.jsx'));
const SignupPage = lazy(() => import('./pages/Signup.jsx'));
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPassword.jsx'));
const Shops = lazy(() => import('./pages/Shops.jsx'));
const ProductPage = lazy(() => import('./pages/ProductPage.jsx'));
const CartPage = lazy(() => import('./pages/CartPage.jsx'));
const ProfilePage = lazy(() => import('./pages/ProfilePage.jsx'));
const ShopView = lazy(() => import('./components/shops/ShopView.jsx'));
const ShopProfile = lazy(() => import('./components/shops/ShopProfile.jsx'));


const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Function to handle animation completion
  const handleAnimationComplete = () => {
    setIsLoading(false);
  };


    return (
      <Router>
        {isLoading && (
          <LaunchAnimation onAnimationComplete={handleAnimationComplete} />
        )}
 
        {/*Main Content after launch Animation */}
        
    <Suspense fallback={<NavigationLoader />}>
    <Routes>

        <Route path="/login" element={<LoginPage />} /> {/* Explicit login route */}
        <Route path="/signup" element={<SignupPage />} /> {/* Signup route */}
        <Route path="/forgot-password" element={<ForgotPasswordPage />} /> 

        <Route path="/home" element={<Home />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/shop-view/:shopId" element={<ShopView />} />
        <Route path="/shop-profile/:shopId" element={<ShopProfile />} />
      </Routes>

      </Suspense>
    </Router>
  );
};

export default App;

// 

