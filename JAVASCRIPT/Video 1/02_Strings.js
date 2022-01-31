console.log("String in Javascript");
// String INdexing

let firstNames = "OMkar";
// O m k a r
// 0 1 2 3 4

console.log(firstNames);

//length of String
console.log(firstNames.length-1);

//String Methods
let subject = "       English   ";
console.log(subject.length);
console.log(subject.trim());
console.log(subject.toUpperCase());
console.log(subject.toLowerCase());
console.log(subject.slice(1,10));


//Type of Operator
let age = 18;
console.log(typeof age);

let name = "OMkar";
console.log(typeof name);


// Convert Number to String
 age = age +"";
 console.log(typeof age);
 
 
 //Convert STring to NUmber
 let newstring = (Number)("89");
 console.log(typeof newstring);
  
 //Template String
 console.log(` My name is ${name} and my Age is ${age}`);

//String Concatenation
let string1  = "17";
let string2  =  "10";
let string3 = +string1 + +string2;
console.log(string3);

console.log(typeof null)

//Big Int
let myNumber = BigInt(42342342343);
let newMyNumber = 2324234n;
console.log(myNumber*newMyNumber); 
console.log(typeof myNumber);
console.log(Number.MAX_SAFE_INTEGER);
