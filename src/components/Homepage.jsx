import React from 'react'
import FlipkartCard from './FlipkartCard'
import flipData from '../Flipkartdata'
import Flipkartcarousel from './Flipkartcarousel'
import Subnav from './Subnav'

const Homepage = () => {

  return (
    <>
    <Subnav/>
    <Flipkartcarousel/>
    
    
      <h1 className='my-4 text-center text-danger'>product</h1>

        <div className="container">
          <div className="row">
            {

              flipData.map((cval,index)=>{

                return(
                  <FlipkartCard

                  

                     id= {cval.id}
                     name = {cval.name}
                     cover = {cval.cover}
                     color = {cval.color}
                     size = {cval.size}
                     price = {cval.price}
                     item ={cval}

                     

                  />
                  
                )

              })
            }
            
          </div>
        </div>

    </>
  )
}

export default Homepage
