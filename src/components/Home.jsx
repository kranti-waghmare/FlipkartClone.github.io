import React from 'react'
import Subnav from './Subnav'
import Flipkartcarousel from './Flipkartcarousel'
import Grocery from './Grocery'
import Fashion from './Fashion'
import Furniture from './Furniture'
import Beuty from './Beuty'
import Kidswear from './Kidswear'
import Flipkartfooter from './Flipkartfooter'


const Home = () => {
  return (
    <>

    <h2>Home</h2>
    <Subnav/>
    <Flipkartcarousel/>
    <h2>brands</h2>
    <Grocery/>
    <Fashion/>
    <Beuty/>
    <Furniture/>
    <Kidswear/>
    <Flipkartfooter/>
      
    </>
  )
}

export default Home
