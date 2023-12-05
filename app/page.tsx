/* eslint-disable linebreak-style */
import ProductCard from '@/components/ProductCard';
import { data } from '@/data';
import React from 'react';

function HomePage() {
  return (
    <div className="p-4 flex flex-wrap gap-4">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default HomePage;
