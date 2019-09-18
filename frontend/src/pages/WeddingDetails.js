import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Table } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import '../styles/WeddingDetails.css';

const WeddingDetails = (props) => {
  return (
    <Container className="detailsContainer" fluid>
      <Row>
        <Col md="6" lg="5" className="mb-2">
          <Card>
            <CardBody>
              <CardTitle>Venue</CardTitle>
              <Container>
                <Row>
                  <Col className="mb-2">
                    <CardText className="text-center font-weight-bold">Day Block Brewing</CardText>
                  </Col>
                  <Col sm="12" className="mb-2">
                    <CardImg className="venueImage img-fluid" src={require("../assets/weddingDetails/dayBlockImage.jpg")} alt="DayBlock" />
                  </Col>
                  <Col sm="12" className="mb-2">
                    <CardText className="text-center venueAddress"><a href="https://www.google.com/maps/place/Day+Block+Brewing+Company/@44.975189,-93.253061,15z/data=!4m2!3m1!1s0x0:0x38dbd00185981f45?sa=X&ved=2ahUKEwjGkvbyt_HhAhXQY98KHXuZCDcQ_BIwDXoECAgQCA" target="_blank" rel="noopener noreferrer">1103 S Washington Ave, Minneapolis MN 55415</a></CardText>
                  </Col>
                  <Col>
                    <CardText>Event space is on the second floor; entrance is at the rear of the building.</CardText>
                  </Col>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="7" className="mb-2">
          <Card>
            <CardBody>
              <CardTitle className="d-none d-sm-block scheduleTitle">Schedule for Saturday, September 28th</CardTitle>
              <CardTitle className="d-sm-none scheduleTitle splitTitle">Schedule for</CardTitle>
              <CardTitle className="d-sm-none scheduleTitle">Saturday, September 28th</CardTitle>
              <Table>
                <colgroup>
                  <col style={{width: '63%'}} />
                  <col style={{width: '37%'}} />
                </colgroup>
                <tbody className="scheduleText">
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
                    <th scope="row">Last Call</th>
                    <td>11:30 PM</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col md="5" lg="3" xl="4" className="mb-2">
          <Card>
            <CardBody>
              <CardTitle>Registry</CardTitle>
              <ListGroup flush>
                <ListGroupItem className="list-group-item-action text-primary" tag="a" href="https://www.amazon.com/wedding/registry/TGP2VO7G4DVG?ref=wr_search_page_result_1" target="_blank" rel="noopener noreferrer">Amazon</ListGroupItem>
                <ListGroupItem className="list-group-item-action text-primary" tag="a" href="https://www.target.com/gift-registry/giftgiver?registryId=0f58270090e2432f81c982c93c5492ca&type=WEDDING" target="_blank" rel="noopener noreferrer">Target</ListGroupItem>
                <ListGroupItem className="list-group-item-action text-primary" tag="a" href="https://www.crateandbarrel.com/gift-registry/jorden-taveirne-and-ryan-cavanaugh/r5948856" target="_blank" rel="noopener noreferrer">Crate&Barrel</ListGroupItem>
                <ListGroupItem className="list-group-item-action text-primary" tag="a" href="https://www.potterybarn.com/registry/2k5lxwnvsh/registry-list.html?cm_Type=gnav" target="_blank" rel="noopener noreferrer">Pottery Barn</ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
        <Col md="7" lg="6" xl="5" className="mb-2">
          <Card>
            <CardBody>
              <CardTitle>Child Care</CardTitle>
              <CardText>Due to the size of the venue, we are requesting an adults only reception.  While we prefer for you to make your own arrangements, we know it can be challenging.  If you are unable to make your own, we will provide child care in the suite of the <Link to="../Accommodations/#courtyardMarriottCardGroup">Courtyard Marriott Hotel</Link>.  This can be indicated when you <span className="text-primary spanHover" onClick={props.toggleCode}>RSVP</span>.  If you have any questions or concerns, reach out to us at rynocav@gmail.com.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="3" xl="3" className="mb-2">
          <Card>
            <CardBody>
              <CardTitle>Dress Code</CardTitle>
              <CardText>Dressy Casual or Semiformal.<br />For the Ladies: Cocktail dress, pantsuit, romper, or your favorite current outfit.<br />For the Men: Suit and tie, or dress pants with button-down shirt or polo shirt.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="5" xl="3" className="mb-2">
          <Card>
            <CardBody>
              <CardTitle>Pre-Wedding Fun</CardTitle>
              <CardText>In lieu of a Groom's Dinner, we will be doing a Brewery Crawl through the North Loop of Downtown Minneapolis on Friday night, September 27th.  All are welcome to partake for however many stops your heart desires.  See the <Link to="../BreweryCrawl/">'Brewery Crawl'</Link> page for the details.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col lg="7" xl="4" className="mb-2">
          <Card>
            <CardBody>
              <CardTitle>Transportation</CardTitle>
              <CardText>As alcohol will be provided throughout the night, please arrange for safe travel to the venue and back.  The ride sharing apps Uber and Lyft are available throughout Minneapolis and can be downloaded to your smart phone.  For our out of town guests, Minneapolis-St Paul airport has a <a href="https://www.metrotransit.org/metro-blue-line" target="_blank" rel="noopener noreferrer">lightrail system</a> that will take you from the airport to downtown.  Renting a car should not be necessary if you plan to stay in the Cities for the weekend.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col lg="7" xl="5" className="mb-2">
          <Card>
            <CardBody>
              <CardTitle>Electronics Request</CardTitle>
              <CardText>We kindly request that during the "big" moments of the night all phones and tablets remain in pockets, purses, and clutches so that all guests can share fully in the moment and our photographer has uninterupted viewpoints to capture the moments.  If y'all promise to do this, we promise to share some photos on this website in the week that follows.  For the rest of the time, take as many photos as you like; save them, post them, delete them, and if you do post them, please use <strong>#tyingthecavaknot</strong></CardText>
            </CardBody>
          </Card>
        </Col>
        <Col lg="5" className="mb-2">
          <Card>
            <CardBody>
              <CardTitle>Parking</CardTitle>
              <CardText>For guests not staying at the downtown hotels, we have rented out a parking lot behind Day Block.  The entrance for the lot is <a href="https://www.google.com/maps/place/1100+S+3rd+St,+Minneapolis,+MN+55415/@44.974597,-93.2555857,17z/data=!3m1!4b1!4m5!3m4!1s0x52b32d67010df461:0x8e487826acd3c0a7!8m2!3d44.974597!4d-93.253397" target="_blank" rel="noopener noreferrer">1100 S 3rd St</a>.  There will be an attendant at the start of the wedding to greet you and help find the correct lot; look for signs.  Guests may park in the lot for the duration of the wedding but are not allowed to park overnight.  If you decide to drive, please have a designated driver.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xl="7" className="mb-2">
          <Card>
            <CardBody>
              <CardTitle>Things To Do</CardTitle>
              <CardText>We hope you have a great time in Minneapolis and come to love our city as much as we do.  If you are looking for fun things to do, some of our favorites near the venue are a walk across the <a href="https://www.google.com/maps/place/Minneapolis+Stone+Arch+Bridge/@44.9807377,-93.2534122,15z/data=!4m5!3m4!1s0x0:0xe33b0324dd98448b!8m2!3d44.9807377!4d-93.2534122" target="_blank" rel="noopener noreferrer">Stone Arch Bridge</a>, taking in the view from the <a href="https://www.google.com/maps/place/Guthrie+Theater/@44.9781059,-93.2559432,15z/data=!4m5!3m4!1s0x0:0xc80c805887cfc373!8m2!3d44.9781059!4d-93.2559432" target="_blank" rel="noopener noreferrer">Guthrie Theater Endless Bridge</a>, and cooling off with a scoop from <a href="https://izzysicecream.com/locations/minneapolis/" target="_blank" rel="noopener noreferrer">Izzy's Ice Cream</a>.  On Saturday morning, you can check out the <a href="https://millcityfarmersmarket.org/" target="_blank" rel="noopener noreferrer">Mill City Farmer's Market</a>, a short walk from the hotels.  We also love trying one of the 35+ breweries in Minneapolis (we recommend Surly and Dangerous Man) and searching for truly the best <a href="http://mspmag.com/eat-and-drink/the-best-juicy-lucy-burgers-in-the-twin-cities/" target="_blank" rel="noopener noreferrer">Juicy Lucy</a>.  To get more ideas of things to do, click <a href="https://www.minneapolis.org/150-things-to-do-in-minneapolis/" target="_blank" rel="noopener noreferrer">here</a>, and for places to eat, click <a href="https://twincities.eater.com/maps/best-restaurants-minneapolis-st-paul-38-map" target="_blank" rel="noopener noreferrer">here</a>.</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WeddingDetails;
