import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { CardGroup, Card, CardBody, CardTitle, CardImg } from 'reactstrap';

class Accommodations extends Component {
  render() {
    return (
      <Container>
        <Nav id="accommodationsNavigation" className="justify-content-center">
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
        <div data-spy="scroll" data-target="#accommodationsNavigation" data-offset="0">
          <CardGroup id="aloftCardGroup">
            <Card>
              <CardImg src={require("../assets/aloftImage.jpg")} alt="Card image cap" />
            </Card>
            <Card>
              <CardBody>
                <CardTitle>Overview</CardTitle>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle>Details</CardTitle>
              </CardBody>
            </Card>
          </CardGroup>
          <CardGroup id="courtyardMarriottCardGroup">
            <Card>
              <CardImg src={require("../assets/courtyardMarriottImage.jpg")} alt="Card image cap" />
            </Card>
            <Card>
              <CardBody>
                <CardTitle>Overview</CardTitle>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle>Details</CardTitle>
              </CardBody>
            </Card>
          </CardGroup>
          <CardGroup id="doubleTreeCardGroup">
            <Card>
              <CardImg src={require("../assets/doubleTreeImage.jpg")} alt="Card image cap" />
            </Card>
            <Card>
              <CardBody>
                <CardTitle>Overview</CardTitle>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle>Details</CardTitle>
              </CardBody>
            </Card>
          </CardGroup>
        </div>
      </Container>
    );
  }
}

export default Accommodations;
