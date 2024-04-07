
    function CalculaMedia(numeros) {
        let soma = 0;
        for (let i = 0; i < numeros.length; i++) {
          soma += numeros[i];
        }
        return soma / numeros.length;
      }


    const numeros = [1, 2, 3, 4, 5];
    const media = CalculaMedia(numeros);
    console.log(`A média aritmética dos números é: ${media}`);

    //A media aritmetica dos numeros é: 3
    // Usei o Node para executar o codigo no terminal.
    // Ela inicializa uma variável soma com o valor 0 e, em seguida, itera sobre o array numeros usando um loop for.
    // Para cada elemento do array, ela adiciona o valor do elemento à variável soma.
    //Após iterar sobre todos os elementos do array, a função retorna a média aritmética dos elementos dividindo o valor de soma pelo número de elementos no array usando a expressão soma / numeros.length.
    //No Final exibirá a média aritmética dos números no array numeros no console.
    
