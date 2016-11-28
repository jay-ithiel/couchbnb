import React from 'react';
import Slider from 'react-slick';

class BookingsCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div key="carousel-1"><h3>10</h3></div>
        <div key="carousel-2"><h3>20</h3></div>
        <div key="carousel-3"><h3>30</h3></div>
        <div key="carousel-4"><h3>40</h3></div>
        <div key="carousel-5"><h3>50</h3></div>
        <div key="carousel-6"><h3>60</h3></div>
      </Slider>
    );
  }
}

export default BookingsCarousel;
