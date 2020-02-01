// select DOM elements
let displayElement = document.getElementById("displayTodos");
let toggleElement = document.getElementById("toggleAll");
let inputElement = document.getElementById('input').value;

// run display method when someone clicks on display todos button
displayElement.addEventListener('click', function () {
    todoList.display();
});

let todoList = {
    list: [],
    // display
    display: function () {
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