import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // For navigate


const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Form submitted:', formData);

    // Example: Redirect to home page after login
    navigate('/home');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
 <div className="flex items-center justify-center min-h-screen bg-black">
   <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center text-white">Welcome to Shopera</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
             className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <button 
        type="submit" 
        className= "w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200">
          Log In
        </button>

        <div className="flex flex-col items-center space-y-3 text-sm">
          <Link
          to = "/forgot-password"  className="text-blue-500 hover:text-blue-400 transition-colors duration-200">
            Forgot Password?
          </Link>
          
          <p className="text-gray-400">
            Don't have an account? 
            <a href="/signup" className="text-blue-500 hover:text-blue-400 transition-colors duration-200"> 
            Sign Up
            </a>
          </p>
        </div>
     </form>  
   </div>
 </div>
  );
};

// Use tailwind css. It helps you handle responsiveness without hurdles
// Use a framework. It helps you abstract the management of multiple packages
// With just react js, you have to manually handle on page SEO which is resource & time consuming
// Try using NextJs since it handles SEO for you, both: server side and static

export default LoginPage;