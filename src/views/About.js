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
                {/* <h1 className="text-white">asdas</h1> */}
                <hr />
                <div className="text-justify">
                  <h5>
                    The purpose of this project is to ease certain authorities,
                    especially the Ministry of Health of Malaysia (MOH) to keep
                    track of covid patients and their health progress. During
                    this pandemic period, hospitals are fully occupied and there
                    are not enough places for the covid patient to be admitted
                    in hospitals or even in the quarantine centers throughout
                    the nation. Due to the lack of beds in the hospitals, the
                    higher authorities had announced that not all covid patients
                    should be admitted; they shall stay home and quarantine
                    themselves. Due to these issues, it is difficult for
                    healthcare members to track the progress of covid patients,
                    and it may be the prime cause of the death rate in our
                    country increasing. Besides, this project is to expose
                    students to both hardware and software development.{" "}
                  </h5>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Typography;
