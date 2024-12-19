import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProductCardProps } from '../types/product';

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/product/${product.id}`}>
      <motion.div
        className="relative group overflow-hidden rounded-lg bg-white shadow-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          <motion.img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotateY: isHovered ? 10 : 0,
            }}
            transition={{ duration: 0.4 }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              if (x < rect.width / 2 && currentImageIndex > 0) {
                setCurrentImageIndex(prev => prev - 1);
              } else if (x >= rect.width / 2 && currentImageIndex < product.images.length - 1) {
                setCurrentImageIndex(prev => prev + 1);
              }
            }}
          />
          {product.discount && (
            <motion.div
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              -{product.discount}%
            </motion.div>
          )}
        </div>
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
      </motion.div>
    </Link>
  );
}