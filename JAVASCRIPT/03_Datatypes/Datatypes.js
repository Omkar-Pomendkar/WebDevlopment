// 1) Primitive Datatype  - Stack (String, Numbers, boolean,null,undefined,symbol)
// 2) Reference Datatype  - Heap  ( Reference,object literals, Function,Dates )

// Primitive Datatypes


//String
let cool = "OMKAR";
console.log("My String is " +cool);
console.log("My Datatype is " +(typeof cool));

//Numbers
let marks = 50;
// console.log("My Marks are " +marks);
console.log("My Datatype is " +(typeof marks));

//Null
let nullVar = null;
// console.log("My Null Variable" +nullVar);
console.log("My Datatype is " +(typeof nullVar));

// Boolean
let vars = true;
console.log("My Datatype is "+ (typeof vars));

//Undefined
let names ;
console.log("My Datatype is "+(typeof names));

// Reference Datatypes

//Arrays
arr = [1,2,3,4,5];
console.log("My Datatype is " + (typeof arr));

//Object Literals
let stMarks = 
{
omkar : 10,
rohan : 30,
dinesh : 50
}
console.log(stMarks)

//Function
function findName() {
    
}
console.log(typeof findName);

//Dates
let date = new Date();
console.log(typeof date);
