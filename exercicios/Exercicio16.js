// 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
// (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
// depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.

let numeroAleatorios = []
for (let i = 0; i < 20; i++) {
  numeroAleatorios[i] = (Math.random() * 100).toFixed(0)
}
console.log(numeroAleatorios)
console.log(numeroAleatorios.sort((a, b) => a - b))