// captura os elementos do DOM
const campoNota1 = document.getElementById("campo-nota1");
const campoNota2 = document.getElementById("campo-nota2");
const campoNota3 = document.getElementById("campo-nota3");
const botaoCalcular = document.getElementById("botao-calcular");
const pResultado = document.getElementById("p-resultado");

function calculaNota() {
  // converter campos capturados string p/ number
  const nota1 = Number(campoNota1.value);
  const nota2 = Number(campoNota2.value);
  const nota3 = Number(campoNota3.value);

  // calcular o média
  const media = (nota1 + nota2 + nota3) / 3;

  //mostra no parágrafo
  pResultado.innerHTML = `A média do Aluno é ${media.toFixed(2)}`;
}

botaoCalcular.addEventListener("click", calculaNota);
