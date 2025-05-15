// 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
// um funcionário e ao final escreva o conteúdo do registro.
function funcionario(nome, cargo, salario) {
  return {
    nome: nome,
    cargo: cargo,
    salario: Number(salario)
  }
}

let fun01 = funcionario("Alef", "Desempregado", 0);
console.log(fun01)