let todos = JSON.parse(localStorage.getItem('todos')) || []
        function saveTodos() {
            localStorage.setItem('todos', JSON.stringify(todos))
        }

        function addTODO() {
            const input = document.getElementById("todo-input");
            const text = input.value.trim();

            if (text == '') return;
            todos.push({ text, completed: false });

            input.value = '';
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
            <span>${todo.text}</span> <!-- FIXED syntax -->
            <div>
                <button onclick="toggleComplete(${index})">✔</button> 
                <button onclick="deleteTODO(${index})">✖</button> <!-- FIXED name -->
            </div> 
        `;

                list.appendChild(li);
            });
        }