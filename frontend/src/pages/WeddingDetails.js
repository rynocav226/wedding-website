import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Table } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import '../styles/WeddingDetails.css';

const WeddingDetails = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col md="6" lg="5" xl="4" className="mb-2">
          <Card>
            <CardBody>
              <CardTitle>Venue</CardTitle>
              <Container>
                <Row>
                  <Col className="mb-2">
                    <CardText className="text-center font-weight-bold">Day Block Brewing</CardText>
                  </Col>
                  <Col sm="12" className="mb-2">
                    <CardImg src={require("../assets/weddingDetails/dayBlockImage.jpg")} alt="DayBlock" />
                  </Col>
                  <Col>
                    <CardText className="text-center"><a href="geo:0,0?q=aloft+minneapolis" target="_blank" rel="noopener noreferrer">1103 S Washington Ave, Minneapolis MN 55415</a></CardText>
                  </Col>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="7" xl="8" className="mb-2">
          <Card>
            <CardBody>
              <CardTitle>Schedule</CardTitle>
              <Table>
                <tbody>
                  <tr>
                    <th scope="row">Welcome Social</th>
                    <td>4:30 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Bridal Entrance</th>
                    <td>5:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Vow Renewal</th>
                    <td>5:15 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Seated Dinner</th>
                    <td>5:30 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Live Band & Dance</th>
                    <td>7:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Closing Social Hour</th>
                    <td>11:00 PM</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" className="mb-2">
          <Card>
            <CardBody>
              <CardTitle>Child Care</CardTitle>
              <CardText>Due to the size of the venue, we request the attendence of adults only.  If unable to make arrangements, child care will be provided in the suite of the <Link to="../Accommodations/#courtyardMarriottCardGroup">Courtyard Marriott Hotel</Link> and can be indicated on the <span className="text-primary spanHover" onClick={props.toggleCode}>RSVP</span>.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" className="mb-2">
          <Card>
            <CardBody>
              <CardTitle>Dress Code</CardTitle>
              <CardText>Dressy Casual aka Semiformal.  For the ladies: cocktail dress, dressy skirt and top, elegant pantsuit, or cute romper.  For the men: suit, tie, dress pants, and/or blazer.  Light or dark hues, up to you.  Please no jeans or sneakers.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="4" lg="3" xl="3" className="mb-2">
          <Card>
            <CardBody>
              <CardTitle>Registry</CardTitle>
              <ListGroup flush>
                <ListGroupItem className="list-group-item-action text-primary" tag="a" href="https://amazon.com" target="_blank" rel="noopener noreferrer">Amazon</ListGroupItem>
                <ListGroupItem className="list-group-item-action text-primary" tag="a" href="https://www.target.com/gift-registry/dashboard?registryId=0f58270090e2432f81c982c93c5492ca&lnk=reg_invite_accept" target="_blank" rel="noopener noreferrer">Target</ListGroupItem>
                <ListGroupItem className="list-group-item-action text-primary" tag="a" href="https://www.crateandbarrel.com/gift-registry/jorden-taveirne-and-ryan-cavanaugh/r5948856" target="_blank" rel="noopener noreferrer">Crate&Barrel</ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
        <Col md="8" lg="5" xl="5" className="mb-2">
          <Card>
            <CardBody>
              <CardTitle>Pre-Wedding Fun</CardTitle>
              <CardText>In lieu of a Groom's Dinner, we will be doing a Brewery Crawl through the North Loop of Downtown Minneapolis on Friday night, September 27th.  All are welcome to partake for however many stops your heart desires.  The crawl will start and end near the downtown hotels so if staying at the <Link to="../Accommodations/#aloftCardGroup">Aloft</Link> or <Link to="../Accommodations/#courtyardMarriottCardGroup">Courtyard Marriott</Link>, will be able to walk.  See the <Link to="../BreweryCrawl/">'Brewery Crawl'</Link> page for the details.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="4" className="mb-2">
          <Card>
            <CardBody>
              <CardTitle>Transport</CardTitle>
              <CardText>As alcohol will be provided throughout the night, please arrange for safe travel to the venue and back.  The ride sharing apps Uber and Lyft are available throughout Minneapolis and can be downloaded to your smart phone.  Also, please bring cash to tip the bartenders.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="4" className="mb-2">
          <Card>
            <CardBody>
              <CardTitle>Parking</CardTitle>
              <CardText>For guests not staying at the downtown hotels, we have rented out a parking lot adjacent to Day Block.  The address for the lot is ???.  Guests may park there from ?? to midnight.  If using the parking lot, please have a designated driver.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="12" lg="8" className="mb-2">
          <Card>
            <CardBody>
              <CardTitle>Electronics Request</CardTitle>
              <CardText>We kindly request that during the "big" moments of the night all phones and tablets remain in pockets, purses, and clutches so that all guests can share fully in the moment and our photographer has uninterupted viewpoints to capture the moments.  If y'all promise to do this, we promise to share some photos on this website in the week that follows.  For the rest of the time, take as many photos as you like; save them, post them, delete them, and if you do post them, please use #tyingthecavanot</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WeddingDetails;
