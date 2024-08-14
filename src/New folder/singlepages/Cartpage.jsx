import React from 'react';
import { NavBar } from '../components/NavBar';
import { UseCart } from '../context/createcontext';
const Cartpage = () => {
    const {cartItems,AddCartItems,RemoveCartItems}=UseCart()
  return (
    <><NavBar />
    <div className='totalcartitems'>
        {cartItems.map((item) => {
            return (
          <><div className='cartImg'>
              <img src={item.image} />
          </div>
              <div className="cartprice">
                  <h2>{item.price}</h2>
              </div>
              <div className="cartcategory">
                  {item.category}
              </div>
              <div className="cartdesc">
                  {item.description}
              </div>
                <div className='removebtn'>
                    <button onClick={()=>RemoveCartItems(item)}>Remove</button>
                </div>

          </>
            )

      })}
      </div></>
  )
}

export default Cartpage