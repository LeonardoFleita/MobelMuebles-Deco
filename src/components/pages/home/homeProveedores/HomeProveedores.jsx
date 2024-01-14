import React from "react";

const HomeProveedores = () => {
  return (
    <article className="homeProovedores">
      <header>
        <h2 className="secondaryTitle">Nuestros proovedores</h2>
      </header>
      <section className="homeProovedoresImgContainer">
        <img
          src="https://res.cloudinary.com/drez01kou/image/upload/v1704923907/mobel-deco/proovedores/smal2vlo493ffgoljbkc.png"
          alt="nuestros proovedores"
          className="homeProovedoresImgSm"
        />
        <img
          src="https://res.cloudinary.com/drez01kou/image/upload/v1704923911/mobel-deco/proovedores/v9ybckbopxpumwvjdxb5.png"
          alt="nuestros proovedores"
          className="homeProovedoresImgMd"
        />
      </section>
    </article>
  );
};

export default HomeProveedores;
