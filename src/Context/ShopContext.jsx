import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import Cookies from 'js-cookie'
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
    const [all_productse,setall_productse]=useState([])
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

          const Token=Cookies.get('authTokenii')
           if(Token){
              fetch('http://localhost:4000/gettocart',{
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
                                                   
                                               
    //   const addtoCart=(itemId)=>{
    //          setCartItem((prev)=>({
    //             ...prev,[itemId]:prev[itemId]+1
                
    //          }
             
    //         ))
    //         if(Cookies.get('auth-tokenii')){
    //             if(Cookies.get('auth-tokenii')){
    //                fetch('http://localhost:4000/addtocart',{
    //                  method:"POST",
    //                  headers:{
    //                  Accept:'application/json',
    //                 'auth-token':`${Cookies.get('auth-tokenii')}`,
    //                 'Content-Type':"application/json"},
    //                 body:JSON.stringify({"itemId":itemId})    
    //                }).then((response)=>
    //                   response.json()
    //                ).then((datas)=>
                   
    //                 setall_productse(datas))
    //             }
    //         }
                      
    //   }

    const addtoCart = async (itemId) => {
        setCartItem((prev) => ({
            ...prev,
            [itemId]: prev[itemId] +1  // Ensure prev[itemId] is not undefined
        }));
    
        const authToken = Cookies.get('authTokenii');
        if (authToken) {
            try {
                const response = await fetch('http://localhost:4000/addtocart', {
                    method: "POST",
                    headers: {
                        Accept: 'application/json',  // Updated to 'application/json'
                       'Authorization': `Bearer ${authToken}`,   
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({"itemId": itemId })
                    
                });
 console.log('data and item id is equal ,to =>',itemId)
  console.log(" cookie from addocart is",authToken)


    
                const data = await response.json();
                if(data.error){
                console.log('the data are from add to cart  ',data);}
                setall_productse(data);  // Assuming setall_productse is correct
            } catch (error) {
                console.error("Error adding to cart:", error);
            }
        }
    }
    

    // const addtoCart = async (itemId) => {
    //     setCartItem((prev) => ({
    //         ...prev,
    //         [itemId]: (prev[itemId] || 0) + 1  // Ensure prev[itemId] is not undefined
    //     }));
    
    //     const authToken = Cookies.get('auth-tokenii');
    //     if (authToken) {
    //         await fetch('http://localhost:4000/addtocart', {
    //             method: "POST",
    //             headers: {
    //                 Accept: 'application/json',  // Updated to 'application/json'
    //                 'auth-tokenii': authToken,
    //                 'Content-Type': "application/json"
    //             },
    //             body: JSON.stringify({ "itemId": itemId }

    //         )})
    //         .then((response) => response.json() ,console.log(response.json()))
    //         .then((data) => {
    //             setall_productse(data);  // Assuming setall_productse is correct
    //         })
    //         .catch((error) => {
    //             console.error("Error adding to cart:", error);
    //         });
    //     }
    // }
    
     
      const removefromCart=async(itemId)=>{
        setCartItem((prev)=>({
           ...prev,[itemId]:prev[itemId]-1
        }))
        const authToken = Cookies.get('authTokenii');
          console.log('the cookie is ',authToken)
        if (authToken) {
            try {
                const response = await fetch('http://localhost:4000/removefromcart', {
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
 