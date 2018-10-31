import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class HomePage extends Component {
  render() {
    return (
      <Container>
          <Row>
            <h2>Jorden & Ryan | 10-28-2019</h2>
          </Row>
          <Row>
            <img src={require("../assets/engagementPic.jpg")} alt="Engagement" />
          </Row>
          <Row>
            <h5>Day Block Event Center | Minneapolis, MN</h5>
          </Row>
      </Container>
    );
  }
}

export default HomePage;
