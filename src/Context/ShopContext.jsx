import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
// import all_products from '../Components/Assets/Assets/all_product'
// import all_product from '../Components/Assets/Assets/all_product'

 export const ShopContect=createContext(null)
 const  getdefaoulcart=()=>{
    const cart={}
     for(let index=0;index<300+1;index++){
         cart[index]=0;
     }     
      return cart;
}
 const ShopContextProvider=(props)=>{
    const [all_productse,setall_productse]=useState()
    const[CartItems,setCartItem]=useState(getdefaoulcart());
    // const contextvalue={all_products,CartItem}


    useEffect(() => {
      async function fetching() {
          try {
              const response = await fetch('http://localhost:4000/allproducts');
              const Finaldata = await response.json();
  
              // Assuming 'message' contains the array of products
              if (Array.isArray(Finaldata.message)) {
                  setall_productse(Finaldata.message);
                  console.log(Finaldata.message);
              } else {
                  console.error('Expected an array but got:', Finaldata.message);
              }
          } catch (err) {
              console.error('Error fetching products:', err);
          }
      }
      fetching();
  }, []);
  
            
//           useEffect(()=>{
//             async function fetching(){
//                try{
//           const response=await fetch('http://localhost:4000/allproducts')  
//              const Finaldata=await response.json()
//              setall_productse(Finaldata)
//               console.log(Finaldata)
//               console.log(Array.isArray(Finaldata))}
//                catch(err){
//                   console.error('Error fetching products:', err);
//                }; // Should print true if Finaldata is an array
           
// }
     //         fetching()
       //   },[])
                                                   
                                               
      const addtoCart=(itemId)=>{
             setCartItem((prev)=>({
                ...prev,[itemId]:prev[itemId]+1
                
             }
            ))
                      
      }
      const removefromCart=(itemId)=>{
        setCartItem((prev)=>({
           ...prev,[itemId]:prev[itemId]-1
        }))
 }
  const getTotalCartAmount=()=>{
   let totalamount=0;
   // for(let items in CartItems){
   //     if(CartItems[items] > 0){
   //        let itemInfo=all_products.find((product)=>product.id===Number(items))
   //        totalamount +=itemInfo.new_price*CartItems[items]
   //       // totalamount +='it is working but no amount is being dispalyed' 
   //     }
           
   // }
                            

   return totalamount
   

  }
   const getTotlCartItems=()=>{
       let totalItems=0;
        for( const item in CartItems){
          if(CartItems[item]>0){
             totalItems +=CartItems[item]
          }
                               
        }
         return  totalItems
   }
   
 const contextvalue={getTotlCartItems,getTotalCartAmount,all_productse,CartItems,addtoCart,removefromCart}
    return(
        <ShopContect.Provider value={contextvalue}>
            {props.children}
        </ShopContect.Provider> 
          
    )
 }
 export default ShopContextProvider
 