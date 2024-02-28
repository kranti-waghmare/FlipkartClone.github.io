import React from 'react'
import Flipkartcarousel from './Flipkartcarousel'
import Subnav from './Subnav'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Furniture = () => {
  return (
    <>
    <Subnav/>

    <Flipkartcarousel/>

  <h2>

   Furniture

   </h2>

   <table>
      <tr>
        <th>
        <Card style={{ width: '18rem',margin : '20px'  }} className='product-card'>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMauvStP00Fbx-B09tys7GsECwi0g7f7ZAXq4gHtU56g&s" />
      <Card.Body>
        <Card.Title>bed</Card.Title>
        <p>price : 10030.00</p>
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

        <Card style={{ width: '18rem',margin : '20px'  }} className='product-card'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/d5/13/a2/d513a23cb354ab49d7ad1943d20cc806.png" />
      <Card.Body>
        <Card.Title>wooden cup board</Card.Title>
        <p>price : 8430.00</p>
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

        <Card style={{ width: '18rem' ,margin : '20px' }} className='product-card'>
      <Card.Img variant="top" src="https://image.made-in-china.com/2f0j00tkpfrzIyqTcs/American-Style-Sofabed-for-Living-Room-Leather-Folding-Sofa-Cum-Bed.webp" />
      <Card.Body>
        <Card.Title>sofa cum bed</Card.Title>
        <p>price : 42300.00</p>
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
        <Card style={{ width: '18rem',margin : '20px'  }} className='product-card'>
      <Card.Img variant="top" src="https://st4.depositphotos.com/1023934/37752/i/450/depositphotos_377527168-stock-photo-interior-design-modern-living-room.jpg" />
      <Card.Body>
        <Card.Title>sofa set</Card.Title>
        <p>price : 4000.00</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">know more</Button>
        <Button variant="outline-primary">Add to cart</Button>
      </Card.Body>
      </Card>
        </th>
      </tr>
    </table>

    </>
    
  )
}

export default Furniture
