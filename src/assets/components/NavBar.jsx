import React, { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import CardsSil from './CardsSil';


const NavBar = () => {
  const navigate=useNavigate()
  const logaut=()=>{
    localStorage.setItem("token","")//setitem  getitem  "cuidado"
    navigate("/login")
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
    return (
        <div>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/" as={Link}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}>Home</Nav.Link>
            <Nav.Link to="/favorites" as={Link}>favorites</Nav.Link>
            <Nav.Link to="/login" as={Link}>login</Nav.Link>
            <Nav.Link onClick={logaut}>logaut</Nav.Link>
            <Nav.Link onClick={handleShow}>sidebar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <CardsSil show={show} handleClose={handleClose}/>
        </div>
    );
};

export default NavBar;