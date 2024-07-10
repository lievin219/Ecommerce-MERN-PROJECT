import React, { useContext } from 'react'
import  { ShopContect } from '../Context/ShopContext.jsx'
import { useParams } from 'react-router-dom'
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct.jsx'
import BreadCrums from '../Components/BreadCrums/BreadCrums'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox.jsx'
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
          <DescriptionBox/>
          <RelatedProduct/>
        </div>
    )
 }
  export default Production
