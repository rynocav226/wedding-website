import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import { Card, CardTitle, CardBody, CardImg, CardText } from 'reactstrap';
import "../styles/BreweryCrawl.css";

const BreweryCrawl = () => {
  return (
    <Container>
      <Row className="mb-2">
        <Col sm="12" lg="6">
          <Card>
            <CardBody>
              <CardTitle className="text-primary text-center">Details</CardTitle>
              <CardText>On Friday September 27th, the night before the wedding, join the bride and groom on a brewery crawl through the North Loop.<br />Easiest transport options to the start of the crawl and from the end of the crawl will be via Uber or Lyft.  Another option is taking the light rail, traversing between the US Bank Stadium stop and the Target Field stop.<br />For those wishing to extend the crawl a few more stops on their way back to the downtown hotels, recommend Clockwerks Brewing and Day Block Brewing.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <div className="embed-responsive embed-responsive-16by9 routeMap">
              <iframe title="BreweryCrawlRoute" className="embed-responsive-item" src="https://www.google.com/maps/d/embed?mid=1vBYumfcioh7n3lcIJgcJAHrQB6ReuoFN" />
            </div>
          </Card>
        </Col>
      </Row>
      <Row className="no-gutters">
        <Col sm="12" md="9" lg="7">
          <Card>
            <CardBody>
              <CardTitle className="text-primary">Stop #1 - Inbound BrewCo</CardTitle>
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
                    <td><a href="https://www.google.com/maps/place/Inbound+BrewCo/@44.985554,-93.281553,15z/data=!4m5!3m4!1s0x0:0xdc8a5f1bcf6a6fbd!8m2!3d44.985554!4d-93.281553" target="_blank" rel="noopener noreferrer">701 N 5th St</a></td>
                  </tr>
                  <tr>
                    <th scope="row">Beer List</th>
                    <td><a href="https://inboundbrew.co/inbound-brewco-beer" target="_blank" rel="noopener noreferrer">https://inboundbrew.co/inbound-brewco-beer</a></td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="3" lg="5">
          <Card>
            <CardImg className="breweryCrawlImage img-fluid" src={require("../assets/breweryCrawl/inbound.jpg")} alt="Inbound BrewCo" />
          </Card>
        </Col>
      </Row>
      <Row className="no-gutters">
        <Col md="3" lg="5" className="d-none d-md-block">
          <Card>
            <CardImg className="breweryCrawlImage img-fluid" src={require("../assets/breweryCrawl/fulton.jpg")} alt="Fulton Brewing" />
          </Card>
        </Col>
        <Col sm="12" md="9" lg="7">
          <Card>
            <CardBody>
              <CardTitle className="text-primary">Stop #2 - Fulton Brewing</CardTitle>
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
                    <td><a href="https://www.google.com/maps/place/Fulton+Brewing+Taproom/@44.9849409,-93.2791745,15z/data=!4m2!3m1!1s0x0:0x797e20836229c8d5?sa=X&ved=2ahUKEwiZkLXQqabhAhVFGt8KHVQ3DJcQ_BIwDXoECAwQCA" target="_blank" rel="noopener noreferrer">414 N 6th Ave</a></td>
                  </tr>
                  <tr>
                    <th scope="row">Beer List</th>
                    <td><a href="http://www.fultonbeer.com/beer" target="_blank" rel="noopener noreferrer">http://www.fultonbeer.com/beer</a></td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" className="d-md-none">
          <Card>
            <CardImg className="breweryCrawlImage img-fluid" src={require("../assets/breweryCrawl/fulton.jpg")} alt="Fulton Brewing" />
          </Card>
        </Col>
      </Row>
      <Row className="no-gutters">
        <Col sm="12" md="9" lg="7">
        <Card>
            <CardBody>
              <CardTitle className="text-primary">Stop #3 - Modist Brewing</CardTitle>
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
                    <td><a href="https://www.google.com/maps/place/Modist+Brewing+Co./@44.9851373,-93.2763262,15z/data=!4m2!3m1!1s0x0:0x30f489ba3f97962e?sa=X&ved=2ahUKEwj92vGCpabhAhWqiOAKHeq6AcIQ_BIwDnoECAoQCA" target="_blank" rel="noopener noreferrer">505 N 3rd St</a></td>
                  </tr>
                  <tr>
                    <th scope="row">Beer List</th>
                    <td><a href="http://modistbrewing.com/beers/" target="_blank" rel="noopener noreferrer">http://modistbrewing.com/beers/</a></td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="3" lg="5">
          <Card>
            <CardImg className="breweryCrawlImage img-fluid" src={require("../assets/breweryCrawl/modist.jpg")} alt="Modist Brewing Co" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BreweryCrawl;
