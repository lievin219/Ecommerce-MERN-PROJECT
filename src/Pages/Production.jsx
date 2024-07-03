import React, { useContext } from 'react'
import  { ShopContect } from '../Context/ShopContext.jsx'
import { useParams } from 'react-router-dom'
import BreadCrums from '../Components/BreadCrums/BreadCrums'
import ProductDisplay from '../Components/productDisplay/ProductDisplay.jsx'

 const  Production=()=>{
     const  {all_products}=useContext(ShopContect)
     const{productId}=useParams()
      const product=all_products.find((e)=>{
          return  e.id===Number(productId)
      })
    return(
        <div>
          <BreadCrums product={product}/>
          <ProductDisplay product={product}/>
        </div>
    )
 }
  export default Production
