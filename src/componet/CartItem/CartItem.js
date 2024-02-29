import React from 'react'
import { useContext } from 'react'
import {ShopContext} from "../../Contexet/ShopContext"
import remove_icon  from "../Assets/cart_cross_icon.png"
import "./CartItem.css"

const CartItem = () => {
    const {cart,remove,totalPrice}=useContext(ShopContext)
  return (
    <div className='CartItem'>
    <div className='CartItem-format-main'>
    <p>Product</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
    </div>
    <hr/>
    {cart&&cart.map((e,i)=>{
        return(
            <div key={i}>
            <div className='CartItem-fotmat CartItem-format-main'>
            <img src={e.image} alt='' className='carticon-product-icon'/>
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cartitems-quantity'>{e.quantity}</button>
            <p>${e.new_price*(e.quantity)}</p>
            <img src={remove_icon} alt='' onClick={()=>remove(e.id)} className='cartitem-remove-icon'/>
            </div>
            <hr/>
            </div>
        )
    })}
    <div className='cartitems-down'>
    <div className='cartitem-total'>
    <h1>cart Total</h1>
    <div>
    <div className='cartitems-total-item'>
    <p>Subtatal</p>
    <p>${totalPrice}</p>
    </div>
    <hr/>
    <div className='cartitems-total-item'>
    <p>Shipping Fee</p>
    <p>Free</p>
    </div>
    <hr/>
    <div className='cartitems-total-item'>
    <h3>Total</h3>
    <h3>${totalPrice}</h3>
    </div>
    </div>
    <button>PROCEED TO CHECKOUT</button>
    </div>
    <div className='cartitem-promocode'>
    <p>If you had a promo code, Enter it her</p>
    <div className='cartitems-promobox'>
    <input type='text' placeholder='promo code'/>
    <button>submit</button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default CartItem