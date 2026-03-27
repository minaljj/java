let todos = JSON.parse(localStorage.getItem('todos')) || []
const errorDiv = document.getElementById('error');
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos))
}

function addTODO() {
    const input = document.getElementById("todo-input");
    const timeinput = document.getElementById("todo-time");
    const priority = document.querySelector('input[name="priority"]:checked').value;
    const text = input.value.trim();
    const time = timeinput.value.trim();

    if (text == '') {
        
        return};
    todos.push({ text, time, priority, completed: false });

    input.value = '';
    timeinput.value = '';
    saveTodos();
    renderTodos();
}

function sort() {
    todos.sort((a, b) => {
        return a.text.localeCompare(b.text);
    });

    saveTodos();
    renderTodos();
}
function validate() { //Event Handler
    errorDiv.style.display = (event.target.value.trim() !== '') ? 'none' : 'inline';
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
    const list = document.getElementById('todo-list'); 

    list.innerHTML = ""; 

    todos.forEach((todo, index) => { 
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