import validator from './validator.js';

//console.log(validator);

//cria a função de validar o cartão
function validarCartao() {
  //cria a constante numero cartão,pega o número do cartão e seu valor
  const numeroCartao = document.getElementById("cartao").value;
  //não permite que fique sem preencher o espaço do cartão,deixe em branco
  if (!numeroCartao){
    alert ("Favor digite o número do cartão");
    return;
  }
  //valida o cartão e informa se é válido ou não
  const cartaoValido = validator.isValid(numeroCartao);
  //se o cartão é válido
  if (cartaoValido) {
    //caso o cartão seja válido,ele informa a bandeira através do número do cartão
    const bandeira = validator.getBandeira(numeroCartao)
    //um alerta que informa se o cartão é valido e acrescenta a informação da bandeira
    alert("Seu cartão é valido,sua bandeira é " + bandeira);
    //pega o elemento do html com o id numeros mascarados
    const numerosOcultos = document.getElementById("numerosMascarados");
    //pega o elemento com o id bandeira no html
    const bandeiraHTML = document.getElementById("bandeira");
    //faz aparecer dentro do elemento do número oculto o número do cartão mascarado
    numerosOcultos.innerHTML = validator.maskify(numeroCartao);
    //informa a bandeira no html
    bandeiraHTML.innerHTML = bandeira;
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