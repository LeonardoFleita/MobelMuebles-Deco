import React from "react";

const HomeDudasFrecuentes = () => {
  return (
    <article className="homeDudasFrecuentes">
      <section className="homeDudasFrecuentesImgContainer">
        <img
          src="https://res.cloudinary.com/drez01kou/image/upload/v1704415476/mobel-deco/preguntasFrecuentes/po2sqq3rwimn2y4go0de.jpg"
          alt="Dudas frecuentes imagen"
          className="homeDudasFrecuentesImg"
        />
      </section>
      <section className="homeDudasFrecuentesTextContainer">
        <header>
          <h2 className="secondaryTitle">Resuelve tus dudas frecuentes</h2>
        </header>
        <div className="homeDudasFrecuentesText">
          <h3>¿Qué combina con qué?</h3>
          <p>
            Analizamos cada caso dependiendo de los pisos que tenga, aberturas,
            entre otros; nuestros proyectos son 100% a la medida.
          </p>
        </div>
        <div className="homeDudasFrecuentesText">
          <h3>¿Cuál sería el costo del proyecto?</h3>
          <p>
            Al no tener precio modular, hasta diseñar el mueble especifico para
            cada cliente, NO tenemos precio estándar
          </p>
        </div>
        <div className="homeDudasFrecuentesText">
          <h3>¿Qué opciones tener?</h3>
          <p>
            La gente busca de tener muebles exclusivos, combinarlos y además que
            sean funcionales, ahí nuestro interés en ver que quiere realmente el
            cliente y que las expectativas se cumplan
          </p>
        </div>
      </section>
    </article>
  );
};

export default HomeDudasFrecuentes;
