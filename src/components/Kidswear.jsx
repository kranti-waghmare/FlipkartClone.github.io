import React from 'react'
import Flipkartcarousel from './Flipkartcarousel'
import Subnav from './Subnav'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Kidswear = () => {
  return (
    <>
    <Subnav/>
    <Flipkartcarousel/>

        <h1>kidswear</h1>

        <table>
      <tr>
        <th>
        <Card style={{ width: '18rem' , margin: '20px' }} className='product-card'>
      <Card.Img variant="top" src="https://w7.pngwing.com/pngs/236/568/png-transparent-boy-model-childrens-clothing-model-children-model-tshirt-child-textile.png" />
      <Card.Body>
        <Card.Title>red stylish frock</Card.Title>
        <p>price : 440</p>
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

        <Card style={{ width: '18rem' , margin: '20px'}} className='product-card'>
      <Card.Img variant="top" src="https://www.westside.com/cdn/shop/articles/Untitled_design_-_2023-06-02T171732.743.png?v=1685774798" />
      <Card.Body>
        <Card.Title>purple frock</Card.Title>
        <p>price : 680</p>
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
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS88gVvzmn3C09qPGLABwzIhNn4acOny-RMLQ&usqp=CAU" />
      <Card.Body>
        <Card.Title>krishna costume</Card.Title>
        <p>price : 780</p>
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
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcJ3a-EgdxRlqkIsThfArzf5Tk6HhMMBzRhA&usqp=CAU" />
      <Card.Body>
        <Card.Title>dungree</Card.Title>
        <p>price : 440</p>
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

export default Kidswear
