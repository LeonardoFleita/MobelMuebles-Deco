import React from "react";
import EncabezadoDecoracion from "./encabezado/encabezadoDecoracion";
import GaleriaDecoracion from "./galeriaDeco/GaleriaDeco";

const Decoracion = ({ phoneNumber, message }) => {
  return (
    <main className="decoracionContainer">
      <EncabezadoDecoracion />
      <GaleriaDecoracion />
    </main>
  );
};

export default Decoracion;
