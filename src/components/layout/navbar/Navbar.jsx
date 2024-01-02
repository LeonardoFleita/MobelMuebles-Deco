import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";
import MobileNavbar from "./MobileNavbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const phoneNumber = "+5491157409643";
  const message = "Hola, quiero información sobre los muebles a medida";
  let width = window.innerWidth;

  return (
    <>
      {width > 1200 ? (
        <nav>
          <div
            style={{
              width: "20rem",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Link className="navbarMenuLink" to="/">
              <img
                alt="logo"
                src="https://res.cloudinary.com/drez01kou/image/upload/v1703792265/mobel-deco/logo/cgnnbcjwnxkvvar9xhvv.png"
              />
            </Link>
          </div>
          <ul className="navbarMenu">
            <li>
              <Link className="navbarMenuLink" to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className="navbarMenuLink" to="/mueblesALaMedida">
                Muebles a la medida
              </Link>
            </li>
            <li>
              <Link className="navbarMenuLink" to="/decoracion">
                Decoración
              </Link>
            </li>
            <li>
              <Link className="navbarMenuLink" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
          <div
            style={{
              width: "20rem",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="contained"
              color="error"
              startIcon={<WhatsAppIcon />}
              size="small"
            >
              <a
                href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`}
              >
                Habla con nosotros
              </a>
            </Button>
          </div>
        </nav>
      ) : (
        <MobileNavbar />
      )}
    </>
  );
};

export default Navbar;
