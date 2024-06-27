import React from 'react'
import { createContext } from 'react'
import all_products from '../Components/Assets/Assets/all_product'

 export const ShopContect=createContext(null)
 const ShopContextProvider=(props)=>{
    const contextvalue={all_products}
    return(
        <ShopContect.Provider value={contextvalue}>
            {props.children}
        </ShopContect.Provider>
    )
 }
 export default ShopContextProvider