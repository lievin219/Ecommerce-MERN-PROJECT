import React, { useContext } from 'react'
import  { ShopContect } from '../Context/ShopContext.jsx'
import { useParams } from 'react-router-dom'
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct.jsx'
import BreadCrums from '../Components/BreadCrums/BreadCrums'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox.jsx'
import ProductDisplay from '../Components/productDisplay/ProductDisplay.jsx'

 const  Production=()=>{
     const  {all_productse}=useContext(ShopContect)
     const{productId}=useParams()
      console.log('alll products are here',all_productse)
      // const product=all_productse.find((e)=>{
      //     return  e.id===Number(productId)



      // })
      const product = Array.isArray(all_productse)
      ? all_productse.find((e) => e.id === Number(productId))
      : null;
      if (!product) {
        return <div>Product not found!</div>;
      }
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
