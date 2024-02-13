// captura os elementos do DOM
const campoPeso = document.getElementById("campo-peso");
const campoDistancia = document.getElementById("campo-distancia");
const botaoCalcular = document.getElementById("botao-calcular");
const pResultado = document.getElementById("p-resultado");

function calculaFrete() {
  // converter campos capturados string p/ number
  const peso = campoPeso.value;
  const distancia = campoDistancia.value;

  // calcular o frete
  const frete = 6 * peso * distancia;

  //mostra no parágrafo
  pResultado.innerHTML = `O valor do frete é R$ ${frete.toFixed(2)}`;
}

botaoCalcular.addEventListener("click", calculaFrete);
