// 23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
// diagonal principal são iguais a 1 e os demais são nulos.

let MI = [];

for (let i = 0; i < 7; i++) {
  let linha = [];
  for (let j = 0; j < 7; j++) {
    if (i === j) {
      linha.push(1);
    } else {
      linha.push(0);
    }
  }
  MI.push(linha);
}

console.table(MI);
