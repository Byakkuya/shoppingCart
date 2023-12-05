/* eslint-disable linebreak-style */
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className="bg-gradient-to-b from-sky-100 to-sky-50 border shadow p-2 flex">
      <Link className="text-black" href="/">
        EasySub
      </Link>
    </header>
  );
}

export default Header;
