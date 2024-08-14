import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to={`/men/${Item.id}`}>
        <div className='imgBox'>
            <img className='proImage' src={Item.image} />
        </div></Link>
        )
    })

     }
</div>
</>
  )
}

export default Men