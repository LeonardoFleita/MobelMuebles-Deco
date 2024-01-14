import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const HomeProyectos = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    pauseOnHover: true,
    slidesToScroll: 1,
  };
  return (
    <article className="homeProyectos">
      <header>
        <h2 className="secondaryTitle">De la imaginación a la realidad</h2>
      </header>
      <section className="homeProyectosCarouselContainer">
        <Slider {...settings} className="homeProyectosCarousel">
          <div className="homeProyectosCarouselImg1"></div>
          <div className="homeProyectosCarouselImg2"></div>
          <div className="homeProyectosCarouselImg3"></div>
          <div className="homeProyectosCarouselImg4"></div>
          <div className="homeProyectosCarouselImg5"></div>
          <div className="homeProyectosCarouselImg6"></div>
        </Slider>
        <Link to={"/mueblesAMedida"}>
          <Button
            variant="contained"
            sx={{ zIndex: "1", bottom: "1rem", fontSize: "12px" }}
          >
            Ver todos los proyectos
          </Button>
        </Link>
      </section>
    </article>
  );
};

export default HomeProyectos;
