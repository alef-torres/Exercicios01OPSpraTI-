// 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
// atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
// da sequência de Fibonacci.

function gerarFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [1];

  let fibonacci = [1, 1];

  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci;
}

let sequencia = gerarFibonacci(15);
console.log(sequencia.join(", "));
