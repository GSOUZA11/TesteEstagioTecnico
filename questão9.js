//Explique o que é um método estático e forneça um exemplo.

//é um método que pertence à classe em si mesma, e não a um objeto específico da classe. 
//Isso significa que um método estático pode ser chamado sem a necessidade de criar um objeto da classe.

class Calculadora {
    static somar(a, b) {
      return a + b;
    }
  }
  
  const resultado = Calculadora.somar(5, 3);
  console.log(`O resultado da soma é ${resultado}`);

  // Temos uma classe Calculadora com um método estático somar que recebe dois números como parâmetros e retorna a soma dos dois números. 
  // A classe Calculadora chama o método estático somar para somar dois números e imprimir o resultado no console.