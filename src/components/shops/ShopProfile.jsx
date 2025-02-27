// src/pages/ShopProfile.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';

const ShopProfile = () => {
  const [bannerImage, setBannerImage] = useState(null);
  const [shopLogo, setShopLogo] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBannerImage(URL.createObjectURL(file));
    }
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setShopLogo(URL.createObjectURL(file));
    }
  };

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 6); // Max 6 images
    const imageURLs = files.map((file) => URL.createObjectURL(file));
    setGalleryImages(imageURLs);
  };

  return (
    <Layout>
      <div className="container mx-auto py-8">
        {/* Banner Section */}
        <div className="relative h-48 md:h-64 bg-gray-200 rounded-lg overflow-hidden">
          {bannerImage ? (
            <img
              src={bannerImage}
              alt="Shop Banner"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Upload a banner for your shop
            </div>
          )}
          <label
            htmlFor="banner-upload"
            className="absolute top-2 right-2 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Change Banner
          </label>
          <input
            id="banner-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />

          {/* Logo Section */}
          <div className="absolute bottom-[-36px] left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-500 overflow-hidden">
              {shopLogo ? (
                <img
                  src={shopLogo}
                  alt="Shop Logo"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  Logo
                </div>
              )}
            </div>
            <label
              htmlFor="logo-upload"
              className="block mt-2 text-sm text-center text-blue-500 cursor-pointer"
            >
              Edit Logo
            </label>
            <input
              id="logo-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleLogoChange}
            />
          </div>
        </div>

        {/* Shop Information */}
        <div className="mt-16 text-center">
          <h1 className="text-3xl font-bold">Shop Name</h1>
          <p className="text-gray-600">Location: City, State</p>
          <p className="text-gray-600">Contact: +123 456 7890</p>
          <p className="text-gray-600 mt-4">Shop Description: This is an electronics shop specializing in gadgets and accessories.</p>
          <div className="mt-4 flex justify-end">
            <Link to="/vendor" className="bg-blue-500 text-white px-4 py-2 rounded">
              Go to Vendor Dashboard
            </Link>
          </div>
        </div>

        {/* Shop Gallery */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="w-full h-48 rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          {galleryImages.length < 6 && (
            <div className="mt-4">
              <label
                htmlFor="gallery-upload"
                className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
              >
                Add Images
              </label>
              <input
                id="gallery-upload"
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleGalleryChange}
              />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ShopProfile;
