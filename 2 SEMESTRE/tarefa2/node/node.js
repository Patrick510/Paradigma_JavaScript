const express = require("express");
const app = express();
const port = 3100;
const data = [
  { id: 1, nome: "Iphone 15", preco: 1500.0, descricao: "Iphone 15 128GB" },
  { id: 2, nome: "Iphone 16", preco: 1600.0, descricao: "Iphone 16 128GB" },
  { id: 3, nome: "Iphone 17", preco: 1700.0, descricao: "Iphone 17 128GB" },
  { id: 4, nome: "Iphone 18", preco: 1800.0, descricao: "Iphone 18 128GB" },
  { id: 5, nome: "Iphone 19", preco: 1900.0, descricao: "Iphone 19 128GB" },
  { id: 6, nome: "Iphone 20", preco: 2000.0, descricao: "Iphone 20 128GB" },
  { id: 7, nome: "Iphone 21", preco: 2100.0, descricao: "Iphone 21 128GB" },
  { id: 8, nome: "Iphone 22", preco: 2200.0, descricao: "Iphone 22 128GB" },
  { id: 9, nome: "Iphone 23", preco: 2300.0, descricao: "Iphone 23 128GB" },
  { id: 10, nome: "Iphone 24", preco: 2400.0, descricao: "Iphone 24 128GB" },
];

app.get("/produtos", (req, res) => {
  const { preco } = req.query;

  const filteredData = data.filter((item) => item.preco > parseFloat(preco));
  res.json(filteredData);
});

app.get("/produtos/:id", (req, res) => {
  const { id } = req.params;

  const item = data.find((item) => item.id === parseInt(id));
  res.json(item);
});

app.post("/produtos", (req, res) => {
  const { nome, preco, descricao } = req.body;
  const id = data.length + 1;
  data.push({ id, nome, preco, descricao });
  res.json(data);
});

app.delete("/produtos/:id", (req, res) => {
  const { id } = req.params;
  const itemIndex = data.findIndex((item) => item.id === parseInt(id));
  data.splice(itemIndex, 1);
  res.json(data);
});

app.listen(port, () => {
  console.log("Servidor ok");
});
