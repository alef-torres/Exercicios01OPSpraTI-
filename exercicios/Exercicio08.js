// 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
// podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
// sistema funciona assim:
// - até 10 h de atividade no mês: ganha 2 pontos por hora
// - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
// - acima de 20 h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
// Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

const prompt = require('prompt-sync')();
const quantidadeDeHoras = Number(prompt("Digite a quantidade de horas que você fez de atividades físicas: "));
let quantidadeDePontos = 0;
if (quantidadeDeHoras > 20) {
  quantidadeDePontos = quantidadeDeHoras * 10;
}
if (quantidadeDeHoras > 10 && quantidadeDeHoras < 20) {
  quantidadeDePontos = quantidadeDeHoras * 5;
}
if (quantidadeDeHoras > 0 && quantidadeDeHoras <= 10) {
  quantidadeDePontos = quantidadeDeHoras * 2;
}
let valorASerPago = quantidadeDePontos * 0.05;
console.log(`Você vai receber ${valorASerPago} pelas horas ${quantidadeDeHoras}`);