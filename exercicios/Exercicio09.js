// 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
// mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
// perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
// funcionário.

const prompt = require('prompt-sync')();

let salariosHomens = [];
let salariosMulheres = [];

while (true) {
  let salario = Number(prompt("Digite o salário do funcionário: "));
  let sexo = prompt("Digite o sexo do funcionário (M/F): ").toUpperCase();

  if (sexo === "M") {
    salariosHomens.push(salario);
  } else if (sexo === "F") {
    salariosMulheres.push(salario);
  } else {
    console.log("Sexo inválido. Use 'M' para masculino ou 'F' para feminino.");
  }

  let continuar = prompt("Deseja continuar? (sim/nao): ").toLowerCase();
  if (continuar === "nao") break;
}

const totalHomens = salariosHomens.reduce((acc, elem) => acc + elem, 0);
const totalMulheres = salariosMulheres.reduce((acc, elem) => acc + elem, 0);

console.log(`O salário total pago aos homens é: R$ ${totalHomens.toFixed(2)}`);
console.log(`O salário total pago às mulheres é: R$ ${totalMulheres.toFixed(2)}`);
