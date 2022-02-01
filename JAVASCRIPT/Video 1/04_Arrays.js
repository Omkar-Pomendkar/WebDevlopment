//Primitive vs Reference Datatypes
// Primitive Datatype - We can Change Value
// Reference Datatype - We cannot change Value
//This is PRimitive Type
console.log("PRIMITIVE TYPE");
let num1 = 6;
let num2 = 7;
console.log("value of Num1 is"+num1);
console.log("value of Num2 is"+num2);
num1++;
console.log("value of Num1 is"+num1);


// This is Refrence Type
console.log("REFRENCE TYPE");
let array1 = ["item1","item2"];
let array2 = array1;
console.log("array1 : " + array1);
console.log("array2 : " + array2);
array2.push("item3");
console.log(array2);
console.log(array1);


console.log("Array");
// Into to Array
// Array is REfreence Type

// let fruit = "Apple";
// Ordered Collection of Items;


// how to Create Array
let fruits = ["orange","Apple","Mango"];
console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits.length);

let numbers = [1,2,3,4,5];
console.log(numbers);

let mixed = [null,undefined,1,1,"Array"];
console.log(mixed);

// let fruits = ["orange","Apple","Mango"];
// Array Indexing
fruits[1] = "KIWI";

console.log(typeof fruits);

// to Check Whether it is Array or NOt
console.log(Array.isArray(fruits));


// Array Operation
//push
fruits.push("pomogranate");
console.log(fruits);

// pop
let d = fruits.pop();
console.log(d);
console.log(fruits);

//unshift to add element in fruit
fruits.unshift("Banana");
console.log(fruits);

//shift
let removedFruit = fruits.shift();
console.log(removedFruit);
console.log(fruits);

//How to Clone Array

let array5 = ["a","b"];
// let array6 = array5;

let array10 = [].concat(array5);
console.log(array10);

let array6 = array5.slice(0);
console.log(array5 === array6);

// New way to Clone Array
// Spread Operator
let array12 = [...array5];
console.log(array12);
console.log(array5);

// How to Calculate Array
let number = [1,2,3,4,5];
let digits = [];

//For loop
for (let i = 0; i < number.length; i++) {
    //  let element = number[i];
    //  console.log(element);
    digits.push(console.log(number[i]));
}
console.log(digits);

// const 
const pi = 3.14;
// pi = 90;


// array is stored in heap memory
const fruit = ["mango", "apple"];  
fruits.push("banana");

console.log(fruit);

// Array Destructuring;
let name = ["omkar", "pomendkar"];

let name1 = name[0];
let name2 = name[1];

console.log(name1,name2);
 
let fruits1 = ["apple", "Grapes","banana","sustard apple", "orange"];
let fruits2 = fruits1.slice(2,3);
console.log(fruits2);
//this is destructuring ... (3 Dots)
let [a,b,...c] = fruits1;
console.log(a);
// console.log(b);
console.log(c);
