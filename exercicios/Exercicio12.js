// 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21. 

let a = 1;
let b = 1;
let resultado = "Os 10 primeiros elementos da Sequência de Fibonacci: ";

resultado += `${a}, ${b}`;

for (let i = 3; i <= 10; i++) {
  let proximo = a + b;
  resultado += `${proximo}`;
  a = b;
  b = proximo;
}

console.log(resultado);
