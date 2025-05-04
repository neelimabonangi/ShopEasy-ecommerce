import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-blue-600 font-semibold text-xl">
          <ShoppingBag size={24} />
          <span>ShopEase</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Categories</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Deals</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <button 
            className="text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;