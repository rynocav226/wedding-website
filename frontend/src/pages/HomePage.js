import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './WeddingDetails';
import "../styles/HomePage.css";
import WeddingDetails from './WeddingDetails';

const HomePage = (props) => {
  return (
    <div>
      <Container>
        <Row className="mb-2">
          <Col>
            <h3 className="text-center d-none d-md-block text-primary textHome">Ryan & Jorden | September 28th, 2019</h3>
            <h4 className="text-center d-md-none text-primary textHome">Ryan & Jorden</h4>
            <h5 className="text-center d-md-none text-primary textHome">September 28th, 2019</h5>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <img src={require("../assets/homePage/engagementImage.jpg")} className="imageHome img-fluid border-primary" alt="Engagement" />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <h5 className="text-center d-none d-md-block">Day Block Brewing | Minneapolis, MN</h5>
            <h5 className="text-center d-md-none">Day Block Brewing</h5>
            <h6 className="text-center d-md-none">Minneapolis, MN</h6>
          </Col>
        </Row>
      </Container>
      <WeddingDetails {...props} />
    </div>
  );
};

export default HomePage;
