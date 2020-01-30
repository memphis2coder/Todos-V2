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
        let completedAll = 0;
        for (let i = 0; i < total; i++) {
            if (this.list[i].completed === true) {
                completedAll++
            }
        }
    }

}





























// let totalTodos = this.list.length;
//         let completedTodos = 0;
//         // get number of completed todos
//         for (let i = 0; i < totalTodos; i++) {
//             if (this.list[i].completed === true) {
//                 completedTodos++;
//             }
//         }
//         // Case 1: if everything is true, make everything false
//         if (completedTodos === totalTodos) {
//             for (let i = 0; i < totalTodos; i++) {
//                 this.list[i].completed = false;
//             }
//         }
//         this.display();