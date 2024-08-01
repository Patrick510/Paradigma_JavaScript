const url = "http://universities.hipolabs.com/search?country=United+States";

// Esta função é executada independente de outra
async function listaUniversidade(letraInicio = "") {
  try {
    // Fazer a requisição HTTP
    const response = await fetch(url);

    // Converte no formato JSON
    const data = await response.json();

    // Processar os dados usando map e filter
    const universityNames = data
      .map((university) => university.name)
      .filter((name) => name.startsWith(letraInicio)) // Filtrar universidades que começam com a letra especificada
      .sort();

    // Selecionar o elemento da lista
    const universityList = document.getElementById("listaUniversidade");
    universityList.innerHTML = ""; // Limpar a lista

    // Adicionar os nomes das universidades à lista
    universityNames.forEach((name) => {
      const listItem = document.createElement("li");
      listItem.textContent = name;
      universityList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Erro ao consumir a API:", error);
  }
}

// Selecionar o botão e adicionar o evento de clique
const filterButton = document.getElementById("btnFiltrar");

filterButton.addEventListener("click", () => {
  const entradaFiltro = document.getElementById("txtFiltro").value;
  listaUniversidade(entradaFiltro);
});

// Chamada da função
listaUniversidade();
