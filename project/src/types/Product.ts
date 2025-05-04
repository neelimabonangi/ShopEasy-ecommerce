export type ProductCategory = 
  | 'Electronics' 
  | 'Clothing' 
  | 'Home & Kitchen' 
  | 'Beauty' 
  | 'Sports' 
  | 'Books' 
  | 'Toys';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: ProductCategory;
  imageUrl: string;
}