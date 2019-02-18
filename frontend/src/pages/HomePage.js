import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './WeddingDetails';
import "../styles/HomePage.css";
import WeddingDetails from './WeddingDetails';

class HomePage extends Component {
  render() {
    return (
      <div>
      <Container>
        <Row className="mb-2">
          <Col>
            <h3 className="text-center d-none d-md-block text-monospace text-primary">Ryan & Jorden | September 28th, 2019</h3>
            <h3 className="text-center d-md-none text-monospace text-primary">Ryan & Jorden</h3>
            <h3 className="text-center d-md-none text-monospace text-primary">September 28th, 2019</h3>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <img src={require("../assets/engagementImage.jpg")} className="imageHome img-fluid border-primary" alt="Engagement" />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <h5 className="text-center">Day Block Brewing | Minneapolis, MN</h5>
          </Col>
        </Row>
        {/*
        <Jumbotron className="jumbotronHome d-flex flex-column">
          <h1 className="mb-auto text-center text-monospace text-primary font-weight-bold">Ryan & Jorden | September 28th, 2019</h1>
          <h3 className="text-center font-weight-bold">Day Block Brewing | Minneapolis, MN</h3>
        </Jumbotron>
        */}
      </Container>
      <WeddingDetails/>
      </div>
    );
  }
}

export default HomePage;
