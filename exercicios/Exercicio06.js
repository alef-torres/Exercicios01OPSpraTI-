// 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado.
const prompt = require('prompt-sync')();

let numeroCPU = Math.floor(Math.random(0) * 6);
if (numeroCPU === 0) {
  numeroCPU = 1;
}
let numeroPlayer = Number(prompt("Digite o valor que você acha entre 1 e 5: "))
if (numeroPlayer === numeroCPU) {
  console.log(`Você acertou, o numero era ${numeroCPU}`);
} else {
  console.log(`Você errou, o numero era ${numeroCPU}`);
}
