import React, { useState } from 'react'
import { createContext } from 'react'
import all_products from '../Components/Assets/Assets/all_product'

 export const ShopContect=createContext(null)
 const  getdefaoulcart=()=>{
    const cart={}
     for(let index=0;index<all_products.length+1;index++){
         cart[index]=0;
     }
      return cart;
}
 const ShopContextProvider=(props)=>{
    const[CartItem,setCartItem]=useState(getdefaoulcart());
    // const contextvalue={all_products,CartItem}
    

      const addtoCart=(itemId)=>{
             setCartItem((prev)=>({
                ...prev,[itemId]:prev[itemId]+1
                
             }
            ))
             console.log(CartItem)
      }
      const removefromCart=(itemId)=>{
        setCartItem((prev)=>({
           ...prev,[itemId]:prev[itemId]-1
        }))
 }
   
 const contextvalue={all_products,CartItem,addtoCart,removefromCart}
    return(
        <ShopContect.Provider value={contextvalue}>
            {props.children}
        </ShopContect.Provider> 
          
    )
 }
 export default ShopContextProvider