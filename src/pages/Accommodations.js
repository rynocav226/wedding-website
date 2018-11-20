import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { CardGroup, Card, CardBody, CardTitle, CardImg } from 'reactstrap';
import { Table } from 'reactstrap';

class Accommodations extends Component {
  render() {
    return (
      <Container fluid>
        <Nav id="accommodationsNavigation" className="justify-content-center">
          <NavItem>
            <NavLink href="#aloftCardGroup">Aloft</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#courtyardMarriottCardGroup">Courtyard Marriott</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#doubleTreeCardGroup">DoubleTree SLP</NavLink>
          </NavItem>
        </Nav>
        <div data-spy="scroll" data-target="#accommodationsNavigation" data-offset="70">
          <CardGroup id="aloftCardGroup" className="mb-2">
            <Card>
              <Container>
                <Row>
                  <Col>
                    <Card>
                      <CardImg src={require("../assets/aloftImage.jpg")} alt="Card image cap" />
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Card>
            <Card>
              <CardBody>
                <CardTitle className="text-center">Overview</CardTitle>
                <Table>
                  <tr>
                    <th scope="row">Adress</th>
                    <td>900 Washington Ave South</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone</th>
                    <td>(612) 455-8400</td>
                  </tr>
                  <tr>
                    <th scope="row">Room Rate</th>
                    <td>$149</td>
                  </tr>
                  <tr>
                    <th scope="row">Parking Rate</th>
                    <td>$25 per day</td>
                  </tr>
                  <tr>
                    <th scope="row">Must Book By</th>
                    <td>August 29th</td>
                  </tr>
                  <tr>
                    <th scope="row">Distance from Venue</th>
                    <td>0.2 miles</td>
                  </tr>
                </Table>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle>Details</CardTitle>
              </CardBody>
            </Card>
          </CardGroup>
          <CardGroup id="courtyardMarriottCardGroup" className="mb-2">
            <Card>
              <CardImg src={require("../assets/courtyardMarriottImage.jpg")} alt="Card image cap" />
            </Card>
            <Card>
              <CardBody>
                <CardTitle className="text-center">Overview</CardTitle>
                <Table>
                  <tr>
                    <th scope="row">Adress</th>
                    <td>1500 Washington Ave South</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone</th>
                    <td>(612) 333-4646</td>
                  </tr>
                  <tr>
                    <th scope="row">Room Rate</th>
                    <td>$144</td>
                  </tr>
                  <tr>
                    <th scope="row">Parking Rate</th>
                    <td>$22 per day</td>
                  </tr>
                  <tr>
                    <th scope="row">Must Book By</th>
                    <td>September 7th</td>
                  </tr>
                  <tr>
                    <th scope="row">Distance from Venue</th>
                    <td>0.4 miles</td>
                  </tr>
                </Table>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle>Details</CardTitle>
              </CardBody>
            </Card>
          </CardGroup>
          <CardGroup id="doubleTreeCardGroup">
            <Card>
              <CardImg src={require("../assets/doubleTreeImage.jpg")} alt="Card image cap" />
            </Card>
            <Card>
              <CardBody>
                <CardTitle className="text-center">Overview</CardTitle>
                <Table>
                  <tr>
                    <th scope="row">Adress</th>
                    <td>1500 Park Place Blvd</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone</th>
                    <td>(952) 542-8600</td>
                  </tr>
                  <tr>
                    <th scope="row">Room Rate</th>
                    <td>$142</td>
                  </tr>
                  <tr>
                    <th scope="row">Parking Rate</th>
                    <td>Complimentary</td>
                  </tr>
                  <tr>
                    <th scope="row">Must Book By</th>
                    <td>September 7th</td>
                  </tr>
                  <tr>
                    <th scope="row">Distance from Venue</th>
                    <td>6.8 miles</td>
                  </tr>
                </Table>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle>Details</CardTitle>
              </CardBody>
            </Card>
          </CardGroup>
        </div>
      </Container>
    );
  }
}

export default Accommodations;
