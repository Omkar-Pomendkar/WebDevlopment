// Strings
const name = "Omkar";
const greeting = "Good Morning";
console.log(name + ' '+greeting);
let html;
html = "<h1>This is Heading</h1>";
// html = html.concat("HEllo");
// console.log(html);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
console.log(html.indexOf("h1"));
console.log(html.lastIndexOf("h1"));
console.log(html.slice("h1"));
console.log(html.charAt(5));
console.log(html.endsWith('hello'));
console.log(html.includes('Heading'));
console.log(html.substring(1,7));


// Array Destructuring
const myArr = ["value1","value2"];
let myVar1 = myArr[0];
let myVar1 = myArr[1];

console.log(myVar1);
console.log(myVar2);