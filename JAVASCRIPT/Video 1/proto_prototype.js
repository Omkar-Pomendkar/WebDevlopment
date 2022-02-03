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

