import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Share2, HelpCircle, Truck, RotateCcw } from 'lucide-react';
import { Product } from '../types/product';

interface ProductDetailProps {
  product: Product;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <motion.div
            className="aspect-square overflow-hidden rounded-lg bg-gray-100"
            whileHover={{ scale: 1.02 }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImage}
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </motion.div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <motion.button
                key={index}
                className={`aspect-square rounded-md overflow-hidden ${
                  selectedImage === index ? 'ring-2 ring-black' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <motion.h1
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {product.name}
          </motion.h1>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-2xl font-bold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </motion.div>

          {/* Color Selection */}
          <div className="space-y-2">
            <h3 className="font-medium">Color</h3>
            <div className="flex gap-3">
              {product.colors.map((color, index) => (
                <motion.button
                  key={index}
                  className="w-8 h-8 rounded-full border-2 border-gray-300"
                  style={{ backgroundColor: color }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="space-y-2">
            <h3 className="font-medium">Size</h3>
            <div className="grid grid-cols-4 gap-2">
              {product.sizes.map((size) => (
                <motion.button
                  key={size}
                  className={`py-2 rounded-md border ${
                    selectedSize === size
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <motion.button
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </motion.button>
            <span className="text-lg font-medium">{quantity}</span>
            <motion.button
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </motion.button>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <motion.button
              className="flex-1 bg-black text-white py-3 rounded-full font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Add to Cart
            </motion.button>
            <motion.button
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-2 gap-4 pt-6 border-t">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5" />
              <span className="text-sm">Free shipping over $100</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-5 h-5" />
              <span className="text-sm">30-day return policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}