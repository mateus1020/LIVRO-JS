const resp1 = document.querySelector("h2");

function clicar() {
  const nome = inNome.value;
  const masc = inMasculino.checked;
  const alt = Number(inAltura.value);

  let peso; // PODE USAR LET PQ ELE VAI MUDAR SEU VALOR DPS

  if (masc) {
    peso = 22 * Math.pow(alt, 2);
  } else {
    peso = 21 * Math.pow(alt, 2);
  }
  resp1.innerHTML = `${nome} : Seu peso ideal é ${peso.toFixed(3)}`;
}
// OUTRA FORMA DE FAZER A MESMA COISA
/* if (masc) {
    const peso = 22 * Math.pow(alt, 2);
    resp1.innerHTML = `${nome} : Seu peso ideal é ${peso.toFixed(3)}`;
  } else {
    const peso = 21 * Math.pow(alt, 2);
    resp1.innerHTML = `${nome} : Seu peso ideal é ${peso.toFixed(3)}`;
  } */
