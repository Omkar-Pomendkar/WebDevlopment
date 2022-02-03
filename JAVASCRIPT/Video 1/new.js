function hello()
{
    console.log("helloWorld");
}

// javascript is combination of FUnction & Object

// console.log(hello .name);

// You can add your Own Properties

hello.myOwnProperty = "value";
console.log(hello.myOwnProperty);

// name property tells function Names
// function provides more useful Property


//function gives us free Space (Object) called as prototype

console.log(hello.prototype); /// Object 
 // only Functions  provides prototype Property


 if(hello.prototype)
 {
       console.log("Protype is Present")
    }
    else
    {
     
        console.log("Protype is absent")
    }

// hello.prototype.abc = "abc";

hello.prototype.sing = function ()
{
    return "sing";
};

console.log(hello.prototype.sing());


// const userMethods = {
//     about : function (){
//         return `${this.firstName} is ${this.age} years`;
//     },
//     is18 : function()
//     {
//         return this.age >= 18;
//     },
//     sing: function()
//     {
//         return `sing`;
//     },
//     // newFunction : function()
//     // {
//     //     return `doit`;
//     // }

// }

function createUser(firstName, lastName,email,age,address)
{
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // here the address is stored Object is not created every time
    return user;
   
}
// console.log(createUser.prototype);

// Now Adding above all Objects in createUser Function


// hello.prototype.sing = function ()
// {
//     return "sing";
// };

createUser.prototype.about = function (){
    return `${this.firstName} is ${this.age} years`;
}

createUser.prototype.is18 = function (){
    return this.age >= 18;
}
    

createUser.prototype.sing = function (){
 return `sing`;
}

const user1 = createUser('omkar','pomendkar',"omkar@gmail.com",'18','myaddress');
// const user2 = createUser('omkar','pomendkar',"omkar@gmail.com",'18','myaddress');
// const user3 = createUser('omkar','pomendkar',"omkar@gmail.com",'18','myaddress');
// console.log(user1);
const is18 = user1.is18();
console.log(is18);
console.log(user1);
console.log(user1.about());


//NEW KEYWORD
function Student(firstName, age)
{
    this.firstName = firstName;
    this.age = age;
}

Student.prototype.about = function()
{
    console.log(this.firstName,this.age);
}
const s1 = new Student("omkar",22);
console.log(s1.about());

//new keyword
// 1) empty object this = {}
// 2) return this