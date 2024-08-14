import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { watchData } from '../data/watch'
const Watchpage = () => {
 
  const[selectedProduct,setSelectedproduct] = useState([])
  const companyHan=(x)=>{
      if (selectedProduct.includes(x)){
        setSelectedproduct(selectedProduct.filter(item => item!==x))
            }
      else{
        setSelectedproduct([...selectedProduct,x])
      }
      }
      const filteredProducts=selectedProduct.length===0?watchData:watchData.filter((y)=>selectedProduct.includes(y.brand))

  return (
    <>
    <NavBar/>
<div className="pro-selected">
  {
  watchData.map((watch)=>{
    return (
    <div className='selectedpiece'>
      <label>
      <input type="checkbox" checked={selectedProduct.includes(watch.brand)}  
      onChange={()=>companyHan(watch.brand)}/>
      {watch.brand}</label>
    </div>)
  })}
</div>

    <div className='totalimages'>{
        filteredProducts.map((item) => {
            return (<div>
              <Link to={`/wat/${item.id}`}>
                <div className='imagescont'>
                    <img src={item.image}/>
                </div>
                <div>
                    {item.model},{item.brand}
                </div>
                </Link>
                </div>

            )
 } )}
    </div>
    
    </>
  )
}

export default Watchpage