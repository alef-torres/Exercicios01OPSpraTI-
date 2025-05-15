// 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
// no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// Matrícula:
// Nome:
// Salário bruto:
// Dedução INSS:
// Salário líquido:
// (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
// INSS).

function contrutorFuncionario(matricula, nome, salario) {
  let deducaoInss = salario * 0.12;
  let salarioLiquido = salario - deducaoInss;
  return {
    matricula: matricula,
    nome: nome,
    salarioBruto: salario,
    INSS: deducaoInss,
    salarioLiquido: salarioLiquido
  }
}

console.log(contrutorFuncionario(123, "Alef", 1000))