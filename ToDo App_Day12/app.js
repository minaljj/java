let todos = JSON.parse(localStorage.getItem('todos')) || []

const errorDiv = document.getElementById('error')

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos))
}

function addTODO() {
    const input = document.getElementById("todo-input")
    const timeinput = document.getElementById("todo-time")
    const priority = document.getElementById("priority").value

    const text = input.value.trim()
    const time = timeinput.value.trim()

    if (text === '') return
    if (time === '') return

    todos.push({ text, time, priority, completed: false })

    input.value = ''
    timeinput.value = ''

    saveTodos()
    renderTodos()
}

function sort() {
    todos.sort((a, b) => a.text.localeCompare(b.text))
    saveTodos()
    renderTodos()
}

function validate() {
    errorDiv.style.display = event.target.value.trim() ? 'none' : 'inline'
}

function deleteTODO(index) {
    todos.splice(index, 1)
    saveTodos()
    renderTodos()
}

function toggleComplete(index) {
    todos[index].completed = !todos[index].completed
    saveTodos()
    renderTodos()
}

function renderTodos() {
    const list = document.getElementById('todo-list')
    list.innerHTML = ""

    todos.forEach((todo, index) => {
        const li = document.createElement('li')
        if (todo.completed) li.classList.add('completed')

        li.innerHTML = `
            <div class="todo-text">
                <strong>${todo.text}</strong>
                <span>${todo.time}</span>
                <span class="priority-tag ${todo.priority}">
                    ${todo.priority}
                </span>
            </div>
            <div class="actions">
                <button onclick="toggleComplete(${index})">Done</button>
                <button onclick="deleteTODO(${index})">Delete</button>
            </div>
        `
        list.appendChild(li)
    })
}
``