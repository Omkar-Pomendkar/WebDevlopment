// Map Object
// Map is an Iterable

// Stores data in Ordered fashion

// Stores key VAlue pair (like Objects)
// duplicates keys are not allowed like Objects

// different between maps & Objects

// Objects can only have String or Symbol
// as key

//in maps u can use anything as a key
// like array ,number ,String


// keys are always in String
// key -> Symbol
// const person = {
//     firstName : "harshit",
//     age : 8,
//     1: "one"
// }
// It is called Object Literals

// console.log(person.firstName);
// console.log(person.["firstName"]);
// console.log(person.age);

// for(let key in person)
// {
//     console.log(typeof key);
// }
/*
The biggest Difference in Object and Map is
    In Object key can be symbol or String but
    in  Map   Key can be anything(Datatype) make use of get Method
    Object - for in loop
    Map - for of loop
    */
// const person = new Map();
//            key        value
// person.set('firstName','Omkar');
// person.set('age',27);
// person.set(1,'one');
// person.set([1,2,3,4],'one two three');
// person.firstName('firstName','')

// console.log(person);
// console.log(person.keys());
// console.log(person.values());
// console.log(person.get('age'));

// for(let key of person.keys())
// {
//     console.log(key,typeof key);
// }

// for(let [key,value] of person)
// {
//     console.log(Array.isArray(key));
//     console.log(key,value);
// }


//Realistic  Example of

const person1 = {
    id : 1,
    firstName : 'Omkar'
}


const person2 = {
    id : 1,
    firstName : 'Omkar'
}

const extraInfo = new Map();
extraInfo.set(person1,{age: 8 , gender : 'male'});
extraInfo.set(person2,{age: 18 , gender : 'female'});
// console.log(extraInfo);
console.log(extraInfo.get(person1).age);
console.log(extraInfo.get(person2).gender);

// console.log(person1.id);


//Optional Chaining
let user;
const user = {
    firstName : "Omkar",
    address : {houseNumber : '1234' }
}
console.log(user?.firstName);
console.log(user?.address?.houseNumber);