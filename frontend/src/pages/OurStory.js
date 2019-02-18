import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { CardColumns, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button } from 'reactstrap';
import '../styles/OurStory.css';

class OurStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalGopher: false,
      modalCountry: false,
      modalDecker: false,
      modalRainbow: false,
      modalMiami: false,
      modalProposal: false,
      modalDuke: false,
      modalWedding: false,
      modalHoneymoon: false
    };

    this.toggleGopher = this.toggleGopher.bind(this);
    this.toggleCountry = this.toggleCountry.bind(this);
    this.toggleDecker = this.toggleDecker.bind(this);
    this.toggleRainbow = this.toggleRainbow.bind(this);
    this.toggleMiami = this.toggleMiami.bind(this);
    this.toggleProposal = this.toggleProposal.bind(this);
    this.toggleDuke = this.toggleDuke.bind(this);
    this.toggleWedding = this.toggleWedding.bind(this);
    this.toggleHoneymoon = this.toggleHoneymoon.bind(this);
  }

  toggleGopher() {
    this.setState({
      modalGopher: !this.state.modalGopher
    });
  }

  toggleCountry() {
    this.setState({
      modalCountry: !this.state.modalCountry
    });
  }

  toggleDecker() {
    this.setState({
      modalDecker: !this.state.modalDecker
    });
  }

  toggleRainbow() {
    this.setState({
      modalRainbow: !this.state.modalRainbow
    });
  }

  toggleMiami() {
    this.setState({
      modalMiami: !this.state.modalMiami
    });
  }

  toggleProposal() {
    this.setState({
      modalProposal: !this.state.modalProposal
    });
  }

  toggleDuke() {
    this.setState({
      modalDuke: !this.state.modalDuke
    });
  }

  toggleWedding() {
    this.setState({
      modalWedding: !this.state.modalWedding
    });
  }

  toggleHoneymoon() {
    this.setState({
      modalHoneymoon: !this.state.modalHoneymoon
    });
  }

  render() {
    return (
      <Container>
        <CardColumns>
          <Card onClick={this.toggleGopher} className="cardModal">
            <CardBody>
              <CardTitle>For the Love of the Game</CardTitle>
              <CardSubtitle>And the Maroon and Gold</CardSubtitle>
              <CardText>
                We met at the University of Minnesota and grew our friendship on the softball field.<br /><br />Click to read more...
              </CardText>
            </CardBody>
          </Card>
          <Modal centered autoFocus size="lg" isOpen={this.state.modalGopher} toggle={this.toggleGopher}>
            <ModalHeader toggle={this.toggleGopher}>For the Love of the Game</ModalHeader>
            <ModalBody>
              <Row>
                <Col sm="4" className="d-none d-sm-block">
                  <img src={require("../assets/gophersImage2.jpg")} className="img-fluid" alt="Gopher2" />
                </Col>
                <Col sm="8">
                  <p>We met at the University of Minnesota and grew our friendship on the softball field.</p>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button className="mr-auto ml-auto" color="secondary" onClick={this.toggleGopher}>Close</Button>
            </ModalFooter>
          </Modal>
          <Card>
            <CardImg src={require("../assets/gophersImage.jpg")} alt="Gopher" />
          </Card>
          <Card onClick={this.toggleCountry} className="cardModal">
            <CardBody>
              <CardTitle>Country Music</CardTitle>
              <CardSubtitle>The Soundtrack to Our Journey</CardSubtitle>
              <CardText>
                From city concerts to WE Fest, we heard them all.<br /><br />Click to read more...
              </CardText>
            </CardBody>
          </Card>
          <Modal centered autoFocus size="lg" isOpen={this.state.modalCountry} toggle={this.toggleCountry}>
            <ModalHeader toggle={this.toggleCountry}>Country Music</ModalHeader>
            <ModalBody>
              <Row>
                <Col sm="4" className="d-none d-sm-block">
                  <img src={require("../assets/weFestImage2.jpg")} className="img-fluid" alt="Country2" />
                </Col>
                <Col sm="8">
                  <p>From city concerts to WE Fest, we heard them all.</p>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button className="mr-auto ml-auto" color="secondary" onClick={this.toggleCountry}>Close</Button>
            </ModalFooter>
          </Modal>
          <Card>
            <CardImg src={require("../assets/weFestImage.jpg")} alt="Country" />
          </Card>
          <Card onClick={this.toggleDecker} className="cardModal">
            <CardBody>
              <CardTitle>Decker Caveirne</CardTitle>
              <CardSubtitle>The Life of the Family</CardSubtitle>
              <CardText>
                Once we moved in together, Jorden let us get a dog.<br /><br />Click to read more...
              </CardText>
            </CardBody>
          </Card>
          <Modal centered autoFocus size="lg" isOpen={this.state.modalDecker} toggle={this.toggleDecker}>
            <ModalHeader toggle={this.toggleDecker}>Decker Caveirne</ModalHeader>
            <ModalBody>
              <Row>
                <Col sm="4" className="d-none d-sm-block">
                  <img src={require("../assets/deckerImage2.jpg")} className="img-fluid" alt="Decker2" />
                </Col>
                <Col sm="8">
                  <p>Once we moved in together, Jorden let us get a dog.</p>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button className="mr-auto ml-auto" color="secondary" onClick={this.toggleDecker}>Close</Button>
            </ModalFooter>
          </Modal>
          <Card>
            <CardImg src={require("../assets/deckerImage.jpg")} alt="Decker" />
          </Card>
          <Card onClick={this.toggleRainbow} className="cardModal">
            <CardBody>
              <CardTitle>Rainbow Connection</CardTitle>
              <CardSubtitle>Our Softball Journey Continues</CardSubtitle>
              <CardText>
                Together we founded the greatest team ever to play at the Law School Fields.<br /><br />Click to read more...
              </CardText>
            </CardBody>
          </Card>
          <Modal centered autoFocus size="lg" isOpen={this.state.modalRainbow} toggle={this.toggleRainbow}>
            <ModalHeader toggle={this.toggleRainbow}>Rainbow Connection</ModalHeader>
            <ModalBody>
              <Row>
                <Col sm="4" className="d-none d-sm-block">
                  <img src={require("../assets/rainbowConnectionImage2.jpg")} className="img-fluid" alt="Rainbow2" />
                </Col>
                <Col sm="8">
                  <p>Together we founded the greatest team ever to play at the Law School Fields.</p>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button className="mr-auto ml-auto" color="secondary" onClick={this.toggleRainbow}>Close</Button>
            </ModalFooter>
          </Modal>
          <Card>
            <CardImg src={require("../assets/rainbowConnectionImage.jpg")} alt="Rainbow" />
          </Card>
          <Card onClick={this.toggleMiami} className="cardModal">
            <CardBody>
              <CardTitle>Move to Miami</CardTitle>
              <CardSubtitle>Living it up in Paridise</CardSubtitle>
              <CardText>
                We exchanged the frigid North for the sun and the beach.<br /><br />Click to read more...
              </CardText>
            </CardBody>
          </Card>
          <Modal centered autoFocus size="lg" isOpen={this.state.modalMiami} toggle={this.toggleMiami}>
            <ModalHeader toggle={this.toggleMiami}>Move to Miami</ModalHeader>
            <ModalBody>
              <Row>
                <Col sm="4" className="d-none d-sm-block">
                  <img src={require("../assets/miamiImage2.jpg")} className="img-fluid" alt="Miami2" />
                </Col>
                <Col sm="8">
                  <p>We exchanged the frigid North for the sun and the beach.</p>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button className="mr-auto ml-auto" color="secondary" onClick={this.toggleMiami}>Close</Button>
            </ModalFooter>
          </Modal>
          <Card>
            <CardImg src={require("../assets/miamiImage.jpg")} alt="Miami" />
          </Card>
          <Card onClick={this.toggleProposal} className="cardModal">
            <CardBody>
              <CardTitle>The Proposal</CardTitle>
              <CardSubtitle>Magic at the Biltmore</CardSubtitle>
              <CardText>
                Committing to each other amidst a weekend of pool chilling and golfing.<br /><br />Click to read more...
              </CardText>
            </CardBody>
          </Card>
          <Modal centered autoFocus size="lg" isOpen={this.state.modalProposal} toggle={this.toggleProposal}>
            <ModalHeader toggle={this.toggleProposal}>The Proposal</ModalHeader>
            <ModalBody>
              <Row>
                <Col sm="4" className="d-none d-sm-block">
                  <img src={require("../assets/proposalImage2.jpg")} className="img-fluid" alt="Proposal2" />
                </Col>
                <Col sm="8">
                  <p>Committing to each other amidst a weekend of pool chilling and golfing.</p>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button className="mr-auto ml-auto" color="secondary" onClick={this.toggleProposal}>Close</Button>
            </ModalFooter>
          </Modal>
          <Card>
            <CardImg src={require("../assets/proposalImage.jpg")} alt="Proposal" />
          </Card>
          <Card onClick={this.toggleDuke} className="cardModal">
            <CardBody>
              <CardTitle>Back to School</CardTitle>
              <CardSubtitle>Becoming a Blue Devil</CardSubtitle>
              <CardText>
                Watching games at Cameron Indoor and traveling around the globe.<br /><br />Click to read more...
              </CardText>
            </CardBody>
          </Card>
          <Modal centered autoFocus size="lg" isOpen={this.state.modalDuke} toggle={this.toggleDuke}>
            <ModalHeader toggle={this.toggleDuke}>Back to School</ModalHeader>
            <ModalBody>
              <Row>
                <Col sm="4" className="d-none d-sm-block">
                  <img src={require("../assets/dukeImage2.jpg")} className="img-fluid" alt="Duke2" />
                </Col>
                <Col sm="8">
                  <p>Watching games at Cameron Indoor and traveling around the globe.</p>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button className="mr-auto ml-auto" color="secondary" onClick={this.toggleDuke}>Close</Button>
            </ModalFooter>
          </Modal>
          <Card>
            <CardImg src={require("../assets/dukeImage.jpg")} alt="Duke" />
          </Card>
          <Card onClick={this.toggleWedding} className="cardModal">
            <CardBody>
              <CardTitle>Wedding Day</CardTitle>
              <CardSubtitle>Saying 'I Do' on the Beach of our Dreams</CardSubtitle>
              <CardText>
                We married each other on a beach in South Carolina  To see photos from the big day, head to the <a href="../WeddingPhotos/">'Wedding Photos'</a> page.<br /><br />Click to read more...
              </CardText>
            </CardBody>
          </Card>
          <Modal centered autoFocus size="lg" isOpen={this.state.modalWedding} toggle={this.toggleWedding}>
            <ModalHeader toggle={this.toggleWedding}>Wedding Day</ModalHeader>
            <ModalBody>
              <Row>
                <Col sm="4" className="d-none d-sm-block">
                  <img src={require("../assets/weddingImage2.jpg")} className="img-fluid" alt="Wedding2" />
                </Col>
                <Col sm="8">
                  <p>We married each other on a beach in South Carolina.</p>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button className="mr-auto ml-auto" color="secondary" onClick={this.toggleWedding}>Close</Button>
            </ModalFooter>
          </Modal>
          <Card>
            <CardImg src={require("../assets/weddingImage.jpg")} alt="Wedding" />
          </Card>
          <Card onClick={this.toggleHoneymoon} className="cardModal">
            <CardBody>
              <CardTitle>Honeymoon</CardTitle>
              <CardSubtitle>Exploring a New Continent Together</CardSubtitle>
              <CardText>
                For three weeks, we swapped the winter cold for the summer heat of Australia and New Zealand.<br /><br />Click to read more...
              </CardText>
            </CardBody>
          </Card>
          <Modal centered autoFocus size="lg" isOpen={this.state.modalHoneymoon} toggle={this.toggleHoneymoon}>
            <ModalHeader toggle={this.toggleHoneymoon}>Honeymoon</ModalHeader>
            <ModalBody>
              <Row>
                <Col sm="4" className="d-none d-sm-block">
                  <img src={require("../assets/honeymoonImage2.jpg")} className="img-fluid" alt="Honeymoon2" />
                </Col>
                <Col sm="8">
                  <p>For three weeks, we swapped the winter cold for the summer heat of Australia and New Zealand.</p>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button className="mr-auto ml-auto" color="secondary" onClick={this.toggleHoneymoon}>Close</Button>
            </ModalFooter>
          </Modal>
          <Card>
            <CardImg src={require("../assets/honeymoonImage.jpg")} alt="Honeymoon" />
          </Card>
          <Card>
            <CardBody>
              <CardTitle>Today</CardTitle>
              <CardSubtitle>Renewing our Vows and Celebrating with Friends and Family</CardSubtitle>
              <CardText>
                We still wanted to celebrate with all of our family and friends in a night we will never forget.
              </CardText>
            </CardBody>
          </Card>
        </CardColumns>
      </Container>
    );
  }
}

export default OurStory;
