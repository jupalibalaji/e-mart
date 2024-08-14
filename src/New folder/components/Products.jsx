import React from 'react'
import AC from './AC'
import Computers from './Computers'
import Furniture from './Furniture'
import Men from './Men'
import Mobiles from './Mobiles'
import Watch from './Watch'
import Woman from './Woman'

export const Products = () => {
  return (
    <div>
      <Mobiles/>
      <Computers/>
      <AC/>
      <Furniture/>
      <Men/>
      <Woman/>
      <Watch></Watch>
    </div>
  )
}
