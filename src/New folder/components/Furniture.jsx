import React from 'react';
import { Link } from 'react-router-dom';
import { furnitureData } from '../data/furniture';
const Furniture = () => {
    const firstFivefurniture=furnitureData.slice(0,5);
  return (
    <>
    <h2>Furniture</h2>
    <div className='proSection'>
    {

    firstFivefurniture.map((Item) =>  {
        return(
          <Link to={`/fur/${Item.id}`}>
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

export default Furniture