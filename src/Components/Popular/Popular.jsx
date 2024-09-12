import React, { useEffect, useState } from 'react'
import './Popular.css'
import data_product from '../Assets/Assets/data.js'
import Items from '../Items/Items.jsx'

const Popular = () => {
   const [populars,setPopulars]=useState([])
   useEffect(()=>{
    async function fetchdata(){
          const popular_women=await fetch('https://backend-mernproject-u66q.onrender.com/women')
          const data=await popular_women.json()
           console.log('thepopular in womens are',data)
           setPopulars(data)
    }fetchdata()
 },[])

    
  return (
    <div className='popular'>
        <h1>Popular in Women</h1>
       <hr />
         <div className='popular-item'>
         {populars.map((items,i)=>{
            return <Items key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
         })}
         </div>
    </div>
  )
}

export default Popular
