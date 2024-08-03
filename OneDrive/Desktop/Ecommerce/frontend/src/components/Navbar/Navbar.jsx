import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import nav_drop from '../Assets/image.png';

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdownToggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOOPER</p>
      </div>
      <img className="nav-dropdown" src={nav_drop} alt="" onClick={dropdownToggle} />
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={() => { setMenu("shop") }}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("men") }}>
          <Link style={{ textDecoration: 'none' }} to='/men'>Men</Link>
          {menu === "men" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("women") }}>
          <Link style={{ textDecoration: 'none' }} to='/women'>Women</Link>
          {menu === "women" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("kid") }}>
          <Link style={{ textDecoration: 'none' }} to='/kid'>Kid</Link>
          {menu === "kid" ? <hr /> : null}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=""/></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}
