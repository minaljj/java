let todos = JSON.parse(localStorage.getItem('todos')) || []
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos))
}

function addTODO() {
    const input = document.getElementById("todo-input");
    const timeinput = document.getElementById("todo-time");
    const priority = document.querySelector('input[name="priority"]:checked').value;
    const text = input.value.trim();
    const time = timeinput.value.trim();

    if (text == '') return;
    todos.push({ text, time, priority, completed: false });

    input.value = '';
    timeinput.value = '';
    saveTodos();
    renderTodos();
}

function sort() {
   // const input = document.getElementById("todo-input");
   

    todos.sort((a, b) => {
        //if (a.text !== b.text) return a.text - b.text;
        return a.text.localeCompare(b.text);
    });

    saveTodos();
    renderTodos();
}

function deleteTODO(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();

}
function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}

function renderTodos() {
    const list = document.getElementById('todo-list'); // FIXED ID

    list.innerHTML = ""; // clear old list

    todos.forEach((todo, index) => { // FIXED spelling
        const li = document.createElement('li');

        if (todo.completed)
            li.classList.add('completed');

        li.innerHTML = `
            <span>${todo.text} ${todo.time ? "(" + todo.time + "  hours) " : ""} ${todo.priority}</span> <!-- FIXED syntax -->
            <div>
                <button onclick="toggleComplete(${index})">✔</button> 
                <button onclick="deleteTODO(${index})">✖</button> <!-- FIXED name -->
            </div> 
        `;

        list.appendChild(li);
    });
}