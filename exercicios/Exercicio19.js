// 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
// repetição. Escrever cada um deles no formato HH.MM.SS.

function validarHorario(horas, minutos, segundos) {
  return (
    horas >= 0 && horas <= 23 &&
    minutos >= 0 && minutos <= 59 &&
    segundos >= 0 && segundos <= 59
  );
}

function formatarHorario(horas, minutos, segundos) {
  return (
    String(horas).padStart(2, '0') + '.' +
    String(minutos).padStart(2, '0') + '.' +
    String(segundos).padStart(2, '0')
  );
}

const horarios = [];

for (let i = 0; i < 5; i++) {
  let valido = false;
  let h, m, s;

  while (!valido) {
    h = parseInt(prompt(`Digite as HORAS do horário ${i + 1} (0-23):`), 10);
    m = parseInt(prompt(`Digite os MINUTOS do horário ${i + 1} (0-59):`), 10);
    s = parseInt(prompt(`Digite os SEGUNDOS do horário ${i + 1} (0-59):`), 10);

    if (validarHorario(h, m, s)) {
      valido = true;
    } else {
      alert("Horário inválido! Tente novamente.");
    }
  }

  horarios.push(formatarHorario(h, m, s));
}

console.log("Horários formatados:");
horarios.forEach((horario, index) => {
  console.log(`Horário ${index + 1}: ${horario}`);
});
