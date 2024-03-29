// Convite | M1S03E5

const convidada = document.getElementById("nome-convidada");
const casal1 = document.getElementById("nome-casal-1");
const casal2 = document.getElementById("nome-casal-2");
const data = document.getElementById("data");
const hora = document.getElementById("hora");
const botaoGerar = document.getElementById("gerar");
const convite = document.getElementById("convite");

function gerarConvite() {
  console.log("GERAR");

  convite.innerHTML = `
    <hr />
    <h2><i> Caro(a) ${convidada.value}!</i></h2>

    <p>
      Você está convidado(a) para o casamento de ${casal1.value} e ${casal2.value}, a ser
      realizado<br />
      no dia ${data.value}, às ${hora.value} horas.
    </p>

    <p>Contamos com a sua presença!</p>

    <p>
      Atenciosamente, <br />
      os(as) noivos(as)
    </p>
    <hr />
  `;
}

botaoGerar.addEventListener("click", gerarConvite);
