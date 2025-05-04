import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, price, brand, category, imageUrl } = product;

  return (
    <Link 
      to={`/product/${id}`}
      className="group bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md flex flex-col h-full"
    >
      <div className="relative pt-[100%] overflow-hidden bg-gray-100">
        <img 
          src={imageUrl} 
          alt={name} 
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-sm text-blue-600 mb-1">{brand}</span>
        <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 flex-grow">{name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-semibold">${price.toFixed(2)}</span>
          <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">{category}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;