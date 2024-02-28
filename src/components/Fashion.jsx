import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Flipkartcarousel from './Flipkartcarousel';
import Subnav from './Subnav';

const Fashion = () => {
  return (
    <>
    <Subnav/>
    <Flipkartcarousel/>
      <h2>Fashion</h2>

<table>
  <tr>
    <th>
    <Card style={{ width: '18rem',margin : '20px' }} className='product-card img'>
  <Card.Img variant="top" src="https://assets.ajio.com/medias/sys_master/root/20230703/zEjF/64a2f7b8eebac147fc48acfc/-473Wx593H-466325670-purple-MODEL.jpg" />
  <Card.Body>
    <Card.Title>pink men t shirt</Card.Title>
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

    <Card style={{ width: '18rem' ,margin : '20px' }} className='product-card img'>
  <Card.Img variant="top" src="https://images.meesho.com/images/products/142474229/8n5iu_512.webp" />
  <Card.Body>
    <Card.Title>Decible formal pant</Card.Title>
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

    <Card style={{ width: '18rem' ,margin : '20px' }} className='product-card img'>
  <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61ZXcZCPwVL._AC_UY1100_.jpg" />
  <Card.Body>
    <Card.Title>woman pant</Card.Title>
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
  <Card.Img variant="top" src="https://images.meesho.com/images/products/276747825/wekiy_512.webp" />
  <Card.Body>
    <Card.Title>queen white t shirt</Card.Title>
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

export default Fashion
