/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import {
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { CartItem, Product } from '../../interfaces';
import { RootState } from '../store';

export interface CartState {
    cartItems: CartItem[];
  }
const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<Product>) => {
      const cartItem = state.cartItems.find(
        (el) => el.product.id === action.payload.id,
      );
      if (cartItem) cartItem.monthsNumber += 1;
      else {
        state.cartItems.push({
          product: action.payload,
          monthsNumber: 1,
        });
      }
    },

    decrement: (state, action: PayloadAction<Product>) => {
      const cartItem = state.cartItems.find(
        (el) => el.product.id === action.payload.id,
      );
      if (cartItem) {
        cartItem.monthsNumber -= 1;
        if (cartItem.monthsNumber === 0) {
          state.cartItems = state.cartItems.filter(
            (el) => el.product.id !== action.payload.id,
          );
        }
      }
    },
  },
});

const cartItems = (state: RootState) => state.cart.cartItems;

export const productMonthsNBInCartSelector = createSelector(
  [cartItems, (cartItems, productId: number) => productId],
  // eslint-disable-next-line max-len
  (cartItems, productId) => cartItems.find((el: CartItem) => el.product.id === productId)?.monthsNumber,
);

export const totalCartItemsSelector = createSelector(
  [cartItems],
  (cartItems) => cartItems.reduce(
    (total: number, curr: CartItem) => (total += curr.monthsNumber),
    0,
  ),
);
export const TotalPriceSelector = createSelector(
  [cartItems],
  (cartItems) => cartItems.reduce(
    (total: number, curr: CartItem) => (total += curr.monthsNumber * curr.product.price),
    0,
  ),
);

export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
