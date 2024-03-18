import { React, useEffect, useState } from "react";
import { FaX, FaCartShopping } from "react-icons/fa6";
import Pizza from "../../assets/Pizza.jpg";
import { toast } from "react-toastify";

import "./ModalCarinho.scss";

function ModalCarinho({
  getCartFromLocalStorage,
  HandleFecharModalCarrinho,
  aberto,
}) {
  const produtosLocal = getCartFromLocalStorage();

  const [produtosCarrinho, setProdutosCarrinho] = useState([...produtosLocal]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    CalcularTotal();
    getCartFromLocalStorage();
  }, []);

  function CalcularTotal() {
    let contador = 0;
    produtosCarrinho.forEach((element) => {
      contador += element.preco;
      setTotal(contador);
    });
  }

  function DeletarProdutoDoCarinho(produto) {
    const cart = produtosCarrinho.filter(
      (element) => element.id !== produto.id
    );

    let contador = 0;
    cart.forEach((element) => {
      contador += element.preco;
      setTotal(contador);
    });
    getCartFromLocalStorage();
    setProdutosCarrinho(cart);
    localStorage.setItem("cart", JSON.stringify(cart));

    if (cart.length < +1) {
      HandleFecharModalCarrinho();
    }

    toast.success("Produto excluido!");
  }

  function LimparProdutoDoCarinho(prodto) {
    getCartFromLocalStorage();
    setProdutosCarrinho("");
    localStorage.setItem("cart", "");
    HandleFecharModalCarrinho();
    toast.success("Carrinho limpo!");
  }

  console.log(aberto);
  return (
    <>
      <div className="container-modalCarinho">
        <div className="card-modalCarinho">
          <div className="card-modalCarinho-close">
            <h1>PEDI MAIS IZZYWAY </h1>
            <button onClick={HandleFecharModalCarrinho}>
              <FaX size={16} />
            </button>
          </div>
          <div className="card-modalCarinho-pedido">
            <div className="card-modalCarinho-pedido-sacola">
              <h2>Sua sacola</h2>{" "}
              <button onClick={LimparProdutoDoCarinho}>LIMPAR</button>
            </div>
            {produtosCarrinho.length ? (
              produtosCarrinho.map((produto, index) => {
                return (
                  <div
                    key={index}
                    className="card-modalCarinho-pedido-produtos"
                  >
                    <div className="card-modalCarinho-pedido-inf">
                      <p>
                        {produto.quantidade}x{" "}
                        <span className="span-inf">{produto.nome}</span>
                      </p>

                      <span>{produto.obs}</span>
                      <button
                        onClick={() => {
                          DeletarProdutoDoCarinho(produto);
                        }}
                      >
                        Remover
                      </button>
                    </div>

                    <div className="card-modalCarinho-pedido-precos">
                      <p>
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(produto.preco)}
                      </p>
                      <img src={produto.img} alt="Imagem do produto" />
                    </div>
                  </div>
                );
              })
            ) : (
              <h1 className="FaCartShopping">
                Sacola vazia
                <FaCartShopping />
                <a href="/">Adicionar item</a>
              </h1>
            )}
          </div>
          <div className="card-modalCarinho-subtotal">
            <p>Subtotal</p>
            <p>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(total)}
            </p>
          </div>

          <div className="card-modalCarinho-entrega">
            <p>Taxa de entrega</p>
            <p>A definir</p>
          </div>
          <div className="card-modalCarinho-total">
            <h2>Total</h2>
            <h2>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(total)}
            </h2>
          </div>
          <button
            className={`btn-fecharPedido ${
              produtosCarrinho.length === 0 || !aberto ? "disabled" : ""
            }`}
            disabled={produtosCarrinho.length === 0 || !aberto}
          >
            {aberto ? "FECHAR PEDIDO" : "ESTABELECIMENTO FECHADO"}
          </button>
        </div>
      </div>
    </>
  );
}

export default ModalCarinho;
