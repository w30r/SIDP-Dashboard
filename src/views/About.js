import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Typography() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h2">
                  Remote Patient Monitoring System
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Title as="h4">
                  A project developed for UTP's Student Industrial Design
                  Project (SIDP)
                </Card.Title>
                {/* <div className="typography-line">
                  <h5>Group members: </h5>
                </div> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Typography;
