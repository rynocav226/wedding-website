import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { CardGroup, Card, CardBody, CardTitle, CardImg } from 'reactstrap';
import { Table } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import '../styles/Accommodations.css';

class Accommodations extends Component {
  render() {
    return (
      <Container fluid>
        <Nav id="accommodationsNavigation" style={{zIndex: '2'}} className="hotelNav bg-secondary justify-content-center">
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
        <div style={{paddingTop: '25px', zIndex: '1'}}>
          <CardGroup id="aloftCardGroup" className="mb-2">
            <Card>
              <CardBody>
                <CardTitle className="text-center">Aloft</CardTitle>
                <CardImg className="mb-2" src={require("../assets/aloftImage.jpg")} alt="Aloft" />
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe title="AlotMap" className="embed-responsive-item" src="https://www.google.com/maps/d/u/0/embed?mid=12jtQUqkq1OR84um6TOV5PMzBcIVk2K3t" />
                </div>
              </CardBody>
            </Card>
            <div className="w-100 d-none d-sm-block d-md-none" />
            <Card>
              <CardBody>
                <CardTitle className="text-center">Overview</CardTitle>
                <Table>
                  <colgroup>
                    <col style={{width: '40%'}} />
                    <col style={{width: '60%'}} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>Adress</th>
                      <td><a href="https://goo.gl/maps/h1j9vEQiQ5G2" target="_blank" rel="noopener noreferrer">900 Washington Ave South</a></td>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <td>1 (888) 627-7079</td>
                    </tr>
                    <tr>
                      <th>Room Rate</th>
                      <td>$149</td>
                    </tr>
                    <tr>
                      <th>Parking Rate</th>
                      <td>$15 per day</td>
                    </tr>
                    <tr>
                      <th>Must Book By</th>
                      <td>August 28th</td>
                    </tr>
                    <tr>
                      <th>Distance from Venue</th>
                      <td>0.2 miles</td>
                    </tr>
                    <tr>
                      <th>Checkin Time</th>
                      <td>3:00 PM</td>
                    </tr>
                    <tr>
                      <th>Checkout Time</th>
                      <td>12:00 PM</td>
                    </tr>
                    <tr>
                      <th>Rewards Affiliation</th>
                      <td>Marriott Rewards, Ritz-Carlton Rewards, and Starwood Preferred Guest</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
            <div className="w-100 d-none d-sm-block d-xl-none" />
            <Card>
              <CardBody>
                <CardTitle className="text-center">Details</CardTitle>
                <ListGroup flush>
                  <ListGroupItem>
                    <ListGroupItemHeading>Location</ListGroupItemHeading>
                    <ListGroupItemText>In downtown Mineapolis.  Closest hotel to both the venue on Saturday and the starting point of the brewery crawl on Friday.  Easiest access is via 35W.</ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem>
                    <ListGroupItemHeading>Booking Instructions</ListGroupItemHeading>
                    <ListGroupItemText>Call the number listed and mention the Taveirne/Cavanaugh wedding block.  A credit card will be required to make the reservation.  Alternatively, the booking can be made through this <a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1544558844816&key=GRP&app=resvlink" target="_blank" rel="noopener noreferrer">website</a>.</ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem>
                    <ListGroupItemHeading>Availibility</ListGroupItemHeading>
                    <ListGroupItemText>Room rate is valid for both Friday and Saturday night.  Do not need to book both.</ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem>
                    <ListGroupItemHeading>Shuttle Service</ListGroupItemHeading>
                    <ListGroupItemText>Available Friday and Saturday on a first come, first serve basis anywhere within a 5 mile radius.</ListGroupItemText>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </CardGroup>
          <CardGroup id="courtyardMarriottCardGroup" className="mb-2">
            <Card>
              <CardBody>
                <CardTitle className="text-center">Courtyard Marriott</CardTitle>
                <CardImg className="mb-2" src={require("../assets/courtyardMarriottImage.jpg")} alt="CourtyardMarriott" />
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe title="CourtyardMarriottMap" className="embed-responsive-item" src="https://www.google.com/maps/d/u/0/embed?mid=10UrKekqIgg9_V2iNT1Rc6VALznYY0cIj" />
                </div>
              </CardBody>
            </Card>
            <div className="w-100 d-none d-sm-block d-md-none" />
            <Card>
              <CardBody>
                <CardTitle className="text-center">Overview</CardTitle>
                <Table>
                  <colgroup>
                    <col style={{width: '40%'}} />
                    <col style={{width: '60%'}} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>Adress</th>
                      <td><a href="https://goo.gl/maps/sf9Vi4s2KCE2" target="_blank" rel="noopener noreferrer">1500 Washington Ave South</a></td>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <td>(877) 699-3216</td>
                    </tr>
                    <tr>
                      <th>Room Rate</th>
                      <td>$144</td>
                    </tr>
                    <tr>
                      <th>Parking Rate</th>
                      <td>$22 per day with in/out privileges; $17 per day without in/out privileges</td>
                    </tr>
                    <tr>
                      <th>Must Book By</th>
                      <td>August 31st</td>
                    </tr>
                    <tr>
                      <th>Distance from Venue</th>
                      <td>0.4 miles</td>
                    </tr>
                    <tr>
                      <th>Checkin Time</th>
                      <td>3:00 PM</td>
                    </tr>
                    <tr>
                      <th>Checkout Time</th>
                      <td>12:00 PM</td>
                    </tr>
                    <tr>
                      <th>Rewards Affiliation</th>
                      <td>Marriott Rewards, Ritz-Carlton Rewards, and Starwood Preferred Guest</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
            <div className="w-100 d-none d-sm-block d-xl-none" />
            <Card>
              <CardBody>
                <CardTitle className="text-center">Details</CardTitle>
                <ListGroup flush>
                  <ListGroupItem>
                    <ListGroupItemHeading>Location</ListGroupItemHeading>
                    <ListGroupItemText>In downtown Mineapolis, right in the heart of Seven Corners, just off of 35W.  Wedding venue and the starting point of the brewery crawl are both walkable.</ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem>
                    <ListGroupItemHeading>Child Care</ListGroupItemHeading>
                    <ListGroupItemText>If unable to make other arrangements, child care will be provided in the suite of this hotel during the wedding.</ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem>
                    <ListGroupItemHeading>Booking Instructions</ListGroupItemHeading>
                    <ListGroupItemText>Call Marriott reservations at the number listed and metion the Taveirne/Cavanaugh wedding block.  Either a first night room deposit or major credit card is required to secure a reservation.</ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem>
                    <ListGroupItemHeading>Availibility</ListGroupItemHeading>
                    <ListGroupItemText>Room rate is valid for both Friday and Saturday night.  Do not need to book both.  Rate is also available for Thursday and Sunday night, if desired, subject to room availibility.</ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem>
                    <ListGroupItemHeading>Shuttle Service</ListGroupItemHeading>
                    <ListGroupItemText>Complimentary shuttle to and from the wedding venue until 10:45 pm; first come, fist serve.  Will need to mention you are with the Taveirne/Cavanaugh wedding group.</ListGroupItemText>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </CardGroup>
          <CardGroup id="doubleTreeCardGroup">
            <Card>
              <CardBody>
                <CardTitle className="text-center">DoubleTree SLP</CardTitle>
                <CardImg className="mb-2" src={require("../assets/doubleTreeImage.jpg")} alt="DoubleTree" />
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe title="DoubleTreeSLPMap" className="embed-responsive-item" src="https://www.google.com/maps/d/u/0/embed?mid=1V8kshmuxVP6t-6acS80W6lhy1NHwN0yY" />
                </div>
              </CardBody>
            </Card>
            <div className="w-100 d-none d-sm-block d-md-none" />
            <Card>
              <CardBody>
                <CardTitle className="text-center">Overview</CardTitle>
                <Table>
                  <colgroup>
                    <col style={{width: '40%'}} />
                    <col style={{width: '60%'}} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>Adress</th>
                      <td><a href="https://goo.gl/maps/sQwBaNQysAv" target="_blank" rel="noopener noreferrer">1500 Park Place Blvd</a></td>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <td>(952) 542-8600</td>
                    </tr>
                    <tr>
                      <th>Room Rate</th>
                      <td>$142</td>
                    </tr>
                    <tr>
                      <th>Parking Rate</th>
                      <td>Complimentary</td>
                    </tr>
                    <tr>
                      <th>Must Book By</th>
                      <td>September 6th</td>
                    </tr>
                    <tr>
                      <th>Distance from Venue</th>
                      <td>6.8 miles</td>
                    </tr>
                    <tr>
                      <th>Checkin Time</th>
                      <td>3:00 PM</td>
                    </tr>
                    <tr>
                      <th>Checkout Time</th>
                      <td>11:00 AM</td>
                    </tr>
                    <tr>
                      <th>Rewards Affiliation</th>
                      <td>Hilton Honors</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
            <div className="w-100 d-none d-sm-block d-xl-none" />
            <Card>
              <CardBody>
                <CardTitle className="text-center">Details</CardTitle>
                <ListGroup flush>
                  <ListGroupItem>
                    <ListGroupItemHeading>Location</ListGroupItemHeading>
                    <ListGroupItemText>In St Louis Park, to the west of downtown Minneapolis.  Easy access via I-394 which connects with I-94 via I-494 or highway 169.  For those that do not want to deal with navigating downtown Minneapolis and for easiest access from Alexandria.</ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem>
                    <ListGroupItemHeading>Booking Instructions</ListGroupItemHeading>
                    <ListGroupItemText>Reservation can be made through the <a href="https://doubletree3.hilton.com/en/hotels/minnesota/doubletree-by-hilton-hotel-minneapolis-park-place-MSPPHDT/index.html?SEO_id=GMB-DT-MSPPHDT" target="_blank" rel="noopener noreferrer">hotel's website</a> or by calling the hotel directly at the phone number listed.  When making the reservation, use the group code <strong>609</strong> to receive the discounted rate.</ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem>
                    <ListGroupItemHeading>Availibility</ListGroupItemHeading>
                    <ListGroupItemText>Room rate is valid for both Friday and Saturday night.  Do not need to book both.</ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem>
                    <ListGroupItemHeading>Getting to the Venue</ListGroupItemHeading>
                    <ListGroupItemText>As alcohol is provided throughout the night, we request guests use Uber or Lyft to get to and from the venue.  If driving is desired, a parking lot adjacent to the venue has been reserved.  Address of the parking lot is ???.</ListGroupItemText>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </CardGroup>
        </div>
      </Container>
    );
  }
}

export default Accommodations;
