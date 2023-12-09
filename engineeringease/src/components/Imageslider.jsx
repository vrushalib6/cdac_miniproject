import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Imageslide from './Images/Images1.jpeg';
import Imageslide2 from './Images/Images2.jpeg';
import Imageslide3 from './Images/Images3.jpeg';

export function Imageslider() {
  const imageStyle = {
    width: "80px", // Adjust the width as needed
    height: '700px',
    marginTop: "50px"
  };

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imageslide}
          alt="First slide"
          style={imageStyle}
        />
        <Carousel.Caption>
          <h3>Place of Engineering things</h3>
          <p> You can Rent the things</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imageslide2}
          alt="Second slide"
          style={imageStyle}
        />
        <Carousel.Caption>
          <h3>Tools for Engineers</h3>
          <p>Rent Accessories</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imageslide3}
          alt="Third slide"
          style={imageStyle}
        />
        <Carousel.Caption>
          <h3>Books and study Material</h3>
          <p>
          Can rent second hand Books on low price
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


