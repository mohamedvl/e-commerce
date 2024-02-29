import React, { useContext } from 'react'
import {ShopContext} from "../Contexet/ShopContext"
import { useParams } from 'react-router-dom'
import Breadcrums from '../componet/Breadcrums/Breadcrums'
import ProductDisplay from '../componet/ProductDisplay/ProductDisplay'




const Product = () => {
  const {all_product}=useContext(ShopContext)
  const {productId}=useParams()
  const product=all_product.find((e)=>e.id===Number(productId))


  return (
    <div>
    <Breadcrums product={product}/>
    <ProductDisplay product={product}/>
    
    </div>
  )
}

export default Product