import React from 'react'
import flipData from '../Flipkartdata'
import { useParams } from 'react-router-dom'
import Flipkartcarousel from './Flipkartcarousel'



const Flipkartproduct = () => {

    
    const {id} = useParams();
    console.log(id)
    
    
    return (
        <>
        <Flipkartcarousel/>
        
        
          <h1 className='text-center text-danger'>product-info</h1>
      {
        flipData.map((cval)=>{
            

            if(id == cval.id){


                return(
                    <>

                    <div className="container">

                        <div className="row">
                            <div className="col-md-4">
                                <img src={cval.cover} height={400} width={300} alt="product-img" />

                            </div>



                            <div className="col-md-8">

                                <h2>name : {cval.name}</h2>
                                <h4>price : {cval.price}</h4>
                                <p>color : {cval.color}</p>
                                <p>size : {cval.size}</p>
                                <p>description : {cval.description}</p>
                                

                                <button className='btn btn-success'>Add to cart</button>


                            </div>

                        </div>
                    </div>
                    
                    
                    </>
                )
            }

        })
      }
    </>
  )
}

export default Flipkartproduct
