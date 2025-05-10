// 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
// Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
// valores da sequência.

const prompt = require('prompt-sync')();
let primeiroTermo = Number(prompt("Digite o primeiro termo da PA:"));
let razao = Number(prompt("Digite a razão da PA:"));

let acc = 0;
let resultado = "Os 10 primeiros termos da PA são: ";

for (let i = 0; i < 10; i++) {
  let termo = primeiroTermo + i * razao;
  resultado += termo + " ";
  acc += termo;
}

alert(resultado + `\n\nA soma dos termos é: ${acc}`);
