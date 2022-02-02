//callback Function
function func2(name)
{
    console.log("Inside Function 2");
    console.log(`Your Name is ${name}`);
}
function func(callback)
{
    console.log("Inside a Function");
    callback("omkar");
    // a();
}
// func({name : "omkar",age : 21});
// func("omkar"); 
func(func2);


//function returning function

function func3()
{

    function newfunction()
    {
        // console.log("HelloWOrld");
        return "hello World";
    }
    return newfunction;
}

const ans = func3();
//here the Variable will become function
// console.log(ans);
let ans2 = ans();
console.log(ans2);

// Array Function

const numbers = [4,2,5,8];

function print()
{
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        console.log(`index is ${i} value is ${element}`);
        
    }
}
print();
numbers.forEach(element => {
    console.log(`index is  value is ${element}`);
    
});

//MAP Method
const num = [3,4,6,1,8];

const square = function(number)
{
    console.log(number*number);
    // return number*number;
}
//map function always makes new Array

// const newNumber = num.map(square);
// console.log(newNumber);



// const newNumber = num.map(function(number)
// {
//     return number*number;
// });
// console.log(newNumber);



// const newNumber = num.map((number,index)=>{
//     return `index is${index} value is ${number*number}`;
// });
// console.log(newNumber);

const users = [
           
        {firstName : "omkar" , age : 18},
        {firstName : "siddhesh" , age : 36},
        {firstName : "deepak" , age : 19},
        {firstName : "jotesh" , age : 50},
    
]

const firstNames = users.map((user) =>{
    return user.firstName;
});

console.log(firstNames);