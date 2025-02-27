// src/components/layout/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen max-w-screen-2xl mx-auto">
      <Header />
      <Banner autoScroll />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">

        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
