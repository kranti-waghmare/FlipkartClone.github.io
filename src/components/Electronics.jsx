import React from 'react'
import Flipkartcarousel from './Flipkartcarousel'
import Subnav from './Subnav'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Electronics = () => {
  return (

    <>
    <Subnav/>
    <Flipkartcarousel/>

    <h1>electronics</h1>
       
    <table>
      <tr>
        <th>
        <Card style={{ width: '18rem', margin: '20px' }} className='product-card'>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdAXPtSnVqHTySoPjYWuc8BIH8UYiQxgOdPw&usqp=CAU" />
      <Card.Body>
        <Card.Title>laptop hp</Card.Title>
        <p>price : 50,000</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">know more</Button>
        <Button variant="outline-primary">Add to cart</Button>
      </Card.Body>
    </Card>
        </th>

        <th>

        <Card style={{ width: '18rem' , margin: '20px' }} className='product-card'>
      <Card.Img variant="top" src="https://toppng.com/uploads/preview/hd-png-of-apple-iphone-15-pro-max-in-natural-titanium-11695045967pz2x70tl2h.webp" />
      <Card.Body>
        <Card.Title>i phone 15</Card.Title>
        <p>price : 90,000</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
          

        <Button variant="primary">Know more</Button>
          
        <Button variant="outline-primary">Add to cart</Button>
          

        
        
        
        
      </Card.Body>
    </Card>

        

        </th>

        <th>

        <Card style={{ width: '18rem', margin: '20px' }} className='product-card'>
      <Card.Img variant="top" src="https://p7.hiclipart.com/preview/397/49/288/4k-resolution-high-definition-television-%E7%B4%A2%E5%B0%BC-led-backlit-lcd-smart-tv-sony.jpg" />
      <Card.Body>
        <Card.Title>Sony lcd</Card.Title>
        <p>price : 10,000</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">know more</Button>
        <Button variant="outline-primary">Add to cart</Button>
      </Card.Body>
      </Card>

        </th>

        <th>
        <Card style={{ width: '18rem', margin: '20px'  }} className='product-card'>
      <Card.Img variant="top" src="https://freepngimg.com/download/air_conditioner/4-2-ac-png.png" />
      <Card.Body>
        <Card.Title>Air conditioner</Card.Title>
        <p>price : 50,000</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" >Know more</Button>
        <Button variant="outline-primary" >Add to cart</Button>
      </Card.Body>
      </Card>
        </th>
      </tr>
    </table>



    </>
  
      
  )
}

export default Electronics
