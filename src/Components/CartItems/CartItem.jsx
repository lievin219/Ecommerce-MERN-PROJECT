// import React, { useContext } from 'react';
// import './CartItems.css';
// import { ShopContect } from '../../Context/ShopContext'; // Check the spelling here
// import remove_icon from '../Assets/Assets/cart_cross_icon.png';

// const CartItem = () => {
//   const { all_products, removefromCart, CartItems } = useContext(ShopContect);

//   // Check if CartItems or all_products is undefined
//   if (!CartItems || !all_products) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className='cartitems'>
//       <div className='cartitems-format-main'>
//         <p>Products</p>
//         <p> Title </p>
//         <p> Price</p>
//         <p> Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />
//       {all_products.map((e) => {
//         if (CartItems[e.id]) {
//           return (
//             <div key={e.id}>
//               <div className='cartitems-format'>
//                 <img src={e.image} alt={e.name} className='carticon-produc-icon' />
//                 <p>{e.name}</p>
//                 <p>${e.new_price}</p>
//                 <button className='cartitems-quantity'>{CartItems[e.id].quantity}</button>
//                 <p>{(CartItems[e.id].quantity * e.new_price).toFixed(2)}</p>
//                 <img
//                   src={remove_icon}
//                   onClick={() => {
//                     removefromCart(e.id);
//                   }}
//                   alt="Remove Item"
//                 />
//               </div>
//               <hr />
//             </div>
//           );
//         } else {
//           return null;
//         }
//       })}
//     </div>
//   );
// };

// export default CartItem;





import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContect } from '../../Context/ShopContext'        
import remove_icon from '../Assets/Assets/cart_cross_icon.png'

const CartItem = () => {
     const { getTotlCartItems,getTotalCartAmount,all_products,removefromCart,CartItems}=useContext(ShopContect)
  return (
    <div className='cartitems'>
         <div className='cartitems-format-main'>
            <p>Products</p>
            <p> Title </p>
            <p> Price</p>
            <p> Quantity</p>
            <p>Total</p>
            <p>Remove</p>

         </div>
        <hr/>
       {all_products.map((e)=>{
        if(CartItems[e.id]>0){
           return  <div>
           <div  className='cartitems-format cartitems-format-main'>
               <img src={e.image} alt=""  className='carticon-product-icon'/>
               <p>{e.name}</p>
               <p>${e.new_price}</p>
               <button className='cartitems-quantity'>{CartItems[e.id]}</button>
               <p>${e.new_price*CartItems[e.id]}</p>
               <img className='cartitems-remove-icon' src={remove_icon}     onClick={()=>{
                  removefromCart(e.id)
               }} alt="" />
           </div>
           <hr />
       </div>
        }else{
           return null
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
                 <p>Sheeping fee</p>
                 <p>Free</p>
               </div>
               <hr />
               <div className='cartitems-total-item'>
           <h3>
             Total
           </h3>
           <h3> ${getTotalCartAmount()}</h3>
               </div>
            </div>
            <button>Procced To Check Out</button>
          </div>
          <div className='cartitems-promocode'>
            <p>if you have a promo code ,Enter it here</p>
            <div className='cartitems-promobox'>
               <input type="text"  placeholder='promocode' />
               <button>submitt</button>

            </div>
         </div>
         
           </div>
        
    </div>
  )
}

export default CartItem
