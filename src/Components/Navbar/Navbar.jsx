import React, { useState } from 'react'
import '../Navbar/Navbar.css'
import logo from '../Assets/Assets/logo.png'
import cart_icon from '../Assets/Assets/cart_icon.png'
import { Link } from 'react-router-dom'



const Navbar = () => {
  const [menu,setMenu]=useState("shop")
  return (
    <div className='navbar'>
     <div className='nav-logo'>
      <img src={logo} alt="" />
      <p> Shooper</p>
     </div>
     <ul className='nav-menu'>
      <li onClick={()=>{setMenu("shop")}}><Link to='/shop'> shop</Link>   {menu==='shop' ?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("mens")}}><Link to='/mens'> Men's</Link>{menu==='mens' ?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("womens")}}><Link to='/womens' textdecoration='none'> Womens</Link> {menu==='womens' ?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("kids")}}><Link to='/kids'> Kids</Link> {menu==='kids' ?<hr/>:<></>}</li>
     </ul>
     <div className='nav-login-cart'>  
      <button className=''>login</button>
      <img src={cart_icon} alt="" />
      <div className='nav-cart-count'>0</div>
     </div>
    </div>
  )
}

export default Navbar
