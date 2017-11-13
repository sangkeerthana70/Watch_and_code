'item1', 'item2', 'item3'
["item1", "item2", "item3"] //array
// a place to store the todos array
var todos = ['item1', 'item2', 'item3']

todos
// to display the todos array
//console.log('hello there')
console.log('hello there', 'Anu')

var todos = ['item1', 'item2', 'item3']
//console.log(todos)
//console.log('My todos:', todos)
 

// command to add or push items into the end of array
todos.push('item4', 'item5')
//console.log(todos)

// to edit or change the item in the todos list

todos[0] = 'item1 updated'
//console.log(todos)

// to delete the items in the todos list
todos.splice(0,1) // 0 is the index value and 1 is the number of items to be deleted.
//console.log(todos)

todos.splice(3, 1)
console.log(todos)
