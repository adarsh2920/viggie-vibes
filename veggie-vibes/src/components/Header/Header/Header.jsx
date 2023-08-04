import React from 'react';
import './Header.css';
import logo from './myLogo.png'
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Vegetable Shop Logo" />
        </div>
        <h1 className="website-name">VeggieVibes</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Login</a></li>
            <li className="search-box">
              <input type="text" placeholder="Search for vegetables, fruits, and more" />
              <button type="button">Search</button>
            </li>
            <li className="cart-icon">
              <a href="#"><FaShoppingCart size={24} /></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
