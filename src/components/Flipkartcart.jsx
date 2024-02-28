import React from 'react'
import { useCart } from 'react-use-cart';


const Flipkartcart = () => {

  const {removeItem,updateItemQuantity,items,cartTotal} = useCart();
  return (

    <>
      <div className="container">
        <h1>cart</h1>

         <table className='table table-stripe hover'>

          <tr>

          {/* <th>ID</th> */}
          <th>Name</th>
          <th>Image</th>
          <th>Price</th>
          <th>Color</th>
          <th>Size</th>
          <th>Action</th>

          </tr>

          
            {
              items.map((cval) =>{
                return(

                  <tr>
                  

                    {/* <td>{cval.id}</td> */}
                     <td>{cval.name}</td>
                    <td><img src={cval.cover} height={'100'} width={'100'} alt="" /></td>
                     <td>{cval.price}</td>
                     <td>{cval.color}</td>
                     <td>{cval.size}</td>
                     <td><button onClick={() => updateItemQuantity(cval.id,cval.quantity+1) }>+</button></td>
                     <td>{cval.quantity}</td>
                     <td><button onClick={() => updateItemQuantity(cval.id,cval.quantity-1)}>-</button></td>
  
                     <td><button className='btn btn-info' onClick={()=>removeItem(cval.id)}>Remove</button></td>



                  </tr>
                )
              })
            }
          

          
        <h3>Total = {cartTotal}</h3>

         </table>

      </div>
    </>
  )
}

export default Flipkartcart
