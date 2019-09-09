import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { CardGroup, Card, CardBody, CardTitle, CardImg } from 'reactstrap';
import { Table } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import '../styles/Accommodations.css';

const Accommodations = () => {
  return (
    <Container className="accommodationsContainer" fluid>
      <Nav style={{zIndex: '2'}} className="hotelNav bg-secondary justify-content-center" role="navigation">
        <NavItem>
          <NavLink tag={Link} to="#aloftCardGroup">Aloft</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="#courtyardMarriottCardGroup">Courtyard Marriott</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="#doubleTreeCardGroup">DoubleTree SLP</NavLink>
        </NavItem>
      </Nav>
      <div style={{paddingTop: '25px', zIndex: '1'}}>
        <CardGroup id="aloftCardGroup" className="mb-2">
          <Card>
            <CardBody>
              <CardTitle className="text-center">Aloft</CardTitle>
              <CardImg className="mb-2" src={require("../assets/accommodations/aloftImage.jpg")} alt="Aloft" />
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
                  <col style={{width: '53%'}} />
                  <col style={{width: '47%'}} />
                </colgroup>
                <tbody className="accommodationTableText">
                  <tr>
                    <th scope="row">Address</th>
                    <td><a href="https://www.google.com/maps/place/Aloft+Minneapolis/@44.9762921,-93.2545232,15z/data=!4m5!3m4!1s0x0:0x28524a5bd31d103f!8m2!3d44.9762921!4d-93.2545232" target="_blank" rel="noopener noreferrer">900 Washington Ave South</a></td>
                  </tr>
                  <tr>
                    <th scope="row">Phone</th>
                    <td>1 (888) 627-7079</td>
                  </tr>
                  <tr>
                    <th scope="row">Room Rate</th>
                    <td>$149</td>
                  </tr>
                  <tr>
                    <th scope="row">Parking Rate</th>
                    <td>$25 per day with in/out privileges; first come, first serve</td>
                  </tr>
                  <tr>
                    <th scope="row">Book By</th>
                    <td>August 28th</td>
                  </tr>
                  <tr>
                    <th scope="row">Venue Distance</th>
                    <td>0.2 miles</td>
                  </tr>
                  <tr>
                    <th scope="row">Checkin Time</th>
                    <td>3:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Checkout Time</th>
                    <td>12:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Rewards Affiliation</th>
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
                  <ListGroupItemHeading className="detailsHeadingText">Location</ListGroupItemHeading>
                  <ListGroupItemText>In downtown Mineapolis.  Closest hotel to the venue, is walkable.  Easiest access is via 35W.</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading className="detailsHeadingText">Booking Instructions</ListGroupItemHeading>
                  <ListGroupItemText>A block of rooms has been reserved for the wedding.  A reservation can be made by calling the number listed and mentioning the <strong>Taveirne/Cavanaugh</strong> wedding block.  A credit card will be required to make the reservation.  Alternatively, the reservation can be made through this <a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1556051611179&key=GRP&app=resvlink" target="_blank" rel="noopener noreferrer">booking website</a>.</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading className="detailsHeadingText">Availibility</ListGroupItemHeading>
                  <ListGroupItemText>Room rate is valid for both Friday and Saturday night.  Do not need to book both.</ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </CardGroup>
        <CardGroup id="courtyardMarriottCardGroup" className="mb-2">
          <Card>
            <CardBody>
              <CardTitle className="text-center">Courtyard Marriott</CardTitle>
              <CardImg className="mb-2" src={require("../assets/accommodations/courtyardMarriottImage.jpg")} alt="CourtyardMarriott" />
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
                  <col style={{width: '53%'}} />
                  <col style={{width: '47%'}} />
                </colgroup>
                <tbody className="accommodationTableText">
                  <tr>
                    <th scope="row">Address</th>
                    <td><a href="https://www.google.com/maps/place/Courtyard+by+Marriott+Minneapolis+Downtown/@44.9737321,-93.2473116,15z/data=!4m5!3m4!1s0x0:0x533451a877f4dc48!8m2!3d44.9737321!4d-93.2473116" target="_blank" rel="noopener noreferrer">1500 Washington Ave South</a></td>
                  </tr>
                  <tr>
                    <th scope="row">Phone</th>
                    <td>(877) 699-3216</td>
                  </tr>
                  <tr>
                    <th scope="row">Room Rate</th>
                    <td>$144</td>
                  </tr>
                  <tr>
                    <th scope="row">Parking Rate</th>
                    <td>$22 per day with in/out privileges; $17 per day without in/out privileges</td>
                  </tr>
                  <tr>
                    <th scope="row">Book By</th>
                    <td>August 31st</td>
                  </tr>
                  <tr>
                    <th scope="row">Venue Distance</th>
                    <td>0.4 miles</td>
                  </tr>
                  <tr>
                    <th scope="row">Checkin Time</th>
                    <td>3:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Checkout Time</th>
                    <td>12:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Rewards Affiliation</th>
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
                  <ListGroupItemHeading className="detailsHeadingText">Location</ListGroupItemHeading>
                  <ListGroupItemText>In downtown Mineapolis, right in the heart of Seven Corners, just off of 35W.  Wedding venue is walkable.</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading className="detailsHeadingText">Child Care</ListGroupItemHeading>
                  <ListGroupItemText>If unable to make other arrangements, child care and dinner will be provided in the suite of this hotel during the wedding.</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading className="detailsHeadingText">Booking Instructions</ListGroupItemHeading>
                  <ListGroupItemText>A block of rooms has been reserved for the wedding.  A reservation can be made by calling Marriott reservations at the number listed and metioning the <strong>Taveirne/Cavanaugh</strong> wedding block.  Either a first night room deposit or major credit card is required to secure a reservation.  Alternatively, the reservation can be made through this <a href="https://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Taveirne%20Cavanaugh%20Wedding%5Emspdc%60tcwtcwa%7Ctcwtcwb%7Ctcwtcwc%60144.00%60USD%60false%604%609/27/19%609/29/19%6008/31/2019&app=resvlink&stop_mobi=yes" target="_blank" rel="noopener noreferrer">booking website</a>.</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading className="detailsHeadingText">Availibility</ListGroupItemHeading>
                  <ListGroupItemText>Room rate is valid for both Friday and Saturday night.  Do not need to book both.  Rate is also available for Thursday and Sunday night, if desired, subject to room availibility.</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading className="detailsHeadingText">Shuttle Service</ListGroupItemHeading>
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
              <CardImg className="mb-2" src={require("../assets/accommodations/doubleTreeImage.jpg")} alt="DoubleTree" />
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
                  <col style={{width: '53%'}} />
                  <col style={{width: '47%'}} />
                </colgroup>
                <tbody className="accommodationTableText">
                  <tr>
                    <th scope="row">Address</th>
                    <td><a href="https://www.google.com/maps/place/DoubleTree+by+Hilton+Hotel+Minneapolis+-+Park+Place/@44.9684034,-93.3513996,15z/data=!4m2!3m1!1s0x0:0xfe9f32bd8f649c42?sa=X&ved=2ahUKEwivgZOYt_HhAhWQmuAKHR65DcMQ_BIwDHoECAwQCA" target="_blank" rel="noopener noreferrer">1500 Park Place Blvd</a></td>
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
                    <th scope="row">Book By</th>
                    <td>September 6th</td>
                  </tr>
                  <tr>
                    <th scope="row">Venue Distance</th>
                    <td>6.8 miles</td>
                  </tr>
                  <tr>
                    <th scope="row">Checkin Time</th>
                    <td>3:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">Checkout Time</th>
                    <td>11:00 AM</td>
                  </tr>
                  <tr>
                    <th scope="row">Rewards Affiliation</th>
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
                  <ListGroupItemHeading className="detailsHeadingText">Location</ListGroupItemHeading>
                  <ListGroupItemText>In St Louis Park, to the west of downtown Minneapolis.  Easy access via I-394 which connects with I-94 via I-494 or highway 169.  For those that do not want to deal with navigating downtown Minneapolis and for easiest access from Alexandria.</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading className="detailsHeadingText">Booking Instructions</ListGroupItemHeading>
                  <ListGroupItemText>A block of rooms has been reserved for the wedding.  A reservation can be made through the <a href="https://doubletree3.hilton.com/en/hotels/minnesota/doubletree-by-hilton-hotel-minneapolis-park-place-MSPPHDT/index.html?SEO_id=GMB-DT-MSPPHDT" target="_blank" rel="noopener noreferrer">hotel's website</a> or by calling the hotel directly at the phone number listed.  When making the reservation, use the group code <strong>609</strong> to receive the discounted rate.</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading className="detailsHeadingText">Availibility</ListGroupItemHeading>
                  <ListGroupItemText>Room rate is valid for both Friday and Saturday night.  Do not need to book both.</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading className="detailsHeadingText">Getting to the Venue</ListGroupItemHeading>
                  <ListGroupItemText>As alcohol is provided throughout the night, we request guests use Uber or Lyft to get to and from the venue.  If driving is desired, a parking lot behind the venue has been reserved.  Address of the parking lot is <a href="https://www.google.com/maps/place/1100+S+3rd+St,+Minneapolis,+MN+55415/@44.974597,-93.2555857,17z/data=!3m1!4b1!4m5!3m4!1s0x52b32d67010df461:0x8e487826acd3c0a7!8m2!3d44.974597!4d-93.253397" target="_blank" rel="noopener noreferrer">1100 S 3rd St</a>.</ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    </Container>
  );
};

export default Accommodations;
