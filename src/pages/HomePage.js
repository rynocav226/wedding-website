import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class HomePage extends Component {
  render() {
    return (
      <Container>
          <Row>
            <Col>
              <h2 className="text-center text-monospace">Jorden & Ryan | 10-28-2019</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={require("../assets/engagementPic.jpg")} className="img-fluid rounded img-thumbnail" alt="Engagement" />
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 className="text-center">Day Block Event Center | Minneapolis, MN</h5>
            </Col>
          </Row>
      </Container>
    );
  }
}

export default HomePage;