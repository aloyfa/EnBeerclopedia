import React from 'react'
import { Navbar,Container, NavDropdown, Nav } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">
      <img 
        className="beerLogo" 
        src="https://www.pinclipart.com/picdir/big/522-5226958_beer-text-mug-line-clipart-beer-icon-png.png" 
        alt='beer-logo'/>
      <h5>BeerLand</h5>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/beers">Our Beers</Nav.Link>
        <Nav.Link href="/cardflip">Card Flip</Nav.Link>
        <Nav.Link href="/page3">Contact Us</Nav.Link>
        <Nav.Link href="/services">Services</Nav.Link>
        <Nav.Link href="/datafetch">Axios</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
        <NavDropdown title="Brands" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Mahou</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Estrella Galicia</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Damm</NavDropdown.Item>
          <NavDropdown.Divider/>
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar