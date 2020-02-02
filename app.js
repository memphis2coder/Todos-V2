// step 1
let todoList = {
    list: [],
    // display
    display: function () {
        console.log('TODO LIST DATA: ')
        if (this.list.length == 0) {
            console.log("All task are complete")
        } else {
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].completed === true) {
                    console.log("(X)", this.list[i].data)
                } else {
                    console.log("()", this.list[i].data)
                }
            }
        }
    },
    // add
    add: function (todoText) {
        this.list.push({
            data: todoText,
            completed: false
        })
        this.display()
    },
    // delete
    delete: function (position) {
        this.list.splice(position, 1);
        this.display()
    },
    // change
    change: function (position, changeItem) {
        this.list[position].data = changeItem;
        this.display();
    },
    // toggle true or false
    toggle: function (position) {
        let item = this.list[position];
        item.completed = !item.completed;
        this.display()
    },
    // toggleAll
    toggleAll: function () {
        let total = this.list.length;
        let completedTotal = 0;

        // get the total amount of completed Todos
        for (let i = 0; i < total; i++) {
            if (this.list[i].completed === true)
                completedTotal++;
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
        this.display();
    }
}

// step 2 - event handler for the DOM
let handlers = {
    displayTodosBtn: function () {
        todoList.display();
    },
    addTodoBtn: function () {
        let addTodoTextInput = document.getElementById('input');
        todoList.add(addTodoTextInput.value);
        // clear input field after submit
        addTodoTextInput.value = "";
    },
    deleteTodoBtn: function () {
        let deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.delete(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = "";
    },
    changeTodoBtn: function () {
        let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        let changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.change(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        // clear input field after submit
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
    },
    checkTodoBtn: function () {
        let toggleTodoInput = document.getElementById('toggleTodoInput');
        todoList.toggle(toggleTodoInput.valueAsNumber);
        toggleTodoInput.value = "";
    },
    toggleAllBtn: function () {
        todoList.toggleAll();
    },
};


input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("add").click();
    }
});

// let view controls the front end of the website does not control data
let view = {
    displayTodos: function () {
        let todoUl = document.querySelector('ul');
        todoUl.innerHTML = "";
        for (let i = 0; i < todoList.list.length; i++) {
            let todoLi = document.createElement('li');
            todoLi.textContent = todoList.list[i].data;
            todoUl.appendChild(todoLi);
        }
    },


};