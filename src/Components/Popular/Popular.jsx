import React from 'react'
import './Popular.css'
import data_product from '../Assets/Assets/data.js'
import Items from '../Items/Items.jsx'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>Popular in Women</h1>
       <hr />
         <div className='popular-item'>
         {data_product.map((items,i)=>{
            return <Items key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
         })}
         </div>
    </div>
  )
}

export default Popular
