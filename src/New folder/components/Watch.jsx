import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to={`/wat/${Item.id}`}>
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

export default Watch