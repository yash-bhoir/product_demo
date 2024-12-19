import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetail } from '../components/ProductDetail';
import { products } from '../data/products';
import { NotFound } from '../components/common/NotFound';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductDetailPage;