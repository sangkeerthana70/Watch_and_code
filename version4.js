var todoList = {
    todos: [],
    displayTodos: function() {
     console.log('My Todos:', this.todos);
    },
// addTodo function adds objects(todoText and completed property) to the todos array.   
addTodo: function(todoText) { //todoText is the parameter here  
       this.todos.push({// the argument here is the object inside a curly braces
        todoText: todoText,
        completed: false//{todoText on the left is the name of the property equal to the
        //argument todoText on the right that the user passes 
       //in the method call, and another property named completed with a boolean as a value}
       // addTodo('hi') == todoText: todoText;    
   });
   this.displayTodos();
    }
};

 todoList.addTodo('this is an object');
 // will return My Todos: [ { todoText: 'this is an object', completed: false } ]
 
//changeTodo method changes the todoText property on each todos object
changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
},

//todoList.addTodo('First try');
todoList.changeTodo(0, 'second try');

toggleCompleted: function(position) {
    var todo = this.todos[position];//store the todos.position in a variable
    //to use it in boolean testing
    todo.completed = !todo.completed;
    this.displayTodos();
}    
    
}
todoList.addTodo(boolean testing);
todoList.toggleCompleted(0);
//will return
My Todos: [ { todoText: 'boolean testing', completed: true } ]




 