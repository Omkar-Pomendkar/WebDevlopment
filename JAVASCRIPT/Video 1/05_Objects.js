// Objects
// For Reallife Example Objects are needed
//which are Store in Key Value Pair
// Objects dont't have Index

// how to create Objects
// Object - Reference Types
// Object uses Curly Braces
//called as Literal
const person = {name : "Omkar",
                 age: 18,
                "person hobbies" : ["carrom", "footbal"]} ;
console.log(typeof person);

// console.log(person.name);
// console.log(person.age );
// console.log(person.hobbies);

// how to add keyvalue Pair to Objects
person.gender = "male";
console.log(person);

//bracket Notation
console.log(person["gender"]);
console.log(person["age"]);

person["person"] = "male";
console.log(person);

console.log(person["person hobbies"]);

const key = "email";
person[key] = "omkar@gmail.com";
console.log(person);


// for loop in Objects

const obj = {1:"one",2:"two",3:"Three"};
console.log(obj);

// for in loop
for(let i in obj)
{
    // console.log(i);                KEY
    // console.log(obj[i]);          VALUE
    // Key Value Pair
    // console.log(`${i} : ${obj[i]}`)    KEY:VALUE pair
    // console.log(i,":",obj[i]);


}

//Object.keys
// console.log(Object.keys(obj));
console.log(typeof (Object.keys(obj)));
const value = Array.isArray(Object.keys(obj));
console.log(value); 

//spread Operator in Objects
const obj1 = {key1 : "value1",
                key2 : "value2",
                key1 : "value59"
            } ;

            
const obj2 = {key1 : "value1",
    key3 : "value3",
    key4 : "value4"
} ;

console.log(obj1);
// const newObject = {...obj1,...obj2, key69:"Newvalue"};
const newObject = {..."abc"};
console.log(newObject);



//Object destructing
const band = {bandName : "Sunbun",
            famousSong : "Lovenavanti",
            year : 2000};
                
            // const bandName = band.bandName;
            // const famousSong = band.famousSong;
            // console.log(bandName,famousSong);

// let {bandName,famousSong} = band;
let {bandName,famousSong,...restProps} = band;
let {bandName:var1,famousSong:var2} = band;
console.log(var1,var2);
console.log(restProps);

// Objects inside Array
// very useful in real world Applications

const users = [
    {userId:1,firstName: 'omkar',gender:"male"},
    {userId:2,firstName: 'dinesh',gender:"male"},
    {userId:3,firstName: 'hitesh',gender:"male"},
];
console.log(users);

// const [user1,user2,user3] = users;
const [{firstName:user1firstName}, , {gender}] = users;

console.log(user1firstName);

// console.log(user1.firstName);
// // console.log(user2);
// console.log(user3.gender);




// for(let element of users)
// {
//     console.log(element.userId);
//     console.log(element.firstName);
// }