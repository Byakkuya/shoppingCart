/* eslint-disable linebreak-style */

'use client';

import React from 'react';
import { useAppSelector } from '@/store/store';
import { TotalPriceSelector } from '@/store/features/cartSlice';
import CartItemCard from '../../components/CartItemCard';

function CartPage() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const total = useAppSelector(TotalPriceSelector);

  return (
    <div className="p-2">
      {cartItems.map((item) => (
        <CartItemCard cartItem={item} key={item.product.id} />
      ))}

      <p className="text-center mt-4">
        Total of all the products:
        <span className="font-bold text-lg">
          {total}
          $
        </span>
      </p>
    </div>
  );
}

export default CartPage;
