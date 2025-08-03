import { useEffect, useState } from "react";
import http from "../../services/api";
import {
  Container,
  Row,
  Col,
  Card,
  Accordion,
  Badge,
  Modal,
  Carousel,
} from "react-bootstrap";

const Projets = () => {
  const [projets, setProjets] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [carouselItems, setCarouselItems] = useState([]); // tableau d’objets {image, title}
  const [currentIndex, setCurrentIndex] = useState(0); // index courant du carousel

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await http.get("/projets");
        setProjets(res.data);
      } catch (err) {
        console.error("Erreur chargement des projets :", err);
      }
    };
    fetchData();
  }, []);

  const groupedByType = projets.reduce((acc, projet) => {
    if (!acc[projet.type_nom]) acc[projet.type_nom] = [];
    acc[projet.type_nom].push(projet);
    return acc;
  }, {});

  const handleImageClick = (mainImage, photoList, projetTitle) => {
    const items = [];
    if (mainImage) items.push({ image: mainImage, title: 'Image principale'});
    if (photoList && photoList.length > 0) {
      photoList.forEach((p, i) => {
        if (p.image) items.push({ image: p.image, title: p.nom });
      });
    }
    setCarouselItems(items);
    setCurrentIndex(0);
    setModalShow(true);
  };

  const handleClose = () => {
    setModalShow(false);
    setCarouselItems([]);
    setCurrentIndex(0);
  };

  const openLien = (lien) => {
    if (!lien) return;

    const hasProtocol = lien.startsWith("http://") || lien.startsWith("https://");
    const url = hasProtocol ? lien : `https://${lien}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Container fluid className="py-5 px-4" style={{ backgroundColor: "#f0ede7", borderRadius: "1rem" }}>
      <h2 className="mb-4 text-center text-dark">💼 Mes Projets</h2>

      <Accordion defaultActiveKey="0" alwaysOpen>
        {Object.entries(groupedByType).map(([typeNom, projetsList], index) => (
          <Accordion.Item eventKey={index.toString()} key={typeNom} className="mb-3 border-0 shadow-sm rounded overflow-hidden">
            <Accordion.Header>
              {typeNom}{" "}
              <Badge bg="secondary" className="ms-2">
                {projetsList.length}
              </Badge>
            </Accordion.Header>
            <Accordion.Body>
              <Row xs={1} md={2} lg={2} className="g-4">
                {projetsList.map((projet) => {
                  const hasMainImage = !!projet.image;
                  const hasPhotos = projet.photos && projet.photos.some(p => p.image);
                  const isClickable = !!projet.lien;

                  const cardContent = (
                    <Card className="h-100 shadow-sm border-0">
                      <Row className="g-0 align-items-center">
                        <Col xs={8} className="p-3">
                          <Card.Title>{projet.nom}</Card.Title>
                          <Card.Text>{projet.descriptif}</Card.Text>
                        </Col>
                        <Col xs={4} className="d-flex justify-content-center align-items-center">
                          {hasMainImage || hasPhotos ? (
                            <Card.Img
                              onClick={(e) => {
                                e.stopPropagation();
                                handleImageClick(
                                  projet.image,
                                  projet.photos ?? [],
                                  projet.nom
                                );
                              }}
                              role="button"
                              tabIndex={0}
                              src={`data:image/png;base64,${projet.image}`}
                              alt={projet.nom}
                              style={{
                                height: "100px",
                                objectFit: "contain",
                                borderRadius: "0.5rem",
                                backgroundColor: "#fff",
                                padding: "5px",
                                boxShadow: "0 0 6px rgba(0,0,0,0.1)",
                                cursor: "pointer",
                              }}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.stopPropagation();
                                  handleImageClick(projet.image, projet.photos ?? [], projet.nom);
                                }
                              }}
                            />
                          ) : (
                            <div
                              style={{
                                height: "100px",
                                width: "100px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                border: "1px dashed #ccc",
                                borderRadius: "0.5rem",
                                backgroundColor: "#f8f9fa",
                                fontSize: "0.8rem",
                                color: "#666",
                                textAlign: "center",
                                padding: "5px",
                              }}
                            >
                              Aucune photo
                            </div>
                          )}
                        </Col>
                      </Row>
                    </Card>
                  );

                  return (
                    <Col key={projet.id}>
                      <div
                        role={isClickable ? "button" : undefined}
                        tabIndex={isClickable ? 0 : undefined}
                        onClick={() => isClickable && openLien(projet.lien)}
                        onKeyDown={(e) => {
                          if (isClickable && e.key === "Enter") openLien(projet.lien);
                        }}
                        style={{
                          cursor: isClickable ? "pointer" : "default",
                          transition: "box-shadow 0.2s ease-in-out",
                          borderRadius: "0.5rem",
                          outline: "none",
                        }}
                      >
                        {cardContent}
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <Modal show={modalShow} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{carouselItems[currentIndex]?.title || ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {carouselItems.length > 0 && (
            <Carousel
              interval={null}
              indicators={carouselItems.length > 1}
              activeIndex={currentIndex}
              onSelect={(selectedIndex) => setCurrentIndex(selectedIndex)}
            >
              {carouselItems.map((item, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    src={`data:image/png;base64,${item.image}`}
                    alt={`image-${idx}`}
                    style={{ maxWidth: "100%", maxHeight: "70vh", objectFit: "contain" }}
                    className="d-block w-100"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Projets;
