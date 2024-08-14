import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { menData } from '../data/men'
const Menpage = () => {
  const [selectedProduct,setSelectedproduct]=useState([])
  const companyHan=(x) => {
    if(selectedProduct.includes(x)){
      setSelectedproduct(selectedProduct.filter(item => item!==x))
    }else{
      setSelectedproduct([...selectedProduct,x])
    }
  }
  
  const filteredProduct=selectedProduct.length===0?menData:menData.filter((y)=>selectedProduct.includes(y.brand))
  
    return (
      <>
      <NavBar/>
      <div className="pro-selected">
      {menData.map((phone)=>{
        return( <div className='selectedpiece'>
          <label>
          <input type='checkbox'
          checked={selectedProduct.includes(phone.brand)}
          onChange={()=>companyHan(phone.brand)}/>
          {phone.brand}
          </label>
        </div>
  
        )
      }
      )}
      </div>
    <div className='totalimages'>{
       filteredProduct.map((item) => {
            return (<div>
              <Link to={`/men/${item.id}`}>
                <div className='imagescont'>
                    <img src={item.image}/>
                </div>
                <div className='promodel'>
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

export default Menpage