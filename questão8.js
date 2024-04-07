// Implemente um programa que solicite ao usuário que digite uma frase.
// O programa deve contar quantas vogais existem na frase (considerando apenas as vogais "a", "e", "i", "o" e "u", tanto em letras maiúsculas quanto minúsculas) e exibir o resultado no console.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite uma frase: ', frase => {
    let vogais = 0;
  
    for (let i = 0; i < frase.length; i++) {
      if (frase[i] === 'a' || frase[i] === 'e' || frase[i] === 'i' || frase[i] === 'o' || frase[i] === 'u' ||
          frase[i] === 'A' || frase[i] === 'E' || frase[i] === 'I' || frase[i] === 'O' || frase[i] === 'U') {
        vogais++;
      }
    }
  
    console.log(`A frase contém ${vogais} vogais.`);
    readline.close();
  });

  //usamos o módulo readline para ler a entrada do usuário.
  //Definimos uma variável vogais para contar o número de vogais na string de entrada. Em seguida, usamos um loop for para iterar sobre cada caractere na string de entrada e verificar se é uma vogal (ou maiúscula ou minúscula).
  //Finalmente, imprimimos o número de vogais no console e fechamos a interface readline.
  