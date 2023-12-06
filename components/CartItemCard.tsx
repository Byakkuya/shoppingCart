/* eslint-disable linebreak-style */
import { CartItem } from '@/interfaces';
import Image from 'next/image';
import React from 'react';
import { useAppDispatch } from '@/store/store';
import {
  decrement,
  increment,
} from '../store/features/cartSlice';
import MonthsBtn from './MonthsBtn';

interface Props {
  cartItem: CartItem;
}

function CartItemCard({ cartItem }: Props) {
  const dispatch = useAppDispatch();
  return (
    <div className="grid grid-cols-4 items-center py-2">
      <Image
        src={cartItem.product.image}
        alt={cartItem.product.name}
        width={300}
        height={300}
      />
      <p>{cartItem.product.name}</p>
      <div className="flex flex-col items-center justify-center gap-4">
        <p>
          {cartItem.product.price}
          {' '}
          $
        </p>
        <MonthsBtn
          mnb={cartItem.monthsNumber}
          onDecrease={() => dispatch(decrement(cartItem.product))}
          onIncrease={() => dispatch(increment(cartItem.product))}
        />
      </div>
      <p>
        Total :
        {cartItem.product.price * cartItem.monthsNumber}
        {' '}
        $
      </p>
    </div>

  );
}

export default CartItemCard;
