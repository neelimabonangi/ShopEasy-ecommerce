import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ProductGrid from '../components/ProductGrid';
import { useProducts } from '../context/ProductContext';

const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('search') || '';
  const { products, loading, error, searchProducts } = useProducts();

  useEffect(() => {
    // Search with initial query from URL
    searchProducts(initialQuery);
  }, []);

  const handleSearch = (query: string) => {
    // Update URL search params
    if (query) {
      setSearchParams({ search: query });
    } else {
      setSearchParams({});
    }
    
    // Perform search
    searchProducts(query);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Find Your Perfect Product
        </h1>
        <SearchBar onSearch={handleSearch} initialQuery={initialQuery} />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      <div className="mt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium text-gray-900">
            {initialQuery ? `Search Results for "${initialQuery}"` : 'All Products'}
          </h2>
          <span className="text-gray-500">
            {loading ? 'Loading...' : `${products.length} products`}
          </span>
        </div>
        <ProductGrid products={products} loading={loading} />
      </div>
    </div>
  );
};

export default ProductsPage;