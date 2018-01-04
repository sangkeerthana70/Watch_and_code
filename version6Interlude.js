Javascript comparison with Primitives

/*Objects(can be as complex as you want)
//Eg:arrays, functions, todoList
Primitives(building blocks)
//Eg:String, number, boolean, undedfined(value that has not been set)
//and null(Nothing Eg:test score='null'and then add a value after).

Comparisons with primitive Datatypes
Eg: comparing numbers
100 === 100;
true
Eg: Comparing strings
'gordon' === 'gordon';
true
'gordon1' === 'gordon';
false 
Eg: Comparing Booleans
true === true;
true
true === false;
false
false === false;
false
Eg: Comparing undefined
undedfined === undedfined
true
Eg: Comparing null
null === null
true
*/

Comparisons with Objects
{} === {}//imagine these objects as two separate houses that look identical
//yet they are different, hence it returns false. As houses are identical and have 
//different addresses so are the objects as they have different memory addresses.
false
[1,2,3]===[1,2,3]
false

 To compare the same object
 var houseA= {};// memory address is important while comparing objects.
 houseA === houseA
 true
 
How are Primitives and Objects stored inside of Variables?

var myPrimitive = 10;
var myObject = {name:'Gordon'};

will be stored as 
myPrimitive 10
myObject (memory address 1)=> {name:'Gordon'}

Accessing a property in an object and changing it,
EG 1:var Myhouse = {color:'blue'};
     myHouse.color = 'red';

Eg 2:var Myhouse = {color: 'blue'};
     var color = myHouse.color;
     color = 'red';
     
     myHouse => memory address => {color: 'blue'}
     color = 'red';
     //finally the color in myHouse objects stays blue and the color inside 
     //the variable color stays red.
     
Eg 4: var myHouse1 = {color: 'blue'};
      var myHouse2 = myHouse1;
      myHouse2.color = 'red';
      
      
      myHouse1=> memory address 1 => {color: 'blue'}
      myHouse2=> memory address of 1 as well //so it has the same address and
      //object as myHouse1.
      
      myHouse1.color = red
      myHouse2.color = red//since they both have the same memory address when 
      //myHouse2.color is changed myHouse1's color also changes.
     
 Eg 5: var myHouse1 = {color: 'blue'};
       var myHouse2 = {color: 'blue'};
       myHouse2.color = 'red';  
       
       myHouse1=> memory address 1 => {color: 'blue')
       myHouse2=> memory address 2 => {color: 'blue')
       myHouse2.color changes to red //since it has a different memory address.
       
       myHouse1.color = 'blue';
       myHouse2.color = 'red';
      
      
      
     
     
     
     
     












