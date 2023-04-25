import validator from './validator.js';

console.log(validator);

//cria a função de validar o cartão
function validarCartao() {
  //cria a constante numero cartão,pega o número do cartão e seu valor
  const numeroCartao = document.getElementById("cartao").value;
  if (!numeroCartao){
    alert ("Favor digite o número do cartão");
    return;
  }
  //valida o cartão e informa se é válido ou não
  const cartaoValido = validator.isValid(numeroCartao);
  //se o cartão é válido
  if (cartaoValido) {
    //caso o cartão seja válido,ele informa a bandeira através do número do cartão
    var bandeira = validator.getBandeira(numeroCartao)
    //um alerta que informa se o cartão é valido e acrescenta a informação da bandeira
    alert("Seu cartão é valido,sua bandeira é " + bandeira);
    return;
  }
  //um alerta para informar se o cartão não é valido
  alert("Seu cartão não é valido");
  return;
}
//cria um elemento para verificar o cartão quando o usuário clica no botão
document.getElementById("verificarCartao").addEventListener("click", function () {
  //valida o cartão
  return validarCartao();
});