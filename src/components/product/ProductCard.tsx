import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProductCardProps } from '../../types/product';
import { ProductImage } from './ProductImage';
import { ProductInfo } from './ProductInfo';

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/product/${product.id}`} className="block">
      <motion.div
        className="relative group overflow-hidden rounded-lg bg-white shadow-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <ProductImage
          images={product.images}
          currentIndex={currentImageIndex}
          setCurrentIndex={setCurrentImageIndex}
          isHovered={isHovered}
          discount={product.discount}
        />
        <ProductInfo product={product} />
      </motion.div>
    </Link>
  );
};