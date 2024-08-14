import React from 'react';
import { useParams } from 'react-router-dom';
import { watchData } from '../data/watch';
const Watchespage = () => {
    const {id}=useParams();
    const product=watchData.find((item)=>item.id===id);
    
    return (
    <div>
        <div className='sing-img'>
          <img src={product.image}/>
        </div>
        <div className='sing-price'>
          <h2>${product.price}</h2>
        </div>
        <div className='sing-model'>
          <h3>{product.model}</h3>
        </div>
        <div className='sing-comapany'>
          <h3>{product.brand}</h3>
        </div>
        <div className='sing-des'>
          <p>
          {product.description}
          </p>
        </div>
  
    </div>
    )
}

export default Watchespage