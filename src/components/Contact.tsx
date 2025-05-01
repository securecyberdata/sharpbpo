import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { WOW } from 'wowjs';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  React.useEffect(() => {
    new WOW().init();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-section">
      <Container>
        <div className="section-title text-center">
          <h2>Contact Us</h2>
          <p>Get in touch with our team for any inquiries</p>
        </div>
        <Row>
          <Col lg={6} className="wow fadeInLeft">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3>Address</h3>
                <p>123 Business Street, Suite 100<br />New York, NY 10001</p>
              </div>
              <div className="contact-info-item">
                <div className="icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <h3>Phone</h3>
                <p>+1 (123) 456-7890<br />+1 (123) 456-7891</p>
              </div>
              <div className="contact-info-item">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3>Email</h3>
                <p>info@bposervices.com<br />support@bposervices.com</p>
              </div>
            </div>
          </Col>
          <Col lg={6} className="wow fadeInRight">
            <div className="contact-form">
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact; 