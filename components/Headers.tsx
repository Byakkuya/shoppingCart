/* eslint-disable linebreak-style */
import Link from 'next/link';
import React from 'react';
import CartBtn from './CartBtn';

function Header() {
  return (
    <header className="bg-gradient-to-b from-sky-100 to-sky-50 border shadow p-2 flex">
      <Link className="text-black" href="/">
        EasySub
      </Link>
      <Link className="ml-auto mr-4" href="/cart">
        <CartBtn />
      </Link>
    </header>
  );
}

export default Header;
