import React from "react";
import HomeCarousel from "./homeCarousel/HomeCarousel";
import HomeAcercaDe from "./homeAcercaDe/HomeAcercaDe";
import SillaGris from "../../common/sillaGris/SillaGris";
import HomeDudasFrecuentes from "./homeDudasFrecuentes/HomeDudasFrecuentes";

const Home = ({ phoneNumber, message }) => {
  return (
    <main className="homeContainer">
      <HomeCarousel />
      <HomeAcercaDe />
      <SillaGris phoneNumber={phoneNumber} message={message} />
      <HomeDudasFrecuentes />
    </main>
  );
};

export default Home;
