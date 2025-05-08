// 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.
const prompt = require('prompt-sync')();

let menorValor;
let contadorMedia = 0;
let media = 0;
let contadorPares = 0;
let somaGeral = 0;
let valor = 0;

do {
  valor = Number(prompt("Digite o valor: "));
  somaGeral += valor;
  menorValor = valor;
  if (valor < menorValor) menorValor = valor;
  contadorMedia++;
  if (valor % 2 == 0) contadorPares++;
  let pergunta = prompt("Deseja continuar (sim/nao): ");
  if (pergunta == "nao") break;
} while (true)

console.log(``);
console.log(`O somatório entre todos os valores; ${somaGeral}`);
console.log(`Qual foi o menor valor digitado; ${menorValor}`);
console.log(`A média entre todos os valores; ${(media = somaGeral / contadorMedia).toFixed(2)}`);
console.log(`Quantos valores são pares; ${contadorPares}`);