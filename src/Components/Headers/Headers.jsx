import React from "react";
import Logo from "../../assets/Logo.webp";
import "./Headers.scss";

function Headers({ aberto, horaDeAbrir, horaDeEncerrar }) {
  return (
    <div className="container-headers">
      <div className="container-headers-inf">
        <img src={Logo} alt="Logo" />

        <h1>PEDI MAIS IZZYWAY</h1>

        <h2> R. Caetano Ximenes Aragão, 665 - Luciano Cavalcante,</h2>

        <span>
          Seg á Dom - {horaDeAbrir}:00 as {horaDeEncerrar}:00{" "}
        </span>
      </div>
    </div>
  );
}

export default Headers;
