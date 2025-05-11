// 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
// final, mostre quais são os números pares que foram digitados e em que posições eles
// estão armazenados.

const prompt = require('prompt-sync')();
let numero = 0;
let numeros = [];
let numerosPares = "Numeros pares e seus índices:\n";

// Coleta de 10 números
while (numeros.length < 10) {
  numero = Number(prompt("Digite o número: "));
  numeros.push(numero);
}

// Verificação de pares
for (let index = 0; index < numeros.length; index++) {
  if (numeros[index] % 2 === 0) {
    numerosPares += `numero ${numeros[index]}, index: ${index}\n`;
  }
}

console.log(numerosPares);
