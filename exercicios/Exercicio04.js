// 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// lado deve ser menor que a soma dos outros dois.

const prompt = require('prompt-sync')();

let seguimentoUm = Number(prompt("Digite o tamanho do 1° seguimento: "));
let seguimentoDois = Number(prompt("Digite o tamanho do 2° seguimento: "));
let seguimentoTres = Number(prompt("Digite o tamanho do 3° seguimento: "));

if (
  seguimentoUm < seguimentoDois + seguimentoTres &&
  seguimentoDois < seguimentoUm + seguimentoTres &&
  seguimentoTres < seguimentoUm + seguimentoDois
) {
  console.log("Os seguimentos podem formar um triângulo.");
} else {
  console.log("Os seguimentos NÃO podem formar um triângulo.");
}

