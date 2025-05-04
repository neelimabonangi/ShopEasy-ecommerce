import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import { useProducts } from '../context/ProductContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { product, loading, error, getProduct } = useProducts();

  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="animate-pulse max-w-5xl mx-auto">
        <div className="mb-4 flex items-center">
          <div className="h-10 w-32 bg-gray-200 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-200 pt-[100%] rounded-lg"></div>
          <div>
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
            <div className="h-12 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Back to Products
        </Link>
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-5xl mx-auto text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md inline-flex items-center transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Go Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <Link 
        to="/" 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-auto object-cover"
          />
        </div>

        <div>
          <div className="mb-4">
            <p className="text-blue-600 font-medium">{product.brand}</p>
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="text-gray-500 text-sm">(24 reviews)</span>
            </div>
            
            <p className="text-2xl font-bold text-gray-900 mb-4">${product.price.toFixed(2)}</p>
            
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                {product.category}
              </span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-3">Description</h2>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-4">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition-colors">
              Add to Cart
            </button>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-md font-medium transition-colors">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Product Information</h2>
        
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Specifications</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Brand</span>
                  <span className="font-medium">{product.brand}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium">{product.category}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">In Stock</span>
                  <span className="font-medium">Yes</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </li>
              </ul>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Premium quality materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Durable construction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Ergonomic design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>30-day money-back guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;