import React from "react";
import "./ButtonCart.scss";
import { FaCartShopping } from "react-icons/fa6";

function ButtonCart({ getCartFromLocalStorage, HandleAbrirModalCarrinho }) {
  const cartAtual = getCartFromLocalStorage();
  return (
    <>
      <button className="button-buttonCart" onClick={HandleAbrirModalCarrinho}>
        <FaCartShopping size={22} />
        {cartAtual.length}
        <span>Ver sacola</span>
      </button>
    </>
  );
}

export default ButtonCart;
