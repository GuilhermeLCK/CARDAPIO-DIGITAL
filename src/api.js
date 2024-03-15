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
    banner:
      "https://storage.googleapis.com/prod-cardapio-web/uploads/category/image/66284/cfed1de5100882531_550495578826829_6925283926101458944_o.jpg",
  },
];
const produtos = [
  // Produtos para a categoria "BEBIDAS"
  {
    id: 1,
    nome: "Coca Cola",
    categoria: "BEBIDAS",
    preco: 5,
    descricao: "Refrigerante de cola.",
  },
  {
    id: 2,
    nome: "ÁGUA MINERAL",
    categoria: "BEBIDAS",
    preco: 2,
    descricao: "",
  },
  {
    id: 3,
    nome: "SUCO DE LARANJA",
    categoria: "BEBIDAS",
    preco: 4,
    descricao: "Suco natural de laranja.",
  },
  {
    id: 4,
    nome: "CAFÉ ESPRESSO",
    categoria: "BEBIDAS",
    preco: 3,
    descricao: "Café expresso encorpado.",
  },
  {
    id: 5,
    nome: "CHÁ DE CAMOMILA",
    categoria: "BEBIDAS",
    preco: 3,
    descricao: "Chá calmante de camomila.",
  },
  {
    id: 6,
    nome: "REFRIGERANTE DE LIMÃO",
    categoria: "BEBIDAS",
    preco: 5,
    descricao: "Refrigerante de limão refrescante.",
  },
  {
    id: 7,
    nome: "H2O ENERGÉTICO",
    categoria: "BEBIDAS",
    preco: 6,
    descricao: "Bebida energética com sabor de frutas.",
  },
  {
    id: 8,
    nome: "VODKA ABSOLUT",
    categoria: "BEBIDAS",
    preco: 39,
    descricao: "Vodka premium sueca.",
  },
  {
    id: 9,
    nome: "WHISKY JACK DANIEL'S",
    categoria: "BEBIDAS",
    preco: 49,
    descricao: "Whisky bourbon americano.",
  },
  {
    id: 10,
    nome: "VINHO TINTO MERLOT",
    categoria: "BEBIDAS",
    preco: 29,
    descricao: "Vinho tinto frutado com notas de cereja.",
  },

  // Produtos para a categoria "SALGADOS"
  {
    id: 11,
    nome: "PASTEL DE CARNE",
    categoria: "SALGADOS",
    preco: 3,
    descricao: "Pastel recheado com carne moída.",
  },
  {
    id: 12,
    nome: "COXINHA DE FRANGO",
    categoria: "SALGADOS",
    preco: 2,
    descricao: "Salgado frito com recheio de frango.",
  },
  {
    id: 13,
    nome: "EMPADA DE PALMITO",
    categoria: "SALGADOS",
    preco: 3,
    descricao: "Empada com recheio de palmito.",
  },
  {
    id: 14,
    nome: "PÃO DE QUEIJO",
    categoria: "SALGADOS",
    preco: 1,
    descricao: "Pão de queijo tradicional mineiro.",
  },
  {
    id: 15,
    nome: "TORTA DE FRANGO",
    categoria: "SALGADOS",
    preco: 4,
    descricao: "Torta salgada recheada com frango desfiado.",
  },
  {
    id: 16,
    nome: "BATATA FRITA",
    categoria: "SALGADOS",
    preco: 6,
    descricao: "Porção de batata frita crocante.",
  },
  {
    id: 17,
    nome: "ESFIHA DE CARNE",
    categoria: "SALGADOS",
    preco: 2,
    descricao: "Esfiha aberta com recheio de carne temperada.",
  },
  {
    id: 18,
    nome: "PASTEL DE QUEIJO",
    categoria: "SALGADOS",
    preco: 3,
    descricao: "Pastel recheado com queijo cremoso.",
  },
  {
    id: 19,
    nome: "COXINHA DE CAMARÃO",
    categoria: "SALGADOS",
    preco: 4,
    descricao: "Coxinha de camarão com massa crocante.",
  },
  {
    id: 20,
    nome: "CROISSANT DE PRESUNTO E QUEIJO",
    categoria: "SALGADOS",
    preco: 3,
    descricao: "Croissant recheado com presunto e queijo.",
  },

  // Produtos para a categoria "SOBREMESAS"
  {
    id: 21,
    nome: "SORVETE DE CHOCOLATE",
    categoria: "SOBREMESAS",
    preco: 7,
    descricao: "Sorvete de chocolate cremoso.",
  },
  {
    id: 22,
    nome: "CHEESECAKE DE MORANGO",
    categoria: "SOBREMESAS",
    preco: 9,
    descricao: "Cheesecake cremoso com cobertura de morango.",
  },
  {
    id: 23,
    nome: "MOUSSE DE LIMÃO",
    categoria: "SOBREMESAS",
    preco: 6,
    descricao: "Mousse refrescante de limão.",
  },
  {
    id: 24,
    nome: "TORTA DE MAÇÃ",
    categoria: "SOBREMESAS",
    preco: 8,
    descricao: "Torta de maçã com canela.",
  },
  {
    id: 25,
    nome: "BROWNIE DE CHOCOLATE",
    categoria: "SOBREMESAS",
    preco: 5,
    descricao: "Brownie de chocolate com nozes.",
  },
  {
    id: 26,
    nome: "PUDIM DE LEITE CONDENSADO",
    categoria: "SOBREMESAS",
    preco: 4,
    descricao: "Pudim cremoso de leite condensado.",
  },
  {
    id: 27,
    nome: "TORTA DE LIMÃO",
    categoria: "SOBREMESAS",
    preco: 6,
    descricao: "Torta de limão com merengue.",
  },
  {
    id: 28,
    nome: "CREME BRÛLÉE",
    categoria: "SOBREMESAS",
    preco: 10,
    descricao: "Creme custard com cobertura de açúcar caramelizado.",
  },
  {
    id: 29,
    nome: "BANANA SPLIT",
    categoria: "SOBREMESAS",
    preco: 8,
    descricao: "Sobremesa gelada com banana, sorvete e calda de chocolate.",
  },
  {
    id: 30,
    nome: "TIRAMISÙ",
    categoria: "SOBREMESAS",
    preco: 9,
    descricao: "Sobremesa italiana com camadas de café e mascarpone.",
  },

  // Produtos para a categoria "SANDUICHES"
  {
    id: 31,
    nome: "SANDUÍCHE DE FRANGO",
    categoria: "SANDUICHES",
    preco: 8,
    descricao: "Sanduíche de frango grelhado com alface e tomate.",
  },
  {
    id: 32,
    nome: "SANDUÍCHE DE PRESUNTO E QUEIJO",
    categoria: "SANDUICHES",
    preco: 7,
    descricao: "Sanduíche clássico com presunto e queijo.",
  },
  {
    id: 33,
    nome: "SANDUÍCHE DE ATUM",
    categoria: "SANDUICHES",
    preco: 9,
    descricao: "Sanduíche de atum com maionese e alface.",
  },
  {
    id: 34,
    nome: "SANDUÍCHE DE ROSBIFE",
    categoria: "SANDUICHES",
    preco: 10,
    descricao:
      "Sanduíche de rosbife com mostarda dijon e cebolas caramelizadas.",
  },
  {
    id: 35,
    nome: "SANDUÍCHE VEGANO",
    categoria: "SANDUICHES",
    preco: 8,
    descricao: "Sanduíche vegano com hambúrguer de quinoa e legumes grelhados.",
  },
  {
    id: 36,
    nome: "MISTO QUENTE",
    categoria: "SANDUICHES",
    preco: 6,
    descricao: "Sanduíche tradicional com queijo e presunto grelhados.",
  },
  {
    id: 37,
    nome: "SANDUÍCHE DE PEITO DE PERU",
    categoria: "SANDUICHES",
    preco: 7,
    descricao: "Sanduíche com peito de peru defumado, queijo suíço e maionese.",
  },
  {
    id: 38,
    nome: "CLUBE SANDWICH",
    categoria: "SANDUICHES",
    preco: 11,
    descricao: "Sanduíche triplo com frango grelhado, bacon, alface e tomate.",
  },
  {
    id: 39,
    nome: "SANDUÍCHE DE BIFE",
    categoria: "SANDUICHES",
    preco: 12,
    descricao:
      "Sanduíche de bife de filé mignon com queijo cheddar e cogumelos.",
  },
  {
    id: 40,
    nome: "SANDUÍCHE DE PEITO DE FRANGO GRELHADO",
    categoria: "SANDUICHES",
    preco: 9,
    descricao: "Sanduíche de peito de frango grelhado com abacate e rúcula.",
  },
];

console.log(produtos);

export default { categorias, produtos };
