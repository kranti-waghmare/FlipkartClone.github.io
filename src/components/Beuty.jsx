import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Flipkartcarousel from './Flipkartcarousel';
import Subnav from './Subnav';

const Beuty = () => {
  return (

    <>
    <Subnav/>
    <Flipkartcarousel/>
    <h2>beuty</h2>

    <table>
      <tr>
        <th>
        <Card style={{ width: '18rem',margin : '20px'  }} className='product-card img'>
      <Card.Img variant="top" src="https://images-static.nykaa.com/media/catalog/product/9/3/93e12da8904245702786_1.jpg" />
      <Card.Body>
        <Card.Title>skin foundation</Card.Title>
        <p>price : 430.00</p>
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

        <Card style={{ width: '18rem',margin : '20px'  }} className='product-card img'>
      <Card.Img variant="top" src="https://shaadiwish.com/blog/wp-content/uploads/2020/08/1.1-1-e1597401233208.jpg" />
      <Card.Body>
        <Card.Title>pink shade lipstick</Card.Title>
        <p>price : 430.00</p>
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

        <Card style={{ width: '18rem',margin : '20px'  }} className='product-card img'>
      <Card.Img variant="top" src="https://cosmeticsarenas.com/wp-content/uploads/2020/12/Nykaa-Naturals-Amla-and-Curry-Leaves-Hair-Oil-Best-Nykaa-Haircare-Products.jpg" />
      <Card.Body>
        <Card.Title>Amla hair-oil</Card.Title>
        <p>price : 430.00</p>
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
        <Card style={{ width: '18rem',margin : '20px'  }} className='product-card img'>
      <Card.Img variant="top" src="https://images-static.nykaa.com/media/catalog/product/8/c/8ca59378904245703264_1.jpg?tr=w-500" />
      <Card.Body>
        <Card.Title>eyeliner</Card.Title>
        <p>price : 430.00</p>
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

export default Beuty
