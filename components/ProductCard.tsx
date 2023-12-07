/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
import { Product } from '@/interfaces';
import Image from 'next/image';
import React from 'react';
import AddToCartBtn from './AddToCartBtn';

interface Props {
  product: Product;
}

function ProductCard(props: Props) {
  return (
    <div className="border rounded-md shadow hover:shadow-lg transition ">
      <Image
        src={props.product.image}
        width={300}
        height={300}
        alt={props.product.name}
      />
      <div className="p-4">
        <h1 className="font-bold text-xl">{props.product.name}</h1>
        <h1 className="text-xl">{props.product.description}</h1>
        <h1 className="font-bold text-xl">
          {props.product.price}
          {' '}
          $
        </h1>
        <AddToCartBtn product={props.product} />
      </div>
    </div>
  );
}

export default ProductCard;
