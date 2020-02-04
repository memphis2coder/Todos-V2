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
    this.list.forEach(function(lists) {
      if (lists.completed === true) {
        completedTotal++;
      }
    });
    // check if items are true or false
    this.list.forEach(function(lists) {
      if (completedTotal === total) {
        lists.completed = false;
      } else {
        lists.completed = true;
      }
    });
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
  deleteTodoBtn: function(position) {
    todoList.delete(position);
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

    todoList.list.forEach(function(lists, position) {
      let todoLi = document.createElement("li");
      var todoTextWithCompletion = "";

      if (lists.completed === true) {
        todoTextWithCompletion = "(x) " + lists.todoText;
      } else {
        todoTextWithCompletion = "( ) " + lists.todoText;
      }

      todoLi.id = position;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todoUl.appendChild(todoLi);
    }, this);
  },
  createDeleteButton: function() {
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function() {
    // add event listener to UL to get the unique id
    const todosUL = document.querySelector("ul");

    todosUL.addEventListener("click", function(event) {
      // get the element that was clicked on.
      var elementClicked = event.target;

      // check if element clicked is delete button
      if (elementClicked.className === "deleteButton") {
        handlers.deleteTodoBtn(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();
