import React, { useContext, useRef, useState } from 'react'
import '../Navbar/Navbar.css'
import logo from '../Assets/Assets/logo.png'
import cart_icon from '../Assets/Assets/cart_icon.png'
import { Link } from 'react-router-dom'   
// import nav_dropdown from '../Assets/Assets/nav_dropdown.png'
// import nav_dropi from '../Assets/Assets/nav_dropi.webp'
import drop from '../Assets/Assets/drop.jpg'
import { ShopContect } from '../../Context/ShopContext'



const Navbar = () => {
  const [menu,setMenu]=useState("shop")
  const {getTotlCartItems}=useContext(ShopContect)
   const menuRef=useRef()

    const dropdown_list=(e)=>{
       menuRef.current.classList.toggle('nav-menu-visible')
       e.target.classList.toggle('open')
    }
  return (
    <div className='navbar'>
     <div className='nav-logo'>
      <img src={logo} alt="" />
      <p> Shooper</p>
     </div>
     <img className='nav-dropdown' onClick={dropdown_list} src={drop} alt="" />
     <ul  ref={menuRef}  className='nav-menu'>
      <li onClick={()=>{setMenu("shop")}}><Link to='/shop' style={{textDecoration:'none'}}> shop</Link>   {menu==='shop' ?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{textDecoration:'none'}}> Men's</Link>{menu==='mens' ?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{textDecoration:'none'}}> Womens</Link> {menu==='womens' ?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none'}}> Kids</Link> {menu==='kids' ?<hr/>:<></>}</li>
     </ul>
     <div className='nav-login-cart'>  
     <Link to='/login'> <button>login</button></Link>
     <Link to='/cart'> <img src={cart_icon} alt="" /></Link> 
      <div className='nav-cart-count'>{getTotlCartItems()}</div>    
     </div>
    </div>
  )
}


export default Navbar
