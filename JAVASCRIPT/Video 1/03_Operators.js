console.log("Operators");
//Booleans & Comaprison Operator

// boolean = True or False

let num1 = 7;
let num2 = 8;



// == vs  ===
console.log(num1 == num2)
// It checks value

// ===
console.log(num1 === num2)
// It checks Value as well as Datatype

// !=  vs !==

console.log(num1 !== num2)


let age = 18;
if(age >= 18)
{
    console.log("You can Vote");
}
else
{
    console.log("You Cannot Vote");
}


let num = 3;
if(num % 2 == 0)
{
    console.log("Even Number");
}
else
{
    console.log("Odd Number");

}

//truthy and falsy value

//falsy value
//false
//""
// null
// undefined
//0

// // truthy Value
// 1,-1
// "abc"

let firstName = "";
if(firstName)
{
    console.log(firstName);
}
else{
    console.log("firstName is kind a empty");
}

//ternary OPerator

// ternary operator/ conditional OPerator

let ages = 1;
let drink = ages >= 5 ? "coffee" : "milk"; 
                    // TRUE        FALSE
console.log(drink);



// and & or Operator
let firstNamer = "omkar";
let ager = 22;

// if(firstName[0] === "o")
// {
//     console.log("Your name starts with H");
// }

// if(age > 18)
// {
//     console.log("Age is Greater then 18");
// }

if(firstNamer[0] == "o" && ager>18)
{
    console.log("Name starts with H and above 18");
}
else{
    console.log("Inside Else");
}

// Nested if Else

// winning number = 19

// 19 you guess is right50
// 17 too low 
// 20 too innerHeight

let winningNumber = 19

//prompt takes input in string
// let userGuess= +prompt("Guess a Number");
// console.log(typeof userGuess, userGuess);


// if(userGuess === 19)
// {
//     console.log("Your guess is right");

// }
// else if(userGuess < 19)
// {
//     console.log("Your number is too Low");
// }
// else if(userGuess > 19)
// {
//     console.log("Your number is too High");
// }
 let day = 5;

switch (day) {
    case 1 :
        console.log("Sunday")
        break;
    
    case 2 :
        console.log("Monday")
        break;

    case 3 :
        console.log("Tuesday")
         break;
    
     case 4 :
        console.log("Wednesday")
        break;
            
    default:
        console.log("No weekDays")
        break;
}

//
// whileloop
let a = 1;
while(a<=10)
{
    console.log(a);
    a++;
}
console.log("Done");


// let b = 1;
// let total = 0;
// while(b<=10)
// {
//     total = total+b;
//     b++;
// }
// console.log(total);

let num = 10;
let total = (num*(num+1)/2);
console.log(total);

