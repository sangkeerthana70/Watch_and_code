/*Refactoring improves the non-functional attributes of the software.
It is the process of restructuring existing computer code -changing the fac
toring without changing its
external behaviour*/
// We are going to get rid of the id's in the HTML for buttons and also rewrite 
//the Javascript code to get rid of event handlers and instead add an onclck
//function name in the HTML file itself.
//Version7 had a onclick enent handler and document.getElement by id which we are 
//replacing as follows
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









