import React from "react";
import Slider from "react-slick";

const MueblesAMedidaBano = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    pauseOnHover: true,
    slidesToScroll: 1,
  };
  return (
    <article className="mueblesAMedidaBano">
      <header>
        <h2 className="secondaryTitle">Tu baño de ensueño te espera</h2>
      </header>
      <section className="mueblesAMedidaBanoTextoContainer">
        <p className="mueblesAMedidaBanoTexto">
          Sumérgete en nuestros proyectos de remodelación de baños y descubre
          cómo convertimos espacios ordinarios en oasis de estilo y
          funcionalidad
        </p>
      </section>
      <section className="mueblesAMedidaBanoCarouselContainer">
        <Slider {...settings} className="mueblesAMedidaBanoCarousel">
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705271795/mobel-deco/mueblesAMedidaBano/psddft9jim5rrqm3izbs.jpg"
              alt="Bano"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705271795/mobel-deco/mueblesAMedidaBano/yjjjc7pz6zo02tas04on.jpg"
              alt="Bano"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705271794/mobel-deco/mueblesAMedidaBano/hpoknmoeowos7atilvcx.jpg"
              alt="Bano"
            />
          </div>
        </Slider>
      </section>
    </article>
  );
};

export default MueblesAMedidaBano;
