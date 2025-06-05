import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { smoothScroll } from '../utils/smoothScroll';

const Footer: React.FC = () => {
  const handleLinkClick = (targetId: string) => {
    smoothScroll(targetId);
  };

  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Sharp BPO LLC is a leading marketing agency providing expert lead generation and digital marketing services.</p>
            <div className="social-links">
              <a href="#" className="me-3"><i className="fab fa-facebook"></i></a>
              <a href="#" className="me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="me-3"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" onClick={() => handleLinkClick('home')}>Home</Link></li>
              <li><Link to="#" onClick={() => handleLinkClick('features')}>Features</Link></li>
              <li><Link to="#" onClick={() => handleLinkClick('services')}>Services</Link></li>
              <li><Link to="#" onClick={() => handleLinkClick('about')}>About Us</Link></li>
              <li><Link to="#" onClick={() => handleLinkClick('testimonial')}>Testimonial</Link></li>
              <li><Link to="#" onClick={() => handleLinkClick('contact')}>Contact</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li><i className="fas fa-map-marker-alt me-2"></i>1309 Coffeen Avenue STE 1200, Sheridan, WY 82801</li>
              <li><i className="fas fa-phone me-2"></i>(307) 317-4472</li>
              <li><i className="fas fa-envelope me-2"></i>info@sharpbpollc.com</li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Sharp BPO LLC. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 