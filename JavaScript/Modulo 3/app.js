const createElement = (str) => {
  const el = document.createElement("div");
  el.innerHTML = str;
  return el.firstElementChild;
};

let todos = JSON.parse(localStorage.getItem("todos")) || [];

const listElement = document.querySelector("#todo");

function renderTodos() {
  listElement.innerHTML = "";
  for (todo of todos) {
    const todoElement = createElement(`<li>${todo}</li>`);
    const pos = todos.indexOf(todo);
    const removeTodoElement = createElement(
      `<a href="#" id="removeTodo" onclick="removeTodo(${pos})">Remove</a>`
    );

    listElement.appendChild(todoElement);
    todoElement.appendChild(removeTodoElement);
  }
}

function addTodo() {
  let todoValue = document.querySelector("#addInput").value;

  todos.push(todoValue);
  todoValue = "";

  renderTodos();
  saveTodo();
}

function removeTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveTodo();
}

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

renderTodos();
