import './DescriptionBox.css'
import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
       <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'> Description</div>
        <div className='descriptionbox-nav-box fade'> Reviews (122)</div>
       </div>
       <div className='description-description'>
        <p>  The primary purpose of an e-commerce website is to provide a convenient and efficient shopping experience for customers. It allows businesses to reach a wider audience,
             operate 24/7, and offer a seamless buying process from product discovery to order fulfillment.</p>
             <p>The primary purpose of an e-commerce website is to provide a convenient and efficient shopping experience for customers. It allows businesses to reach a wider audience,
                 operate 24/7, and offer a seamless buying process from product discovery to order fulfillment.</p>
       </div>
    </div>
  )
}

export default DescriptionBox
