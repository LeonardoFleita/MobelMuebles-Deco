import React from "react";
import HomeCarousel from "./homeCarousel/HomeCarousel";
import HomeAcercaDe from "./homeAcercaDe/HomeAcercaDe";

const Home = () => {
  return (
    <main className="homeContainer">
      <HomeCarousel />
      <HomeAcercaDe />
    </main>
  );
};

export default Home;
