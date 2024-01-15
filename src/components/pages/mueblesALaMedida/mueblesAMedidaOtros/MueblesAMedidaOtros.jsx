import React from "react";
import Slider from "react-slick";

const MueblesAMedidaOtros = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <article className="mueblesAMedidaOtros">
      <header>
        <h2 className="secondaryTitle">Otros proyectos especiales</h2>
      </header>
      <section className="mueblesAMedidaOtrosTextoContainer">
        <p className="mueblesAMedidaOtrosTexto">
          Estos proyectos son hechos completamente a la medida de tu necesidad
        </p>
      </section>
      <section className="mueblesAMedidaOtrosCarouselContainer">
        <Slider {...settings} className="mueblesAMedidaOtrosCarousel">
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705270833/mobel-deco/mueblesAMedidaLiving/atmtaxrjr0sbhqg4hdym.jpg"
              alt="Otros"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705270833/mobel-deco/mueblesAMedidaLiving/htpppr11vniyzmunigns.jpg"
              alt="Otros"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705270833/mobel-deco/mueblesAMedidaLiving/qxlydcf3zq7hke3iuc2j.jpg"
              alt="Otros"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705270833/mobel-deco/mueblesAMedidaLiving/hs2e3elq85zsewsdimqc.jpg"
              alt="Otros"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705270833/mobel-deco/mueblesAMedidaLiving/clt3izydbmxez1p4ibi5.jpg"
              alt="Otros"
            />
          </div>
        </Slider>
      </section>
    </article>
  );
};

export default MueblesAMedidaOtros;
