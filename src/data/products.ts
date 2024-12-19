import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Ribbed Tank Top",
    price: 18.00,
    originalPrice: 24.00,
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1503342250614-aabb357d6582?auto=format&fit=crop&w=800",
    ],
    colors: ["#FFA500", "#000000", "#FFFFFF"],
    sizes: ["S", "M", "L", "XL"],
    discount: 25
  },
  // Add more products here
];