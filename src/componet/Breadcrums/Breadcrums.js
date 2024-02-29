import React from 'react'
import "./Breadcrums.css"
import arrow_icon from "../Assets/breadcrum_arrow.png"

const Breadcrums = (props) => {
    const {product}=props
  return (
    <div className='Breadcrums'>
    HOME <img src={arrow_icon} alt=''/>SHOP <img src={arrow_icon} alt=''/>{product.categoy}<img src={arrow_icon} alt=''/>{product.name}
    </div>
  )
}

export default Breadcrums