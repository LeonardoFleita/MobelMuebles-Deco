import React from "react";

const HomeAcercaDe = () => {
  return (
    <article className="homeAcercaDeContainer">
      <div className="homeAcercaDeTexto">
        <h1 className="secondaryTitle">Acerca de nosotros</h1>
        <p>
          Hace mas de 20 años nos esforzamos por ser el referente de diseño de
          muebles a medida. Nuestro compromiso con cada trabajo, propuestas
          adaptadas a cada cliente.
        </p>
        <p>
          Valores como calidad, responsabilidad, prolijidad, atención
          personalizada es lo que acompaña cada proceso.
        </p>
        <p>
          Lo que nos distingue es el acompañamiento que tienen nuestros clientes
          desde el inicio del proyecto. No solo diseñando muebles a medida sino
          un desarrollo integral de la decoración de los espacios del hogar.
        </p>
        <p>
          <strong>
            Trabajamos con melamina para entregarle las mejores características
            a nuestros clientes:
          </strong>
        </p>
        <div className="homaAcercaDeIconos">
          <img
            src="https://res.cloudinary.com/drez01kou/image/upload/v1704141692/mobel-deco/acercaDe/yyggrd4dsq082gdbgvh7.png"
            alt="homeAcercaDeIconos"
          />
        </div>
      </div>
      <div className="homeAcercaDeImg">
        <img
          src="https://res.cloudinary.com/drez01kou/image/upload/v1704138932/mobel-deco/acercaDe/uk8bxl4fzctbn0dzqvpr.png"
          alt="acercaDeMueblesAMedida"
        />
      </div>
    </article>
  );
};

export default HomeAcercaDe;
