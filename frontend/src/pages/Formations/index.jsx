import { useEffect, useState } from "react";
import http from "../../services/api";
import { Container, Row, Col, Card, Accordion, Badge, Modal } from "react-bootstrap";

const Formations = () => {

    const [formations, setFormations] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [modalDescripiton, setModalDescription] = useState(null);
    const [modalTitle, setModalTitle] = useState("");

    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await http.get("/formations");
            setFormations(res.data);
        } catch (err) {
            console.error("Erreur chargement des formifs :", err);
        }
        };
        fetchData();
    }, []);

    const groupedByType = formations.reduce((acc, form) => {
        if (!acc[form.type_nom]) acc[form.type_nom] = [];
        acc[form.type_nom].push(form);
        return acc;
    }, {});


    const handleImageClick = (description, title) => {
        setModalDescription(description);
        setModalTitle(title);
        setModalShow(true);
    };

    const handleClose = () => {
        setModalShow(false);
        setModalDescription(null);
        setModalTitle("");
    };



    return (
         <Container fluid className="py-5 px-4" style={{ backgroundColor: "#f0ede7", borderRadius: "1rem" }}>
        <h2 className="mb-4 text-center text-dark">🏆 Mes Formations</h2>

        <Accordion defaultActiveKey="0" alwaysOpen>
            {Object.entries(groupedByType).map(([typeNom, formation], index) => (
            <Accordion.Item
                eventKey={index.toString()}
                key={typeNom}
                className="mb-3 border-0 shadow-sm rounded overflow-hidden"
            >
                <Accordion.Header>
                {typeNom}{" "}
                <Badge bg="secondary" className="ms-2">
                    {formation.length}
                </Badge>
                </Accordion.Header>
                <Accordion.Body>
                <Row xs={1} md={2} lg={2} className="g-4">
                    {formation.map((form) => (
                    <Col key={form.id}>
                        <Card className="h-100 shadow-sm border-0">
                        <Row className="g-0 align-items-center">
                            <Col
                            xs={8}
                            className="p-3 d-flex flex-column justify-content-center"
                            >
                            <Card.Title className="mb-0">{form.nom}</Card.Title>
                            <Card.Body>{form.objectif}</Card.Body>
                            </Col>
                            <Col xs={4}>
                            {form.description ? (
                            <Card
                                onClick={() =>
                                handleImageClick(form.description, form.nom)
                                }
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                if (e.key === "Enter") handleImageClick(form.description, form.nom);
                                }}
                                className="p-2 text-center"
                                >
                                    Voir description
                                </Card>
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
            {modalDescripiton}
            </Modal.Body>
        </Modal>
        </Container>
    );
}

export default Formations;