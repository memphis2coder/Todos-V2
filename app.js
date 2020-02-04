// step 1
let todoList = {
  list: [],
  // add
  add: function(todoText) {
    this.list.push({
      todoText: todoText,
      completed: false
    });
  },
  // delete
  delete: function(position) {
    this.list.splice(position, 1);
  },
  // change
  change: function(position, changeItem) {
    this.list[position].todoText = changeItem;
  },
  // toggle true or false
  completed: function(position) {
    let item = this.list[position];
    item.completed = !item.completed;
  },
  // toggleAll
  completedAll: function() {
    let total = this.list.length;
    let completedTotal = 0;

    // get the total amount of completed Todos
    for (let i = 0; i < total; i++) {
      if (this.list[i].completed === true) completedTotal++;
    }
    // if all items are true then set them to false
    if (completedTotal === total) {
      for (let i = 0; i < total; i++) {
        this.list[i].completed = false;
      }
    }
    // otherwise, set them to true
    else {
      for (let i = 0; i < total; i++) {
        this.list[i].completed = true;
      }
    }
  }
};

// step 2 - event handler for the DOM
let handlers = {
  addTodoBtn: function() {
    let addTodoTextInput = document.getElementById("input");
    todoList.add(addTodoTextInput.value);
    // clear input field after submit
    addTodoTextInput.value = "";
    view.displayTodos();
  },
  deleteTodoBtn: function() {
    let deleteTodoPositionInput = document.getElementById(
      "deleteTodoPositionInput"
    );
    todoList.delete(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = "";
    view.displayTodos();
  },
  changeTodoBtn: function() {
    let changeTodoPositionInput = document.getElementById(
      "changeTodoPositionInput"
    );
    let changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.change(
      changeTodoPositionInput.valueAsNumber,
      changeTodoTextInput.value
    );
    // clear input field after submit
    changeTodoPositionInput.value = "";
    changeTodoTextInput.value = "";
    view.displayTodos();
  },
  checkTodoBtn: function() {
    let toggleTodoInput = document.getElementById("toggleTodoInput");
    todoList.completed(toggleTodoInput.valueAsNumber);
    toggleTodoInput.value = "";
    view.displayTodos();
  },
  toggleAllBtn: function() {
    todoList.completedAll();
    view.displayTodos();
  }
};

// feature - press enter key to add button
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("add").click();
  }
});

// step 3 - let view controls the frontend of the website
let view = {
  displayTodos: function() {
    let todoUl = document.querySelector("ul");
    todoUl.innerHTML = "";
    for (let i = 0; i < todoList.list.length; i++) {
      let todoLi = document.createElement("li");
      var todo = todoList.list[i];
      var todoTextWithCompletion = "";

      if (todo.completed === true) {
        todoTextWithCompletion = "(x) " + todo.todoText;
      } else {
        todoTextWithCompletion = "( ) " + todo.todoText;
      }

      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todoUl.appendChild(todoLi);
    }
  },
  createDeleteButton: function() {
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  }
};
