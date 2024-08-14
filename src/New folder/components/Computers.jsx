import React from 'react';
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
            <div className='imgBox'>
                <img className='proImage' src={Item.image} alt="computers"/>
            </div>)
        })

         }
    </div>
    </>
)

}

export default Computers; 