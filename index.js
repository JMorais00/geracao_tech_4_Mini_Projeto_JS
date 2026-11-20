const API_URL = "http://localhost:3000/tarefas";

const overlay = document.getElementById("overlay");
const criarTarefaModal = document.getElementById("criarTarefa");
const formulario = document.querySelector("#criarTarefa form");
const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const busca = document.getElementById("busca");
const lista = document.getElementById("lista");
const mensagemVazia = document.getElementById("mensagemVazia");

function abrirModal() {
  overlay.classList.add("active");
  criarTarefaModal.classList.add("active");
}

function fecharModal() {
  overlay.classList.remove("active");
  criarTarefaModal.classList.remove("active");
}

function buscarTarefas() {
  fetch(API_URL)
    .then((res) => res.json())
    .then((res) => inserirTarefas(res))
    .catch(() => {
      mensagemVazia.textContent =
        "Não foi possível carregar as tarefas. Verifique se a API está em execução.";
      mensagemVazia.style.display = "block";
    });
}

function inserirTarefas(listaTarefas) {
  lista.innerHTML = "";

  if (listaTarefas.length > 0) {
    mensagemVazia.style.display = "none";

    listaTarefas.map((tarefa) => {
      lista.innerHTML += `
        <li>
          <h5>${tarefa.titulo}</h5>
          <p>${tarefa.descricao}</p>
          <div class="actions">
            <i
  class="bx bxs-trash"
  onclick="deletarTarefa(${tarefa.id})"
></i>
          </div>
        </li>
      `;
    });
  } else {
    mensagemVazia.textContent = "Nenhuma tarefa registrada";
    mensagemVazia.style.display = "block";
  }

  pesquisarTarefas();
}

function novaTarefa(event) {
  event.preventDefault();

  const tarefa = {
    titulo: titulo.value,
    descricao: descricao.value,
  };

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tarefa),
  })
    .then((res) => res.json())
    .then(() => {
      fecharModal();
      formulario.reset();
      buscarTarefas();
    })
    .catch(() => {
      alert(
        "Não foi possível cadastrar a tarefa. Verifique se a API está em execução.",
      );
    });
}

function deletarTarefa(id) {
  fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Não foi possível excluir a tarefa.");
      }

      alert("Tarefa deletada com sucesso!");
      buscarTarefas();
    })
    .catch(() => {
      alert("Não foi possível excluir a tarefa.");
    });
}

function pesquisarTarefas() {
  const lis = document.querySelectorAll("#tarefas ul li");

  lis.forEach((li) => {
    const tituloTarefa = li.children[0].innerText;

    if (busca.value === "") {
      li.classList.remove("oculto");
    } else if (tituloTarefa.includes(busca.value)) {
      li.classList.remove("oculto");
    } else {
      li.classList.add("oculto");
    }
  });
}

buscarTarefas();
