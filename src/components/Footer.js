import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-10">
    <div className="container mx-auto flex justify-between items-center text-center">
        <div className='flex space-x-8'>
          <Link to="/" className="flex">Home</Link>
          <Link to="/about" className="flex">About</Link>
          <Link to="/products" className="flex">Products</Link>
        </div>
      <p>&copy; 2024 Company Name. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer