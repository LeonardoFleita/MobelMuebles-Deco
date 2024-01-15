import React from "react";
import Slider from "react-slick";

const MueblesAMedidaCocina = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    pauseOnHover: true,
    slidesToScroll: 1,
  };
  return (
    <article className="mueblesAMedidaCocina">
      <header>
        <h2 className="secondaryTitle">Creamos la cocina de tus sueños</h2>
      </header>
      <section className="mueblesAMedidaCocinaTextoContainer">
        <p className="mueblesAMedidaCocinaTexto">
          Descubre la cocina de tus sueños con medidas precisas y materiales de
          primera calidad. Diseñamos para ti espacios resistentes que reflejen
          tu estilo único y perduren en el tiempo.
        </p>
      </section>
      <section className="mueblesAMedidaCocinaCarouselContainer">
        <Slider {...settings} className="mueblesAMedidaCocinaCarousel">
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705269935/mobel-deco/mueblesAMedidaCocina/uchgmikrhy09gwkyfauk.jpg"
              alt="Cocina"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705268014/mobel-deco/mueblesAMedidaCocina/cuhlllgj7iyllnizv4jg.jpg"
              alt="Cocina"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705268015/mobel-deco/mueblesAMedidaCocina/cykpje5brztq0db7iood.jpg"
              alt="Cocina"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705268015/mobel-deco/mueblesAMedidaCocina/zf9ubnoxto27pnyrlyco.jpg"
              alt="Cocina"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705268015/mobel-deco/mueblesAMedidaCocina/joud4as45tohteryieyl.jpg"
              alt="Cocina"
            />
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705268015/mobel-deco/mueblesAMedidaCocina/trt4fzqt9x3wo2gisvch.jpg"
              alt="Cocina"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705268015/mobel-deco/mueblesAMedidaCocina/yask2flmgtdwsxtdsjry.jpg"
              alt="Cocina"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705268014/mobel-deco/mueblesAMedidaCocina/g6vvpjvsfmmmblfejgfs.jpg"
              alt="Cocina"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705268014/mobel-deco/mueblesAMedidaCocina/m8dcumwvk2koesnzgqcw.jpg"
              alt="Cocina"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705268014/mobel-deco/mueblesAMedidaCocina/gozr0pclyxt1qsy4frff.jpg"
              alt="Cocina"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705268014/mobel-deco/mueblesAMedidaCocina/gqku7bhh7haiwgyu6jes.jpg"
              alt="Cocina"
            />
          </div>
        </Slider>
      </section>
    </article>
  );
};

export default MueblesAMedidaCocina;
