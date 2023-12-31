import React from "react";
import Slider from "react-slick";
import HomeCard from "./HomeCard";
import { homeCarouselData } from "./homeCarouselData";

const HomeCarousel = () => {
  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}></div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };

  return (
    <div className="homeCarouselContainer">
      <Slider {...settings} className="homeCarousel">
        {homeCarouselData.map((el) => (
          <div key={el.title} className={el.className}>
            <HomeCard title={el.title} text={el.text} button={el.button} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel;
