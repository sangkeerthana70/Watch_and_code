// function to display todos
var todos = ['item1', 'item2', 'item3'];

function displayTodos() {
    console.log('My Todos:', todos);  
 }
 
 displayTodos();
 
 //function to add todos
 function addTodo() {
     todos.push('new todo');
 }
 
 addTodo();// this function adds a new item 'new todo'to the todos array depending on 
           // how many times it is invoked.
           
 // now update the addTodo() function to add displayTodos() function inside it.
 
  function addTodo() {
     todos.push('new todo');
     displayTodos();
 }
 // addTodo() function adds a 'new todo' item each time it is run and displays it 
 // to the console by adding another function inside it.
 
 // results will be
 My Todos : ['item1', 'item2', 'item3', 'new todo', 'new todo'];
 // passing in a parameter in the function addTodos by customising a function.
 function addTodo(todos) {
    todos.push(todos);
    displayTodos();
}

addTodo('some stuff')// here some stuff is the argument we are passing in.
displayTodos()
//will display as
My Todos : ['item1', 'item2', 'item3', 'new todo', 'new todo', 'some stuff'];
 
//function to change the todos
function changeTodo() {
    todos[0] = 'some new value';
}
// customise the same changeTodo function using parameters
function changeTodo(position, new value) {
    todos[position] =  newValue;
    displayTodos();
}
//example of what happens while passing in a position and a value
changeTodo (0, 'changed')
//will display the output as
['changed', 'item1', "item2", "item3", "new todo", "new todo", "new todo", "hello there"]
changeTodo(0, "changed again"); // will display changed result as
['changed again', 'item1', "item2", "item3", "new todo", "new todo", "new todo", "hello there"]
//function to delete the todos
function deleteTodo(position) {
    todos.splice(position,1);
    displayTodos();
}
// will display result as with index 0 removed
My todos:['item1', "item2", "item3", "new todo", "new todo", "new todo", "hello there"]
deleteTodo(0) // will delete 'item1'
deleteTodo(2) // will remove "new todo" from the array

My todos: ["item2", "item3",  "new todo", "hello there"]    
    
    
    
    
    
    
    
    
    
}
 