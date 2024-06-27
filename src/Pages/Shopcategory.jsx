import React, { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContect } from '../Context/ShopContext'
import Item from '../Components/Items/Items.jsx'
import dropDown_icon from '../Components/Assets/Assets/dropdown_icon.png'

const Shopcategory = (props) => {
  const {all_products}=useContext(ShopContect)
  return (
    <div className='shopcategory'>
       <img  className='shopcategory-banner' src={props.banner} alt="" />
       <div className='shopcategory-index'>
        <p>
          <span>
            showing 1-12
          </span> out of 36 Products
          </p>
          <div className='shopcategory-sort'>
            sort by <img src={dropDown_icon} alt="" />
          </div>
          </div>
          <div className='shopcategory-products'>
            {all_products.map((items,i)=>{
               if(props.category===items.category){
                  return <Item    key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
               }
               else{
                 return null
               }

            })}
          </div>
          <div className='shopcategory-loadmore'>
              <button>explore more</button>
          </div>

      </div>
 
  )
}

export default Shopcategory
