/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */

'use client';

import {
  ShoppingBagIcon,
} from '@heroicons/react/24/solid';
import React from 'react';
import {
  totalCartItemsSelector,
} from '../store/features/cartSlice';
import { useAppSelector } from '../store/store';

interface Props {
  className?: string;
}
function CartBtn(props: Props) {
  const totalItems = useAppSelector(totalCartItemsSelector);
  return (
    <div className={`${props.className} relative`}>
      <ShoppingBagIcon className="w-9 text-slate-600" />
      {!!totalItems && (
        <div
          key={totalItems}
          className="bg-blue-500 flex justify-center items-center
        rounded-full w-6 absolute -top-2 -right-2 text-black"
        >
          {totalItems}
        </div>
      )}
    </div>
  );
}

export default CartBtn;
