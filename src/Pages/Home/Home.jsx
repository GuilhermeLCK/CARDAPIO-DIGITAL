import React, { useEffect, useState } from "react";
import Cardapio from "../../Components/Cardapio/Cardapio";
import Headers from "../../Components/Headers/Headers";

import "./Home.scss";
function Home() {
  const [aberto, setAberto] = useState(false);
  var dataAtual = new Date();
  var horaAtual = ("0" + dataAtual.getHours()).slice(-2);
  var minutosAtual = ("0" + dataAtual.getMinutes()).slice(-2);
  var horaFormatada = horaAtual + ":" + minutosAtual;

  const horaDate = parseInt(horaFormatada);

  let horaDeAbrir = 12;
  let horaDeEncerrar = 23;

  useEffect(() => {
    if (horaDate >= horaDeAbrir && horaDate <= horaDeEncerrar) {
      setAberto(true);

      localStorage.setItem("Funcionamento", true);
    } else {
      setAberto(false);
      localStorage.setItem("Funcionamento", aberto);
    }
  }, []);

  return (
    <>
      <Headers
        aberto={aberto}
        horaDeAbrir={horaDeAbrir}
        horaDeEncerrar={horaDeEncerrar}
      />
      <div className="container-home">
        <Cardapio aberto={aberto} />
      </div>
    </>
  );
}

export default Home;
