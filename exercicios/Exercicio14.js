// 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
// mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
// que eles foram informados.

const prompt = require('prompt-sync')();
let nomes = [];

while (true) {
  let nome = prompt("Digite 7 nomes: ");
  if (nome == "sair") break;
  nomes.push(nome);
}

for (let i = nomes.length; i >= 0; i--) {
  console.log(nomes[i])
}