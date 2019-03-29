import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import "../styles/WeddingPhotos.css";
import photo02 from  "../assets/weddingPhotos/02.jpg";
import photo03 from  "../assets/weddingPhotos/03.jpg";
import photo04 from  "../assets/weddingPhotos/04.jpg";
import photo05 from  "../assets/weddingPhotos/05.jpg";
import photo06 from  "../assets/weddingPhotos/06.jpg";
import photo07 from  "../assets/weddingPhotos/07.jpg";
import photo08 from  "../assets/weddingPhotos/08.jpg";
import photo09 from  "../assets/weddingPhotos/09.jpg";
import photo10 from  "../assets/weddingPhotos/10.jpg";
import photo11 from  "../assets/weddingPhotos/11.jpg";
import photo12 from  "../assets/weddingPhotos/12.jpg";
import photo13 from  "../assets/weddingPhotos/13.jpg";
import photo14 from  "../assets/weddingPhotos/14.jpg";
import photo15 from  "../assets/weddingPhotos/15.jpg";
import photo16 from  "../assets/weddingPhotos/16.jpg";
import photo17 from  "../assets/weddingPhotos/17.jpg";
import photo18 from  "../assets/weddingPhotos/18.jpg";
import photo19 from  "../assets/weddingPhotos/19.jpg";
import photo20 from  "../assets/weddingPhotos/20.jpg";
import photo21 from  "../assets/weddingPhotos/21.jpg";
import photo22 from  "../assets/weddingPhotos/22.jpg";
import photo23 from  "../assets/weddingPhotos/23.jpg";
import photo24 from  "../assets/weddingPhotos/24.jpg";
import photo25 from  "../assets/weddingPhotos/25.jpg";
import photo26 from  "../assets/weddingPhotos/26.jpg";
import photo27 from  "../assets/weddingPhotos/27.jpg";
import photo28 from  "../assets/weddingPhotos/28.jpg";
import photo29 from  "../assets/weddingPhotos/29.jpg";
import photo30 from  "../assets/weddingPhotos/30.jpg";
import photo31 from  "../assets/weddingPhotos/31.jpg";
import photo32 from  "../assets/weddingPhotos/32.jpg";
import photo33 from  "../assets/weddingPhotos/33.jpg";
import photo34 from  "../assets/weddingPhotos/34.jpg";
import photo35 from  "../assets/weddingPhotos/35.jpg";
import photo36 from  "../assets/weddingPhotos/36.jpg";
import photo37 from  "../assets/weddingPhotos/37.jpg";

const items = [
  {
    src: photo02,
    altText: 'weddingPhoto02'
  },
  {
    src: photo03,
    altText: 'weddingPhoto03'
  },
  {
    src: photo04,
    altText: 'weddingPhoto04'
  },
  {
    src: photo05,
    altText: 'weddingPhoto05'
  },
  {
    src: photo06,
    altText: 'weddingPhoto06'
  },
  {
    src: photo07,
    altText: 'weddingPhoto07'
  },
  {
    src: photo08,
    altText: 'weddingPhoto08'
  },
  {
    src: photo09,
    altText: 'weddingPhoto09'
  },
  {
    src: photo10,
    altText: 'weddingPhoto10'
  },
  {
    src: photo11,
    altText: 'weddingPhoto11'
  },
  {
    src: photo12,
    altText: 'weddingPhoto12'
  },
  {
    src: photo13,
    altText: 'weddingPhoto13'
  },
  {
    src: photo14,
    altText: 'weddingPhoto14'
  },
  {
    src: photo15,
    altText: 'weddingPhoto15'
  },
  {
    src: photo16,
    altText: 'weddingPhoto16'
  },
  {
    src: photo17,
    altText: 'weddingPhoto17'
  },
  {
    src: photo18,
    altText: 'weddingPhoto18'
  },
  {
    src: photo19,
    altText: 'weddingPhoto19'
  },
  {
    src: photo20,
    altText: 'weddingPhoto20'
  },
  {
    src: photo21,
    altText: 'weddingPhoto21'
  },
  {
    src: photo22,
    altText: 'weddingPhoto22'
  },
  {
    src: photo23,
    altText: 'weddingPhoto23'
  },
  {
    src: photo24,
    altText: 'weddingPhoto24'
  },
  {
    src: photo25,
    altText: 'weddingPhoto25'
  },
  {
    src: photo26,
    altText: 'weddingPhoto26'
  },
  {
    src: photo27,
    altText: 'weddingPhoto27'
  },
  {
    src: photo28,
    altText: 'weddingPhoto28'
  },
  {
    src: photo29,
    altText: 'weddingPhoto29'
  },
  {
    src: photo30,
    altText: 'weddingPhoto30'
  },
  {
    src: photo31,
    altText: 'weddingPhoto31'
  },
  {
    src: photo32,
    altText: 'weddingPhoto32'
  },
  {
    src: photo33,
    altText: 'weddingPhoto33'
  },
  {
    src: photo34,
    altText: 'weddingPhoto34'
  },
  {
    src: photo35,
    altText: 'weddingPhoto35'
  },
  {
    src: photo36,
    altText: 'weddingPhoto36'
  },
  {
    src: photo37,
    altText: 'weddingPhoto37'
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
    this.setState({
      activeIndex: nextIndex
    });
  }

  previous() {
    if (this.animating) return;
    const previousIndex = (this.state.activeIndex === 0) ? items.length - 1 : this.state.activeIndex - 1;
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
        <CarouselItem className="carouselItem" onExiting={this.onExiting} onExited={this.onExited} key={item.altText} >
          <img className="carouselImage img-fluid border-primary" src={item.src} alt={item.altText} />
        </CarouselItem>
      );
    });

    return (
      <Container fluid>
        <p className="text-center d-none d-md-block">Photos are courtesy of <a href="https://www.instagram.com/haleyjane.photography/" target="_blank" rel="noopener noreferrer">Haley Jane Photography</a> | <a href="https://haleyjanephotography.com/" target="_blank" rel="noopener noreferrer">haleyjanephotography.com</a></p>
        <p className="text-center d-md-none splitHeader">Photos are courtesy of <a href="https://www.instagram.com/haleyjane.photography/" target="_blank" rel="noopener noreferrer">Haley Jane Photography</a></p>
        <p className="text-center d-md-none"><a href="https://haleyjanephotography.com/" target="_blank" rel="noopener noreferrer">haleyjanephotography.com</a></p>
        <Carousel interval={false} slide={false} className="carouselMain" pause={false} activeIndex={this.state.activeIndex} next={this.next} previous={this.previous} >
          <CarouselIndicators className="carouselIndicator d-none d-md-flex mb-2" items={items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl className="carouselButton" direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl className="carouselButton" direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </Container>
    );
  }
};

export default WeddingPhotos;
