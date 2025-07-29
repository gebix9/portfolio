import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#1c1c1c',
        color: '#f1f1f1',
        padding: '3rem 0 1rem 0',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <Container>
        <Row>
          <Col md={6} className="mb-4">
            <h4 style={{ fontWeight: 'bold' }}>Lucas Mochon</h4>
            <p style={{ fontSize: '0.95rem', color: '#bbb' }}>Développeur web & portfolio</p>
            <p style={{ fontSize: '0.9rem' }}>
              <i className="bi bi-envelope-fill me-2" style={{ color: '#0d6efd' }}></i>
              <a
                href="mailto:mochonlucas9@gmail.com"
                style={{ color: '#0d6efd', textDecoration: 'none' }}
              >
                mochonlucas9@gmail.com
              </a>
            </p>
          </Col>

          <Col md={6} className="mb-4 text-md-end">
            <h5 style={{ fontWeight: '600' }}>Réseaux sociaux</h5>
            <div>
              <a
                href="https://linkedin.com/in/lucasmochon"
                target="_blank"
                rel="noopener noreferrer"
                style={socialLinkStyle('#0A66C2')}
              >
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
              <a
                href="https://github.com/lucasmochon"
                target="_blank"
                rel="noopener noreferrer"
                style={socialLinkStyle('#6cc644')}
              >
                <i className="bi bi-github"></i> GitHub
              </a>
            </div>
          </Col>
        </Row>

        <hr style={{ borderTop: '1px solid #444' }} />

        <Row>
          <Col className="text-center" style={{ fontSize: '0.85rem', color: '#888' }}>
            &copy; {new Date().getFullYear()} Lucas Mochon. Tous droits réservés.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

// Style des liens sociaux
const socialLinkStyle = (color) => ({
  display: 'inline-block',
  marginRight: '1rem',
  fontSize: '1rem',
  color,
  textDecoration: 'none',
  transition: 'opacity 0.3s ease',
  marginTop: '0.5rem',
});

export default Footer;
