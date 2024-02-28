

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'


const NavbarNew = () => {
  return (
    <>
      <Navbar expand="lg" className=' bg-primary' >
      <Container fluid>
        <Navbar.Brand href="#" className='text-white'>Flipkart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
           

            


            <Nav.Link className='text-white' href="home">Home</Nav.Link>
            
            <NavLink className={'nav-link text-white'}  to={'Flipkartcart'}>cart</NavLink>
            

            

              

              

            
           
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark bg-warning">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarNew

