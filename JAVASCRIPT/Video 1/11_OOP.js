// proto , prototype ,class
// const user = {
//     firstName  : "Omkar",
//     lastName : "Pomendkar",
//     email : "Omkarpomendkar100@gmail.com",
//     age : 2,
//     address : "6/48 Sunder Nagar Mahakali Caves Road Andheri East ",
//     about : function (){
//         return `${this.firstName} is ${this.age} years`
//     },
//     is18 : function()
//     {
//         return this.age >= 18;
//     }
// }
// const aboutUser = user.about();
// console.log(aboutUser);


// function -> Object(that function create object)
// 2) add key value pair
// 3) Object ko return karega
// 4) Create another Method
const userMethods = {
    about : function (){
        return `${this.firstName} is ${this.age} years`;
    },
    is18 : function()
    {
        return this.age >= 18;
    },
    sing: function()
    {
        return `sing`;
    },
    newFunction : function()
    {
        return `doit`;
    }

}

function createUser(firstName, lastName,email,age,address)
{
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // here the address is stored Object is not created every time
    return user;
   
}
// when users  will become that much time functions will become 

const user1 = createUser('omkar','pomendkar',"omkar@gmail.com",'18','myaddress');
// const user2 = createUser('omkar','pomendkar',"omkar@gmail.com",'18','myaddress');
// const user3 = createUser('omkar','pomendkar',"omkar@gmail.com",'18','myaddress');
// console.log(user1);
// const is18 = user1.is18();
// console.log(is18);

console.log( user1.about());
console.log( user1.sing());
console.log(userMethods);

