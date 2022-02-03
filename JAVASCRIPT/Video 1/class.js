class Animal
{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }

    eat()
    {
        return`${this.name} is eating`;
    }

    isSuperCute()
    {
        returnthis.age <= 1;
    }

    isCute()
    {
        return true;
    }
}

const animal1 = new Animal("rajapalyam","2");
console.log(animal1);
console.log(animal1.eat());


// Create dog class

class Dog extends Animal{
    constructor(name,age,speed)
    {
        super(name,age);
        this.speed = speed;
    }
    run()
        {
            return `${this.name}speed is ${this.speed}kmph`
        }
    
}

const tommy = new Dog("tommy",3,67);
console.log(tommy);
console.log(tommy.eat());
console.log(tommy.run());