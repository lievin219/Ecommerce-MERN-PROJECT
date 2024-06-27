import React from 'react'
import './NewCollection.css'
import new_collections from '../Assets/Assets/new_collections.js'
import Items from '../Items/Items.jsx'

const NewCollextions = () => {
  return (
    <div className='newcollection'>     
        <h1>New Collection </h1>
        <hr />
        <div className='collection'>
            {new_collections.map((items,i)=>{        
             return <Items  key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
            })}

        </div>
      
    </div>
  )
}

export default NewCollextions
