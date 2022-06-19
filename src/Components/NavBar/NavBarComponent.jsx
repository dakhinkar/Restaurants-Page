import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

// import React from 'react';

// function NavBarComponent(props) {
//     return (
//         <div>

//         </div>
//     );
// }

// export default NavBarComponent;
const NavBarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Wish-U2-Taste</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Menu Items" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#order-type/veg">Veg</NavDropdown.Item>
              <NavDropdown.Item href="#order-type/non-veg">
                Non-Veg
              </NavDropdown.Item>
              <NavDropdown.Item href="#order-type/sweets">
                Sweets
              </NavDropdown.Item>
              <NavDropdown.Item href="#order-type/cold-drinks">
                Cold Drinks
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#signup">Sign Up</Nav.Link>
            <Nav.Link eventKey={2} href="#login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
