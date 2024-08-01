const clientes = [
  { nome: "José", idade: 26 },
  { nome: "João", idade: 16 },
  { nome: "Matheus", idade: 46 },
  { nome: "Alvida", idade: 56 },
];

const btnAdd = document.querySelector("#btn-adicionar");

let maioridade = clientes.filter(({ idade }) => idade > 18);
const joao = clientes.filter(({ nome }) => nome == "João");

console.log(maioridade);
console.log(joao);

console.log("------------------------");

const listaMaioridade = document.getElementById("lista-maioridade");

function verificaMaioridade() {
  maioridade.forEach((cliente) => {
    const item = document.createElement("li");
    item.textContent = `${cliente.nome} - ${cliente.idade} anos`;
    listaMaioridade.appendChild(item);
  });
  console.log(clientes);
}

btnAdd.addEventListener("click", () => {
  const nome = document.querySelector("#nomeCliente").value;
  const idade = parseInt(document.querySelector("#idadeCliente").value);

  clientes.push({ nome: nome, idade: idade });
  maioridade = clientes.filter(({ idade }) => idade > 18);
  verificaMaioridade();
});
