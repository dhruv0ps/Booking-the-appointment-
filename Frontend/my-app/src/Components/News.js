import React, { useState, useEffect } from 'react';
import './News.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Carousel } from 'react-responsive-carousel';
import Slider from 'react-slick';
import Skeleton from 'react-loading-skeleton';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import D11 from '../Doctor/D11.jpeg';
import D12 from '../Doctor/D12.jpeg';
import D13 from '../Doctor/D13.jpeg';

const News = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  const carouselContent = (
    <Slider
      dots={false}
      infinite={true}
      speed={500}
      slidesToShow={3}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={3000}
      nextArrow={<NextArrow />}
      prevArrow={<PrevArrow />}
    >
      {generateCard(D11, 'Card title', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.')}
      {generateCard(D12, 'Card title', 'This card has supporting text below as a natural lead-in to additional content.')}
      {generateCard(D13, 'Card title', 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.')}
      {generateCard(D12, 'Card title', 'This card has supporting text below as a natural lead-in to additional content.')}
      {generateCard(D12, 'Card title', 'This card has supporting text below as a natural lead-in to additional content.')}
    </Slider>
  );

  const skeletonContent = (
    <Slider
      dots={false}
      infinite={true}
      speed={500}
      slidesToShow={3}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={3000}
      nextArrow={<NextArrow />}
      prevArrow={<PrevArrow />}
    >
      {[...Array(5)].map((_, index) => (
        <div className="card" key={index}>
          <Skeleton height={200} />
        </div>
      ))}
    </Slider>
  );

  return (
    <div className="container">
      <div className="heading">
        <div className="left_text wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>
          <h4>News & Insights</h4>
          <p>Stay up-to-date with the news and updates in Trace</p>
        </div>
        <div className="news_links wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="1s" style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '1s', animationName: 'fadeInUp' }}>
          <div className="row">
            <Carousel>
              {loading ? skeletonContent : carouselContent}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

const generateCard = (image, title, text) => (
  <div className="card">
    <img className="card-img-top" src={image} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <p className="card-text">
        <small className="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="slick-arrow slick-next" onClick={onClick}>
    <BiChevronRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="slick-arrow slick-prev" onClick={onClick}>
    <BiChevronLeft />
  </div>
);

export default News;
