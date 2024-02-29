import { createContext, useState } from "react";
import all_product from "../componet/Assets/all_product"

export const ShopContext=createContext(null)

const ShoContextProvider=(props)=>{

    const [cart,setCart]=useState([])
    const [q,setq]=useState()


    const addToCart=(product)=>{
        const findProduct=cart.find((e)=>e.id===product.id)

        if(findProduct){
            findProduct.quantity+=1
            setq(findProduct.quantity)
            
        }
        else{
            const productColne={...product,quantity:1}
            setCart([...cart,productColne])
        } 
    }

    const remove=(id)=>{
        setCart(cart.filter((e)=>e.id!==id))
    }
    
    const totalPrice=cart.reduce((acc,product)=>{
        acc+=product.new_price*q
        return acc
    },0)


    const contextValue={all_product,addToCart,cart,remove,totalPrice}
    
    return(

    <ShopContext.Provider value={contextValue}>
    {props.children}
    </ShopContext.Provider>

    )
}

export default ShoContextProvider