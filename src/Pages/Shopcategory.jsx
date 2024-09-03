import React, { useContext,useEffect,useState } from 'react'
import './css/ShopCategory.css'
import { Link } from 'react-router-dom'
 import Cookies from 'js-cookie'
import { ShopContect } from '../Context/ShopContext'
import Item from '../Components/Items/Items.jsx'
import dropDown_icon from '../Components/Assets/Assets/dropdown_icon.png'

const Shopcategory = (props) => {
  const {all_productse}=useContext(ShopContect)
   const[getcookie,setCookie]=useState(null)

    const getcookies=()=>{
       const cookie=Cookies.get('authTokenii')
        setCookie(cookie)
       
    }

     useEffect(()=>{
       getcookies()
     },[])
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
            {/* {all_productse.map((items,i)=>{
               if(props.category===items.category){
                  return <Item    key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
               }
               else{
                 return null
               }

            })} */}              
            {
  getcookie ? (
    all_productse?.map((items, i) => {
      if (props.category === items.category) {   
        return (
          <Item            
            key={i}
            id={items.id}
            name={items.name}
            image={items.image}
            new_price={items.new_price}
            old_price={items.old_price}
          />
        );
      } else {
        return null;
      }
    })
  ) : (
    <h1>Please <Link to='/login'>login here</Link> to get the products that are in the store</h1>
  )
}

          </div>
          <div className='shopcategory-loadmore'>
              <button>explore more</button>
          </div>

      </div>
 
  )
}

export default Shopcategory
