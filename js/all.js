var appVue = new Vue({
    el: '.appVue',
    data: {
        todos: [],
        filterTodos:[],
        newTodo: ''        
    },
    methods: {
        addTodo: function (todo) {
            this.todos.push({
                content: todo,
                completed: false
            });
            this.newTodo = '';
            this.filterTodos = this.todos;
        },
        removeTodo: function (todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
        },
        completeTodo: function(todo){
            let index = this.todos.indexOf(todo);
            this.todos[index].completed = !todo.completed
        },
        showCompleteTodo: function () {
            this.filterTodos = this.todos.filter(
                function(todo){
                    return todo.completed === true
                }
            )
        },
        showUncompletedTodo: function () {
            this.filterTodos = this.todos.filter(
                function(todo){
                    return todo.completed ===false
                }
            )
        },
        showAllTodo: function () {
            this.filterTodos = this.todos;
        },
        allCompleteTodo: function () {
            //console.log(this.filterTodos.length)
            for(i=0;i<this.filterTodos.length;i++){
                this.filterTodos[i].completed = true
            }
        },
        deletCompleteTodo: function () {
            this.todos = this.todos.filter(
                function(todos){
                    return todos.completed === false
                }); //篩選出false的部分返回
            //console.log(todos);
            this.filterTodos = this.todos;
        }
    }
})

//可增加代辦事項[OK]
//可刪除代辦事項[OK]
//完成代辦事項[OK]
//全部完成[OK]
//篩選進度[OK]
//清除已完成[OK]