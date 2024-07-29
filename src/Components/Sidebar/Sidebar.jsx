import React from 'react'

const Sidebar = () => {
    const  getdefaoulcart=()=>{
        const cart={}
         for(let index=0;index<all_products.length+1;index++){
             cart[index]=0;
         }
          return cart;
    }
     const ShopContextProvider=(props)=>{
        const[CartItems,setCartItem]=useState(getdefaoulcart());
        // const contextvalue={all_products,CartItem}
        
    
          const addtoCart=(itemId)=>{
                 setCartItem((prev)=>({
                    ...prev,[itemId]:prev[itemId]+1
                    
                 }
                ))
                 console.log(CartItems)
          }
          const removefromCart=(itemId)=>{
            setCartItem((prev)=>({
               ...prev,[itemId]:prev[itemId]-1
            }))
     }
      const getTotalCartAmount=()=>{
       let totalamount=0;
       for(let items in CartItems){
           if(CartItems[items] > 0){
              let itemInfo=all_products.find((product)=>product.id===Number(items))
              totalamount +=itemInfo.new_price*CartItems[items]
             // totalamount +='it is working but no amount is being dispalyed'
           }
          
       }
       return totalamount 
       
    
      }
       const getTotlCartItems=()=>{
           let totalItems=0;
            for( const item in CartItems ){
              if(CartItems[item]>0){
                 totalItems +=CartItems[item]
              }
    
            }
             return  totalItems
       }
       
     const contextvalue={getTotlCartItems,getTotalCartAmount,all_products,CartItems,addtoCart,removefromCart}
        return(
            <ShopContect.Provider value={contextvalue}>
                {props.children}
            </ShopContect.Provider> 
              
        )
     }
}

export default Sidebar
