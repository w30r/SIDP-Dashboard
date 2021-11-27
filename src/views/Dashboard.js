import React, { useState } from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
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
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { useGetData } from "modules/queries";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue, get, child } from "firebase/database";
import { collection, query, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcwlgFZyeng5jPCYnj67DWt80Seto7D5E",
  authDomain: "medicaltracking-18c2e.firebaseapp.com",
  databaseURL:
    "https://medicaltracking-18c2e-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "medicaltracking-18c2e",
  storageBucket: "medicaltracking-18c2e.appspot.com",
  messagingSenderId: "368420362938",
  appId: "1:368420362938:web:af387bdb60f018062b0083",
  measurementId: "G-R4W8R7VYJ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const dbRef = ref(getDatabase());
// GET THE DATA DROM FB

/////////////////////////////////////////// undefined /////////////////////////////////////////////////////////////
// export function useGetFBData() {
//   const [value, setValue] = useState(null);
//   var fbdata = firebase.database().ref("data");
//   fbdata.on("value", (snapshot) => {
//     const data = snapshot.val();
//     if (data != value) {
//       setValue(data);
//     }
//   });
// }

// export function useGetFBData() {
//   const [value, setValue] = useState(null);
//   let fbdata = null;
//   fbdata = get(child(dbRef, "/data"))
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         fbdata = snapshot.val();
//         setValue(data);
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

/////////////////////////////////////////// CAN GET ALL - BUT CANNOT MAP /////////////////////////////////////////////////////////////
// let fbdata = get(child(dbRef, "/data"))
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       fbdata = snapshot.val();
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });

///////////////////////////////////////////JADI CACAT /////////////////////////////////////////////////////////////

// let tempOnlee = [];
// const leng = fbdata.length;
// const timer = (ms) => new Promise((res) => setTimeout(res, ms));
// async function bismillah() {
//   if (tempOnlee < 18) {
//     for (let i = 0; i < 15; i++) {
//       let anjing = await get(child(dbRef, `/data/${i}/temp`)).then(
//         (snapshot) => {
//           if (snapshot.exists()) {
//             anjing = snapshot.val();
//           }
//         }
//       );

//       tempOnlee.push(anjing);
//     }
//   }
// }

////////////////////////////////////////////TESTED ONE BYON; CAN! //////////////////////////////////////////////////////////////
// bismillah();

// let fbdata = get(child(dbRef, "/data/0/temp"))
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       fbdata = snapshot.val();
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// let fbdata1 = get(child(dbRef, "/data/1/temp"))
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       fbdata1 = snapshot.val();
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });

///////////////////////////////////////GOT PROMISES ONLY////////////////////////////////////////////////////
// let thearrayiwant = [];
// let i;
// for (i = 0; i != 8; i++) {
//   let babi = get(child(dbRef, `data/${i}/temp`)).then((snapshot) => {
//     if (snapshot.exists()) {
//       babi = snapshot.val();
//     }
//   });
//   thearrayiwant.push(babi);
// }
// console.log("thearrayiwant", thearrayiwant);

///////////////////////////////////////////////////////////////////////////////////////////

function Dashboard() {
  const { data: doto } = useGetData();
  // console.log("fbdata", fbdata);
  // console.log("fbdata1", fbdata1);
  // const { diti } = useGetFBData();
  // console.log("diti", diti);
  let tempOnly = doto?.map(function (x) {
    return x.temp;
  });
  let nameOnly = doto?.map(function (x) {
    return x.name;
  });
  let oxyOnly = doto?.map(function (x) {
    return x.oxy;
  });
  let hrOnly = doto?.map(function (x) {
    return x.hrate;
  });
  console.log("doto", doto);
  console.log("tempOnly", tempOnly);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Temperature Readings</Card.Title>
                <p className="card-category">Degree Celcius (°C)</p>
                {/* <p className="card-category">{data.data[0].name}</p> */}
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [],
                      series: tempOnly,
                    }}
                    type="Line"
                    options={{
                      low: 35,
                      high: 40,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: true,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 5,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                {/* <div className="legend">
                  <i className="fas fa-circle text-info"></i>Meor{" "}
                  <i className="fas fa-circle text-danger"></i>
                  Arif <i className="fas fa-circle text-warning"></i>
                  Kir <i className="fas fa-circle text-purple"></i>Fathi
                </div>
                <hr></hr> */}
                {/* <div className="legend">
                  {nameOnly &&
                    nameOnly.map((x) => {
                      return (
                        <i className="fas fa-circle text-info"></i>;
                        {
                          x;
                        })
                    })}
                </div> */}
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i> --- Updates every 15 minute
                </div>
              </Card.Footer>
            </Card>
          </Col>
          {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Heart Rate Readings</Card.Title>
                <p className="card-category">Beats per minute</p>
                {/* <p className="card-category">{data.data[0].name}</p> */}
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [""],
                      series: hrOnly,
                    }}
                    type="Line"
                    options={{
                      low: 60,
                      high: 100,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: true,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 5,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  --- Updates every 15 minute
                </div>
              </Card.Footer>
            </Card>
          </Col>
          {/* <Col md="4">
            {doto && (
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Statistics</Card.Title>
                  <p className="card-category">Oxymeter Readings</p>
                </Card.Header>
                <Card.Body>
                  <div
                    className="ct-chart ct-perfect-fourth"
                    id="chartPreferences"
                  >
                    <ChartistGraph
                      data={{
                        labels: ["70%", "10%", "7.5%", "12.5"],
                        // series: [80, 10, 7.5, 12.5],
                        series: doto[0]?.oxy,
                      }}
                      type="Pie"
                    />
                  </div>
                  <div className="legend">
                    <i className="fas fa-circle text-info"></i>
                    >96% <i className="fas fa-circle text-danger"></i>
                    95% <i className="fas fa-circle text-warning"></i>
                    93-94% <i className="fas fa-circle text-purple"></i>
                    {"<92%"}
                  </div>
                  <hr></hr>
                  <div className="stats">
                    <i className="fas fa-history"></i>
                    Updated 3 minutes ago
                  </div>
                </Card.Body>
              </Card>
            )}
          </Col> */}
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Oxymeter Reading </Card.Title>
                <p className="card-category">by %</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartActivity">
                  <ChartistGraph
                    data={{
                      labels: nameOnly,
                      series: [oxyOnly],
                    }}
                    type="Bar"
                    options={{
                      seriesBarDistance: 20,
                      axisX: {
                        showGrid: false,
                      },
                      height: "245px",
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          seriesBarDistance: 5,
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updates every 15 minute
                </div>
              </Card.Footer>
            </Card>
          </Col>
          {/* <Col md="6">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4">Tasks</Card.Title>
                <p className="card-category">Backend development</p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Sign contract for "What are conference organizers
                          afraid of?"
                        </td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-488980961">
                                Edit Task..
                              </Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-506045838">Remove..</Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Lines From Great Russian Literature? Or E-mails From
                          My Boss?
                        </td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-537440761">
                                Edit Task..
                              </Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-21130535">Remove..</Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Flooded: One year later, assessing what was lost and
                          what was found when a ravaging rain swept through
                          metro Detroit
                        </td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-577232198">
                                Edit Task..
                              </Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-773861645">Remove..</Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Create 4 Invisible User Experiences you Never Knew
                          About
                        </td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-422471719">
                                Edit Task..
                              </Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-829164576">Remove..</Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>Read "Following makes Medium better"</td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-160575228">
                                Edit Task..
                              </Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-922981635">Remove..</Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                disabled
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>Unfollow 5 enemies from twitter</td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-938342127">
                                Edit Task..
                              </Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-119603706">Remove..</Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="now-ui-icons loader_refresh spin"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
