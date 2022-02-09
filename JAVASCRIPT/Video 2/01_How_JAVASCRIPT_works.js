// Compilation
// code execution




// Why Compilation


// How javascript code executes


// What is global execution context  ?
// What is local execution context  ?

//closures

// JAVASCRIPT - is synchronus programing Language & Single Threaded

console.log(this);   // value is set to window Object
console.log(window);
console.log(firstName);
var firstName = "omkar";
console.log(firstName); 
// console.log(firstName);

// HOISTING

// Closures
// analyze/
// real example

// function can return function

function printFullName(firstName, lastName)
{
    function printName()
    {
        console.log(firstName,lastName);
    }
    return printName;
}

const ans = printFullName("Omkar","Pomendkar");
// console.log(ans);
ans();