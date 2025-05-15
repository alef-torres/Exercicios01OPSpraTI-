// 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
// quantidade de elementos negativos da linha correspondente de M.

let M = [];
for (let i = 0; i < 6; i++) {
  let linha = [];
  for (let j = 0; j < 8; j++) {
    let valor = Math.floor(Math.random() * 21) - 10; // valores entre -10 e 10
    linha.push(valor);
  }
  M.push(linha);
}

let C = [];

for (let i = 0; i < 6; i++) {
  let contagemNegativos = 0;
  for (let j = 0; j < 8; j++) {
    if (M[i][j] < 0) {
      contagemNegativos++;
    }
  }
  C.push(contagemNegativos);
}

console.table(M);
console.log("Vetor C (quantidade de negativos por linha):", C);
