import React from 'react';
import { Link } from 'react-router-dom';
import { acData } from '../data/ac';
const AC = () => {
    const firstFiveAcs=acData.slice(0,5);
  return (

    <>
    <h2>AC</h2>
    <div className='proSection'>
    {

    firstFiveAcs.map((Item) =>  {
        return(
          <Link to={`/acs/${Item.id}`}>
        <div className='imgBox'>
            <img className='proImage' src={Item.image} />
        </div>
        </Link>)
    
    })

     }
</div>
</>
  
  )
}

export default AC