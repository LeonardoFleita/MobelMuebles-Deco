import React from "react";
import MueblesAMedidaCocina from "./mueblesAMedidaCocina/MueblesAMedidaCocina";
import MueblesAMedidaLiving from "./mueblesAMedidaLiving/MueblesAMedidaLiving";
import MueblesAMedidaBano from "./mueblesAMedidaBano/MueblesAMedidaBano";
import SillaGris from "../../common/sillaGris/SillaGris";
import MueblesAMedidaHeader from "./MueblesAMedidaHeader/MueblesAMedidaHeader";

const MueblesAMedida = () => {
  return (
    <main className="mueblesAMedida">
      <MueblesAMedidaHeader />
      <MueblesAMedidaCocina />
      <MueblesAMedidaLiving />
      <MueblesAMedidaBano />
      <SillaGris />
    </main>
  );
};

export default MueblesAMedida;
