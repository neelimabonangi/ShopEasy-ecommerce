import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types/Product';
import { mockProducts } from '../data/mockProducts';
import toast from 'react-hot-toast';

interface ProductContextType {
  products: Product[];
  product: Product | null;
  loading: boolean;
  error: string | null;
  searchProducts: (query: string) => void;
  getProduct: (id: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // This simulates an API call to search products
  const searchProducts = async (query: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      if (query) {
        const lowercaseQuery = query.toLowerCase();
        const filteredProducts = mockProducts.filter(product => 
          product.name.toLowerCase().includes(lowercaseQuery) || 
          product.brand.toLowerCase().includes(lowercaseQuery)
        );
        setProducts(filteredProducts);
      } else {
        setProducts(mockProducts);
      }
    } catch (err) {
      setError('Failed to load products. Please try again.');
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  // This simulates an API call to get a product by ID
  const getProduct = async (id: string) => {
    setLoading(true);
    setError(null);
    setProduct(null);
    
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const foundProduct = mockProducts.find(product => product.id === id);
      
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        setError('Product not found');
        toast.error('Product not found');
      }
    } catch (err) {
      setError('Failed to load product details. Please try again.');
      toast.error('Failed to load product details');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductContext.Provider value={{
      products,
      product,
      loading,
      error,
      searchProducts,
      getProduct
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};