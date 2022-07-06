/*
Ver tarefas pendentes.

Ver tarefas terminadas.

Marcar uma tarefa como terminada.

Criar tarefas novas. OK!

Visualizar a data de criação de uma tarefa.

Remover tarefas.
*/
const logoffButton = document.querySelector("#closeApp")
logoffButton.addEventListener("click", logoff)

const form = document.querySelector("form")
form.addEventListener("submit",  createTask)

const valorInput = document.querySelector("#novaTarefa")
const listFinishedTasks = document.querySelector(".tarefas-terminadas")
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
        <button>
          <img src="./assets/deletar.png" alt="">
        </button>
      </div>
    `
    const dot = li.childNodes[0]
    dot.addEventListener('click', () => completeTask(li))
    listTasks.appendChild(li)
}

function completeTask(elemento) {
  const dot = elemento.childNodes[0]
  elemento.remove()
  dot.classList.add('completed')
  dot.addEventListener('click', () => undoCompleted(elemento))
  listFinishedTasks.appendChild(elemento)
}

function undoCompleted(elemento) {
  const dot = elemento.childNodes[0]
  elemento.remove()
  dot.classList.remove('completed')
  dot.addEventListener('click', () => completeTask(elemento))
  listTasks.appendChild(elemento)
}

function logoff() {
  localStorage.removeItem('jwt')
  window.location.href = 'index.html'
  console.log('Aooba')
}


/*function removeTask(){

}

function finishTask(){

}*/