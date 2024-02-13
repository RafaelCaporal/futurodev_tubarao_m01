// captura os elementos do DOM
const campoCodigo = document.getElementById("codigo-prod");
const campoQuantidade = document.getElementById("quantidade");
const botaoPedir = document.getElementById("pedir");
const pValor = document.getElementById("valor-pedido");

function calcularPedido() {
  // converter campos capturados string p/ number
  const codigo = campoCodigo.value;
  const quantidade = Number(campoQuantidade.value);
  let preco = 0;
  let nome = "";

  // Solução com SWITCH
  switch (codigo) {
    case "1123":
      nome = "Hambúrguer";
      preco = 12;
      break;

    case "3423":
      nome = "Sanduíche de pernil";
      preco = 9;
      break;

    case "4521":
      nome = "Bauru";
      preco = 15;
      break;

    case "5322":
      nome = "Sanduíche de mortadela";
      preco = 34.99;
      break;

    //default: nada pra fazer
  }

  const valor = preco * quantidade;

  //mostra no parágrafo
  pValor.innerHTML = `${quantidade} ${nome} custam R$ ${valor.toFixed(2)}`;
}

botaoPedir.addEventListener("click", calcularPedido);
