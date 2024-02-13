// captura os elementos do DOM
const campoSalario = document.getElementById("campo-salario");
const botaoCalcular = document.getElementById("botao-calcular");
const pResultado = document.getElementById("p-resultado");
const pResultadoAnual = document.getElementById("p-resultado-anual");

function calculaFgts() {
  // converter campos capturados string p/ number
  const salario = Number(campoSalario.value);

  // calcular o média
  const fgts = salario * 0.08;
  const fgtsAnual = fgts * 12;

  //mostra no parágrafo
  pResultado.innerHTML = `FGTS mensal - ${fgts.toFixed(2)}`;
  pResultadoAnual.innerHTML = `FGTS anual - ${fgtsAnual.toFixed(2)}`;
}

botaoCalcular.addEventListener("click", calculaFgts);
