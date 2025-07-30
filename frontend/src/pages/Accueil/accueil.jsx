import { Container, Row, Col } from 'react-bootstrap';

const Accueil = () => {
  return (
    <Container 
      fluid 
      className="shadow rounded d-flex align-items-center p-3 p-md-5" 
      style={{ minHeight: '400px', maxWidth: '90vw', margin: '2rem auto', backgroundColor: '#f5f0e6' }}
    >
      <Row className="w-100 align-items-center">
        <Col xs={12} md={3} className="d-flex justify-content-center mb-4 mb-md-0">
          <img
            src="/images/profil.png"
            alt="Profil"
            className="img-fluid rounded-circle"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
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
        </Col>
      </Row>
    </Container>
  );
};

export default Accueil;
