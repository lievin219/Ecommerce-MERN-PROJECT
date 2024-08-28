import React, { useContext, useRef, useState,useEffect } from 'react'
import '../Navbar/Navbar.css'
import logo from '../Assets/Assets/logo.png'
import cart_icon from '../Assets/Assets/cart_icon.png'
import Cookies from 'js-cookie';
import axios from 'axios'
import { Link } from 'react-router-dom'   
// import nav_dropdown from '../Assets/Assets/nav_dropdown.png'
// import nav_dropi from '../Assets/Assets/nav_dropi.webp'
import drop from '../Assets/Assets/drop.jpg'
import { ShopContect } from '../../Context/ShopContext'



const Navbar = () => {
   const[authToken,setAuthToken]=useState(null)

  useEffect(() => {
    // Get the cookie using js-cookie
    const token = Cookies.get('authToken');
    console.log('auth token is ->',token) // Replace 'authToken' with your cookie name
    setAuthToken(token); // Set the token in state
}, []);
  const [menu,setMenu]=useState("shop")
  const {getTotlCartItems}=useContext(ShopContect)
   const menuRef=useRef()

    const dropdown_list=(e)=>{
       menuRef.current.classList.toggle('nav-menu-visible')
       e.target.classList.toggle('open')
    }

    //
    const handleLogout = async () => {
      try {
          // Call your backend logout endpoint
          await axios.post('http://localhost:4000/logout'); // Update with your actual endpoint

          // Remove the authentication cookie
          Cookies.remove('authToken'); // Replace 'authToken' with your actual cookie name

          console.log('Logged out successfully');
          // Optionally, redirect the user or update the UI state
      } catch (error) {
          console.error('Logout failed:', error.response?.data || error.message);
      }
  };
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
      {authToken?<button>Logout</button>:<Link to='/login'> <button>login</button></Link>}
     
     <Link to='/cart'> <img src={cart_icon} alt="" /></Link> 
      <button onClick={handleLogout}> logout </button>
      <div className='nav-cart-count'>{getTotlCartItems()}</div>    
     </div>
    </div>
  )
}


export default Navbar
