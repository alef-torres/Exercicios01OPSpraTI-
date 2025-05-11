// 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
// dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
// os dados das pessoas menores de idade.
const prompt = require('prompt-sync')();

let nomes = []
let idades = []
let nome = "";
let idade = 0;
let pessoasMenoresIdade = "";

while (true) {
  nome = prompt("Digite o nome da pessoa: ")
  if (nome == "nao") break;
  nomes.push(nome);
  idade = prompt("Digite a idade da pessoa: ")
  idades.push(idade)
}

for (let i = 0; i < idades.length; i++) {
  if (idades[i] < 18) {
    pessoasMenoresIdade += `Pessoa: ${nomes[i]} idade: ${idades[i]}\n`
  }
}

console.log(pessoasMenoresIdade);