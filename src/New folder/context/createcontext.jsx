import React, { createContext, useContext, useState } from 'react';

const cartcontext=createContext()
export const CartProvider=({children})=>{
   
        const [cartItems,setCartItems]=useState([]);

        const AddCartItems=(item)=>
        {
            setCartItems([...cartItems,item])
        }
        const RemoveCartItems=(item)=>{
            setCartItems(cartItems.filter((items)=>items!==item))
        }

return (
    <cartcontext.Provider value={{cartItems,AddCartItems,RemoveCartItems}}>
        {children}
    </cartcontext.Provider>
);
}
export const UseCart=()=>{

      return  useContext(cartcontext)
}


