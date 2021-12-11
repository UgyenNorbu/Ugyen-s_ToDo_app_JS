//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event listenrs
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', completedDelete);

//Functions
function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();

    // Create Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo)

    // Complete button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);

    // Append the todoDiv to the 'ul' list
    todoList.appendChild(todoDiv);

    // Clear todoInput value of the input form
    todoInput.value = "";
}

function completedDelete(e) {
    const item = e.target;

    // Delete the todo item
    if (item.classList[0] === 'delete-btn') {
        const todoDeleteItems = item.parentElement;

        // Add animation here
        todoDeleteItems.classList.add('fall');
        // Only then delete
        todoDeleteItems.addEventListener('transitionend', function() {
            todoDeleteItems.remove();
        })

    }

    // Check completed items
    if (item.classList[0] === 'completed-btn') {
        item.parentElement.classList.toggle('completed')
    }

}