//1 There should be a "Display todos" button and a "Toggle all" button in the app
//2 Clicking "Display todos" should run todoList.displayTodos
//3 Clicking "Toggle" should run todoList.toggle all

//HTML is plain text that gives the browser information about the page.
// DOM is browser's interpretation of the HTML.
//Using Javascript for interacting with objects or elements in HTML.
//DOM tree. A parent has children like in a family tree.

//============================================================================
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

//====================================================================
 Clicking “Display todos” should run todoList.displayTodos
//1. We want to get access to the display todos button

var displayTodosButton = document.getElementById('displayTodosButton');
//console.log(displayTodosButton);
//2. We want to run displayTodos method when someone clicks the display todos 
//button.
displayTodosButton.addEventListener('click', function() {
    todoList.displayTodos();// when we run this by clicking the display todos
    //button we will get an empty list as prompted in Version 6.So we try to add 
    //an item in the My Todos: 'First item'and then run.
    // results will be
    //My Todos:
    //( ) First item.
    
    
    
});
//addEventListener is a method on displayTodosButton that is listening for a click
// and when the button is clicked it will run the displayTodos function.

Clicking “Toggle all” should run todoList.toggleAll

var toggleAllButton = document.getElementById('toggleAllButton');
toggleAllButton.addEventListener('click', function() {
    todoList.toggleAll();//run the toggleAll method.
});
// when we click toggleAll button the function invoked says Your todoList
//is empty, so by adding some item to the todoList.
//we say todoList.addTodo
// todoList.addTodo('First', 'second');
//returns
//My Todos:
//( ) first
//( ) second
// Now we can try to click the Toggle all button and see how the todos
//gets toggled.
 My Todos:
 (x) first
 (x) second
// now clicling the Toggle all buttons will toggle the items in the My Todos list.
 My Todos:
 ( ) first
 ( ) second
    
    



