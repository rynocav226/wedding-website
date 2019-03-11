import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import { Card, CardTitle, CardBody, CardImg, CardText } from 'reactstrap';
import "../styles/BreweryCrawl.css";

const BreweryCrawl = () => {
  return (
    <Container>
      <Row className="mb-2">
        <Col sm="4" lg="5">
          <Card>
            <CardBody>
              <CardTitle className="text-primary text-center">Details</CardTitle>
              <CardText>???</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="8" lg="7">
          <Card>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe title="AlotMap" className="embed-responsive-item" src="https://www.google.com/maps/d/u/0/embed?mid=12jtQUqkq1OR84um6TOV5PMzBcIVk2K3t" />
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="8" lg="7">
          <Card>
            <CardBody>
              <CardTitle className="text-primary">Stop #1 - Day Block Brewing</CardTitle>
              <Table>
                <tbody>
                  <tr>
                    <th scope="row">Arrive At</th>
                    <td>7:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Depart At</th>
                    <td>8:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <td>????</td>
                  </tr>
                  <tr>
                    <th scope="row">Beer List</th>
                    <td>????</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4" lg="5">
          <Card>
            <CardImg className="breweryCrawlImage img-fluid" src={require("../assets/bridalParty/saraMichalskiLynch.jpg")} alt="Amy Andry" />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="4" lg="5">
          <Card>
            <CardImg className="breweryCrawlImage img-fluid" src={require("../assets/bridalParty/saraMichalskiLynch.jpg")} alt="Amy Andry" />
          </Card>
        </Col>
        <Col sm="8" lg="7">
          <Card>
            <CardBody>
              <CardTitle className="text-primary">Stop #2 - ???</CardTitle>
              <Table>
                <tbody>
                  <tr>
                    <th scope="row">Arrive At</th>
                    <td>8:15 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Depart At</th>
                    <td>9:15 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <td>????</td>
                  </tr>
                  <tr>
                    <th scope="row">Beer List</th>
                    <td>????</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="8" lg="7">
          <Card>
            <CardBody>
              <CardTitle className="text-primary">Stop #3 - ????</CardTitle>
              <Table>
                <tbody>
                  <tr>
                    <th scope="row">Arrive At</th>
                    <td>9:30 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Depart At</th>
                    <td>10:30 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <td>????</td>
                  </tr>
                  <tr>
                    <th scope="row">Beer List</th>
                    <td>????</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4" lg="5">
          <Card>
            <CardImg className="breweryCrawlImage img-fluid" src={require("../assets/bridalParty/saraMichalskiLynch.jpg")} alt="Amy Andry" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BreweryCrawl;
