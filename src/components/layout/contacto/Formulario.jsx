import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const Formulario2 = () => {
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_y0iny6c",
        "template_3hshnqk",
        form.current,
        "AXrgQFUx11bgv5mE4"
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            text: "Formulario enviado exitosamente",
            confirmButtonText: "Ok",
            confirmButtonColor: "#db0809",
          }).then(() => {
            window.location.reload();
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            text: "Error en la solicitud de envio",
            error,
            confirmButtonText: "Ok",
            confirmButtonColor: "#db0809",
          });
        }
      );
  };

  const { handleSubmit, handleChange, errors, isSubmitting } = useFormik({
    initialValues: {
      user_name: "",
      user_tel: "",
      user_email: "",
      message: "",
    },
    onSubmit: () => {
      sendEmail();
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required("Este campo es obligatorio"),
      user_tel: Yup.number("Debe contener solo numeros")
        .typeError("Debe contener solo números")
        .required("Este campo es obligatorio"),
      user_email: Yup.string()
        .email("Debe contener un email valido")
        .required("Este campo es obligatorio"),
      message: Yup.string()
        .required("Este campo es obligatorio")
        .min(5, "Debe tener al menos 5 caracteres")
        .max(200, "No puede tener más de 200 caracteres"),
    }),
    validateOnChange: false,
  });

  return (
    <form
      className="contactoFormulario"
      onSubmit={handleSubmit}
      method="POST"
      ref={form}
      id="contactForm"
    >
      <TextField
        fullWidth
        label="Nombre"
        name="user_name"
        variant="outlined"
        size="small"
        sx={{ marginBottom: "1rem" }}
        onChange={handleChange}
        error={errors.user_name ? true : false}
        helperText={errors.user_name}
        id="user_name"
      />

      <TextField
        className="TelefonoSm"
        label="Teléfono"
        name="user_tel"
        variant="outlined"
        size="small"
        sx={{ width: "100%", marginBottom: "1rem" }}
        onChange={handleChange}
        error={errors.user_tel ? true : false}
        helperText={errors.user_tel}
        id="user_tel"
      />

      <TextField
        className="MailSm"
        label="Correo Electronico"
        name="user_email"
        variant="outlined"
        size="small"
        sx={{ width: "100%", marginBottom: "1rem" }}
        onChange={handleChange}
        error={errors.user_email ? true : false}
        helperText={errors.user_email}
        id="user_email"
      />

      <TextField
        fullWidth
        label="Mensaje"
        name="message"
        variant="outlined"
        multiline
        rows={4}
        size="small"
        sx={{ marginBottom: "1rem" }}
        onChange={handleChange}
        error={errors.message ? true : false}
        helperText={errors.message}
        id="message"
      />

      <div className="contactoBotonContainer">
        <Button
          className="Boton"
          type="submit"
          variant="contained"
          value="enviar"
          disabled={isSubmitting}
        >
          Enviar Mensaje
        </Button>
      </div>
    </form>
  );
};

export default Formulario2;
