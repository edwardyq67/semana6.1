import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/" as={Link}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}>Home</Nav.Link>
            <Nav.Link to="/favorites" as={Link}>favorites</Nav.Link>
            <Nav.Link to="/login" as={Link}>login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    );
};

export default NavBar;