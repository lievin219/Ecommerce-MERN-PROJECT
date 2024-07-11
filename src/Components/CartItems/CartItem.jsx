import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContect } from '../../Context/ShopContext'
import remove_icon from '../Assets/Assets/cart_cross_icon.png'

const CartItem = () => {
     const {all_products,removefromCart,CartItems}=useContext(ShopContect)
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
        <div>
            <div  className='cartitems-format'>
                <img src="" alt=""  className='carticon-produc-icon'/>
                <p></p>
                <p></p>
                <button className='cartitems-quantity'></button>
                <p></p>
                <img src={remove_icon}  onClick={()=>{
                   removefromCart()
                }} alt="" />
            </div>
        </div>
         
    </div>
  )
}

export default CartItem
