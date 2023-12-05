/* eslint-disable linebreak-style */
/* eslint-disable lines-around-directive */
/* eslint-disable react/destructuring-assignment */
'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

interface Props {
  children: React.ReactNode;
}
function Providers(props: Props) {
  return (
    <Provider store={store}>{props.children}</Provider>
  );
}

export default Providers;
