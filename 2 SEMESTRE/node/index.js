const express = require("express");
const app = express();
const port = 3100;

const data = [
  {
    id: 1,
    nome: "Ana",
    idade: "25",
    email: "ana@example.com",
    salario: 4500.0,
  },
  {
    id: 2,
    nome: "Bruno",
    idade: "30",
    email: "brunop@example.com",
    salario: 5500.0,
  },
  {
    id: 3,
    nome: "Carlos",
    idade: "35",
    email: "carlos@example.com",
    salario: 6500.0,
  },
  {
    id: 4,
    nome: "Daniel",
    idade: "40",
    email: "daniel@example.com",
    salario: 7500.0,
  },
  {
    id: 5,
    nome: "Elaine",
    idade: "28",
    email: "elaine@example.com",
    salario: 4800.0,
  },
  {
    id: 6,
    nome: "Fernando",
    idade: "32",
    email: "fernando@example.com",
    salario: 5200.0,
  },
  {
    id: 7,
    nome: "Gabriela",
    idade: "27",
    email: "gabriela@example.com",
    salario: 4700.0,
  },
  {
    id: 8,
    nome: "Hugo",
    idade: "45",
    email: "hugo@example.com",
    salario: 8200.0,
  },
  {
    id: 9,
    nome: "Isabela",
    idade: "29",
    email: "isabela@example.com",
    salario: 4900.0,
  },
  {
    id: 10,
    nome: "João",
    idade: "33",
    email: "joao@example.com",
    salario: 5300.0,
  },
];

app.get("/items", (req, res) => {
  const { salario } = req.query;

  const filteredData = data.filter(
    (item) => item.salario > parseFloat(salario)
  );
  res.json(filteredData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
