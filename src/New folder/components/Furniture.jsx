import React from 'react';
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
        <div className='imgBox'>
            <img className='proImage' src={Item.image} />
        </div>)
    })

     }
</div>
</>
  )
}

export default Furniture