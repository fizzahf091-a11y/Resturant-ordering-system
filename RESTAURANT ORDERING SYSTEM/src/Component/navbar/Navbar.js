import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/THE GRILL RESTAURANT.jpg';
import Cart from './Cart';
import Wishlist from './Wishlist';
import { RiHeart3Line } from "react-icons/ri";
import { useCart } from './context/CartContext';           // ye cart badge k liye hn



const Navbar = () => {
  // ye pehly dono cart badge k liye hn
  const { wishlistItems } = useCart();
  // const { cartItems } = useCart();
  const searchRef = useRef();
  const cartRef = useRef();
  const wishlistRef = useRef();
  const navbarRef = useRef();

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    wishlistRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    wishlistRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  const wishlistHandler = () => {
  wishlistRef.current.classList.toggle("active");
  searchRef.current.classList.remove("active");
  cartRef.current.classList.remove("active");
  navbarRef.current.classList.remove("active");
};


  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    wishlistRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  const closeNavbar = () => {
    navbarRef.current.classList.remove("active");
  };

  return (
    <header className="header">
      <Link to="/logo" className="logo">
        <img src={Logo} alt="Logo" />
      </Link>

      <nav className='navbar' ref={navbarRef}>
        <ul>
          <li>
            <NavLink to="/home" onClick={closeNavbar} className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>Home</NavLink>
            <ul className='dropdown'>
              <li><NavLink to="/photos" onClick={closeNavbar} className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>Photos</NavLink></li>
              <li><NavLink to="/Specials" onClick={closeNavbar} className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>Specials</NavLink></li>
            </ul>
          </li>
          <li>
            <NavLink to="/about" onClick={closeNavbar} className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>About</NavLink>
            <ul className='dropdown'>
              <li><NavLink to="/contact" onClick={closeNavbar} className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>Contact</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/menu" onClick={closeNavbar} className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>Menu</NavLink></li>
          <li><NavLink to="/reviews" onClick={closeNavbar} className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>Reviews</NavLink></li>
          <li><NavLink to="/admin" onClick={closeNavbar} className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>Admin</NavLink></li>
        </ul>
      </nav>

      <div className='icon'>
        <div className="bi bi-search" onClick={searchHandler}></div>

      {/* <div onClick={wishlistHandler} style={{ position: 'relative', cursor: 'pointer' }}>
        <RiHeart3Line />
        {wishlistItems.length > 0 && (
          <span className="wishlist-count">{wishlistItems.length}</span>
        )}
      </div> */}


        {/*  Cart Section moved to cart.js es ki div r sara work cart.js m h lkn es ko show edhr krwaya gya h ta k hum cart navbar m dekh sky. r es sy hi cart close btn kam kry ga   */}
        <Cart cartRef={cartRef} cartHandler={cartHandler} />
        
        <div className="wishlist-icon"
          onClick={wishlistHandler} style={{ position: 'relative', cursor: 'pointer' }} >
          <RiHeart3Line />            {/* wishlist icon count bagde add krny k liye h r ye icon ki div m add krty hn */}
          {wishlistItems.length > 0 && (
          <span className="wishlist-count">{wishlistItems.length}</span>
        )}
        </div>
            {/* parent component me es ko likhny sy hi cart close btn kam kry ga  */}
        <Wishlist wishlistRef={wishlistRef} wishlistHandler={wishlistHandler} />


        <div className="bi bi-list" id='menu-btn' onClick={navbarHandler}></div>
      </div>

      <div className="search-form" ref={searchRef}>
        <input type="search" placeholder='search here...' id='search-box' />
        <label htmlFor="search-box" className='bi bi-search'></label>
      </div>
    </header>
  );
};

export default Navbar;
