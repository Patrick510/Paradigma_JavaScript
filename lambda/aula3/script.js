let clientes = [];
const btnEnviar = document.querySelector("#add-cliente");

btnEnviar.addEventListener("click", adicionarCliente);

function adicionarCliente() {
  const nome = document.querySelector("#nome-cliente").value;
  const idade = document.querySelector("#idade-cliente").value;

  clientes.push({
    nome: nome,
    idade: idade,
  });

  mostrarClientes();
  document.querySelector("#nome-cliente").value = "";
  document.querySelector("#idade-cliente").value = "";
}

function mostrarClientes() {
  const lista = document.querySelector("#lista-cliente");

  clientes.forEach((cliente) => {
    lista.innerHTML = `
    <table> 
      <thead> 
        <tr> 
          <th> Nome </th>
          <th> Idade </th>
        </tr>
      </thead>

      <tbody> 
        <tr> 
          <td> ${cliente.nome} </td>
          <td> ${cliente.idade} </td>
        </tr>
      </tbody>
    </table>
  `;
  });
}
