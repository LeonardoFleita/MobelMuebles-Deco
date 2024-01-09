import React from "react";
import HomeCarousel from "./homeCarousel/HomeCarousel";
import HomeAcercaDe from "./homeAcercaDe/HomeAcercaDe";
import SillaGris from "../../common/sillaGris/SillaGris";
import HomeDudasFrecuentes from "./homeDudasFrecuentes/HomeDudasFrecuentes";
import HomeAsiTrabajamos from "./homeAsiTrabajamos/HomeAsiTrabajamos";

const Home = ({ phoneNumber, message }) => {
  return (
    <main className="homeContainer">
      <HomeCarousel />
      <HomeAcercaDe />
      <HomeAsiTrabajamos />
      <SillaGris phoneNumber={phoneNumber} message={message} />
      <HomeDudasFrecuentes />
    </main>
  );
};

export default Home;
