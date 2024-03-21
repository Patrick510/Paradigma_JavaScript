const embarcacao = [
  {
    comprimento: 5.2,
    motorizacao: 150,
    possuiConvesAberto: true,
    possuiCabineHabitavel: false,
  },
  {
    comprimento: 7.5,
    motorizacao: 200,
    possuiConvesAberto: false,
    possuiCabineHabitavel: true,
  },
  {
    comprimento: 12.3,
    motorizacao: 350,
    possuiConvesAberto: false,
    possuiCabineHabitavel: true,
  },
  {
    comprimento: 3.8,
    motorizacao: 75,
    possuiConvesAberto: true,
    possuiCabineHabitavel: false,
  },
  {
    comprimento: 8.4,
    motorizacao: 250,
    possuiConvesAberto: true,
    possuiCabineHabitavel: true,
  },
  {
    comprimento: 6.1,
    motorizacao: 180,
    possuiConvesAberto: false,
    possuiCabineHabitavel: false,
  },
  {
    comprimento: 9.9,
    motorizacao: 300,
    possuiConvesAberto: true,
    possuiCabineHabitavel: true,
  },
  {
    comprimento: 4.5,
    motorizacao: 100,
    possuiConvesAberto: true,
    possuiCabineHabitavel: false,
  },
  {
    comprimento: 11.2,
    motorizacao: 320,
    possuiConvesAberto: false,
    possuiCabineHabitavel: true,
  },
  {
    comprimento: 2.9,
    motorizacao: 50,
    possuiConvesAberto: true,
    possuiCabineHabitavel: false,
  },
  {
    comprimento: 8,
    motorizacao: 50,
    possuiConvesAberto: true,
    possuiCabineHabitavel: false,
  },
  {
    comprimento: 8,
    motorizacao: 50,
    possuiConvesAberto: false,
    possuiCabineHabitavel: true,
  },
];

function embarcacoesTable() {
  let tbody = document.querySelector("#embarcacoes-dados");

  embarcacao.forEach((embarcacao) => {
    let createRow = document.createElement("tr");
    createRow.innerHTML = `
        <td> ${embarcacao.comprimento} </td>
        <td> ${embarcacao.motorizacao} </td>
        <td> ${embarcacao.possuiCabineHabitavel} </td>
        <td> ${embarcacao.possuiConvesAberto} </td>
    `;

    tbody.appendChild(createRow);
  });
}

function comprimento5Metros() {
  const maiores = embarcacao.filter(({ comprimento }) => comprimento <= 5);

  const table5M = document.querySelector("#embarcacoes-5");

  maiores.forEach((maior) => {
    let row = document.createElement("tr");
    row.innerHTML = `
    <td> ${maior.comprimento} </td>
    <td> ${maior.motorizacao} </td>
    `;

    table5M.appendChild(row);
  });
}

function comprimentoConves() {
  const menores = embarcacao.filter(
    ({ comprimento, motorizacao, possuiConvesAberto, possuiCabineHabitavel }) =>
      comprimento <= 8 &&
      motorizacao <= 50 &&
      possuiConvesAberto &&
      !possuiCabineHabitavel
  );

  let tbody = document.querySelector("#dados-3");

  menores.forEach((menor) => {
    let row = document.createElement("tr");
    row.innerHTML = `
    <td>${menor.comprimento}</td>
    <td>${menor.motorizacao}</td>
    <td>${menor.possuiConvesAberto}</td> <!-- Corrigido: Troca de posições -->
    <td>${menor.possuiCabineHabitavel}</td> <!-- Corrigido: Troca de posições -->
    `;

    tbody.appendChild(row);
  });
}

function comprimento4() {
  const menores = embarcacao.filter(
    ({ comprimento, motorizacao, possuiConvesAberto, possuiCabineHabitavel }) =>
      comprimento <= 8 &&
      motorizacao <= 50 &&
      !possuiConvesAberto &&
      possuiCabineHabitavel
  );

  let tbody = document.querySelector("#dados-4");

  menores.forEach((menor) => {
    let row = document.createElement("tr");
    row.innerHTML = `
    <td>${menor.comprimento}</td>
    <td>${menor.motorizacao}</td>
    <td>${menor.possuiConvesAberto}</td> <!-- Corrigido: Troca de posições -->
    <td>${menor.possuiCabineHabitavel}</td> <!-- Corrigido: Troca de posições -->
    `;

    tbody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  embarcacoesTable();
  comprimento5Metros();
  comprimentoConves();
  comprimento4();
});
