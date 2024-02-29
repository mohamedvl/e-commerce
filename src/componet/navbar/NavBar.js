import React, { useContext, useState } from 'react'
import "./NavBar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import {ShopContext} from "../../Contexet/ShopContext"

const NavBar = () => {
  const {cart}=useContext(ShopContext)
  const [menu,setmenu]=useState("shop")


  return (
    <div className='navbar'>

    <div className='nav-logo'>
      <img src={logo} alt='logo'/>
      <p>SHOPPER</p>
    </div>

    <ul className='nav-menu'>
      <li onClick={()=>setmenu("shop")}><Link to={"/"} style={{textDecoration:"none"}}>Shop</Link> {menu==="shop"?<hr/>:null}</li>
      <li onClick={()=>setmenu("man")}><Link to={"/mens"}style={{textDecoration:"none"}}>Man</Link> {menu==="man"?<hr/>:null}</li>
      <li onClick={()=>setmenu("women")}><Link to={"/Womens"}style={{textDecoration:"none"}}>Women</Link> {menu==="women"?<hr/>:null}</li>
      <li onClick={()=>setmenu("kid")}><Link to={"/kids"}style={{textDecoration:"none"}}>Kids</Link> {menu==="kid"?<hr/>:null}</li>
    </ul>

    <div className='nav-login-cart'>
      <Link to={"/login"}><button>Login</button></Link>
      <Link to={"/cart"}><img src={cart_icon} alt='cart icon'/></Link>
      <div className='nav-cart-count'>{cart.length}</div>
    </div>

    </div>
  )
}

export default NavBar