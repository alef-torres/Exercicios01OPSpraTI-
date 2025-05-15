// 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
// dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
// número não determinado de pessoas e retorne a média de salário da população, a
// média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
// 350,00.

function calculadora(familias) {
  const totalSalarios = familias.salarios.reduce((acc, salario) => acc + salario, 0);
  const totalFilhos = familias.filhos.reduce((acc, filhos) => acc + filhos, 0);
  const mediaSalarial = familias.salarios.length > 0 ? totalSalarios / familias.salarios.length : 0;
  const mediaFilhos = familias.filhos.length > 0 ? totalFilhos / familias.filhos.length : 0;
  const maiorSalario = familias.salarios.length > 0 ? Math.max(...familias.salarios) : 0;
  const salariosAcima150 = familias.salarios.filter(salario => salario > 150).length;
  const percentualSalarios = familias.salarios.length > 0
    ? (salariosAcima150 / familias.salarios.length) * 100
    : 0;

  return {
    mediaSalarial,
    maiorSalario,
    percentualSalarios,
    mediaFilhos
  };
}
