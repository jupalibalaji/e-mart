import React from 'react'
import { Link } from 'react-router-dom'
import { UseCart } from '../context/createcontext'
export const NavBar = () => {
  const {cartItems}=UseCart()
  return (<>
    <div className='NavBarSec'>
    <div className='title'>
    <Link to ='/'><h1>E-Mart</h1></Link>
    </div>
    <div className='search'>
    <input type='text' placeholder='    search..'/>
    </div>
    <Link to='/cart'>
    <div>Cart</div>
    
    <h4>{cartItems.length}</h4>
  
    
    </Link>
    
    <div className='user'>
                  Signin/Signup
                  </div>
           
    
    </div>


   <div className='submenu'>
    <ul>
      <Link to ='/acs'><li>AC</li></Link>
      <Link to ='/com'><li>Computers</li></Link>
      <Link to ='/fur'><li>Furnitures</li></Link>
      <Link to ='/men'><li>Men Fashion</li></Link>
      <Link to ='/mob'><li>Mobiles</li></Link>
      <Link to ='/wat'><li>Watches</li></Link>
      <Link to ='/wom'><li>Women Fasion</li></Link>
    </ul>
   </div>
   </>
  )
}
