import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { CardColumns, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap';

class OurStory extends Component {
  render() {
    return (
      <Container>
        <CardColumns>
          <Card>
            <CardBody>
              <CardTitle>For the Love of the Game</CardTitle>
              <CardSubtitle>And the Maroon and Gold</CardSubtitle>
              <CardText>
                We met at the U of M.
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg src={require("../assets/gophersImage.jpg")} alt="Card image cap" />
          </Card>
          <Card>
            <CardBody>
              <CardTitle>Country Music</CardTitle>
              <CardSubtitle>The Soundtrack to Our Journey</CardSubtitle>
              <CardText>
                From city concerts to WE Fest, we heard them all.
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg src={require("../assets/weFestImage.jpg")} alt="Card image cap" />
          </Card>
          <Card>
            <CardBody>
              <CardTitle>Decker Caveirne</CardTitle>
              <CardSubtitle>The Life of the Family</CardSubtitle>
              <CardText>
                Once we moved in together, Jorden let us get a dog.
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg src={require("../assets/deckerImage.JPG")} alt="Card image cap" />
          </Card>
          <Card>
            <CardBody>
              <CardTitle>Rainbow Connection</CardTitle>
              <CardSubtitle>Our Softball Journey Continues</CardSubtitle>
              <CardText>
                Together we founded the greatest team ever to play at the Law School Fields.
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg src={require("../assets/rainbowConnectionImage.jpg")} alt="Card image cap" />
          </Card>
        </CardColumns>
      </Container>
    );
  }
}

export default OurStory;
