//OBJECTS

var myComputer = {
    operatingSystem : "Mac",
    screenSize : "15 inches",
    purchaseYear : 2011
};
myComputer
Object {operatingSystem : "Mac", screenSize : "15 inches", purchaseYear : 2011};
// the above object has property called operatingSystem, screenSize and purchaseYear.
// to access a particular property we have to specify it in a dot notation.
//examples
myComputer.operatingSystem
//displays the value "mac" which is the value for the key operatingSystem 
mac
myComputer.screenSize
"15 inches"
myComputer.purchaseYear
2011

//Objects and Functions (how to place function inside objects)

{
    name: "Gordon",
    sayName: function sayName() {// we can leave out the name of the function when it is called
                //since we are going to access the function using the property name.
        console.log(this); // this keyword refers to the entire object
    }
}

//or we can assign the object to a variable and then access the property using .dot notations
var gordon = {
    name: "Gordon",
    sayName: function() {
        console.log(this.name); 
    }
}
gordon.sayName(); // prints out the entire object.

// method means putting a function on an object like the above example.
// and where a property of an object is a function.

//store todos array on an object
var todoList = {
  todos: ['item1', 'item2', 'item3'] 
};
//displays the todos in console as an array

// displayTodos method
 var todoList = {
    todos : ['item1', 'item2', 'item3'],
    displayTodos: function(){
     console.log('My Todos:', this.todos);//here this keyword refers to the 
     //object itself, and we don't need to use the function name since we are
     //going to refer the function using the property name.
   },
//addTodo method
   addTodo: function(todo) {   
       this.todos.push(todo);
       this.displayTodos();
       console.log(todoList.addTodo('plunker'));
   },
// changeTodo method
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
        console.log(todoList.changeTodo(0,'first'));
    },
//deleteTodo method
    deleteTodo: function(position) {
        this.todos.splice (position, 1); 
        this.displayTodos();
        console.log(todoList.deleteTodo(1));
    }
 }; 
//  todoList.displayTodos will display 
My Todos: ['item1', 'item2', 'item3']

//todoList.addTodo('plunker');
//will display result as 
My Todos: ['item1', 'item2', 'item3', 'plunker']
//todoList.changeTodo(0,'first');
//will display result as
My Todos: [ 'first','item2', 'item3']
//todoList.deleteTodo(1);
//will display result as
My Todos: ['item1', 'item3']//item2 with index1 has been deleted.


