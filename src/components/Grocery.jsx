import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Flipkartcarousel from './Flipkartcarousel';
import Subnav from './Subnav';




const Grocery = (props) => {
 
  return (
    
    <>
    <Subnav/>
    <Flipkartcarousel/>
    <h2>Grocery</h2>

    <table>
      <tr>
        <th>
        <Card style={{ width: '18rem',margin : '20px' }} className='product-card'>
      <Card.Img variant="top" src="https://beta.saffola.in/wp-content/uploads/2020/08/ACTIVE-3-F.png" />
      <Card.Body>
        <Card.Title>saffola active</Card.Title>
        <p>price : 480</p>
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

        <Card style={{ width: '18rem',margin: '20px' }} className='product-card'>
      <Card.Img variant="top" src="https://5.imimg.com/data5/SELLER/Default/2023/5/309936550/BV/SQ/FN/158071529/maggi-500x500.webp" />
      <Card.Body>
        <Card.Title>maggi masala</Card.Title>
        <p>price : 80</p>
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

        <Card style={{ width: '18rem',margin : '20px' }} className='product-card'>
      <Card.Img variant="top" src="https://5.imimg.com/data5/DS/WE/GLADMIN-17396827/aashirvaad-atta-5-kg.png" />
      <Card.Body>
        <Card.Title>Ashirvad atta</Card.Title>
        <p>price : 280</p>
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
        <Card style={{ width: '18rem' ,margin : '20px'}} className='product-card'>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71azyvg+C1L._AC_UF1000,1000_QL80_.jpg" />
      <Card.Body>
        <Card.Title>Horlick</Card.Title>
        <p>price : 580</p>
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

export default Grocery
