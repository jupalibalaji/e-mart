import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { computerData } from '../data/computers'
const Computerspage = () => {
  const [selectedProduct,setSelectedproduct]=useState([])
  const companyHan=(x) => {
    if(selectedProduct.includes(x)){
      setSelectedproduct(selectedProduct.filter(item => item!==x))
    }else{
      setSelectedproduct([...selectedProduct,x])
    }
  }
  
  const filteredProduct=selectedProduct.length===0?computerData:computerData.filter((y)=>selectedProduct.includes(y.company))
  
    return (
      <>
      <NavBar/>
      <div className="pro-selected">
      {computerData.map((phone)=>{
        return( <div className='selectedpiece'>
          <label>
          <input type='checkbox'
          checked={selectedProduct.includes(phone.company)}
          onChange={()=>companyHan(phone.company)}/>
          {phone.company}
          </label>
        </div>
  
        )
      }
      )}
      </div>
    <div className='totalimages'>{
        filteredProduct.map((item) => {
            return (
            <div>
              <Link to={`/com/${item.id}`}>
                <div className='imagescont'>
                    <img src={item.image}/>
                </div>
                <div>
                    {item.model},{item.company}
                </div>
                </Link>
                </div>
                

            )
 } )}
    </div>
    
    </>
  )
}

export default Computerspage