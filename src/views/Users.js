import React from "react";
import { useGetData } from "modules/queries";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  const { data: doto } = useGetData();
  console.log(doto);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Users</Card.Title>
                <p className="card-category">List of all registered users</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">O² (%)</th>
                      <th className="border-0">Current temperature (°C) </th>
                      <th className="border-0">Current heart rate (bpm) </th>
                      <th className="border-0">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doto &&
                      doto.map(function (x) {
                        return (
                          <tr>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>{x.email}</td>
                            <td>{x.oxy}</td>
                            <td>{x.temp[x.temp.length - 1]}</td>
                            <td>{x.hrate[x.hrate.length - 1]}</td>
                            <td>
                              {x.coords.lat}, <tr>{x.coords.lng}</tr>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
