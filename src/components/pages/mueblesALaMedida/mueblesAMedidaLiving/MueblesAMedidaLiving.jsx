import React from "react";
import Slider from "react-slick";

const MueblesAMedidaLiving = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    pauseOnHover: true,
    slidesToScroll: 1,
  };
  return (
    <article className="mueblesAMedidaLiving">
      <header>
        <h2 className="secondaryTitle">Living para compartir en familia</h2>
      </header>
      <section className="mueblesAMedidaLivingTextoContainer">
        <p className="mueblesAMedidaLivingTexto">
          Transforma tu sala de estar en un oasis de elegancia y comodidad.
          Diseñamos espacios acogedores con materiales resistentes, para que tu
          living refleje tu estilo y perdure en el tiempo.
        </p>
      </section>
      <section className="mueblesAMedidaLivingCarouselContainer">
        <Slider {...settings} className="mueblesAMedidaLivingCarousel">
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705270833/mobel-deco/mueblesAMedidaLiving/atmtaxrjr0sbhqg4hdym.jpg"
              alt="Living"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705270833/mobel-deco/mueblesAMedidaLiving/htpppr11vniyzmunigns.jpg"
              alt="Living"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705270833/mobel-deco/mueblesAMedidaLiving/qxlydcf3zq7hke3iuc2j.jpg"
              alt="Living"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705270833/mobel-deco/mueblesAMedidaLiving/hs2e3elq85zsewsdimqc.jpg"
              alt="Living"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1705270833/mobel-deco/mueblesAMedidaLiving/clt3izydbmxez1p4ibi5.jpg"
              alt="Living"
            />
          </div>
        </Slider>
      </section>
    </article>
  );
};

export default MueblesAMedidaLiving;
