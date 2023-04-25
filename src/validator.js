const validator = {
  isValid(numeroCartao) {
    //Pega o texto do cartão e coloca cada dígito em uma lista(array)
    const listaNumeros = numeroCartao.split("");
    //Cria uma nova lista(array) vazia
    const listaMultiplicada = [];
    // Faz um loop que funciona de acordo com o tamanho da lista de numeros
    // O loop vai rodar até o index atingir o numero total de caracteres que tem na lista
    for (let index = 0; index < listaNumeros.length; index++) {
      // pega um número da lista de acordo com a posição dela
      let element = listaNumeros[index];
      //se o lugar dele na fila é múltiplo de 2
      if (index % 2 === 0) {
        //o resultado multiplica por 2
        element = element * 2
        //verifica se o elemento é maior que 9
        if (element > 9) {
          //converte o numero para letra e separa
          const maiorNumero = element.toString().split("");
          //soma os números da lista acima e da o resultado
          element = this.sum(maiorNumero);
        }
      }
      //adiciona o elemento na lista multiplicada
      listaMultiplicada.push(element);
    }
    const soma = this.sum(listaMultiplicada)
    if (soma % 10 === 0) {
      return true;
    }
    return false;
    // alert(soma);
  },
  //função que soma os números de uma lista
  sum(array) {
    //cria uma variável com o resultado igual a zero
    let resultado = 0;
    //loop que execulta o código de dentro conforme quantas coisas tem na lista
    for (let index = 0; index < array.length; index++) {
      //converte a letra de numero da lista e soma no resultado
      resultado += Number(array[index]);
    }
    //retorna o resultado
    return resultado;
  }
  //cria uma função para informar a bandeira do cartão
  , getBandeira(numeroCartao) {
    //divide e pega somente o primeiro número do cartão inserido para poder identificar a bandeira
    var primeiroDigito = numeroCartao.slice(0, 1);
    //Se o primeiro digito for igual a 5,ele informa que o cartão é master
    if (primeiroDigito == 5) {
      return "Mastercard";
    }
    //Se o primeiro digito for igual a 4,ele informa que o cartão é visa
    if (primeiroDigito == 4) {
      return "Visa"
    }
  }
};

// function maskify(creditCard) {
//if (creditCard.length < 6) return creditCard;
//const last4Characters = creditCard.substr(-4);
//const firstCharacter = creditCard.substr(0, 1);
//const maskingCharacters = creditCard.substr(1, creditCard.length - 5).replace(/\d/g, '#');
//return `${firstCharacter}${maskingCharacters}${last4Characters}`;
//}

export default validator;
