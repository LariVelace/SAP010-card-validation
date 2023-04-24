import validator from './validator.js';

console.log(validator);

function validarCartao() {
  const numeroCartao = document.getElementById("cartao").value;
  const cartaoValido = validator.isValid(numeroCartao);
  if (cartaoValido) {
    var bandeira = validator.getBandeira(numeroCartao)
    alert("Seu cartão é valido,sua bandeira é "+bandeira);
    return;
  }
  alert("Seu cartão não é valido");
  return;
}

document.getElementById("verificarCartao").addEventListener("click", function () {
  return validarCartao();
});