import React, { useState } from "react";
import data from "../../api";
import Pizza from "../../assets/Pizza.jpg";
import { FaArrowLeft } from "react-icons/fa6";
import ModalProduto from "../ModalProduto/ModalProduto";
import ButtonCart from "../ButtonCart/ButtonCart";
import ModalCarinho from "../ModalCarinho/ModalCarinho";

import "./Cardapio.scss";
const Cardapio = ({ aberto }) => {
  const { categorias, produtos } = data;
  const [categoriaSelecionada, setCategoriaSelecionada] = useState([]);
  const [produtoModal, setProdutoModal] = useState([]);
  const [abriModalProduto, setAbrirModalProduto] = useState(false);
  const [abrirModalCarinho, setAbrirModalCarinho] = useState(false);

  function getCartFromLocalStorage() {
    const cartString = localStorage.getItem("cart");
    return cartString ? JSON.parse(cartString) : [];
  }

  const produtosDaCategoria = categoriaSelecionada
    ? produtos.filter((produto) => produto.categoria === categoriaSelecionada)
    : categoriaSelecionada;

  function PassarProdutoModal(prod) {
    setProdutoModal(prod);
    setAbrirModalProduto(true);
    document.body.style.overflow = "hidden";
  }
  function FecharModalProduto() {
    setAbrirModalProduto(false);
    document.body.style.overflow = "";
  }

  function HandleAbrirModalCarrinho() {
    setAbrirModalCarinho(true);
    document.body.style.overflow = "hidden";
  }

  function HandleFecharModalCarrinho() {
    setAbrirModalCarinho(false);
    document.body.style.overflow = "";
  }

  return (
    <>
      {abriModalProduto && (
        <ModalProduto
          produtoModal={produtoModal}
          FecharModalProduto={FecharModalProduto}
          getCartFromLocalStorage={getCartFromLocalStorage}
        />
      )}
      {abrirModalCarinho && (
        <ModalCarinho
          aberto={aberto}
          HandleFecharModalCarrinho={HandleFecharModalCarrinho}
          getCartFromLocalStorage={getCartFromLocalStorage}
        />
      )}

      {abrirModalCarinho || abriModalProduto ? null : (
        <ButtonCart
          getCartFromLocalStorage={getCartFromLocalStorage}
          HandleAbrirModalCarrinho={HandleAbrirModalCarrinho}
        />
      )}

      <div className="container-select">
        <span
          onClick={() => {
            setCategoriaSelecionada([]);
          }}
        >
          <FaArrowLeft />
        </span>
        <select
          name="categorias"
          id="categorias"
          onChange={(e) => setCategoriaSelecionada(e.target.value)}
          value={categoriaSelecionada}
        >
          {!categoriaSelecionada.length ? (
            <option value="" disabled selected hidden>
              Selecione uma categoria...
            </option>
          ) : null}

          {categorias.map((categoria, index) => (
            <option key={index} value={categoria.nome}>
              {categoria.nome}
            </option>
          ))}
        </select>
      </div>

      {!produtosDaCategoria.length ? (
        <div className="container-categoria">
          <h1>Categorias</h1>
          <div className="container-categoria-cards">
            {categorias.map((categoria, index) => (
              <div
                className="categoria-cards"
                key={index}
                onClick={() => setCategoriaSelecionada(categoria.nome)}
              >
                <img src={categoria.banner} alt="Banner Categoria" />
                <h2> {categoria.nome} </h2>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container-produtos">
          <h1>{categoriaSelecionada}</h1>

          <div className="container-produtos-cards">
            {produtosDaCategoria.map((produto) => (
              <div
                className="produtos-cards"
                key={produto.id}
                onClick={() => {
                  PassarProdutoModal(produto);
                }}
              >
                <div className="produtos-cards-inf">
                  <h1>{produto.nome.toLocaleUpperCase()}</h1>
                  <h3>{produto.descricao}</h3>
                  <span>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(produto.preco)}
                  </span>
                </div>
                <div className="produtos-cards-img">
                  <img src={produto.img} alt="Img do produto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Cardapio;
