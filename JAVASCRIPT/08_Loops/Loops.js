// const element = array[i];
// for (let i = 0; i < 100; i++) {
    
//     console.log(i);
// }
// let a = 0;
// while (a < 10) {
//     console.log(a);
//     a++;
//     // if(a == 10)
//     // {
//     //     break;
//     // }
//   }

  let i = 1;
do {
    if(i == 5)
    {
        break;
    }
    console.log(i);
    i++;
} while (i<10);
console.log("Continue"); 

let arr = [23,45,67,8,9,10];
arr.forEach(function (element) {
    console.log(element);
})
let obj=
{
    names : "Omkar Pomendkar",
    os : "Ubuntu",
    types : "Two" 
}

for(let key in obj)
{
    console.log(`The ${key} of Object is ${obj[key]}`);
}
// console(obj);
