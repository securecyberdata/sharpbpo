import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { smoothScroll } from '../utils/smoothScroll';

const Navbar: React.FC = () => {
  const handleNavClick = (targetId: string) => {
    smoothScroll(targetId);
  };

  return (
    <BootstrapNavbar bg="white" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          <img src="/logo.svg" alt="Sharp BPO LLC" height="40" />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleNavClick('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('features')}>Features</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('services')}>
              Services
              <i className="fa fa-plus ms-1"></i>
            </Nav.Link>
            <Nav.Link onClick={() => handleNavClick('about')}>About Us</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('testimonial')}>Testimonial</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('contact')}>Contact</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar; 