import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './ImageCarousel.css'; // Import custom CSS for additional styling
import D11 from '../Doctor/D11.jpeg';
import D12 from '../Doctor/D12.jpeg';
import D13 from '../Doctor/D13.jpeg';
import D16 from '../Doctor/D16.webp';
import D17 from '../Doctor/D17.jpg';
const ImageCarousel = () => {
  return (
    <div>
    <Container className="carousel-container" >
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={D16    }
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={D17
            }
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={D13}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
    </div>
  );
}

export default ImageCarousel;
