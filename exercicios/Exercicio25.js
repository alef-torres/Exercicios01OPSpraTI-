// 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
// de cada coluna separadamente.

let M = [];
for (let i = 0; i < 15; i++) {
  let linha = [];
  for (let j = 0; j < 20; j++) {
    let valor = Math.floor(Math.random() * 10); // valores entre -10 e 10
    linha.push(valor);
  }
  M.push(linha);
}

let somaVet = [];

for (let i = 0; i < M.length; i++) {
  let soma = 0;
  soma = M[i].reduce((acc, value) => acc + value, 0);
  somaVet[i] = soma;
}

console.table(M);
console.table(somaVet);