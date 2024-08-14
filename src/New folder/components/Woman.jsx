import React from 'react';
import { Link } from 'react-router-dom';
import { womanData } from '../data/woman';
const Woman = () => {
    const firstFivewomen=womanData.slice(0,5);
  return (
    <>
    <h2>woman</h2>
    <div className='proSection'>
    {

    firstFivewomen.map((Item) =>  {
        return(<Link to={`/wom/${Item.id}`}>
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

export default Woman