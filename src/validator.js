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
      if (index % 2 == 0) {
        //o resultado multiplica por 2
        element = element*2
        //verifica se o elemento é maior que 9
        if (element>9){
          //converte o numero para letra e separa
          var maiorNumero = element.toString().split("");
          //soma os números da lista acima e da o resultado
          element = this.sum(maiorNumero);
        }
      }
      //adiciona o elemento na lista multiplicada
      listaMultiplicada.push(element);



    }
    alert(listaMultiplicada);
  },
//função que soma os números de uma lista
  sum(array){
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
};



export default validator;
