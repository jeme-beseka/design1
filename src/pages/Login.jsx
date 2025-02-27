import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // For navigate
import axios from 'axios'; //importing axios API calls


const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    //Basic validation
    if (!formData.username || !formData.password){
      setError('Please fill in all fields.');
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
    localStorage.setItem('token', 'mock-token-for-development');
    navigate('/home');

    // try{
    //   //API call to login
    //   const response = await axios.post('https://your-backend-api.com/login', formData);
      
    //   if (response.data.success){
    //     //saving token to localStorage
    //     localStorage.setItem('token', response.data.token);

    //   //Redirect to home page after login
    // navigate('/home');
    //   } else {
    //     setError(response.data.message || 'Login failed. Please try again.');
    //    }
    // }  catch (err){
    //   setError('An error occured. Please try again');
    //  }

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
      
      {error && (
          <div className="p-3 text-red-500 bg-red-900 rounded-md">
            {error}
          </div>
        )}


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
            <Link to="/signup" className="text-blue-500 hover:text-blue-400 transition-colors duration-200"> 
            Sign Up
            </Link>
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