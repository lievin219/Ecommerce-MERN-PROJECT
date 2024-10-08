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

 
  const [menu,setMenu]=useState("shop")
  const {getTotlCartItems}=useContext(ShopContect)
   const menuRef=useRef()

    const dropdown_list=(e)=>{
       menuRef.current.classList.toggle('nav-menu-visible')   
       e.target.classList.toggle('open')   
    }
  

          

    //
  //   const handleLogout = async () => {
  //    Cookies.remove('authokenii')   
  //     window.location.replace('/Shop')    
  // };
  const removeAuthTokenCookie = () => {
    document.cookie = "authTokenii=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=None; Secure";
    window.location.replace('/login')
  };

  // useEffect(() => {
  //    const token=Cookies.get('authTokenii')
  //    console.log('token is here =>',token)
  //     setAuthToken(token)
  // }, []);
  useEffect(() => {
    const fetchToken = setTimeout(() => {
        const token = Cookies.get('authTokenii');
        setGetcookie(token);
    }, 500); // Delay to allow cookie to set

    return () => clearTimeout(fetchToken); // Cleanup the timeout
}, []);
  
  // useEffect(()=>{
   
  //    const token=Cookies.get('authTokenii')
  //     console.log('retrieved token is ',token)
   
  //    setAuthToken(token)


    
  // },[])
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
 
  
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
      {authToken?<button onClick={()=>{removeAuthTokenCookie()}}>Logout</button>:<Link to='/login'> <button>login</button></Link>}
     
     <Link to='/cart'> <img src={cart_icon} alt="" /></Link> 
     
      <div className='nav-cart-count'>{getTotlCartItems()}</div>    
     </div>
    </div>
  )
}


export default Navbar
