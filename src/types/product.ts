export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  colors: string[];
  sizes: string[];
  discount?: number;
}

export interface ProductCardProps {
  product: Product;
}