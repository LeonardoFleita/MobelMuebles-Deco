import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  const phoneNumber = "+5491157409643";
  const message = "Hola, quiero información sobre los muebles a medida";

  return (
    <footer>
      <div className="footerMobel">
        <img
          src="https://res.cloudinary.com/drez01kou/image/upload/v1703792265/mobel-deco/logo/cgnnbcjwnxkvvar9xhvv.png"
          alt="logo"
        />
      </div>
      <div className="footerTextoContainer">
        <p className="footerTexto">
          Estamos convencidos de que la belleza, armonía y funcionalidad mejoran
          la calidad de vida de las personas.
        </p>
      </div>
      <div className="footerRedes">
        <a
          href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`}
        >
          <WhatsApp fontSize="large" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100026160046799">
          <Facebook fontSize="large" />
        </a>
        <a href="https://www.instagram.com/mobel_muebles_y_deco/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
          <Instagram fontSize="large" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
