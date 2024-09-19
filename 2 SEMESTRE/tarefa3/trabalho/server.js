const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

const fake_db = {
  livros: [
    "A Revolução dos Bichos",
    "1984",
    "Extraordinário",
    "Vidas secas",
    "Memórias Póstumas de Brás Cubas",
    "Moby Dick",
    "O Senhor dos Anéis",
    "As Crônicas de Nárnia",
    "Harry Potter e a Pedra Filosofal",
    "Jogos Vorazes",
  ],
  editoras: [
    "Companhia das Letras",
    "Editora Intrínseca",
    "Editora Record",
    "Editora Rocco",
    "Editora Sextante",
    "Editora Globo",
    "Editora Objetiva",
    "Editora Novo Século",
    "Editora Arqueiro",
    "Editora Suma",
  ],
  autores: [
    "George Orwell",
    "R.J. Palacio",
    "Graciliano Ramos",
    "Machado de Assis",
    "Herman Melville",
    "J.R.R. Tolkien",
    "C.S. Lewis",
    "J.K. Rowling",
    "Suzanne Collins",
    "George R.R. Martin",
  ],
  generos: [
    "Romance",
    "Ficção Científica",
    "Fantasia",
    "Suspense",
    "Mistério",
    "Aventura",
    "Drama",
    "Terror",
    "Policial",
    "Histórico",
    "Biografia",
    "Autoajuda",
    "Infantil",
    "Juvenil",
    "Poesia",
    "Teatro",
    "Crônica",
    "Ensaio",
    "Didático",
    "Religião",
    "Filosofia",
  ],
};

app.get("/livros", (req, res) => {
  res.json({ livros: fake_db.livros });
});

app.get("/editoras", (req, res) => {
  res.json({ editoras: fake_db.editoras });
});

app.get("/autores", (req, res) => {
  res.json({ autores: fake_db.autores });
});

app.get("/generos", (req, res) => {
  res.json({ generos: fake_db.generos });
});

app.listen(port, () => {
  console.log(`Server on http://localhost:${port}`);
});
