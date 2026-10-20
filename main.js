import { database } from "./firebaseConfig.js";
import { ref, push, update, onValue, remove } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";

const input = document.querySelector("#item");
const botaoAdd = document.querySelector("#adicionar");
const lista = document.querySelector("#lista");

const itensRef = ref(database, "item");

// CREATE

botaoAdd.addEventListener("click", async () => {
    const texto = input.value.trim();

    await push(itensRef, {
        tarefa: texto
    });

    input.value = "";
});

// READ

onValue(itensRef, (snapshot) => {
    lista.innerHTML = "";

    snapshot.forEach((child) => {
        const id = child.key
        const dados = child.val();

        const li = document.createElement("li");
        li.textContent = child.val().tarefa;

        const btnEditar = document.createElement("button")
        btnEditar.textContent = "Editar"

        const btnExcluir = document.createElement("button")
        btnExcluir.textContent = "Excluir"

        btnEditar.addEventListener("click", () => {
            editarItem(id, dados.tarefa)
        })
        btnExcluir.addEventListener("click", () => {
            excluirItem(id)
        })

        li.appendChild(btnEditar)
        li.appendChild(btnExcluir)
        lista.appendChild(li);
    });
});

// Funções Delete e Update

async function excluirItem(id) {
    await remove(ref(database, `item/${id}`))
}

async function editarItem(id, textoAtual) {
    const novoTexto = prompt("Editar tarefa:", textoAtual)


    await update(ref(database, `item/${id}`), {
        tarefa: novoTexto.trim()
    })
}