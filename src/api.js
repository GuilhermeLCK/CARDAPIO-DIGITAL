import ColaCola from "./assets/Cocacola.webp";
import Agua from "./assets/Agua mineral.jpg";
import Suco from "./assets/Sucodelaranja.jpg";
import Cafe from "./assets/Cafe.png";
import Energetico from "./assets/Energetico.png";
import Pastel from "./assets/Pastel.webp";
import Coxinha from "./assets/Coxinha.jpg";
import Pao from "./assets/Pao de queijo.jpg";
import Torta from "./assets/Torta.jpg";
import CHEESECAKE from "./assets/CHEESECAKE.jpg";
import Mouse from "./assets/Mouse.jpg";
import BROWNIE from "./assets/BROWNIE.jpg";
import PUDIM from "./assets/PUDIM.jpg";
import Batata from "./assets/Batata.png";

import Sanduiche1 from "./assets/hamb-1.svg";
import Sanduiche2 from "./assets/hamb-2.svg";
import Sanduiche3 from "./assets/hamb-3.svg";
import Sanduiche4 from "./assets/hamb-4.svg";
import Sanduiche5 from "./assets/hamb-5.svg";
import Sanduiche6 from "./assets/hamb-6.svg";
import Sanduiche7 from "./assets/hamb-7.svg";
import Sanduiche8 from "./assets/hamb-8.svg";
const categorias = [
  {
    nome: "SALGADOS",
    banner:
      "https://storage.googleapis.com/prod-cardapio-web/uploads/category/image/58257/7317e938app_esfirras.jfif",
  },
  {
    nome: "BEBIDAS",
    banner:
      "https://storage.googleapis.com/prod-cardapio-web/uploads/category/image/20561/8152f31a350ml.jfif",
  },
  {
    nome: "SOBREMESAS",
    banner:
      "https://storage.googleapis.com/prod-cardapio-web/uploads/category/image/69624/590dfb52shake_capa.jpg",
  },
  {
    nome: "SANDUICHES",
    banner: Sanduiche1,
  },
];
const produtos = [
  {
    id: 1,
    nome: "Coca Cola",
    categoria: "BEBIDAS",
    preco: 5,
    descricao: "Refrigerante de cola.",
    img: ColaCola,
  },
  {
    id: 2,
    nome: "ÁGUA MINERAL",
    categoria: "BEBIDAS",
    preco: 2,
    descricao: "",
    img: Agua,
  },
  {
    id: 3,
    nome: "SUCO DE LARANJA",
    categoria: "BEBIDAS",
    preco: 4,
    descricao: "Suco natural de laranja.",
    img: Suco,
  },
  {
    id: 4,
    nome: "CAFÉ ESPRESSO",
    categoria: "BEBIDAS",
    preco: 3,
    descricao: "Café expresso encorpado.",
    img: Cafe,
  },

  {
    id: 7,
    nome: "H2O ENERGÉTICO",
    categoria: "BEBIDAS",
    preco: 6,
    descricao: "Bebida energética com sabor de frutas.",
    img: Energetico,
  },

  {
    id: 11,
    nome: "PASTEL DE CARNE",
    categoria: "SALGADOS",
    preco: 3,
    descricao: "Pastel recheado com carne moída.",
    img: Pastel,
  },
  {
    id: 12,
    nome: "COXINHA DE FRANGO",
    categoria: "SALGADOS",
    preco: 2,
    descricao: "Salgado frito com recheio de frango.",
    img: Coxinha,
  },

  {
    id: 14,
    nome: "PÃO DE QUEIJO",
    categoria: "SALGADOS",
    preco: 1,
    descricao: "Pão de queijo tradicional mineiro.",
    img: Pao,
  },
  {
    id: 15,
    nome: "TORTA DE FRANGO",
    categoria: "SALGADOS",
    preco: 4,
    descricao: "Torta salgada recheada com frango desfiado.",
    img: Torta,
  },
  {
    id: 16,
    nome: "BATATA FRITA",
    categoria: "SALGADOS",
    preco: 6,
    descricao: "Porção de batata frita crocante.",
    img: Batata,
  },

  {
    id: 22,
    nome: "CHEESECAKE DE MORANGO",
    categoria: "SOBREMESAS",
    preco: 9,
    descricao: "Cheesecake cremoso com cobertura de morango.",
    img: CHEESECAKE,
  },
  {
    id: 23,
    nome: "MOUSSE DE LIMÃO",
    categoria: "SOBREMESAS",
    preco: 6,
    descricao: "Mousse refrescante de limão.",
    img: Mouse,
  },

  {
    id: 25,
    nome: "BROWNIE DE CHOCOLATE",
    categoria: "SOBREMESAS",
    preco: 5,
    descricao: "Brownie de chocolate com nozes.",
    img: BROWNIE,
  },
  {
    id: 26,
    nome: "PUDIM DE LEITE CONDENSADO",
    categoria: "SOBREMESAS",
    preco: 4,
    descricao: "Pudim cremoso de leite condensado.",
    img: PUDIM,
  },

  // Produtos para a categoria "SANDUICHES"
  {
    id: 31,
    nome: "SANDUÍCHE DE FRANGO",
    categoria: "SANDUICHES",
    preco: 8,
    descricao: "Sanduíche de frango grelhado com alface e tomate.",
    img: Sanduiche1,
  },
  {
    id: 32,
    nome: "SANDUÍCHE DE PRESUNTO E QUEIJO",
    categoria: "SANDUICHES",
    preco: 7,
    descricao: "Sanduíche clássico com presunto e queijo.",
    img: Sanduiche2,
  },
  {
    id: 33,
    nome: "SANDUÍCHE DE ATUM",
    categoria: "SANDUICHES",
    preco: 9,
    descricao: "Sanduíche de atum com maionese e alface.",
    img: Sanduiche3,
  },
  {
    id: 34,
    nome: "SANDUÍCHE DE ROSBIFE",
    categoria: "SANDUICHES",
    preco: 10,
    descricao:
      "Sanduíche de rosbife com mostarda dijon e cebolas caramelizadas.",
    img: Sanduiche4,
  },
  {
    id: 35,
    nome: "SANDUÍCHE VEGANO",
    categoria: "SANDUICHES",
    preco: 8,

    descricao: "Sanduíche vegano com hambúrguer de quinoa e legumes grelhados.",
    img: Sanduiche5,
  },
  {
    id: 36,
    nome: "MISTO QUENTE",
    categoria: "SANDUICHES",
    preco: 6,
    descricao: "Sanduíche tradicional com queijo e presunto grelhados.",
    img: Sanduiche6,
  },
  {
    id: 37,
    nome: "SANDUÍCHE DE PEITO DE PERU",
    categoria: "SANDUICHES",
    preco: 7,
    descricao: "Sanduíche com peito de peru defumado, queijo suíço e maionese.",
    img: Sanduiche7,
  },
  {
    id: 38,
    nome: "CLUBE SANDWICH",
    categoria: "SANDUICHES",
    preco: 11,
    descricao: "Sanduíche triplo com frango grelhado, bacon, alface e tomate.",
    img: Sanduiche8,
  },
];

export default { categorias, produtos };
