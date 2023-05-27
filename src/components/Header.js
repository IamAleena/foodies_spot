import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-center flex-between">
      <Link to="" className="logo">
        <img style={{mixBlendMode: 'multiply', width: 20}} src="https://i.pinimg.com/originals/b7/02/af/b702afc7b811840ebc49037cdc98bc45.jpg" />
        Kitchen
      </Link>
      <nav>
        <ul className="flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
