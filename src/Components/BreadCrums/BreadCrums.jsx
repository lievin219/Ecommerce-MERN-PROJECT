import React from 'react'
import './BreadCrum.css'
import arrow_icon from '../Assets/Assets/breadcrum_arrow.png'

const BreadCrums = (props) => {
     const product=props
  return (
    <div className='breadcrum'>
          HOME <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" />{product.category} 
          <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default BreadCrums
