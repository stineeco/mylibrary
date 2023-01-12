import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarHome.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './Home';



function NavbarHome() {
  return (
    <div className='nav_all'>
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img className='logo'  src={require('./Logo.jpeg')} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Connect</Nav.Link>
            <NavDropdown title="Books" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Adventure stories</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Crime</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Fairy tales</NavDropdown.Item>
              <NavDropdown.Item href="#action3">fables</NavDropdown.Item>
            
            
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Contact for more
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div>
        <Home />
     
      </div>
    </div>
  )

}


export default NavbarHome;