import React from 'react';
import { motion } from 'framer-motion';

interface ProductImageProps {
  images: string[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  isHovered: boolean;
  discount?: number;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  images,
  currentIndex,
  setCurrentIndex,
  isHovered,
  discount,
}) => {
  return (
    <div className="relative aspect-[3/4] overflow-hidden">
      <motion.img
        src={images[currentIndex]}
        alt="Product"
        className="w-full h-full object-cover"
        animate={{
          scale: isHovered ? 1.1 : 1,
          rotateY: isHovered ? 10 : 0,
        }}
        transition={{ duration: 0.4 }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          if (x < rect.width / 2 && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
          } else if (x >= rect.width / 2 && currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
          }
        }}
      />
      {discount && (
        <motion.div
          className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          -{discount}%
        </motion.div>
      )}
    </div>
  );
};