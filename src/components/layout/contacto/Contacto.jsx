import React from "react";
import {
  Facebook,
  Instagram,
  LocalPhoneSharp,
  Place,
  WhatsApp,
} from "@mui/icons-material";
import { phoneNumber, message } from "../../common/whatsapp";
import { Button, TextField, Typography } from "@mui/material";

import { useState } from "react";

const Contacto = () => {
  const inicialState = {
    Nombre: "",
    Telefono: "",
    Email: "",
    Mensaje: "",
  };

  const resetForm = () => {
    setFormData({
      Nombre: "",
      Telefono: "",
      Email: "",
      Mensaje: "",
    });
  };

  const [formData, setFormData] = useState(inicialState);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    setError(" ");
    e.preventDefault();

    if (
      formData.Nombre.trim() === "" ||
      formData.Telefono.trim() === "" ||
      formData.Email.trim() === "" ||
      formData.Mensaje.trim() === ""
    ) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    setError("");

    try {
      const response = await fetch("https://formsubmit.co/yourmail@mail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Formulario enviado exitosamente");
        setError("Formulario enviado exitosamente");
        resetForm();
      } else {
        console.error("Error al enviar el formulario");
        setError("Error al enviar el formulario. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error en la solicitud de envío:", error);
      setError("Error en la solicitud de envío. Inténtalo de nuevo.");
    }
  };

  return (
    <article className="contacto" id="contacto">
      <header>
        <h2 className="secondaryTitle">Contactános</h2>
      </header>

      <section className="contactoInfo">
        <div className="contactoInfoData">
          <Place
            fontSize="large"
            color="white"
            sx={{
              backgroundColor: "#db0809",
              borderRadius: "25px",
              padding: "0.2rem",
            }}
          />
          <p>Prudencio Bustos 286 - Alta Gracia - Cba - CP5186</p>
        </div>
        <div className="contactoInfoData">
          <LocalPhoneSharp
            fontSize="large"
            color="white"
            sx={{
              backgroundColor: "#db0809",
              borderRadius: "25px",
              padding: "0.2rem",
            }}
          />
          <p> +54-9-3547-460196 </p>
        </div>
        <div className="contactoInfoRedes">
          <a
            href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`}
            target="_blank"
          >
            <WhatsApp fontSize="large" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100026160046799"
            target="_blank"
          >
            <Facebook fontSize="large" />
          </a>
          <a
            href="https://www.instagram.com/mobel_muebles_y_deco/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
            target="_blank"
          >
            <Instagram fontSize="large" />
          </a>
        </div>
      </section>

      <section className="contactoFormularioContainer">
        <form
          className="contactoFormulario"
          method="POST"
          action="https://formsubmit.co/yourmail@mail.com"
          onSubmit={handleSubmit}
          noValidate
        >
          <TextField
            fullWidth
            id="Name"
            label="Nombre"
            name="Nombre"
            variant="outlined"
            defaultValue={""}
            size="small"
            sx={{ marginBottom: "1rem" }}
            onChange={handleInputChange}
          />

          <TextField
            className="TelefonoSm"
            id="phone"
            label="Telefono"
            type="number"
            name="Telefono"
            variant="outlined"
            size="small"
            sx={{ width: "100%", marginBottom: "1rem" }}
            onChange={handleInputChange}
          />
          <TextField
            className="MailSm"
            id="email"
            label="Correo Electronico"
            type="email"
            name="Email"
            variant="outlined"
            size="small"
            sx={{ width: "100%", marginBottom: "1rem" }}
            onChange={handleInputChange}
          />

          <TextField
            fullWidth
            id="message"
            label="Mensaje"
            name="Mensaje"
            variant="outlined"
            multiline
            rows={4}
            size="small"
            sx={{ marginBottom: "1rem" }}
            onChange={handleInputChange}
          />
          <div className="contactoBotonContainer">
            <Button
              className="Boton"
              type="submit"
              variant="contained"
              value="enviar"
            >
              Enviar Mensaje
            </Button>
            {error && (
              <Typography
                variant="body2"
                color="error"
                sx={{ paddingLeft: "1rem" }}
              >
                {error}
              </Typography>
            )}
          </div>
        </form>
      </section>
    </article>
  );
};

export default Contacto;
