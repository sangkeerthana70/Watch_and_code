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




