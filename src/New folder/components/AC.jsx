import React from 'react';
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
        
        <div className='imgBox'>
            <img className='proImage' src={Item.image} />
        </div>)
    
    })

     }
</div>
</>
  
  )
}

export default AC