//Explique o que é o polimorfismo e forneça um exemplo simples de seu uso.
//E um conceito importante em programação orientada a objetos que permite que objetos de diferentes classes possam ser tratados como se tivessem a mesma interface. 
//Isso significa que podemos escrever código que pode trabalhar com diferentes tipos de objetos de forma genérica, sem precisar saber exatamente qual tipo de objeto está sendo usado.

class VideoGame {
    constructor(nome) {
      this.nome = nome;
    }
  
    ligar() {
      console.log(`Ligando o ${this.nome}...`);
    }
  }
  
  class PlayStation extends VideoGame {
    constructor(nome) {
      super(nome);
    }
  
    ligar() {
      console.log(`Ligando o PlayStation ${this.nome}...`);
    }
  }
  
  class Xbox extends VideoGame {
    constructor(nome) {
      super(nome);
    }
  
    ligar() {
      console.log(`Ligando o Xbox ${this.nome}...`);
    }
  }
  
  const playStation = new PlayStation('PS5');
  const xbox = new Xbox('Series X');
  
  const videoGames = [playStation, xbox];
  
  videoGames.forEach(videoGame => {
    videoGame.ligar();
  });

  //Temos uma classe base VideoGame com um método ligar.
  // As classes PlayStation e Xbox são derivadas de VideoGame e substituem o método ligar com implementações específicas para cada classe.
  //Em seguida, temos uma lista de videoGames que contém um PlayStation e um Xbox.
  // Podemos iterar sobre essa lista e chamar o método ligar em cada videoGame, sem saber exatamente qual tipo de video game estamos tratando. 
  //O polimorfismo permite que o método ligar se comporte de forma diferente para cada tipo de video game, imprimindo uma mensagem específica para cada um.