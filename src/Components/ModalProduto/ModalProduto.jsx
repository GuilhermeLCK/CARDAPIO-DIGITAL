import { React, useState } from "react";
import { FaPlus, FaMinus, FaX } from "react-icons/fa6";
import { toast } from "react-toastify";

import "./ModalProduto.scss";
function CardProdutos({
  produtoModal,
  FecharModalProduto,
  getCartFromLocalStorage,
}) {
  const [count, setCount] = useState(1);
  const [obs, setObs] = useState("");
  const [produtoCardNew, setProdutoCardNew] = useState({ ...produtoModal });

  function handleCountUp() {
    const novoPreco = produtoModal.preco * (count + 1);
    setCount(count + 1);
    setProdutoCardNew({ ...produtoCardNew, preco: novoPreco });
  }

  function handleCountDown() {
    if (count <= 1) {
      return;
    }
    const novoPreco = produtoModal.preco * (count - 1);
    setCount(count - 1);
    setProdutoCardNew({ ...produtoCardNew, preco: novoPreco });
  }

  function addProductToCart() {
    let cart = getCartFromLocalStorage();

    const newProduct = {
      ...produtoCardNew,
      obs: obs,
      quantidade: count,
    };

    let productExists = false;

    cart.forEach((element) => {
      if (element.id == newProduct.id && element.obs == newProduct.obs) {
        element.quantidade += newProduct.quantidade;
        element.preco += newProduct.preco;
        productExists = true;
      }
    });

    if (!productExists) {
      cart.push(newProduct);
    }

    toast.success("Produto adicionado!");

    localStorage.setItem("cart", JSON.stringify(cart));
    FecharModalProduto();
  }

  return (
    <>
      <div className="container-cardprodutos">
        <div className="card-cardprodutos">
          <div className="card-cardprodutos-img">
            <img
              src={
                "https://mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saudável-que-nada-brasileiro-gosta-de-fast-food.jpg"
              }
              alt="Pizza"
            />
          </div>
          <div className="card-cardprodutos-inf">
            <div className="card-cardprodutos-inf-detalhes">
              <h2>Detalhes do produto</h2>
              <button onClick={FecharModalProduto}>
                <FaX size={16} />
              </button>
            </div>
            <div className="card-cardprodutos-inf-descrisao">
              <h1>{produtoModal.nome}</h1>
              <h3>{produtoModal.descricao}</h3>
              <h2>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(produtoModal.preco)}
              </h2>
              <div className="card-cardprodutos-inf-descrisao-count">
                <h3>Alguma observação?</h3>
                {obs.length === 140 ? (
                  <h3 style={{ color: "red" }}>{obs.length}/140</h3>
                ) : (
                  <h3> {obs.length}/140</h3>
                )}
              </div>
              <textarea
                maxLength={140}
                onChange={(e) => {
                  setObs(e.target.value);
                }}
              />
            </div>
            <div className="card-cardprodutos-inf-add">
              <div className="card-cardprodutos-inf-add-cout">
                <button onClick={handleCountDown}>
                  <FaMinus size={14} />
                </button>
                <p>{count}</p>
                <button onClick={handleCountUp}>
                  <FaPlus size={14} />
                </button>
              </div>
              <div
                className="card-cardprodutos-inf-button"
                onClick={addProductToCart}
              >
                <p> ADICIONAR </p>
                <p>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(produtoCardNew.preco)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProdutos;
