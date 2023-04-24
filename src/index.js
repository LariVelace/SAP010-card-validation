import validator from './validator.js';

console.log(validator);

function validarCartao() {
  const numeroCartao = document.getElementById("cartao").value;
  validator.isValid(numeroCartao);
}

document.getElementById("verificarCartao").addEventListener("click", function () {
  return validarCartao();
});