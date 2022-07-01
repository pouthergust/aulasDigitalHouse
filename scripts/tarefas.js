/*
Ver tarefas pendentes.

Ver tarefas terminadas.

Marcar uma tarefa como terminada.

Criar tarefas novas. OK!

Visualizar a data de criação de uma tarefa.

Remover tarefas.
*/

const form = document.querySelector("form")
form.addEventListener("submit",  createTask)

const valorInput = document.querySelector("#novaTarefa")
const listTasks = document.querySelector(".tarefas-pendentes")
listTasks.innerHTML = ""

function createTask(evento){
    evento.preventDefault()
    const li = document.createElement("li")
    li.classList.add("tarefa")
    li.innerHTML = 
    `<div class="not-done"></div>
        <div class="descricao">
          <p class="nome"> ${valorInput.value} </p>
          <p class="timestamp">Criada em: ${new Date()}</p>
        </div>
    `
    listTasks.appendChild(li)
}


/*function removeTask(){

}

function finishTask(){

}*/