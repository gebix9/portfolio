import { useEffect, useState } from "react";
import http from "../../services/api";
import { Container, Row, Col, Card, Accordion, Badge, Modal } from "react-bootstrap";

const Certifications = () => {
    const [certifications, setCertifications] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [modalImage, setModalImage] = useState(null);
    const [modalTitle, setModalTitle] = useState("");

    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await http.get("/certifications");
            setCertifications(res.data);
        } catch (err) {
            console.error("Erreur chargement des certifs :", err);
        }
        };
        fetchData();
    }, []);

    const groupedByType = certifications.reduce((acc, cert) => {
        if (!acc[cert.type_nom]) acc[cert.type_nom] = [];
        acc[cert.type_nom].push(cert);
        return acc;
    }, {});


    const handleImageClick = (image, title) => {
        setModalImage(image);
        setModalTitle(title);
        setModalShow(true);
    };

    const handleClose = () => {
        setModalShow(false);
        setModalImage(null);
        setModalTitle("");
    };

    return (
        <Container fluid className="py-5 px-4" style={{ backgroundColor: "#f0ede7", borderRadius: "1rem" }}>
        <h2 className="mb-4 text-center text-dark">🏆 Mes Certifications</h2>

        <Accordion defaultActiveKey="0" alwaysOpen>
            {Object.entries(groupedByType).map(([typeNom, certs], index) => (
            <Accordion.Item
                eventKey={index.toString()}
                key={typeNom}
                className="mb-3 border-0 shadow-sm rounded overflow-hidden"
            >
                <Accordion.Header>
                {typeNom}{" "}
                <Badge bg="secondary" className="ms-2">
                    {certs.length}
                </Badge>
                </Accordion.Header>
                <Accordion.Body>
                <Row xs={1} md={2} lg={2} className="g-4">
                    {certs.map((cert) => (
                    <Col key={cert.id}>
                        <Card className="h-100 shadow-sm border-0">
                        <Row className="g-0 align-items-center">
                            <Col
                            xs={8}
                            className="p-3 d-flex flex-column justify-content-center"
                            >
                            <Card.Title className="mb-0">{cert.nom}</Card.Title>
                            </Col>
                            <Col xs={4}>
                            {cert.image ? (
                                <Card.Img
                                onClick={() =>
                                    handleImageClick(cert.image, cert.nom)
                                }
                                role="button"
                                tabIndex={0}
                                src={`data:image/png;base64,${cert.image}`}
                                alt={cert.nom}
                                style={{
                                    height: "100px",
                                    objectFit: "contain",
                                    borderRadius: "0 0.5rem 0.5rem 0",
                                    backgroundColor: "#fff",
                                    padding: "5px",
                                    boxShadow: "0 0 6px rgba(0,0,0,0.1)",
                                    cursor: "pointer",
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleImageClick(cert.image, cert.nom);
                                }}
                                />
                            ) : (
                                <div></div>
                            )}
                            </Col>
                        </Row>
                        </Card>
                    </Col>
                    ))}
                </Row>
                </Accordion.Body>
            </Accordion.Item>
            ))}
        </Accordion>

        <Modal show={modalShow} onHide={handleClose} centered size="lg">
            <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
            {modalImage && (
                <img
                src={`data:image/png;base64,${modalImage}`}
                alt={modalTitle}
                style={{ maxWidth: "100%", maxHeight: "70vh", objectFit: "contain" }}
                />
            )}
            </Modal.Body>
        </Modal>
        </Container>
    );
};

export default Certifications;
