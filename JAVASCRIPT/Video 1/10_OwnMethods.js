// Create your own Methods
// function inside objects
function personInfo()
    {
        console.log(`Person name is ${this.firstName} & person age is${this.age}`);
        // console.log(this); 
    }
const person1 = {
    firstName : "omkar",
    age : 9,
    about : personInfo
}

const person2 = {
    firstName : "dinesh",
    age : 90,
    about : personInfo
}

const person3 = {
    firstName : "alpesh",
    age : 80,
    about : personInfo
}
// console.log(person.about);
// person.about();
person1.about();
person2.about();

console.log(window);

function myFunc()
{
    console.log("Hello World");
}
// myFunc();

window.myFunc();

function about(hobby ,favMusician){
    console.log(this.firstName,this.age,hobby,favMusician);
}
// call apply bind
const user1 = {
    firstName : "OMKAR",
    age :8,
    
}

const user2 = {
    firstName : "Surabhi",
    age : 3
}
// call 
about.call(user1 ,"guitar", "Musician");
// user1.about.call();
// user1.about.call(user1);

//apply 
about.apply(user1,['guitar', 'lalo']);

//bind
//returns function stores init
const func = about.bind(user1 , "guitar", 'do it');
func();

// don't do this Mistake        





//  short Syntax
const user6 = {
    firstName : "OMKAR",
    age :8,
    about : function(){
        console.log(this.firstName,this.age);
    }
    
}

const user3 = {
    firstName : "OMKAR",
    age :8,
    about(){
        console.log(this.firstName,this.age);
    }
    
}
user3.about();