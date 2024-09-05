{
  /* <tr>
<th scope="row">1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td><button type="button" class="btn btn-danger">Delete</button></td>
</tr> */
}

const button = document.querySelector(".submit");

async function getProdutos() {
  const response = await fetch("http://localhost:3100/produtos");
  const data = await response.json();
  atualizarTabela(data);
}

function atualizarTabela(produtos) {
  const tbody = document.querySelector(".tbody-table");

  tbody.innerHTML = "";

  produtos.forEach((produto) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
    <th scope="row">${produto.id}</th>
    <td>${produto.nome}</td>
    <td>${produto.descricao}</td>
    <td>R$ ${produto.preco}</td>
    <td><button type="button" class="btn btn-danger" onClick="removerProduto(${produto.id})">Delete</button></td>
    `;
    tbody.appendChild(tr);
  });
}

async function removerProduto(id) {
  try {
    await fetch(`http://localhost:3100/produtos/${id}`, {
      method: "DELETE",
    });
    getProdutos();
  } catch (error) {
    console.error("Erro ao remover o produto:", error);
  }
}

async function addProduto(produto) {
  await fetch("http://localhost:3100/produtos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produto),
  });
  getProdutos();
}

button.addEventListener("click", async (event) => {
  event.preventDefault();

  const nome = document.querySelector("#nome").value;
  const descricao = document.querySelector("#descricao").value;
  const preco = document.querySelector("#preco").value;
  const precoform = parseFloat(preco).toFixed(2);

  addProduto({ nome, descricao, preco: precoform });

  document.querySelector("#nome").value = "";
  document.querySelector("#descricao").value = "";
  document.querySelector("#preco").value = "";
});

getProdutos();
