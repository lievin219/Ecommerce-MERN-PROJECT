
                            


import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import Cookies from 'js-cookie'

 export const ShopContect=createContext(null)
 const  getdefaoulcart=()=>{
    const cart={}
     for(let index=0;index<300+1;index++){
         cart[index]=0;
     }     
      return cart;
}
 const ShopContextProvider=(props)=>{
    const [all_productse,setall_productse]=useState([])
    const[CartItems,setCartItem]=useState(getdefaoulcart());
    // const contextvalue={all_products,CartItem}


    useEffect(() => {
      async function fetching() {
          try {
              const response = await fetch('https://backend-mernproject-u66q.onrender.com/allproducts');
              const Finaldata = await response.json();
  
              // Assuming 'message' contains the array of products
              if (Array.isArray(Finaldata.message)) {
                  setall_productse(Finaldata.message);
                  console.log('final message is here',Finaldata.message);
              } else {
                  console.error('Expected an array but got:', Finaldata.message);
              }
          } catch (err) {
              console.error('Error fetching products:', err);
          }

          const Token=Cookies.get('authTokenii')
           if(Token){
              fetch('https://backend-mernproject-u66q.onrender.com/gettocart',{
                method: "POST",
                headers: {
                    Accept: 'application/json',  // Updated to 'application/json'
                   'Authorization': `Bearer ${Token}`,   
                    'Content-Type': "application/json"
                },
                body: ""
                
            
              }).then((response)=>response.json()).then((data)=>setCartItem(data))
           }
      }
      fetching();
  }, []);
  
            
                  
       
    const addtoCart = async (itemId) => {
        setCartItem((prev) => ({
            ...prev,
            [itemId]: prev[itemId] +1 
        }));
    
        const authToken = Cookies.get('authTokenii');
        if (authToken) {
            try {
                const response = await fetch('https://backend-mernproject-u66q.onrender.com/addtocart', {
                    method: "POST",
                    headers: {
                        Accept: 'application/json',  // Updated to 'application/json'
                       'Authorization': `Bearer ${authToken}`,   
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({"itemId": itemId })
                    
                });
 

    
                const data = await response.json();
                if(data){
                    setall_productse(data)
               }
               ;  // Assuming setall_productse is correct
            } catch (error) {
            
            }
        }
    }
    

    
    
     
      const removefromCart=async(itemId)=>{
        setCartItem((prev)=>({
           ...prev,[itemId]:prev[itemId]-1
        }))
        const authToken = Cookies.get('authTokenii');
          console.log('the cookie is ',authToken)
        if (authToken) {
            try {
                const response = await fetch('https://backend-mernproject-u66q.onrender.com/removefromcart', {
                    method: "POST",
                    headers: {
                        Accept: 'application/json',  // Updated to 'application/json'
                        
                        'Authorization': `Bearer ${authToken}`,
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({"itemId": itemId })
                });


    
                const data = await response.json();
                console.log('the data  from remove from cart',data);
                console.log('and the cookie for the addtocart is =>',authToken)
                setall_productse(data);  // Assuming setall_productse is correct
            } catch (error) {
                console.error("Error adding to cart:", error);
            }
        }
        else{
             alert('no cookie found')
        }
    
    

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
const getTotalCartAmount = () => {
    let totalAmount = 0;
  
    for (let items in CartItems) {
      if (CartItems[items] > 0) {
        //
        let itemInfo = all_productse.find((product) => product.id === Number(items));
  
        // Check if itemInfo is found before trying to access its properties
        if (itemInfo) {
          console.log('Item info of new price is ->', itemInfo);
          totalAmount = totalAmount + itemInfo.new_price * CartItems[items];
        } else {
          console.log(`Product with id ${items} not found in all_productse.`);
        }
      }
    }
  
    return totalAmount;
  };

 const contextvalue={getTotlCartItems,getTotalCartAmount,all_productse,CartItems,addtoCart,removefromCart}
    return(
        <ShopContect.Provider value={contextvalue}>
            {props.children}
        </ShopContect.Provider> 
          
    )
 }
 export default ShopContextProvider
 