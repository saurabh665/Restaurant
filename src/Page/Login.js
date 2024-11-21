import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center " style={{ backgroundImage: "url('/images/restaurant-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="relative z-10 w-full max-w-md p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-orange-600 mb-4 text-center">Welcome Back!</h2>
        <p className="text-center text-gray-600 mb-8">Log in to order your favorite meals</p>
        
        <form className="space-y-4">
          <div>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" 
              required 
            />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-3 text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors duration-300"
          >
            Log In
          </button>
        </form>
        
        <p className="mt-6 text-center text-gray-600">
          New here? <Link to="/signup" className="text-orange-600 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
