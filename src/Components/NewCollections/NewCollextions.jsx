import React from 'react'
import './NewCollection.css'
import { useState,useEffect } from 'react'

import Items from '../Items/Items.jsx'

const NewCollextions = () => {


   const[new_collection,setNew_collection]=useState([])
    useEffect(()=>{
      async function fetchinge(){
try{
      
       const data=await  fetch('http://localhost:4000/newcollections')
        const response=await data.json()
         console.log('the respone is ',response)
        setNew_collection(response)}catch(err){
           console.log(err)
        }}fetchinge()
    },[])
  return (
    <div className='newcollection'>     
        <h1>New Collection </h1>
        <hr />
        <div className='collection'>
            {new_collection.map((items,i)=>{        
             return <Items  key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
            })}

        </div>
      
    </div>
  )
}

export default NewCollextions
