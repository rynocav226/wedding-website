import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import "../styles/HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <Container>
        <Jumbotron className="jumbotronHome d-flex flex-column">
          <h1 className="mb-auto text-center text-monospace text-primary font-weight-bold">Ryan & Jorden | September 28th, 2019</h1>
          <h3 className="text-center font-weight-bold">Day Block Brewing | Minneapolis, MN</h3>
        </Jumbotron>
      </Container>
    );
  }
}

export default HomePage;
