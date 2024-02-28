import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css';
import {NavLink} from 'react-router-dom';
import { useCart } from 'react-use-cart';


const FlipkartCard = (props) => {

 const {addItem} = useCart();
 
 return (
   <>
  
   

   <Card style={{ width: '18rem',margin : '20px'}} className='product-card'>
      <Card.Img variant="top" src={props.cover} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <NavLink to={`/Flipkartproduct/${props.id}`}>
          <Button variant="primary">Know more</Button>
          </NavLink>
          
        <Button variant="outline-primary" onClick={() => addItem(props.item)}>Add to cart</Button>
      </Card.Body>
    </Card>


   

    </>
  )
}

export default FlipkartCard
