import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <div className="pink-circle"></div>
          <div className="blue-shape"></div>
          <div className="dots-pattern"></div>
        </div>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="order-lg-1 order-2">
              <div className="hero-content animate__animated animate__fadeInLeft">
                <h1>
                  Leading Marketing
                  <br />
                  Agency with
                  <br />
                  <span className="highlight">Proven Results</span>
                </h1>
                <p>Expert in lead generation, telemarketing, and digital marketing to drive your business success.</p>
                <div className="hero-buttons">
                  <button className="btn btn-primary">More About Us</button>
                  <button className="btn btn-outline">Watch Video</button>
                </div>
              </div>
            </Col>
            <Col lg={6} className="order-lg-2 order-1">
              <div className="hero-image animate__animated animate__fadeInRight">
                <img 
                  src="/images/hero-illustration.svg" 
                  alt="Marketing Analytics" 
                  className="img-fluid isometric-illustration"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Expert Services Section */}
      <section id="features" className="services-overview">
        <Container>
          <div className="section-title">
            <h2>Boost Your Business with Our Expert Services</h2>
            <p>We provide comprehensive marketing solutions that help you achieve your business goals</p>
          </div>
          <Row className="service-cards">
            <Col md={6} lg={3}>
              <div className="service-card light-pink">
                <h3>Lead Generation</h3>
                <p>Quality leads that convert into valuable customers</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="service-card light-blue">
                <h3>Market Research</h3>
                <p>In-depth analysis and insights for your target market</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="service-card light-purple">
                <h3>Performance Analysis</h3>
                <p>Track and optimize your marketing campaigns</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="service-card light-orange">
                <h3>Content Strategy</h3>
                <p>Engaging content that resonates with your audience</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How We Can Help Section */}
      <section id="services" className="help-section">
        <Container>
          <div className="section-title text-center">
            <span className="subtitle">SERVICES</span>
            <h2>How We Can Help?</h2>
          </div>
          <Row className="service-grid">
            <Col md={6} lg={4}>
              <div className="service-item">
                <div className="icon-box pink">
                  <i className="fas fa-bullhorn"></i>
                </div>
                <h3>Lead Generation</h3>
                <p>Generate qualified leads that are more likely to convert into customers.</p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="service-item">
                <div className="icon-box blue">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <h3>Telemarketing</h3>
                <p>Professional outbound calling services to boost your sales.</p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="service-item">
                <div className="icon-box purple">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Digital Marketing</h3>
                <p>Comprehensive online marketing strategies for growth.</p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="service-item">
                <div className="icon-box green">
                  <i className="fas fa-share-alt"></i>
                </div>
                <h3>Social Media Engagement</h3>
                <p>Build and engage your social media community.</p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="service-item">
                <div className="icon-box orange">
                  <i className="fas fa-chart-pie"></i>
                </div>
                <h3>Performance Reporting</h3>
                <p>Detailed analytics and insights for your campaigns.</p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="service-item">
                <div className="icon-box teal">
                  <i className="fas fa-cog"></i>
                </div>
                <h3>Campaign Optimization</h3>
                <p>Continuous improvement of marketing performance.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Digital Experience Section */}
      <section id="about" className="digital-experience">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="content-block">
                <span className="subtitle">WHY CHOOSE US</span>
                <h2>Exceptional Digital Experience</h2>
                <ul className="feature-list">
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Efficient Process</span>
                    <p>Streamlined workflow to ensure maximum productivity and results</p>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Expert Team Members</span>
                    <p>Skilled professionals dedicated to your success</p>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>24/7 Support</span>
                    <p>Round-the-clock assistance whenever you need it</p>
                  </li>
                </ul>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="image-block">
                <img src="/images/digital-experience.svg" alt="Digital Experience" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Lead Generation Section */}
      <section id="lead-generation" className="lead-generation">
        <Container>
          <div className="section-header">
            <h2>Expertise in Lead Generation</h2>
          </div>
          <div className="process-steps">
            <div className="step active">
              <div className="step-icon">
                <i className="fas fa-search"></i>
              </div>
              <span>Research Data</span>
            </div>
            <div className="step">
              <div className="step-icon">
                <i className="fas fa-filter"></i>
              </div>
              <span>Filter Leads</span>
            </div>
            <div className="step">
              <div className="step-icon">
                <i className="fas fa-check"></i>
              </div>
              <span>Verify Leads</span>
            </div>
            <div className="step">
              <div className="step-icon">
                <i className="fas fa-phone"></i>
              </div>
              <span>Contact & Convert</span>
            </div>
          </div>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="image-block">
                <img src="/images/lead-generation.svg" alt="Lead Generation Process" className="img-fluid" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="content-block">
                <h3>Business Leads</h3>
                <p>We help you connect with the right decision-makers and generate high-quality leads that convert.</p>
                <ul className="benefits-list">
                  <li><i className="fas fa-check"></i> 95% accuracy in lead qualification</li>
                  <li><i className="fas fa-check"></i> Customized lead generation strategy</li>
                  <li><i className="fas fa-check"></i> Regular reporting and updates</li>
                </ul>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="image-block">
                <img src="/images/team.svg" alt="Our Team" className="img-fluid" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="content-block">
                <span className="subtitle">ABOUT US</span>
                <h2>We are a Dynamic Team of Marketing Experts</h2>
                <p>With years of proven experience, we deliver exceptional marketing solutions that drive real business growth.</p>
                <div className="stats">
                  <div className="stat-item">
                    <h3>500+</h3>
                    <p>Projects Completed</p>
                  </div>
                  <div className="stat-item">
                    <h3>50+</h3>
                    <p>Expert Members</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section id="testimonial" className="testimonials">
        <Container>
          <div className="section-title text-center">
            <h2>What Our Client Say</h2>
          </div>
          <Row>
            <Col md={6}>
              <div className="testimonial-card">
                <div className="client-info">
                  <img src="/images/client1.jpg" alt="Leo Marcus" className="client-image" />
                  <div className="client-details">
                    <h4>Leo Marcus</h4>
                    <p>Marketing Director</p>
                  </div>
                </div>
                <p className="testimonial-text">"Their lead generation services have significantly improved our conversion rates. Highly recommended!"</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="testimonial-card">
                <div className="client-info">
                  <img src="/images/client2.jpg" alt="Rita Landing" className="client-image" />
                  <div className="client-details">
                    <h4>Rita Landing</h4>
                    <p>Sales Manager</p>
                  </div>
                </div>
                <p className="testimonial-text">"Professional team with excellent communication and outstanding results. A pleasure to work with!"</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="image-block">
                <img src="/images/contact.svg" alt="Contact Us" className="img-fluid" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="content-block">
                <h2>Get a Free Marketing Consultation</h2>
                <p>Let us help you boost your business with our expert marketing services.</p>
                <form className="contact-form">
                  <Row>
                    <Col md={6}>
                      <input type="text" placeholder="Your Name" className="form-control" />
                    </Col>
                    <Col md={6}>
                      <input type="email" placeholder="Email Address" className="form-control" />
                    </Col>
                    <Col md={12}>
                      <textarea placeholder="Your Message" className="form-control"></textarea>
                    </Col>
                    <Col md={12}>
                      <button type="submit" className="btn btn-primary">Send Message</button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="newsletter">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col lg={6}>
              <h3>Sign Up For Newsletter</h3>
              <p>Stay updated with our latest news and offers</p>
            </Col>
            <Col lg={5}>
              <div className="newsletter-form">
                <input type="email" placeholder="Your Email Address" className="form-control" />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home; 