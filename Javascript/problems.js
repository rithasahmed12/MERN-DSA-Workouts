//  1. make a function that adds and return any number/amount of parameter

function add(...num){
    return num.reduce((acc,curr)=> acc+curr);
}

// 2. flatMap() example
const arr = [[1, 2], [3, 4], [5, 6]];

const mapFunc = (subarray) => subarray.map((x)=> x) ;

const result = arr.flatMap(mapFunc);

// console.log(result);

// 3. Call,Apply,Bind

function shortIntro(place){
    console.log(`My name is ${this.name},I am from ${place}.\nI am ${this.age} years old.`);
}

const person1 = {name:"Rithas",age:23};
const person2 = {name:"Ahmed",age:10};
const person3 = {name:"Kutty",age:100};

// shortIntro.call(person1,"kondotty");
// shortIntro.apply(person2,["kizhisseri"]);
// const bind = shortIntro.bind(person3,"Chenganeeri")
// bind()

// 4. IIFE
(function substract(x,y){
    console.log(x-y);
})(10,5)

// 5. function to generate 6 digits otp
function otpGenerator(){
    let otp = Math.ceil(Math.random()*1000000);
    return otp
  }
  
//   console.log(otpGenerator())

// 6.parsing JSON data from url (fetch)
async function fetchData(){
    let result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await result.json();
    console.log(data)
  }
  
//   fetchData()

// 7.filter strings from array
let array = [12,"hi",45,"rithas",43,"Mango"];
let strings = array.filter((element)=> typeof element === "string" )
// console.log(strings);

// 8. Extract Digits from string
let str = "Hel123lo4";
str = str.split("");
console.log(str);
let digit = str.map(Number).filter((element)=> !isNaN(element) );
// console.log(digit);

// 9.remove object keys that begin with a vowel
let person = {name:"Rithas", age:22, Identity:"Lalu", Location:"India"};
let vowels = /^[aeiou]/i
for(let key in person){
    if(vowels.test(key.charAt(0))){
        delete person[key];
    }
}
// console.log(person);

// 10. generator: multiples of given number endlessly
function* multiplicationTable(x){
    for(let i=1 ; i<Infinity; i++){
        yield i*x;
    }
}
let iterator = multiplicationTable(5);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);


// 11.reduce(): count occurrences of value
const arrays = [1, 2, 3, 2, 1, 3, 2];
const valueToCount = 2;

const count = arrays.reduce((acc, val) => {
 if (val === valueToCount) {
    return acc + 1;
 }
 return acc;
}, 0);

console.log(count); // Output: 3
