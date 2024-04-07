//Crie uma classe chamada "Retangulo" que represente um retângulo.
// A classe deve possuir dois atributos: "Largura" (double) e "Altura" (double).
// Implemente um método chamado "CalculaArea" que retorna a área do retângulo. 
//Crie um objeto dessa classe e calcule a área de um retângulo com largura igual a 5 e altura igual a 3.

class Retangulo {
    constructor(largura, altura) {
      this.largura = largura;
      this.altura = altura;
    }
  
    calculaArea() {
      return this.largura * this.altura;
    }
  }
  
  const retangulo = new Retangulo(10, 5);
  console.log(retangulo.calculaArea());

  //Define uma classe Retangulo com um construtor que recebe dois parâmetros, largura e altura.
  //Definido um método calculaArea que calcula e retorna a área do retângulo multiplicando sua largura e altura.
  //È criada uma nova instância da classe Retangulo com uma largura de 10 e uma altura de 5, e o método calculaArea é chamado para calcular e exibir a área do retângulo.
  //Console.log deve imprimir o resultado da multiplicação entre a largura e a altura do retângulo criado.
  //Podemos simplesmente atribuir valores a this.largura e this.altura no construtor.