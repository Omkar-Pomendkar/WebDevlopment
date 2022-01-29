let marks = [1,2,3,4,5,67,8,10];
let fruits = ["ornage" ,"apple","baanan"];
const mixed = [10, "kiwi" ,70 ,"Grapes", [1,2,"Grapes"] ];
// console.log(mixed);

// const arr = new Array(10,"orang","banana",78);
// console.log(arr);
// console.log(fruits[0]);
// console.log(mixed.length);
// console.log(Array.isArray(marks));
// marks[0] = 89;
console.log(marks);

let value = marks.indexOf(3);
console.log(value);

//Mutating || Modifing Array
marks.push(40);
marks.unshift(401);
marks.pop();
marks.shift();
marks.splice(1,3);
marks.reverse();
marks = marks.concat(fruits);
console.log(marks);