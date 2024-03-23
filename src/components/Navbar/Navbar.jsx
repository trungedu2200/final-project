import React, { useContext, useState } from 'react'
import  './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
import Testing from '../Testing/Testing'

const Navbar = ({setShowLogin }) => {

  const [menu,setMenu] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>menu</a>
        <a href='#footer' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>contact us</a>
      </ul>
      <div className="navbar-right">
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {localStorage.getItem('isLoggedIn') === 'true' ?
          <button onClick={() => { handleLogout() }}>Logout</button> :
          <button onClick={() => setShowLogin(true)}>Login</button>}
      </div>
    </div>
  );
}

export default Navbar
