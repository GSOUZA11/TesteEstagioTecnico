// Escreva uma função chamada "InverteString" que recebe uma string como parâmetro e retorna a mesma string invertida.
// Utilize a seguinte assinatura:
// public static string InverteString(string texto)

function InverteString(texto) {
    return texto.split('').reverse().join('');
  }
  
  const meuNome = "Gabriel Araujo Souza";
  console.log(InverteString(meuNome));

  // define uma função chamada InverteString que recebe uma string como parâmetro e retorna uma nova string com os caracteres na ordem inversa. 
  // Ele faz isso usando o método split para dividir a string de entrada em um array de caracteres, o método reverse para inverter a ordem dos caracteres no array, e o método join para combinar os caracteres de volta em uma string.
  // Em seguida, é definida uma variável string meuNome com o valor "Gabriel Araujo Souza", e a função InverteString é chamada para inverter a string e exibi-la.
  // Usei o NODE para poder executar a função, e exibila  no terminal do VSCode.
  // Resultado da execução: azuoS ojuarA leirbaG (Meu nome invertido).