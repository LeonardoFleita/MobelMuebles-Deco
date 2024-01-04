import React from "react";
import HomeCarousel from "./homeCarousel/HomeCarousel";
import HomeAcercaDe from "./homeAcercaDe/HomeAcercaDe";
import SillaGris from "../../common/sillaGris/SillaGris";

const Home = ({ phoneNumber, message }) => {
  return (
    <main className="homeContainer">
      <HomeCarousel />
      <HomeAcercaDe />
      <SillaGris phoneNumber={phoneNumber} message={message} />
    </main>
  );
};

export default Home;
