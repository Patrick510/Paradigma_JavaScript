const title_page = document.querySelector(".nome-page");
const div_content = document.querySelector(".conteudo-principal");

const navLinks = document.querySelectorAll(".nav-link");

document.addEventListener("DOMContentLoaded", () => {
  changeContent("Livros");
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navLinks.forEach((navLink) => navLink.classList.remove("active"));

    e.target.classList.add("active");

    const nome_row = e.target.innerText.trim();
    changeContent(nome_row);
  });
});

async function getLivros() {
  const response = await fetch("http://54.208.149.127:4000/livros");
  const data = await response.json();
  return data.livros;
}

async function getEditoras() {
  const response = await fetch("http://54.208.149.127:4000/editoras");
  const data = await response.json();
  return data.editoras;
}

async function getAutores() {
  const response = await fetch("http://54.208.149.127:4000/autores");
  const data = await response.json();
  return data.autores;
}

async function getGeneros() {
  const response = await fetch("http://54.208.149.127:4000/generos");
  const data = await response.json();
  return data.generos;
}

const changeContent = (nome_content) => {
  div_content.innerHTML = "";

  let fetchData;

  if (nome_content === "Livros") {
    title_page.innerHTML = "Livros";
    fetchData = getLivros();
  } else if (nome_content === "Editoras") {
    title_page.innerHTML = "Editoras";
    fetchData = getEditoras();
  } else if (nome_content === "Autores") {
    title_page.innerHTML = "Autores";
    fetchData = getAutores();
  } else if (nome_content === "Gênero") {
    title_page.innerHTML = "Gêneros";
    fetchData = getGeneros();
  }

  fetchData.then((items) => {
    items.forEach((item, id) => {
      div_content.innerHTML += `<div class="item rounded text-start ps-3 border border-1">
        <p class="mt-3">${id + 1} - ${item}</p>
      </div>`;
    });
  });
};
