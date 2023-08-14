// CustomNavbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';

function CustomNav() {
  return (
    <Navbar id="movedes2" expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="unades">
            <Nav>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNav;
