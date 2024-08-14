import React from 'react';
import { menData } from '../data/men';
const Men = () => {
    const firstFivemen=menData.slice(0,5);
  return (
    <>
    <h2>Men</h2>
    <div className='proSection'>
    {

    firstFivemen.map((Item) =>  {
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

export default Men