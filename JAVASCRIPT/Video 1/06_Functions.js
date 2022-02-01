// Funtions
console.log("Functions");

// function greet()
// {
//     console.log("Happy Birthday to You");
// }



function add(a,b)
{
    // console.log();
    return a+b;
}
const sum = add(80,0);
console.log(sum);
// console.log(undefined+undefined);

// function to check whether Number is Even Or ODD;

console.log("Even or Odd");
// let num = 10;
// function  isEven(num)
// {
//     if(num % 2 == 0)
//     {
//         return true;
//     }
       
//     return false;
    
// }

// let ans = isEven(1);
// console.log(ans);

// function to input String and Output Character

function Character(anyString)
{
    return anyString[0];
}

console.log(Character("abc"));

// Linear search 

// function linearSearch(target,arr)
// {
//     for(let i = 0; i<arr.length; i++)
//     {
//         if(arr[i] == target)
//         {
//             return i;
//         }
//     }
//     return -1;
// }
// target = 5;
// let arr = [1,2,3,4,5,6];
// let ans1 = linearSearch(target,arr);
// console.log(ans1);


// Converting Function to Function Expression

const linearSearch = function(target,arr)
{
    for(let i = 0; i<arr.length; i++)
    {
        if(arr[i] == target)
        {
            return i;
        }
    }
    return -1;
}
target = 5;
let arr = [1,2,3,4,5,6];
let ans1 = linearSearch(target,arr);
console.log(ans1);


// Arrow Functions

const greet= () => {
    console.log("Happy Birthday to You");
}

greet();

const isEven = num =>
{
    if(num % 2 == 0)
    {
        return true;
    }
       
    return false;
    
}

let ans = isEven(1);
console.log(ans);


//hoisting

// This is called Hoisting
hello();
function hello()
{
    console.log("HelloWorld");

}

// function inside function
const app= () =>{
    const myFunc = ()=>
    {
        console.log("Hello inside myFunc");
    }

    const sum = (a,b)=>
    {
        return a+b;
    }

    const mul = (a,b)=>a*b;
     
    
    console.log("Inside App");
    myFunc();
    console.log(sum(10,20));
    console.log(mul(10,20));
}

app();

      const myVar = "Value1";
 // lexical Scope
 function myApp()
 {
//  {      const myVar = "Value1";
     function myFunc1()
     {  
        //  const myVar = "value59";
        //  console.log("INside my FUnc")
        const myFun2 = () =>
        {
            console.log("Inside function2",myVar); 
        }
        myFun2();
        
     }
     console.log(myVar);
     myFunc1();
 }

myApp();

//block Scope & Function Scope

//let and const are block scope 
// var is a function scope

{
let firstname = "omkar";
console.log(firstname);
}

{
    const age = 18;
    console.log(age);
}

const newname = "java";
console.log(newname);


// DEfault Parameters
function addTwo(a,b = 0)
{
    // if(typeof b === "undefined")
    return a+b;
}
const ans3 = addTwo(4);
console.log(ans3);
// function addTwo(a,b)
// {
//     if(typeof b === "undefined")
//     return a+b;
// }
// const ans = addTwo(4);
// console.log(ans);




// //rest Parameters
// function newFunc(a,b,...c)
// {
//     console.log(`a id ${a}`)
//     console.log(`b id ${b}`)
//     console.log(`c id ${c}`)
//     console.log(c);
// }
// newFunc(4,5,6,7,8,9);



function addAll(...numbers)
{   let total = 0;
    for(let element of numbers )
    {
        total = total+element;
    }
    return total;
}
let ans6 = addAll(1,2,3);
console.log(ans6);

// console.log(total);
// console.log(typeof numbers);

//param Destructuring

//object
//react

const person = {
    firstname : "Omkar",
    age : 18,
    gender : "male"
}

// function printDetails(obj)
// {
//     console.log(obj.firstname);
//     console.log(obj.age);
//     console.log(obj.gender);
// }


//this is parameter Destucturing
function printDetails({firstName,age,gender})
{
    console.log(firstName);
    console.log(age);
    console.log(gender);
}
printDetails(person);

//callback function
//TAking Function as an Input and Callin it called as call back

function func()
{
    console.log("New Function");
}
function print(callback)
{   
    console.log("Hello World");
    callback();

    // console.log(a);

}
print(func);
// function print(a)
// {   
//     a();

//     // console.log(a);
//     // console.log("Hello World");
// }
// print([34,56,67]);

// function returning Function
function func1()
{
    function hello()
    {
        console.log("HelloWorld");
    }
    return hello;
}

const ans12 = func1();
ans12();