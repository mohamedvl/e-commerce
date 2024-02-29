import React from 'react'
import "./Offers.css"
import exclucive_image from "../Assets/exclusive_image.png"

const Offers = () => {
  return (
    <div className='offers'>
    <div className='offerLeft'>
    <h1>Exclusive</h1>
    <h1>Offers for you</h1>
    <p>ONLY ON BEST SELLERS PRODUCT</p>
    <button>Check Now</button>
    
    </div>


    <div className='offerRight'>
    <img src={exclucive_image} alt=''/>
    </div>
    </div>
  )
}

export default Offers