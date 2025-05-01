import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';

const Services: React.FC = () => {
  return (
    <section className="services-section">
      <Container>
        <div className="section-title text-center animate__animated animate__fadeInUp">
          <h2>Our Services</h2>
          <p>Comprehensive BPO solutions tailored to your needs</p>
        </div>
        <Row>
          <Col lg={4} md={6}>
            <div className="service-card animate__animated animate__fadeInUp animate__delay-1s">
              <div className="icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>Customer Support</h3>
              <p>24/7 professional customer service to enhance your customer experience and satisfaction.</p>
              <ul>
                <li>Inbound & Outbound Support</li>
                <li>Email & Chat Support</li>
                <li>Technical Support</li>
                <li>Order Processing</li>
              </ul>
              <button className="btn btn-outline-primary">Learn More</button>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="service-card animate__animated animate__fadeInUp animate__delay-2s">
              <div className="icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>Telemarketing</h3>
              <p>Effective outbound calling services to generate leads and increase sales.</p>
              <ul>
                <li>Lead Generation</li>
                <li>Appointment Setting</li>
                <li>Market Research</li>
                <li>Customer Surveys</li>
              </ul>
              <button className="btn btn-outline-primary">Learn More</button>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="service-card animate__animated animate__fadeInUp animate__delay-3s">
              <div className="icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Data Processing</h3>
              <p>Accurate and efficient data management solutions for your business.</p>
              <ul>
                <li>Data Entry</li>
                <li>Data Cleansing</li>
                <li>Document Processing</li>
                <li>Database Management</li>
              </ul>
              <button className="btn btn-outline-primary">Learn More</button>
            </div>
          </Col>
        </Row>

        {/* Additional Services Section */}
        <div className="additional-services">
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="service-image animate__animated animate__fadeInLeft">
                <img src="/service-image.jpg" alt="Additional Services" className="img-fluid" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="service-content animate__animated animate__fadeInRight">
                <h2>Additional Services</h2>
                <p>We offer a wide range of additional services to meet your business needs:</p>
                <ul>
                  <li>Back Office Support</li>
                  <li>Quality Assurance</li>
                  <li>Training & Development</li>
                  <li>Performance Analytics</li>
                </ul>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </Col>
          </Row>
        </div>

        {/* Service Features Section */}
        <div className="service-features">
          <Row>
            <Col lg={3} md={6}>
              <div className="feature-item animate__animated animate__fadeInUp animate__delay-1s">
                <i className="fas fa-clock"></i>
                <h4>24/7 Support</h4>
                <p>Round-the-clock service availability</p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="feature-item animate__animated animate__fadeInUp animate__delay-2s">
                <i className="fas fa-globe"></i>
                <h4>Global Reach</h4>
                <p>Services available worldwide</p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="feature-item animate__animated animate__fadeInUp animate__delay-3s">
                <i className="fas fa-chart-pie"></i>
                <h4>Data Analytics</h4>
                <p>Comprehensive reporting and insights</p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="feature-item animate__animated animate__fadeInUp animate__delay-4s">
                <i className="fas fa-shield-alt"></i>
                <h4>Security</h4>
                <p>Enterprise-grade security measures</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Services; 