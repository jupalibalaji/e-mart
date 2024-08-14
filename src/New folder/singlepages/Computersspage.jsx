import React from 'react';
import { useParams } from 'react-router-dom';
import { computerData } from '../data/computers';
const Computersspage = () => {
    const {id}=useParams();
    const product=computerData.find((item)=>item.id===id);
    
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
          <h3>{product.company}</h3>
        </div>
        <div className='singdes'>
          <p>
          {product.description}
          </p>
        </div>
  
    </div>
    )
}

export default Computersspage