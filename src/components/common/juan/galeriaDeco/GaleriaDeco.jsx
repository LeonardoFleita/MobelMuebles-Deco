import React from "react";
import { WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { phoneNumber, message } from "../../../common/whatsapp";


const GaleriaDecoracion = () => {
    return (
      <article className="GaleriaDecoContainer">
       <div className="GaleriaProduct">
       <img src="https://res.cloudinary.com/dpcs014wq/image/upload/v1705099161/Lamparas_nnsxql.png" />
       <img src="https://res.cloudinary.com/dpcs014wq/image/upload/v1705099161/Espejos_ltzlrv.png" />
       <img src="https://res.cloudinary.com/dpcs014wq/image/upload/v1705099161/Objetos_s19rf0.png" />
       </div>
        <p className="TextoGaleria">
            Transforma tu espacio con detalles que cuentan historias. Descubre nuestra colección de elementos decorativos,  <br />
            donde cada pieza es una expresion de estilo y personalidad. Encuentra la chispa que tu hogar necesita.
        </p>
        <p className="TextoGaleriaSm">
            Transforma tu espacio con detalles que cuentan historias. Descubre nuestra colección de elementos decorativos, 
            donde cada pieza es una expresion de estilo y personalidad. Encuentra la chispa que tu hogar necesita.
        </p>
        <section className="GaleriaDeco">
            <img className="ImagenGaleriaDeco" src="https://res.cloudinary.com/dpcs014wq/image/upload/v1704673959/Decoraci%C3%B3n_2_vibexe.jpg" />
            <img className="ImagenGaleriaDeco" src="https://res.cloudinary.com/dpcs014wq/image/upload/v1704673958/Decoraci%C3%B3n_3_z6bbs1.jpg" />
            <img className="ImagenGaleriaDeco" src="https://res.cloudinary.com/dpcs014wq/image/upload/v1705459590/Decoraci%C3%B3n_1_w3udah.jpg" />
            <img className="ImagenGaleriaDeco" src="https://res.cloudinary.com/dpcs014wq/image/upload/v1704673959/Decoraci%C3%B3n_6_e4a4gn.jpg" />
            <img className="ImagenGaleriaDeco" src="https://res.cloudinary.com/dpcs014wq/image/upload/v1705459590/Decoraci%C3%B3n_13_o4dnhk.jpg" />
            <img className="ImagenGaleriaDeco" src="https://res.cloudinary.com/dpcs014wq/image/upload/v1704673959/Decoraci%C3%B3n_5_kavteu.jpg" />
            <img className="ImagenGaleriaDeco" src="https://res.cloudinary.com/dpcs014wq/image/upload/v1704673958/Decoraci%C3%B3n_4_okckqd.jpg" />
            <img className="ImagenGaleriaDeco" src="https://res.cloudinary.com/dpcs014wq/image/upload/v1704673959/Decoraci%C3%B3n_7_xw1yco.jpg" />
            <img className="ImagenGaleriaDeco" src="https://res.cloudinary.com/dpcs014wq/image/upload/v1705459590/Decoraci%C3%B3n_12_ta5tiy.jpg" />
            <img className="ImagenGaleriaDeco" src="https://res.cloudinary.com/dpcs014wq/image/upload/v1704673959/Decoraci%C3%B3n_10_kpwfrw.jpg" />
            <img className="ImagenGaleriaDeco" src="https://res.cloudinary.com/dpcs014wq/image/upload/v1704673959/Decoraci%C3%B3n_8_eoc0rz.jpg" />
            <img className="ImagenGaleriaDeco" src="https://res.cloudinary.com/dpcs014wq/image/upload/v1705459590/Decoraci%C3%B3n_14_actmas.jpg" />
        </section>
        
        <div className="ContactoDeco">
        <IconButton
            color="secondary"
            href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`}
            target="_blank"
        >
        <WhatsApp />
        <p>Consulta disponibilidad</p>
        </IconButton>
        </div>

        
        
      </article>
    );
};

export default GaleriaDecoracion;