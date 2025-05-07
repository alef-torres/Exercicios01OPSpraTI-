// 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require('prompt-sync')();

let entradaPlayer = prompt("Pedra, Papel ou Tesoura?: ");
let jogadasDaCPU = ["Pedra", "Papel", "Tesoura"]
let numero = Math.floor(Math.random() * 3); // 0 a 9
let jogadaDaCPU = jogadasDaCPU[numero];

if (entradaPlayer == jogadaDaCPU) {
  console.log("Empate.");
  process.exit(0);
}
if (entradaPlayer == "Pedra" && jogadaDaCPU == "Tesoura") {
  console.log("Ganhou")
  process.exit(0);
}
if (entradaPlayer == "Papel" && jogadaDaCPU == "Pedra") {
  console.log("Ganhou")
  process.exit(0);
}
if (entradaPlayer == "Tesoura" && jogadaDaCPU == "Papel") {
  console.log("Ganhou")
  process.exit(0);
}
console.log("Perdeu");
process.exit(0);





