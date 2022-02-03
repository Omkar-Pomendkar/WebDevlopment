///itreable 
// jispe hum For loop laga Sakhe
// String & Array are Iterable

// const firstName = "Omkar";
// for(let char of firstName)
// {
//     console.log(char);
// }

const items = [1,2,3,4,5,6,7];
for(let item of items)
{
    console.log(item);
}


// checking if Object is able to do or not
// const users = 
// {
//     name : "Omkar",
//     age : 18,
// }
// for (let u of users)
// {
//     console.log(u);
// }




// array like Object
// jinke pass length Propert Hoti hai
// aur jinko um index se access karte hai
// example :- String

const firstName = "Omkar";
console.log(firstName.length);
console.log(firstName[2]);


//Sets (it is Itreable)
//Store Data
// Sets also have its own Method
// NO index based Access
// ORder is not Guarenteed
// unique items only (no duplicate items are allowed)
// DIffrenet datatypes can be Stored in Array


const number = new Set([1,2,34,34,5,6,7,9]);
console.log(number); 
number.add(90);
// To check whether elements are there in 
number.has(34);
console.log(number);    undefined
// console.log(number[2]);    undefined

// for Each Loop
number.forEach((number)=> console.log(number));

// when to use Set
// When u have Unique Values


//