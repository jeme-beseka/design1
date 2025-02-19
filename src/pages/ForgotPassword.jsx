import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Changed from <a> to <Link>

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Add your actual password reset API call here
      console.log('Password reset requested for:', email);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess(true);
      setError('');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError('Failed to send reset link. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-white">Reset Password</h2>
        
        {success && (
          <div className="p-3 text-green-500 bg-green-900 rounded-md">
            Reset link sent! Redirecting to login...
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {error && (
            <div className="p-3 text-red-500 bg-red-900 rounded-md">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Send Reset Link
          </button>

          <p className="text-center text-gray-400 text-sm">
            Remember your password? {' '}
            <Link 
              to="/login" 
              className="text-blue-500 hover:text-blue-400 transition-colors duration-200"
            >
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default ForgotPasswordPage;