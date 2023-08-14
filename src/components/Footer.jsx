import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logo from '../images/logo2.png';

const Footer = () => {
  return (
    <footer className="py-4">
      <Container>
        <Row className='rowdes'>
          <Col md={4} className="d-flex justify-content-center align-items-center">
            <img src={logo} alt="" />
          </Col>
          <Col md={4} className="d-flex justify-content-center align-items-center">
            <div>
              <h5>Site Map</h5>
              <ul className="list-unstyled">
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/about">About Us</a></li>             
              </ul>
            </div>
          </Col>
          <Col md={4} className="d-flex justify-content-center align-items-center">
            <div>
              <h5>Connect with Us</h5>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/">
                    <FaFacebook size={24} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/">
                    <FaInstagram size={24} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com/">
                    <FaTwitter size={24} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/">
                    <FaLinkedin size={24} />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

