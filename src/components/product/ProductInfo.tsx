import React from 'react';
import { Product } from '../../types/product';

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-lg font-bold">${product.price}</span>
        {product.originalPrice && (
          <span className="text-sm text-gray-500 line-through">
            ${product.originalPrice}
          </span>
        )}
      </div>
      <div className="flex gap-2 mt-3">
        {product.colors.map((color, index) => (
          <div
            key={index}
            className="w-4 h-4 rounded-full border border-gray-300"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};