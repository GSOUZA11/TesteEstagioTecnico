//Implemente uma classe chamada "Pessoa" com os seguintes atributos: "Nome" (string) e "Idade" (int). 
//A classe deve possuir um construtor que recebe o nome e a idade da pessoa como parâmetros. 
//Crie um método chamado "Apresentar" que exiba no console o nome e a idade da pessoa.

class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar() {
      console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos de idade.`);
    }
  }
  
  const pessoa = new Pessoa("Gabriel Araujo", 25);
  pessoa.apresentar();

//Defini uma classe chamada 'pessoa' com duas propriedades : 'nome' e 'idade
//A classe 'pessoa' tem um construtor que recebe  dois parametros , o 'nome' e a 'idade'.
//O metodo apresentar exibe o nome e a idade da pessoa no console.
