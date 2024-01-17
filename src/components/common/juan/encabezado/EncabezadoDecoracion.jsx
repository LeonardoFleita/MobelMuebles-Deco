import React from "react";
import { Link } from "react-router-dom";

const EncabezadoDecoracion = () => {
    return (  
      <article>
      <section className="encabezadoDecoContainer">
        <h1 className="title">Decoración</h1>
        <h2 className="secondaryTitle">Una colección de piezas unicas</h2>
      </section>
      <ul className="RutaNavegacion">
      <Link className="linkInicio" to="/">
            Inicio /
    </Link>
    <p>Decoración</p>
    </ul>
    </article>
    );
};

export default EncabezadoDecoracion;