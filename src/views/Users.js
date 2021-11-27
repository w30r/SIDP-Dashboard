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

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return Math.round(d);
}
function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

function getColor(x) {
  if (x > 50) {
    return "text-danger";
  } else {
    return "";
  }
}

function getTempColor(x) {
  if (x >= 37) {
    return "text-warning";
  } else {
    return "";
  }
}

function twodeconly(x) {
  return x.toFixed(2);
}

// function handleEmail() {
//   alert();
// }

function TableList() {
  const { data: doto } = useGetData();

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
                      <th className="border-0">IC</th>
                      {/* <th className="border-0">O²</th> */}
                      <th className="border-0">Temperature</th>
                      <th className="border-0">Heart rate </th>
                      <th className="border-0">Location</th>
                      <th className="border-0">Distance</th>
                      <th className="border-0">Actions</th>
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
                            <td>{x.ic}</td>
                            {/* <td>{x.oxy + "%"}</td> */}
                            <td
                              className={getTempColor(
                                x.temp[x.temp.length - 1]
                              )}
                            >
                              {twodeconly(x.temp[x.temp.length - 1]) + "°C"}
                            </td>
                            <td>{x.hrate[x.hrate.length - 1] + " bpm"}</td>
                            <td>
                              {twodeconly(x.currentcoords.lat)},{" "}
                              <tr>{twodeconly(x.currentcoords.lng)}</tr>
                            </td>
                            <td
                              className={getColor(
                                getDistanceFromLatLonInKm(
                                  x.currentcoords.lat,
                                  x.currentcoords.lng,
                                  x.homecoords.lat,
                                  x.homecoords.lng
                                )
                              )}
                            >
                              {getDistanceFromLatLonInKm(
                                x.currentcoords.lat,
                                x.currentcoords.lng,
                                x.homecoords.lat,
                                x.homecoords.lng
                              ) + " KM"}
                            </td>
                            <td className="text-info:hover">
                              <i className="btn nc-icon nc-icon nc-bell-55"></i>
                              <i
                                onClick={() => alert(x.email)}
                                className="btn nc-icon nc-email-85"
                              ></i>
                              <i className="btn nc-icon nc-single-02"></i>
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
