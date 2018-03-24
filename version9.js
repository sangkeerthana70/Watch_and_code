/*1-Inserting list elements in the DOM.
using Javascript to dynamically create li list using document.create element('li').
var todoLi = document.createElement('li');
todoLi
<li></li>
*/
/* Dynamically insert list items in unordered list.     
var todosUl = document.querySelector('ul');
todosUl 
<ul>
    </ul>
    
todosUl.appendChild(todoLi)
<li> </li>*/
//==========================================================================//
//Version-8.js

There should be a an li element for every todo
var handlers = {
    displayTodos: function() {
        todoList.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
    },
// we are linking these function in the HTML file by adding an onclick
//event to each button elements and also we get rid of the id's.
// this simplifies the numerous lines of code and seems more efficient.
//Also it is a more specific use case and can handle only one event at a time.
//and so not used widely.
//Based on the applications needs we can use either one of them accordingly


//Add a button for adding Todos by getting a text from the user in the text box.
//add  a onclick event

    addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';// to empty the input box every time .
    },


// There should be a button for changing the Todos.
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
    },

// There should be a button for deleting  the Todos.
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
    },
    
// There should be a button for toggling a todo.
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
        
    },
    toggleAll: function() {
        todoList.toggleAll();
    }
},

//create a new Object called var view
 
var view = {// displays what the user sees by rendering the todoList user input data into the screen
 // this object replaces the displayTodos: function from earlier version7.js 
    displayTodos: function() {
         var todosUl = document.querySelector('ul');//grabs the Ul that we created and starts from 0,by 
         //clearing the list already in there first.
         todosUl.innerHTML = '';
         for (var i=0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement('Li');//creates a new List item in the todos array
            //by iterating in the for loop. and creating a new Li element and appends 
            // it to the UL(unordered list).
            
            var todo = todoList.todos[i];
            var todoTextWithCompletion = '';
            if (todo.completed === true) {
                todoTextWithCompletion = '(x)' + todo.todoText;
            }
            else {
                todoTextWithCompletion = '( )' + todo.todoText;
            }
            todoLi.textContent = todoTextWithCompletion; 
            //the above line replaces this old line of code since it does not 
            //have the completed status in it.
            //todoLi.textContent = todoList.todos[i].todoText;    
    
            //todoLi.textContent = todoList.todos[i].todoText;
            todosUl.appendChild(todoLi);
     }
 }
};

Each li  element should contain .todoText
// In the var view object above we have created an Empty Li element but it 
//is blank so we add the following line of code.
//todoLi.textContent = todoList.todos[i].todoText;
//By changing the textContent property of Li elements and setting it to 
//todos array.todoText property.
Each li element should show .completed
/*var todoTextCompletion = '';
    if (todo.completed === true) {
                todoTextWithCompletion = '(x)' + todo.todoText;
            }
            else {
                todoTextWithCompletion = '( )' + todo.todoText;
            }
            todoLi.textContent = todoTextWithCompletion; 
             todosUl.appendChild(todoLi);*/
we add the above if statement and get results as
view.displayTodos();
.() completed should show up.//toggle this to completed changes the display to
.(x)  completed should show up.//shows an X in completed.
//===========================================================================//
//Version 8 object var handlers.
Escape from the console
/*Instead of running the app using our functions inside objects, we are going to
run the view.displayTodos() object after the var handlers, by adding it after every event.*/

var handlers = {
    //displayTodos: function() { 
      //  todoList.displayTodos();
    //},
    
    addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';// to empty the input box every time .
        var view.displayTodos();
    },


    changeTodo: function() {
            var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
            var changeTodoTextInput = document.getElementById('changeTodoTextInput');
            todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)
            changeTodoPositionInput.value = '';
            changeTodoTextInput.value = '';
             view.displayTodos();
        },

    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
         view.displayTodos();
    },

    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
         view.displayTodos();
        
    },
    toggleAll: function() {
        todoList.toggleAll();
         view.displayTodos();
    }
},

//HTML page
Todo List

Display Todos   Toggle All

Add

Change Todo

Delete

Toggle Completed

/* for each item added in the Todos we can hit add, change, delete and toggle all by clicking
by which the event handler (var handlers object) will take control and run the 
view object(having display Todos function inside it).
Finally we are not using the console anymore.
Also we have deleted the displayTodos function from the var handlers object.*/


// Next in Version7 we had the todoList object which had the add,delete,change
//and toggle methods that called the this.displayTodos.
//Now we are manipulating the DOM  with the view object event handlers, so we can delete
// the this.displayTodos at the end of all the methods and finally get rid of 
// the displayTodos function.

/*Version-9 dynamic list display

1)Finally we have the var todoList object with todos array and functions inside it 
that add, change , delete or toggle the items in the todos array.Accounts
2)Second we have the var handlers object that handle user interaction (by 
accessing the DOM).On click events after the button is clicked.
3)Third we have the var view object which shows the user what the todoList
looks like and does nothing else.
4)We have an organised way of coding.*/

var view = {
    displayTodos: function() { //creates a dynamic list display.
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = "";
        for (var i = 0; i < todoList.todos.length; i++) { //iterate through the todoList array to grab the items.
            var todoLi = document.createElement('li'); //creates a list element.
            var todo = todoList.todos[i]; //create a variable to access each todo item for copletion if/else statement. Saves us from typing todoList.todos[i] repeatedly.
            var todoTextWithCompletion = "";

            if (todo.completed === true) {
                todoTextWithCompletion = "(x) " + todo.todoText;
            }
            else {
                todoTextWithCompletion = "( ) " + todo.todoText;
            }

            todoLi.textContent = todoTextWithCompletion; //replaces line below and includes completion info.
            // todoLi.textContent = todoList.todos[i].todoText; //adds the todoText to the list item
            todosUl.appendChild(todoLi); //places the list element with text into the unordered list.
        }
    }
};










