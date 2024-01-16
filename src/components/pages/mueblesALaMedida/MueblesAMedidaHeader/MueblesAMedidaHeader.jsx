import React from "react";

const MueblesAMedidaHeader = () => {
  return (
    <header className="mueblesAMedidaHeader">
      <section className="mueblesAMedidaHeaderTitleContainer">
        <h1 className="title">Muebles a medida</h1>
        <h2 className="secondaryTitle">Un proyecto, una historia</h2>
      </section>
      <section className="mueblesAMedidaHeaderIconosContainer">
        <a href="#mueblesCocina">
          <img
            src="https://res.cloudinary.com/drez01kou/image/upload/v1705353715/mobel-deco/mueblesAMedidaHeader/nxardzrcjtvxtmoe9izv.png"
            alt="Cocina ícono"
          />
        </a>
        <a href="#mueblesLiving">
          <img
            src="https://res.cloudinary.com/drez01kou/image/upload/v1705353715/mobel-deco/mueblesAMedidaHeader/t3crif3acvtvkkn5j1nf.png"
            alt="Living ícono"
          />
        </a>
        <a href="#mueblesBano">
          <img
            src="https://res.cloudinary.com/drez01kou/image/upload/v1705353715/mobel-deco/mueblesAMedidaHeader/do0v7szfr93kvq4qgbny.png"
            alt="Baño ícono"
          />
        </a>
        <a href="#mueblesOtros">
          <img
            src="https://res.cloudinary.com/drez01kou/image/upload/v1705353715/mobel-deco/mueblesAMedidaHeader/m6wqqqe5flkvjkdq50n8.png"
            alt="Otros ícono"
          />
        </a>
      </section>
    </header>
  );
};

export default MueblesAMedidaHeader;
