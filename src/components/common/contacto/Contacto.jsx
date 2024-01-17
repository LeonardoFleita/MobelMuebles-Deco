import React from "react";
import { Facebook, Instagram, LocalPhoneSharp, Place, WhatsApp } from "@mui/icons-material";
import { phoneNumber, message } from "../../common/whatsapp";
import { Button, TextField, Typography } from "@mui/material";
import Iframe from 'react-iframe';
import { useState } from "react";

const Contacto = () => {

  const inicialState = {
    Nombre: '',
    Telefono: '',
    Email: '',
    Mensaje: ''
  };

  const resetForm = () => {
    setFormData({
      Nombre: '',
      Telefono: '',
      Email: '',
      Mensaje: ''
    });
  };

  const [formData, setFormData] = useState(inicialState);
  const [error, setError] = useState('');
  

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
 

  const handleSubmit = async (e) => {

    setError(' ');
    e.preventDefault();

    if (formData.Nombre.trim() === '' || formData.Telefono.trim() === '' || formData.Email.trim() === '' || formData.Mensaje.trim() === '') {
      setError('Por favor, completa todos los campos.');
      return;
    }

    setError('');

    try {
      const response = await fetch('https://formsubmit.co/yourmail@mail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Formulario enviado exitosamente');
      setError('Formulario enviado exitosamente');
      resetForm();
    } else {
      console.error('Error al enviar el formulario');
      setError('Error al enviar el formulario. Inténtalo de nuevo.');
    }
  } catch (error) {
    console.error('Error en la solicitud de envío:', error);
    setError('Error en la solicitud de envío. Inténtalo de nuevo.');
  }
  

  }


  return (
    <main>
      <section className="Contacto">
      <h2 className="primrayTitle">Contactános</h2>
        <div className="contactoDatos">
          
          <h2 className="primrayTitle">Contactános</h2>

          <div className="Datos">
          <div className="Icono">
          <Place fontSize="medium" style={{ color: "white" }}/>
          </div>
          <p> Prudencio Bustos 286 - Alta <br /> Gracia - Cba - CP5186</p>
          </div>       
          <div className="Datos">
          <div className="Icono">
          <LocalPhoneSharp fontSize="medium" style={{ color: "white" }} />
          </div>
          <p> 3547460196 </p>
          </div>

          <div className="contactoRedes">
          <a
            href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`}
          >
            <WhatsApp fontSize="large" sx={{ margin: "1rem"}} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100026160046799">
            <Facebook fontSize="large" sx={{ margin: "1rem"}}/>
          </a>
          <a href="https://www.instagram.com/mobel_muebles_y_deco/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
            <Instagram fontSize="large" sx={{ margin: "1rem"}} />
          </a>
          </div>      
        </div>

        <form className="Formulario" method="POST" action="https://formsubmit.co/yourmail@mail.com" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            id="Name"
            label="Nombre"
            name="Nombre"
            variant="outlined"
            defaultValue={""}
            sx={{ marginBottom: "1rem" }}
            onChange={handleInputChange}
            
          />
          <div className="ContactFields" sx={{ display: "flex", width: "100%" }}>
            <TextField className="TelefonoSm"
              id="phone"
              label="Telefono"
              type="number"
              name="Telefono"
              variant="outlined"
              sx={{ width: "100%", marginBottom: "1rem" }}
              onChange={handleInputChange}
              
            />
            <TextField className="MailSm"
              id="email"
              label="Correo Electronico"
              type="email"
              name="Email"
              variant="outlined"
              sx={{ width: "100%" }}
              onChange={handleInputChange}
              
            />
          </div>
          <TextField
            fullWidth
            id="message"
            label="Mensaje"
            name="Mensaje"
            variant="outlined"
            multiline
            rows={2}
            sx={{ marginBottom: "1rem" }}
            onChange={handleInputChange}
            
          />
          <div className="botonMensaje">
            <Button className="Boton" type="submit" variant="contained" value="enviar" sx={{ width: "100%", textTransform: "none" }}>
              Enviar Mensaje
            </Button>
            {error && (
            <Typography variant="body2" color="error" sx={{ paddingLeft: '1rem' }}>
              {error}
            </Typography>
            )}
          </div>
          
        </form>
              
      </section>
    <div>
    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212.26374728014505!2d-64.42854997049814!3d-31.65520149828339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d574a60d2c6a3%3A0x92bec30a84d4d904!2sM%C3%B8bel%20Muebles%2Bdeco!5e0!3m2!1ses!2sar!4v1705166055570!5m2!1ses!2sar" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></Iframe>
    </div>
    </main>
  );
  
  
 
};

export default Contacto;
