// 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
// carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
// cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
// (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
// mostre o preço a ser pago de acordo com os dados a seguir:
// Carros populares
// - Até 100 Km percorridos: R$ 0,20 por Km
// - Acima de 100 Km percorridos: R$ 0,10 por Km
// Carros de luxo
// - Até 200 Km percorridos: R$ 0,30 por Km
// - Acima de 200 Km percorridos: R$ 0,25 por Km
const prompt = require('prompt-sync')();
function calcularDias(tipoCar, qtdDays) {
  if (tipoCar == "lux") return qtdDays * 150;
  if (tipoCar == "pop") return qtdDays * 90;
}

function calcularKm(tipoCar, qtdKm) {
  if (qtdKm >= 200) {
    if (tipoCar == "lux") return qtdKm * 0.25;
    if (tipoCar == "pop") return qtdKm * 0.10;
  }
  if (tipoCar == "lux") return qtdKm * 0.30;
  if (tipoCar == "pop") return qtdKm * 0.20;
}

function valorTotal(tipoCar, qtdDays, qtdKm, callback1, callback2) {
  let valorOfDays = callback1(tipoCar, qtdDays);
  let valorOfKms = callback2(tipoCar, qtdKm);
  return valorOfKms + valorOfDays;
}

let askTypeOfCar = prompt("Digite qual carro foi usado (luxo/popular):> ");
let quantidadeOfDays = Number(prompt("Digite a quantidade de dias que o carro foi usado:> "));
let quantidadeOfkms = Number(prompt("Digite a quantidade de kms percorridos:> "));
askTypeOfCar = (askTypeOfCar === "luxo") ? "lux" : "pop";
let totalValue = valorTotal(askTypeOfCar, quantidadeOfDays, quantidadeOfkms, calcularDias, calcularKm)

console.log(`O valor total a ser pago é: R$ ${totalValue.toFixed(2)}`);


