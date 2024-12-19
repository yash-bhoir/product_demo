import React from 'react';
import { ProductGrid } from '../components/product/ProductGrid';
import { products } from '../data/products';

const ProductListPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default ProductListPage;