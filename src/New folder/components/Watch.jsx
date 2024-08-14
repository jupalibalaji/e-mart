import React from 'react';
import { watchData } from '../data/watch';
const Watch = () => {
    const firstFivewatches=watchData.slice(0,5);
  return (
    <>
    <h2>Watches</h2>
    <div className='proSection'>
    {

    firstFivewatches.map((Item) =>  {
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

export default Watch