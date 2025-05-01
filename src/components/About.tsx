import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { WOW } from 'wowjs';

const About: React.FC = () => {
  React.useEffect(() => {
    new WOW().init();
  }, []);

  const teamMembers = [
    {
      name: 'John Doe',
      position: 'CEO',
      image: '/team/member1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      name: 'Jane Smith',
      position: 'Operations Manager',
      image: '/team/member2.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      name: 'Mike Johnson',
      position: 'Customer Support Lead',
      image: '/team/member3.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    }
  ];

  return (
    <div className="about-page">
      {/* About Company Section */}
      <section className="about-company-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="wow fadeInLeft">
              <div className="about-image">
                <img src="/about-image.jpg" alt="About Us" className="img-fluid" />
              </div>
            </Col>
            <Col lg={6} className="wow fadeInRight">
              <div className="about-content">
                <h2>About Our Company</h2>
                <p>We are a leading BPO service provider with over 10 years of experience in delivering exceptional business process outsourcing solutions. Our team of dedicated professionals is committed to helping businesses streamline their operations and achieve their goals.</p>
                <ul className="about-features">
                  <li>
                    <i className="fas fa-check"></i> Experienced Team
                  </li>
                  <li>
                    <i className="fas fa-check"></i> 24/7 Support
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Quality Assurance
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Cost-Effective Solutions
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <Container>
          <div className="section-title text-center">
            <h2>Our Team</h2>
            <p>Meet the professionals behind our success</p>
          </div>
          <Row>
            {teamMembers.map((member, index) => (
              <Col lg={4} md={6} key={index} className="wow fadeInUp" data-wow-delay={`${0.1 * index}s`}>
                <Card className="team-card">
                  <Card.Img variant="top" src={member.image} alt={member.name} />
                  <Card.Body>
                    <h3>{member.name}</h3>
                    <p>{member.position}</p>
                    <div className="social-links">
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About; 