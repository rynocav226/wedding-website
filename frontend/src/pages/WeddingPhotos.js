import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import "../styles/WeddingPhotos.css";
import gophersImage from  "../assets/ourStory/gophersImage.jpg";
import weddingImage from "../assets/ourStory/weddingImage.jpg";
import honeymoonImage from "../assets/ourStory/honeymoonImage.jpg";

const items = [
  {
    src: gophersImage,
    altText: 'gophersImage'
  },
  {
    src: weddingImage,
    altText: 'WeddingImage'
  },
  {
    src: honeymoonImage,
    altText: 'HoneymoonImage'
  }
];

class WeddingPhotos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = (this.state.activeIndex === (items.length - 1)) ? 0 : this.state.activeIndex + 1;
    console.log(nextIndex);
    this.setState({
      activeIndex: nextIndex
    });
  }

  previous() {
    if (this.animating) return;
    const previousIndex = (this.state.activeIndex === 0) ? items.length - 1 : this.state.activeIndex - 1;
    console.log(previousIndex);
    this.setState({
      activeIndex: previousIndex
    });
  }

  goToIndex(newIndex) {
    this.setState({
      activeIndex: newIndex
    });
  }

  render() {

    const slides = items.map((item) => {
      return (
        <CarouselItem tag="div" className="carouselItem" onExiting={this.onExiting} onExited={this.onExited} key={item.altText} >
          <img className="carouselImage img-fluid border-primary" src={item.src} alt={item.altText} />
        </CarouselItem>
      );
    });

    return (
      <Container fluid>
        <Carousel interval={false} slide={false} className="carouselMain" pause={false} activeIndex={this.state.activeIndex} next={this.next} previous={this.previous} >
          <CarouselIndicators className="carouselIndicator" items={items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl className="carouselButton" direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl className="carouselButton" direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </Container>
    );
  }
};

export default WeddingPhotos;
