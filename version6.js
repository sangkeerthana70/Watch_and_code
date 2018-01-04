var todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length ===0) {
            console.log("Your todo list is empty");
        }
        else {
            console.log('My Todos');
            for (var i=0; i<this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log('(x)', this.todos[i].todoText);
                }
                else {
                    console.log('()', this.todos[i].todoText);    
                }
            }
        }
},

addTodo: function(todoText) { //todoText is the parameter here  
       this.todos.push({// the argument here is the object inside a curly braces
        todoText: todoText,
        completed: false//{todoText on the left is the name of the property equal to the
        //argument todoText on the right that the user passes 
       //in the method call, and another property named completed with a boolean as a value}
       // addTodo('hi') == todoText: todoText;    
   });
   this.displayTodos();
}, 
    
changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
},

deleteTodo: function(position) {
    this.todos.slice(position,1);
    this.displayTodos();
},

toggleCompleted: function(position) {
    var todo = this.todos[position];//store the todos.position in a variable
    //to use it in boolean testing
    todo.completed = !todo.completed;
    this.displayTodos();
},

/* .toggleALl:If everything is true, make everything false*/ 
toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    // Get number of completed todos.
    for (var i=0; i<totalTodos; i++) {
        if (this.todos[i].completed === true) {//if completed todo is true increment
        //completed todos to get how many of them are completed.
            completedTodos ++;
        }
    }
//Case 1:If everything is true, make everything false*/ 
    if (completedTodos === totalTodos) {// if completedTodos equals totalTodos then
        for(var i=0; i<totalTodos; i++) {//make everyhting false
            this.todos[i].completed = false;   
        }
    // Case 2: Otherwise, make everything true.
    }
    else {
        for(var i=0; i<totalTodos; i++) {//make everyhting true
            this.todos[i].completed = true;   
        }
        
    }
    this.displayTodos();// dont forget to add this function.
}
},

//testing .toggleAll function
//todoList.addTodo('first');
//todoList.addTodo('second');
//will add 'first' and 'second' item.
//My Todos:
//() first
//() second
// toggleAll will work only if all todos are completed.
so to check if the toggleAll is working run todoList.toggleCompleted(0) and (1);
todoList.toggleCompleted(0);
todoList.toggleCompleted(1);
will return
My todos:
(x) first
(x) second
now when we run todoList.toggleAll(); it should switch all items to false
todoList.toggleAll();
will display result as 
My todos;
() first
() second
// toggleAll function deals with the above mentioned scenarios.

case 1 when completed is true set it to false
case 2 when completed is false set it to true.constructor
case 3 when one or few todos is completed check everything to false.
        
        
        
        
