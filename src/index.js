import validator from './validator.js';

console.log(validator);

function validarCartao() {
    var numeroCartao = document.getElementById("cartao").value;
    alert(numeroCartao);
}

document.getElementById("verificarCartao").addEventListener("click", function () {
    return validarCartao();
});