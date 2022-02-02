//Methods in Javascript
// forEach , Map , Filter , Reduce


//Array Methods

const numbers = [4,2,5,8];

// function intoTwo(number,index)

// {

//     console.log("index is ",index);
//     console.log("number is ",number*2);
// }
// intoTwo(numbers[1],1);
// intoTwo(numbers[2],2);
// intoTwo(numbers[0],0);


// function intoTwo(number,index)

// {
//     console.log("index is ",index,"number is ",number*2);
//     // console.log("number is ",number*2);
// }
 
// numbers.forEach(intoTwo)
numbers.forEach(function(number) 
{
    console.log(number*2);
}) 


// MAP Method

const no = [3,4,6,1,8];

const square = function(number)
{
    // console.log(number*number);
    return number*number;
}


const squareNumber = no.map(square);
console.log(squareNumber);




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


//Filter Method

const newnumber = [1,2,3,4,5,6,7,8,9];

const isEven = function(number){
    return number%2 == 0;
}
// const evenNumbers = newnumber.filter(isEven);
// console.log(evenNumbers);


//Arrow Function
const oddNumbers = newnumber.filter((number)=>
{
    return number%2 !== 0;
});
console.log(oddNumbers);


//Reduce Method
const nober = [1,2,3,4,5,6];

// aim: Sum of all the Number 
// accumlator  ,current value , return
//      1           2               3
//      3           3               6
//      6           4              10      
//      10          5               15
//      15          6               19 


const sum = numbers.reduce((accumlator,currentvalue)=>{
        return accumlator+currentvalue;
},100);
// here initial value is 100

console.log(sum);

// const usercart = [
//     {productId : 1, productName : "Mobile", price : 1200},
//     {productId : 2, productName : "Laptop", price : 2200},
//     {productId : 3, productName : "TV", price : 1500}
// ]
// const total = usercart.reduce((totalPrice,currentProduct)=>{
//     return totalPrice + currentProduct.price ;

// },0);

// console.log(total); 

// Sort Method
 //expected ascending
 // String is Sorted using ASCII CODE
const asc = [12,34,21,6,2,90];
let newasc = asc.sort();
console.log(asc);
console.log(newasc);
// If Capital Letter it will show Capital Letter First
// small letter number first
const userName = ["A","omkar","mohit","nitish"];
userName.sort();
console.log(userName);

// Reaching Expected Output
const sorts = [12,34,1,23,78,99,65];
sorts.sort((a,b)=>{
    return a-b;   ascending
    // return b-a;  descending
});
//In positive case
// 1200-400
// b then a 
// firt 400 & then 1200

//In negative case
// first a then b
console.log(sorts);

const product = [
    {productId : 1, productName : "Mobile", price : 1200},
    {productId : 2, productName : "Laptop", price : 22000},
    {productId : 3, productName : "TV", price : 1500}
]

// sort low to high
const lowToHigh = product.slice(0).sort((a,b)=>{
    return a.price-b.price;
    // return b.price-a.price;
});
console.log(lowToHigh);


// find Method
// It shows first occurence only
const myArray = ["omkar", "cat","dog","flowerhorn"];

// function isLength(string)
// {
//     return string.length === 3;
// }
// const ansd = myArray.find(isLength);
// console.log(ansd);


const ansd = myArray.find((string)=>string.length === 3);


console.log(ansd);

// const ans89 = isLength("dog");
// console.log(ans89);


// Every Method ()
const nos = [2,4,6,8,10];

function isEvens(number )
{
    return number %2 == 0;
}

// call back Function
const aans = nos.every(isEvens);
// const aans = nos.every((number)=> number%2==0);
console.log(aans);


// Realistic Example
// making use of Product

//check every product is less then 30000

const g = product.every((cartItem)=>cartItem.price < 21000);

console.log(g);


//some method

// const no_s = [3,5,10,9];

// // kya ek bhi number asa hai jo even hai
// //true

// const t = no_s.some((number)=>number%2==0);
// console.log(t);


//Realistic Example
const r = product.some((cartItem)=>cartItem.price > 1000)
;
console.log(r);

//fill Method
// Create an Array and fill he array by -1 10 Elements

// const myArrayt = new Array(10).fill(0);
// console.log(myArrayt);

// const myArrays = [1,2,3,4,5,6,7,8,9,10];
// const a = myArrays.fill(0,3,6);
// console.log(myArrays);
// console.log(a);


///Splice Method
const myArrays = ["a1","a2","a3"];

//delete
// myArrays.splice(1,3);
// console.log(myArrays);

// //insert
// myArrays.splice(1,0,"inserted Item");
// console.log(myArrays);

// INsert & Delete Together

myArrays.splice(0,1,"a6","a7");
console.log(myArrays);