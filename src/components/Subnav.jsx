import React from 'react'
import { Link } from 'react-router-dom';





const Subnav = () => {

  
  return (
    <>

    <table>
      <tr>
        <th width='19%'>
        <Link to={'/Grocery'}>

        <th width='19%'  ><img src="https://www.shutterstock.com/image-illustration/shopping-basket-full-variety-grocery-260nw-1978733351.jpg"height={100} width={100} alt="" />Grocery</th>

</Link>

    </th>

        <th width='19%'>

        <Link to={'/Fashion'}>

<th width='19%' > <img src="https://img.freepik.com/premium-photo/beautiful-young-women-summer-fashion-concept_564719-215.jpg" height={140} width={100} alt="" />fashion</th>
</Link>
        
        </th>

        <th width='19%'>
        <Link to={'/Electronics'}>
     <th width='19%' > <img src="https://c8.alamy.com/comp/HKPR1N/consumer-and-home-electronicstvfridgevacuum-cleanermicrowavewasher-HKPR1N.jpg" height={100} width={100} alt="" />Electronics</th>
     </Link>
     

        </th>

        <th width='19%'>
        <Link to={'/beuty'}>

        <th width='19%' > <img src="https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2017/12/Top-produk-Internasional-yang-sudah-available-di-Indonesia.jpg" height={100} width={100} alt="" />beuty</th>
        </Link>

       

        </th>

        <th width='19%'>

        <Link to={'/kidswear'}>
     <th width='19%' > <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRk58YUeHdFUDbQ-UeuXeiRDtwh8qcp2VdmA&usqp=CAU" height={100} width={100} alt="" />kidswear</th>

     </Link>

     </th>

        <th width='19%'>
        <Link to={'/Furniture'}>

<th width='16.66%' > <img src="https://i.ytimg.com/vi/_LPdGHWT-xg/maxresdefault.jpg" height={100} width={100} alt="" />Furniture</th>

</Link>




        </th>

       
      </tr>
    </table>
     
     
 

        
      
    </>
  )
}

export default Subnav
