//Explique o conceito de herança e forneça um exemplo.

//é um conceito fundamental em programação orientada a objetos, onde uma classe (chamada classe filha ou subclasse) herda propriedades e métodos de outra classe (chamada classe pai ou superclasse). 
//Isso permite que a classe filha reutilize e estenda a funcionalidade da classe pai, evitando a repetição de código e tornando o código mais organizado e fácil de manter.

class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    fazerSom() {
      console.log('O animal está fazendo um som genérico.');
    }
  }
  
  class Cachorro extends Animal {
    constructor(nome) {
      super(nome);
    }
  
    fazerSom() {
      console.log('O cachorro está latindo.');
    }
  }
  
  const cachorro = new Cachorro('Fido');
  cachorro.fazerSom(); 
  
  // imprime "O cachorro está latindo."
  // A classe Animal é a classe pai e tem um construtor que define o nome do animal e um método fazerSom que imprime uma mensagem genérica.
  // A classe Cachorro é a classe filha e herda as propriedades e métodos da classe Animal.
  // A classe Cachorro tem um construtor que chama o construtor da classe Animal usando a palavra-chave super e um método fazerSom que sobrescreve o método da classe Animal para imprimir uma mensagem específica para cachorros.