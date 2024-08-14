import React from 'react';
import { useParams } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { UseCart } from '../context/createcontext';
import { acData } from '../data/ac';
const ACspage = () => {
    const {id}=useParams();
    const product=acData.find((item)=>item.id===id);
    const {AddCartItems,cartItems }= UseCart();
    return (
      <><NavBar /><div>
        <div className='singimg'>
          <img src={product.image} />
        </div>
        <div className='singprice'>
          <h2>${product.price}</h2>
        </div>
        <div className='singmodel'>
          <h3>{product.model}</h3>
        </div>
        <div className='singcomapany'>
          <h3>{product.company}</h3>
        </div>
        <div className='singdes'>
          <p>
            {product.description}
          </p>
        </div>

        <div className='addbutton'>
        <button onClick={() => AddCartItems(product)}>Add to Cart</button>
      </div>

      </div></>
    )
}

export default ACspage