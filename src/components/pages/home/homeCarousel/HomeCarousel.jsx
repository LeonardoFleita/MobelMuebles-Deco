import React from "react";
import Slider from "react-slick";
import HomeCard from "./HomeCard";
import { homeCarouselData } from "./homeCarouselData";
import { WhatsApp } from "@mui/icons-material";
import { Button } from "@mui/material";

const HomeCarousel = () => {
  let width = window.innerWidth;

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
    <section className="homeCarouselContainer">
      <Slider {...settings} className="homeCarousel">
        {homeCarouselData.map((el) => (
          <div key={el.title} className={el.className}>
            <HomeCard title={el.title} text={el.text} button={el.button} />
          </div>
        ))}
      </Slider>
      {width < 1200 && (
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            borderRadius: "25px",
            padding: "0.5rem",
            minWidth: "0",
            zIndex: "1",
            bottom: "8rem",
            marginRight: "1.5rem",
          }}
        >
          <WhatsApp fontSize="large" />
        </Button>
      )}
    </section>
  );
};

export default HomeCarousel;
