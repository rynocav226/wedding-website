import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import { Card, CardTitle, CardBody, CardImg, CardText } from 'reactstrap';
import "../styles/BreweryCrawl.css";

const BreweryCrawl = () => {
  return (
    <Container>
      <Row className="mb-2 no-gutters">
        <Col lg="6" xl="5">
          <Card>
            <div className="embed-responsive embed-responsive-16by9 routeMap">
              <iframe title="BreweryCrawlRoute" className="embed-responsive-item" src="https://www.google.com/maps/d/embed?mid=1vBYumfcioh7n3lcIJgcJAHrQB6ReuoFN" />
            </div>
          </Card>
        </Col>
        <Col lg="6" xl="7">
          <Card>
            <CardBody>
              <CardTitle className="text-primary text-center">Details</CardTitle>
              <CardText>On Friday September 27th, in lieu of a groom's dinner the night before the wedding, join the bride and groom on a brewery crawl through the North Loop.  All are welcome!<br />Easiest transport options to the start of the crawl and from the end of the crawl will be via Uber or Lyft.  Another option is taking the light rail; the US Bank Stadium stop is near the downtown hotels and the Target Field stop is near the breweries.<br />If unable to join us at the beginning of the crawl, may text Ryan at 605.381.2813 or groomsman Seth at 605.431.7747 to ensure we are keeping up with the timeline.<br />No group dinner is planned as part of the crawl, eat before or can order food along the route.  See the brewery details below for food options at each stop.<br />For those wishing to extend the crawl a few more stops on their way back to the downtown hotels, we recommend Fulton, Clockwerks, and Day Block Brewing.</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="no-gutters">
        <Col sm="12" md="9" lg="7">
          <Card>
          <CardBody>
              <CardTitle className="text-primary breweryHeaderFont">Stop #1 - Modist Brewing</CardTitle>
              <Table className="breweryFont">
                <colgroup>
                  <col style={{width: '28%'}} />
                  <col style={{width: '72%'}} />
                </colgroup>
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
                    <td><a href="https://www.google.com/maps/place/Modist+Brewing+Co./@44.9851373,-93.2763262,15z/data=!4m2!3m1!1s0x0:0x30f489ba3f97962e?sa=X&ved=2ahUKEwj92vGCpabhAhWqiOAKHeq6AcIQ_BIwDnoECAoQCA" target="_blank" rel="noopener noreferrer">505 N 3rd St</a></td>
                  </tr>
                  <tr>
                    <th scope="row">Beer List</th>
                    <td><a href="http://modistbrewing.com/beers/" target="_blank" rel="noopener noreferrer">modistbrewing.com/beers</a></td>
                  </tr>
                  <tr>
                    <th scope="row">Food Option</th>
                    <td><a href="https://roaminghunger.com/market-bar-b-que-food-truck/" target="_blank" rel="noopener noreferrer">Market Bar-B-Que</a></td>
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
      <Row className="no-gutters">
        <Col md="3" lg="5" className="d-none d-md-block">
          <Card>
            <CardImg className="breweryCrawlImage img-fluid" src={require("../assets/breweryCrawl/inbound.jpg")} alt="Inbound BrewCo" />
          </Card>
        </Col>
        <Col sm="12" md="9" lg="7">
          <Card>
          <CardBody>
              <CardTitle className="text-primary breweryHeaderFont">Stop #2 - Inbound BrewCo</CardTitle>
              <Table className="breweryFont">
                <colgroup>
                  <col style={{width: '30%'}} />
                  <col style={{width: '70%'}} />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">Arrive At</th>
                    <td>8:15 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Depart At</th>
                    <td>9:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <td><a href="https://www.google.com/maps/place/Inbound+BrewCo/@44.985554,-93.281553,15z/data=!4m5!3m4!1s0x0:0xdc8a5f1bcf6a6fbd!8m2!3d44.985554!4d-93.281553" target="_blank" rel="noopener noreferrer">701 N 5th St</a></td>
                  </tr>
                  <tr>
                    <th scope="row">Beer List</th>
                    <td><a href="https://inboundbrew.co/inbound-brewco-beer" target="_blank" rel="noopener noreferrer">inboundbrew.co/inbound-brewco-beer</a></td>
                  </tr>
                  <tr>
                    <th scope="row">Food Option</th>
                    <td>None</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" className="d-md-none">
          <Card>
          <CardImg className="breweryCrawlImage img-fluid" src={require("../assets/breweryCrawl/inbound.jpg")} alt="Inbound BrewCo" />
          </Card>
        </Col>
      </Row>
      <Row className="no-gutters">
        <Col sm="12" md="9" lg="7">
        <Card>
            <CardBody>
              <CardTitle className="text-primary breweryHeaderFont">Stop #3 - Number 12 Cider</CardTitle>
              <Table className="breweryFont">
                <colgroup>
                  <col style={{width: '28%'}} />
                  <col style={{width: '72%'}} />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">Arrive At</th>
                    <td>9:15 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Depart At</th>
                    <td>10:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <td><a href="https://www.google.com/maps/place/Number+12+Cider/@44.9852933,-93.2796211,15z/data=!4m5!3m4!1s0x0:0x232facee4e383e26!8m2!3d44.9852933!4d-93.2796211" target="_blank" rel="noopener noreferrer">614 N 5th St</a></td>
                  </tr>
                  <tr>
                    <th scope="row">Beer List</th>
                    <td><a href="https://number12cider.com/" target="_blank" rel="noopener noreferrer">number12cider.com</a></td>
                  </tr>
                  <tr>
                    <th scope="row">Food Option</th>
                    <td><a href="https://static1.squarespace.com/static/5b32b8d7f407b44ab408d264/t/5d31eb283d5cbb000165e7d2/1563552553579/main+menu-7.19.19.pdf" target="_blank" rel="noopener noreferrer">Little Tomato</a></td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="3" lg="5">
          <Card>
            <CardImg className="breweryCrawlImage img-fluid" src={require("../assets/breweryCrawl/cider.jpg")} alt="Number 12 Cider" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BreweryCrawl;
