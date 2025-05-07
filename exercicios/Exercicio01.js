// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.

const prompt = require('prompt-sync')();

let quantidadeDeCigarrosPorDia = Number(prompt("Diga-me quantos cigarros você fuma por dia: "));
let quantidadeDeAnosQueFuma = Number(prompt("Diga-me há quantos anos você fuma: "));

function quantidadeDeDiasPerdidosDeVida(qtdCigarrosPerDay, qtdAnos) {
  const totalCigarros = qtdCigarrosPerDay * (qtdAnos * 365);
  const minutosPerdidos = totalCigarros * 10;
  const diasPerdidos = minutosPerdidos / (60 * 24); // 60 minutos * 24 horas
  return diasPerdidos;
}

const diasPerdidos = quantidadeDeDiasPerdidosDeVida(quantidadeDeCigarrosPorDia, quantidadeDeAnosQueFuma);

console.log(`Você perdeu ${diasPerdidos.toFixed(2)} dias de vida fumando.`);
