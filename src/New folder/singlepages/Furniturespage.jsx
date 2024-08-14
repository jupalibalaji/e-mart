import React from 'react';
import { useParams } from 'react-router-dom';
import { furnitureData } from '../data/furniture';
const Furniturespage = () => {
    const {id}=useParams();
    const product=furnitureData.find((item)=>item.id===id);
    
    return (
    <div>
        <div className='singimg'>
          <img src={product.image}/>
        </div>
        <div className='singprice'>
          <h2>${product.price}</h2>
        </div>
        <div className='singmodel'>
          <h3>{product.model}</h3>
        </div>
        <div className='singcomapany'>
          <h3>{product.brand}</h3>
        </div>
        <div className='singdes'>
          <p>
          {product.description}
          </p>
        </div>
  
    </div>
    )
}

export default Furniturespage