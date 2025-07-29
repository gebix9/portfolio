import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Accueil = () => {
  return (
    <Container 
      fluid 
      className=" shadow rounded d-flex align-items-center" 
      style={{ height: '400px', maxWidth: '90vw', marginTop: '2rem', marginBottom: '2rem', backgroundColor: '#f5f0e6' }}
    >
      <Row className="w-100 align-items-center">
        <Col xs={12} md={3} className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
          <img
            src="/images/profil.png"
            alt="Profil"
            className="img-fluid rounded"
            style={{ maxWidth: '200px' }}
          />
        </Col>
        <Col xs={12} md={9} className="text-secondary fs-2 d-flex flex-column justify-content-center justify-content-md-start align-self-start">
          <div className='pb-5 align-center'>Bienvenue dans mon Portfolio</div>
          <p className="text-secondary mt-2" style={{ fontSize: '1rem' }}>
            Actuellement étudiant, je me dirige vers un Bachelor Développement à Sup de Vinci Rennes.
          </p>  
          <p className="text-secondary mt-2" style={{ fontSize: '1rem' }}>
            Mon objectif final est de devenir développeur full stack, capable de concevoir et gérer des applications complètes, du front-end au back-end.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Accueil;
