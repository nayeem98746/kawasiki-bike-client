import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../../../Images/img1.jpg"
import img2 from "../../../Images/img2.jpg"
import img3 from "../../../Images/img3.jpg"

const Banner = () => {
    return (
        <>
          <Carousel>
  <Carousel.Item>
    <img
      width="100%"
      className="d-block w-80  "
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>This is kawasaki Z1000</h3>
      <p>It is  top spreed bike in the world</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>It's kawasaki zx1200</h3>
      <p>It's have Most Powerful Engine </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
        </>
    );
};

export default Banner;