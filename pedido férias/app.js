// Convite | M1S03E5

const colaborador = document.getElementById("nome-colaborador");
const dataInicio = document.getElementById("data-inicio");
const dataFim = document.getElementById("data-fim");
const botaoGerar = document.getElementById("gerar");
const convite = document.getElementById("convite");
const dataAtual = new Date();

function gerarConvite() {
  // console.log("GERAR");

  convite.innerHTML = `
    <hr>
    <p>Caro(a) Responsável,</p>

    <p>
      Gostaria de solicitar minhas férias.<br><br>
    </p>

    <p>Nome do Colaborador: <strong>${colaborador.value}.</strong></p>

    <p>Inicio: <strong>${dataInicio.value}</p></strong>
    <p>Fim: <strong>${dataFim.value}</p></strong>
    <p>Atenciosamente: <strong>${colaborador.value}.</strong></p>
    <p>Pedido gerado em: <strong>${dataAtual}</strong></p>
    <hr>
  `;
}

botaoGerar.addEventListener("click", gerarConvite);
// botaoGerar.addEventListener("click", gerarConvite);
