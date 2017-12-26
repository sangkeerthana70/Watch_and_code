//For Loops

for (var i=0; i<3; i++) {
    console.log("hey");
}

for (var i=0; i<3; i++) {
    console.log(i);
},

var testArray = ['item 1', 'item 2', 'item 3'];
console.log(testArray[0]);

 for (var i=0; i<testArray.length, i++) {
    console.log(testArray[i]);
}
testArray.push('extra item');

for (var i=0; i<testArray.length, i++) {
    console.log(testArray[i]);
}
// will display
//item1
//item2
//item3

//displaytodos should show .todoText 
//addTodo function creates new objects and pushes into the
//todos array that is empty
var todoList = {
    todos: [],
    displayTodos: function() {
        console.log('My Todos', this.todos);//this.todos will print
        //the word object to the console so we can get rid of this.
        for (var i=0; i<this.todos.length; i++) {
            console.log(this.todos[i].todotext);//.todos is an array inside
//the todoList OBJECT..
//.todotext is the property of
//addTodo function which is an object(so we use .todoText for dot
//notation) with two properties named 
//todoText and completed.
        }
    }
}

todoList.displayTodos();
//displays an empty todos:[]array
todoList.addTodo('first');
todoList.addTodo('second');
//will display result as
My Todos:[first, second]

//displayTodos should tell you if .todos is empty.
add a if condition to check if this.todos is empty or not.
    if (this.todos.length ===0){
        console.log("Your todo list is empty!");
    }
    else {
       // print todos as normal 
       console.log('My Todos');
       for (var i=0; i<this.todos.length; i++) {
           console.log(this.todos[i].todotext);
       }
    }
}

//todoList.displayTodos();
//will display "Your todo list is empty"
//todoList.addTodo('an item');
//will display My Todos:['an item']
//todoList.deleteTodo(0);
//will delete the item in the 0th index.
//will then display "your todo list is empty"

//last requirement
//display todos should show .completed
//by adding an if statement under the for loop to check if the
//.completed proprty is true.
// the else statement is repeated from above.

else {
       console.log('My Todos');
       for (var i=0; i<this.todos.length; i++) {
           if (this.todos[i].completed === true) {
               console.log('x', this.todos[i].todoText);// to show the 
               //.todoText is completed with an x in the front
           }
           else {
            console.log('( )', this.todos[i].todotext);//shows empty 
            //todos to show that it is not completedS
           }
       }
}
// todoList.addTodo('first');
// will display as
// My Todos: [() first]
//todoList.addTodo('second');
My Todos:[() first, () second]//shows the items not completed.
//using todoList method called toggleCompleted to switch the results
todoList.toggleCompleted(1); // to toggle the second item.
//will display result as
My Todos:[() first, (x) second]// we just toogled the second item t
// to show as completed.


note that we have used the functions from version4.js
of addTodo, deletTodo and changeTodo and have not retyped those here
















