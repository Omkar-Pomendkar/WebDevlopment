const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

// const obj2 = {
//     key3 : "value3"
// }

// Object Creation Second Method


// official ecmascript Documentation

//[[prototype]] & __proto__ both are same 
// 

//&

// protoype is another thing


const obj2 = Object.create(obj1);
obj2.key3 = "value3";
obj2.key2 = "unique";
// return 
//  console.log(obj2);
console.log(obj2);
console.log(obj2.__proto__);

// Let's see now Prototype

