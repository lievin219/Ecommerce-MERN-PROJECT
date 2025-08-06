





import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContect } from '../../Context/ShopContext'        
import remove_icon from '../Assets/Assets/cart_cross_icon.png'


const CartItem = () => {
   const { getTotlCartItems, getTotalCartAmount, all_productse, removefromCart, CartItems } = useContext(ShopContect);
 
  
   if (!Array.isArray(all_productse) || all_productse.length === 0) {
     return <div>No products available in the cart</div>; 
   }
 
   return (
     <div className='cartitems'>
       <div className='cartitems-format-main'>
         <p>Products</p>
         <p>Title</p>
         <p>Price</p>
         <p>Quantity</p>
         <p>Total</p>
         <p>Remove</p>
       </div>
       <hr/>
 
       {all_productse.map((e) => {
         if (CartItems[e.id] > 0) {
           return (
             <div key={e.id}>
               <div className='cartitems-format cartitems-format-main'>
                 <img src={e.image} alt="" className='carticon-product-icon' />
                 <p>{e.name}</p>
                 <p>${e.new_price}</p>
                 <button className='cartitems-quantity'>{CartItems[e.id]}</button>
                 <p>${e.new_price * CartItems[e.id]}</p>
                 <img className='cartitems-remove-icon' src={remove_icon} onClick={() => removefromCart(e.id)} alt="Remove" />
               </div>
               <hr />
             </div>
           );
         } else {
           return null;
         }
       })}
 
       <div className="cartitems-down">
         <div className="cartitems-total">
           <h1>Cart Totals</h1>
           <div>
             <div className='cartitems-total-item'>
               <p>SubTotal</p>
               <p>${getTotalCartAmount()}</p>
             </div>
             <hr />
             <div className='cartitems-total-item'>
               <p>Shipping fee</p>
               <p>Free</p>
             </div>
             <hr />
             <div className='cartitems-total-item'>
               <h3>Total</h3>
               <h3>${getTotalCartAmount()}</h3>
             </div>
           </div>
           <button>Proceed To Checkout</button>
         </div>
         <div className='cartitems-promocode'>
           <p>If you have a promo code, enter it here</p>
           <div className='cartitems-promobox'>
             <input type="text" placeholder='Promo code' />
             <button>Submit</button>
           </div>
         </div>
       </div>
     </div>
   );
 }
 
 export default CartItem;
 
