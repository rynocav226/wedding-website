import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Table } from 'reactstrap';

class WeddingDetails extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm="6" className="mb-2">
            <Card color="light">
              <CardBody>
                <CardTitle>Venue</CardTitle>
                <Container>
                  <Row>
                    <Col className="mb-2">
                      <CardText className="text-center">Day Block Event Center</CardText>
                    </Col>
                    <Col sm="12" className="mb-2">
                      <CardImg src={require("../assets/dayBlockImage.jpg")} alt="Card image cap" className="img" />
                    </Col>
                    <Col>
                      <CardText className="text-center"><a href="https://www.google.com/maps/place/Day+Block+Event+Center/@44.975204,-93.252891,15z/data=!4m5!3m4!1s0x0:0x6510536e530a6987!8m2!3d44.975204!4d-93.252891" target="_blank" rel="noopener noreferrer">1103 S Washington Ave, Minneapolis MN 55415</a></CardText>
                    </Col>
                  </Row>
                </Container>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" className="mb-2">
            <Card>
              <CardBody>
                <CardTitle>Schedule</CardTitle>
                <Table>
                  <tbody>
                    <tr>
                      <th scope="row">Social Hour</th>
                      <td>4:00 PM</td>
                    </tr>
                    <tr>
                      <th scope="row">Bridal Entrance</th>
                      <td>4:30 PM</td>
                    </tr>
                    <tr>
                      <th scope="row">Vow Renewal</th>
                      <td>5:00 PM</td>
                    </tr>
                    <tr>
                      <th scope="row">Seated Dinner</th>
                      <td>5:30 PM</td>
                    </tr>
                    <tr>
                      <th scope="row">Live Band</th>
                      <td>7:00 PM</td>
                    </tr>
                    <tr>
                      <th scope="row">Social Hour Part 2</th>
                      <td>11:00 PM</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" className="mb-2">
            <Card>
              <CardBody>
                <CardTitle>Dress Code</CardTitle>
                <CardText>Dressy Casual</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" className="mb-2">
            <Card>
              <CardBody>
                <CardTitle>Child Care</CardTitle>
                <CardText>Due to the size of the venue, we request the attendence of adults only.  If unable to make arrangements, child care will be provided in the suite of the Courtyard Marriott Hotel.</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default WeddingDetails;
