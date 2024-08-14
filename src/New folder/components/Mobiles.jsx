import React from 'react';
import { Link } from 'react-router-dom';
import { mobileData } from '../data/mobiles';

const Mobiles = () => {
    const firstFivemobiles=mobileData.slice(0,5)
  return (
    <>
    <h2>Mobiles</h2>
    <div className='proSection'>{
        firstFivemobiles.map((item)=>{
          return(
            <Link to={`/mob/${item.id}`}>
            <div className='imgBox'>
            <img className='proImage' src={item.image}  />
            </div>
            </Link>
          )
    
        }
        )}
        </div>
        </>
  )
}

export default Mobiles;