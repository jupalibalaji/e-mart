import React from 'react';
import { womanData } from '../data/woman';
const Woman = () => {
    const firstFivewomen=womanData.slice(0,5);
  return (
    <>
    <h2>woman</h2>
    <div className='proSection'>
    {

    firstFivewomen.map((Item) =>  {
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

export default Woman