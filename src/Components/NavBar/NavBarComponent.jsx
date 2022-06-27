import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Welcome50
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Menu Items" id="collasible-nav-dropdown" style={{padding
             : '10px'}}>
              <NavDropdown.Item as={Link} to="/menu/order-type/veg">
                Veg
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/menu/order-type/non-veg">
                Non-Veg
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/menu/order-type/sweets">
                Sweets
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/menu/order-type/drinks">
                Cold Drinks
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contactus">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/signup">
              Sign Up
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
