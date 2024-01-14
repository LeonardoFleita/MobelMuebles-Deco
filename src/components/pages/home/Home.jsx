import React from "react";
import HomeCarousel from "./homeCarousel/HomeCarousel";
import HomeAcercaDe from "./homeAcercaDe/HomeAcercaDe";
import SillaGris from "../../common/sillaGris/SillaGris";
import HomeDudasFrecuentes from "./homeDudasFrecuentes/HomeDudasFrecuentes";
import HomeAsiTrabajamos from "./homeAsiTrabajamos/HomeAsiTrabajamos";
import HomeProveedores from "./homeProveedores/HomeProveedores";
import HomeComentarios from "./homeComentarios/HomeComentarios";
import { WhatsApp } from "@mui/icons-material";
import { Button } from "@mui/material";
import HomeProyectos from "./homeProyectos/HomeProyectos";
import { message, phoneNumber } from "../../common/whatsapp";

const Home = () => {
  let width = window.innerWidth;
  return (
    <main className="homeContainer">
      <HomeCarousel />
      <HomeAcercaDe />
      <HomeAsiTrabajamos />
      <HomeProveedores />
      <HomeProyectos />
      <HomeComentarios />
      <SillaGris phoneNumber={phoneNumber} message={message} />
      <HomeDudasFrecuentes />
      {width < 1200 && (
        <a
          href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`}
          target="_blank"
          style={{
            zIndex: "1",
            bottom: "7rem",
            marginRight: "1.5rem",
            position: "fixed",
            alignSelf: "flex-end",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "25px",
              padding: "0.5rem",
              minWidth: "0",
            }}
          >
            <WhatsApp fontSize="large" />
          </Button>
        </a>
      )}
    </main>
  );
};

export default Home;
