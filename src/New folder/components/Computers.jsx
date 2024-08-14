import React from 'react';
import { Link } from 'react-router-dom';
import { computerData } from '../data/computers';

const Computers = () => {

const firstFivecomputers=computerData.slice(0,5);

return (
<>
<h2>Computers</h2>
    <div className='proSection'>
        {
  
        firstFivecomputers.map((Item) =>  {
            return(
                <Link to={`/com/${Item.id}`}>
            <div className='imgBox'>
                <img className='proImage' src={Item.image} alt="computers"/>
            </div>
            </Link>)
        })

         }
    </div>
    </>
)

}

export default Computers; 