import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { FaDownload, FaCheckCircle } from 'react-icons/fa';

const Accueil = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container 
      fluid 
      className={`shadow rounded d-flex align-items-center p-3 p-md-5 transition-opacity ${fadeIn ? 'opacity-100' : 'opacity-0'}`} 
      style={{ 
        minHeight: '400px', 
        maxWidth: '90vw', 
        margin: '2rem auto', 
        backgroundColor: '#f5f0e6',
        transition: 'opacity 1s ease-in-out'
      }}
    >
      <Row className="w-100 align-items-center">
        <Col xs={12} md={3} className="d-flex justify-content-center mb-4 mb-md-0">
          <img
            src="/images/profil.png"
            alt="Profil"
            className="img-fluid rounded-circle shadow-sm"
            style={{
              width: '150px',
              height: '150px',
              objectFit: 'cover',
              transition: 'transform 0.3s',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </Col>

        <Col xs={12} md={9} className="text-secondary">
          <h1 className="display-4 text-center text-md-start mb-3">Bienvenue dans mon Portfolio</h1>
          <p className="lead text-center text-md-start">
            Actuellement étudiant, je me dirige vers un Bachelor Développement à Sup de Vinci Rennes.
          </p>  
          <p className="text-center text-md-start">
            Mon objectif final est de devenir développeur full stack, capable de concevoir et gérer des applications complètes, du front-end au back-end.
          </p>

          {/* <div className="mt-3 text-center text-md-start">
            <span className="me-2">Technos :</span>
            {['HTML', 'CSS', 'JavaScript', 'React', 'Laravel', 'PostgreSQL'].map((tech, idx) => (
              <Badge key={idx} bg="dark" className="me-1 mb-1">{tech}</Badge>
            ))}
          </div> */}

          <div className="mt-4 d-flex flex-column flex-md-row align-items-center gap-2">
            <Button
              variant="outline-dark"
              size="sm"
              className="d-flex align-items-center gap-2"
              href="/documents/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload /> Télécharger mon CV
            </Button>

            <span className="text-success d-flex align-items-center gap-2 small mt-2 mt-md-0">
              <FaCheckCircle /> Disponible pour une alternance
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Accueil;
