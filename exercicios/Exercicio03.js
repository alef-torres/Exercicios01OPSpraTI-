// 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.

const prompt = require('prompt-sync')();

let distanciaDoPassageiro = Number(prompt("Digite a distancia que quer percorrer: "));

if (distanciaDoPassageiro >= 200) {
  let valorPassagem = distanciaDoPassageiro * 0.45;
  console.log(`O valor da passagem será de: ${valorPassagem}`)
}

if (distanciaDoPassageiro < 200) {
  let valorPassagem = distanciaDoPassageiro * 0.5;
  console.log(`O valor da passagem será de: ${valorPassagem}`)
}