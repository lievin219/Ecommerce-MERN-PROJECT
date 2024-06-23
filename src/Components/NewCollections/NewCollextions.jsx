import React from 'react'
import './NewCollection.css'
import new_collections from '../Assets/Assets/new_collections'
import item from '../Items/Items.jsx'

const NewCollextions = () => {
  return (
    <div className='newcollection'>     
        <h1>New Collection </h1>
        <hr />
        <div className='collections'>
            {new_collections.map((item,i)=>{        
             return <item/>
            })}

        </div>
      
    </div>
  )
}

export default NewCollextions
