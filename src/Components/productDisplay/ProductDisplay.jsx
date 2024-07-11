import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/Assets/star_icon.png'
import star_dull_icon from '../Assets/Assets/star_dull_icon.png'
import { ShopContect } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
  const {product}=props
  const {addtoCart}=useContext(ShopContect)
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
           <div className='productdisplay-img-list'>
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />  
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
           </div>
            <div className='productdisplay-img'>
            <img className='productdisplay-main-imgproductdisplay-main-img' src={product.image} alt="" />

            </div>
        </div>
          <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-star'>
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_dull_icon} alt="" />
              <p>(122)</p>

            </div>
            <div className='productdisplay-right-prices'>
              
            <div className='productdisplay-right-prices-old'>
              ${product.old_price}
            </div>
            <div className='productdisplay-right-prices-new'>
              ${product.new_price}
            </div>
            </div>
            <div className='productdisplay-right-description'>
            Our e-commerce platform, ShopSphere, is a comprehensive online marketplace designed to 
            provide a seamless shopping experience for customers and robust tools for sellers. Whether you're looking for the latest fashion trends, cutting-edge electronics, home essentials, or unique handmade items, ShopSphere has something for everyone.
            </div>
            <div className="productdisplay-right-size"> 
              <h1>Select Sizes</h1>
              <div className='productdisplay-right-sizes'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>

              </div>
            </div>
            <button onClick={()=>{
              addtoCart(product.id)
            }}>ADD TO CART</button>
              <p className='productdisplay-right-category'><span>Category :</span>{product.category}, t-shirt,crop-top</p>
              <p className='productdisplay-right-category'><span>TAGS :</span>modern latest,</p>
            </div>
            

          </div>
      
    
  )
}

export default ProductDisplay
