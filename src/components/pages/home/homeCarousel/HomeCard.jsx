import { Button } from "@mui/material";
import React from "react";

const HomeCard = ({ title, text, button }) => {
  let width = window.innerWidth;

  return (
    <div className="homeCard">
      <h3 className="homeCardTitle">{title}</h3>
      <p className="homeCardText">{text}</p>
      <Button variant="contained" color="error" size="small">
        {button}
      </Button>
    </div>
  );
};

export default HomeCard;
