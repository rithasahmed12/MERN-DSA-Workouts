
// function declaration
function fnDeclaration(name) {
    return `Hello, ${name}!`;
}

// function expression 
const fnExpression = function(name) {
    return `Hello, ${name}!`;
};

// Arrow function
const fnArorw = (name) => {
    return `Hello, ${name}!`;
};

// generator function
function* generateSequence(){
    yield 1;
    yield 2;
    yield 3;
}

const generator = generateSequence();
// console.log(generator.next().value);
// console.log(generator.next().value);

// factory function
function createPerson(name,age){
    return {
        name:name,
        age:age,
        greet:function(){
            console.log(`Hello my name is ${this.name} & I am ${this.age} years old`)
        }
    }
}

const person = createPerson("Rithas", 23);
// person.greet();

// callback function & Higher order function
// in this fetch data is higher order function and getData is a callback function
function fetchData(callback){
    setTimeout(()=>{
     let data= "facebook all data"
     callback(data)
    },3000)
}

function getData(data){
    console.log("Data fetched:",data);
}

// fetchData(getData);


// currrying function
function currying(a){
    return function(b){
        return a+b;
    }
}

const add5 = currying(5);
// console.log(add5(2));


// constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Create a new instance of Person using the constructor function
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// console.log(person1); // Output: Person { name: 'Alice', age: 30 }
// console.log(person2); // Output: Person { name: 'Bob', age: 25 }

// Function composition
function addOne(x){
    return x+1;
}
function double(y){
    return y*2;
}
function fnComposition(x){
    return double(addOne(x));
}
// console.log(fnComposition(10));


// Abstract Function
function fnAbstract(fnOperation,x,y){
    return fnOperation(x,y);
}
function add(x,y){
    return x+y
}
function multiply(x,y){
    return x*y;
}
// console.log(fnAbstract(add,10,15));
// console.log(fnAbstract(multiply,3,9));


// Closure
function greetingGenerator(greet){
    return function(name){
        console.log(`${greet},${name}`);
    }
}

let greetInEnglish = greetingGenerator("Hello");
let greetInMalayalam = greetingGenerator("Namaskaram");
greetInEnglish("Rithas");
greetInMalayalam("Ahamed");


// Shadowing
let x = 10; // Outer variable

function foo() {
    let x = 20; // Inner variable, shadows outer variable
    console.log(x); // Outputs 20
}

foo();
console.log(x); // Outputs 10
