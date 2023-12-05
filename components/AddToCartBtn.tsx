/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */

'use client';

import { Product } from '@/interfaces';
import React from 'react';
import {
  decrement,
  increment,
  productMonthsNBInCartSelector,
} from '../store/features/cartSlice';
import {
  useAppDispatch,
  useAppSelector,
} from '../store/store';
import { Button } from './elements/Button';
import MonthsBtn from './MonthsBtn';

interface Props {
  product: Product;
}

function AddToCartBtn(props: Props) {
  const mnb = useAppSelector((state) => productMonthsNBInCartSelector(state, props.product.id));
  const dispatch = useAppDispatch();
  if (!mnb) {
    return (
      <div className="flex justify-center">
        <Button
          onClick={() => dispatch(increment(props.product))}
        >
          Add To Cart
        </Button>
      </div>
    );
  }
  return (
    <MonthsBtn
      onDecrease={() => dispatch(decrement(props.product))}
      onIncrease={() => dispatch(increment(props.product))}
      mnb={mnb}
    />
  );
}

export default AddToCartBtn;
