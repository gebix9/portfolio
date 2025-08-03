import React, { useEffect, useState } from "react";
import http from "../../services/api";
import { Container, Row, Col, Card } from "react-bootstrap";

const Contact = () => {
  const [reseau, setReseau] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await http.get("/reseau");
        setReseau(res.data);
      } catch (err) {
        console.error("Erreur chargement des réseaux :", err);
      }
    };
    fetchData();
  }, []);

  const openLien = (lien) => {
    if (!lien) return;

    const hasProtocol = lien.startsWith("http://") || lien.startsWith("https://");
    const url = hasProtocol ? lien : `https://${lien}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0ede7", 
        padding: "3rem 1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container
        fluid
        style={{
          backgroundColor: "white",
          borderRadius: "1rem",
          padding: "2rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        <h1 className="mb-4 text-center fw-bold" style={{ color: "#333" }}>
          Contact
        </h1>

        <Row className="justify-content-center mb-4">
          {reseau.length === 0 && (
            <p className="text-center w-100">Aucun réseau disponible pour le moment.</p>
          )}

          {reseau.map(({ id, nom, lien, logo }) => (
            <Col
              key={id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="mb-4 d-flex justify-content-center"
            >
              <Card
                style={{
                  width: "14rem",
                  borderRadius: "0.75rem",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  cursor: lien ? "pointer" : "default",
                  textAlign: "center",
                }}
                onClick={() => openLien(lien)}
              >
                {logo ? (
                  <Card.Img
                    variant="top"
                    src={`data:image/png;base64,${logo}`}
                    alt={`${nom} logo`}
                    style={{
                      height: "100px",
                      objectFit: "contain",
                      padding: "1rem",
                      backgroundColor: "#fff",
                      borderTopLeftRadius: "0.75rem",
                      borderTopRightRadius: "0.75rem",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      height: "100px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#ddd",
                      fontWeight: "700",
                      fontSize: "3rem",
                      borderTopLeftRadius: "0.75rem",
                      borderTopRightRadius: "0.75rem",
                    }}
                  >
                    {nom.charAt(0)}
                  </div>
                )}

                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                    {nom}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div
          style={{
            textAlign: "center",
            fontSize: "1.2rem",
            fontWeight: "500",
            color: "#444",
            borderTop: "1px solid #ddd",
            paddingTop: "1rem",
            userSelect: "text",
          }}
        >
          📧 <a href="mailto:mochonlucas9@gmail.com" style={{ textDecoration: "none", color: "#444" }}>
            mochonlucas9@gmail.com
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
