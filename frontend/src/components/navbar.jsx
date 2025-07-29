import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavbar = () => {
  return (
    <Navbar bg="white" variant="secondary" expand="lg" sticky="top" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">Lucas Mochon</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/etude">Étude</Nav.Link>
            <Nav.Link href="/projets">Projets</Nav.Link>
            <Nav.Link href="/certifications">Certifications</Nav.Link>
            <Nav.Link href="/formations">Formations</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/cv">CV</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;