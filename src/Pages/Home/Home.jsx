import React from "react";
import Cardapio from "../../Components/Cardapio/Cardapio";
import CardProdutos from "../../Components/ModalProduto/ModalProduto";
import "./Home.scss";
function Home() {
  return (
    <>
      <div className="container-home">
        <Cardapio />
      </div>
    </>
  );
}

export default Home;
