// 1. 4d array , find count of zero
let arr = [[0,1,0],[0,1,0],[0,[1,0]],[0,1,0,[0,1,[0,1]]]];

function countZero(arr){
 let count = 0;
 
 function traverse(array){
    for(let item of array){
    if(Array.isArray(item)){
        traverse(item);
    }else if(item === 0){
        count++
    }
}
 }
 traverse(arr);
 return count;
}

// console.log(countZero(arr));

// 2.-print the char in the count of preceeding number in a string\
let string = "a7b12c8f2";

function printPreceedingCharBeforeNumber(string){
    let number = "";
    let char = "";
    for(let i=0 ; i<=string.length; i++){
        if(string[i] > -1){
            number += string[i] 
        }else{
            if(char && number){
                for(let i=0 ; i<number; i++){
                    console.log(char);
                }
                char = '';
                number = ''
            }
             char += string[i];
        }        
    }
}
// printPreceedingCharBeforeNumber(string); 


// 3. Check number is palindrome

let number = 122;

function checkNumberPalindrome(realNumber){
    let number = realNumber;
    let reverseNumber = 0;
    while(number){
        let lastNumber = number % 10;
        number = Math.round(number/10);
        reverseNumber = reverseNumber*10+lastNumber 
    }
    return realNumber === reverseNumber;
}

// console.log(checkNumberPalindrome(number));

// 4.Check string is palindrome using recursion

let word = "MalayalaM";

function isStringPalindrome(word){
    function reverse(string){
    if(string.length < 1){
        return string;
    }

    return reverse(string.slice(1))+string[0];
}
    return reverse(word) == word; 
}

// console.log(isStringPalindrome(word));

// 4.Reverse array using recursion

function reverseArray(arr,start=0,end=arr.length-1){
    if(start >= end){
        return arr;
    }

    [arr[start],arr[end]] = [arr[end],arr[start]];

    return reverseArray(arr,start+1,end-1);
}

// console.log(reverseArray([1,2,3,4,5,6,7]));

// 5.-const arr=[2,4, 54, 67, 213, 45,89,21,6,3,67,12,56,232]
// const result=[{a:2,b:[4]},{a:54,b:[67,213]},{a:45,b:[89,21,6]},{a:3,b:[67,12,56,232]}]

const array=[2,4, 54, 67, 213, 45,89,21,6,3,67,12,56,232,555,23]

let subArray = [];
let valueCount = 1;
let output = [];

for(let i=0 ; i<array.length; i+=valueCount){
    let obj = {a:0,b:[]};
    // console.log(i);
    subArray = [];
    obj.a = array[i];
    for(let j=i; j<i+valueCount; j++){
        if(array[j+1]){
        subArray.push(array[j+1]);
        obj.b = subArray;
        }
    }
    // console.log("object:",obj);
    output.push(obj);
    // console.log("Arr:",output);
    valueCount++;
}



console.log(output);

// 6 - print from 2 to 32 and 32 to 2 using recursion

function print(n=1){
    n=n*2
    if(n === 32 ){
        console.log(n);
        return n;
    }
    console.log(n);
    print(n);
    console.log(n);
}

// print();

// 7 - [{af:[{fa:3,df:34}]},{af:[{fa:3,df:34}]},{af:[{fa:3,df:34}]},{af:[{fa:3,df:34}]},{af:[{fa:3,df:34}]}]
// find sum of numbers
const sumArray = [{af:[{fa:3,df:34}]},{af:[{fa:3,df:34}]},{af:[{fa:3,df:34}]},{af:[{fa:3,df:34}]},{af:[{fa:3,df:35}]}];
function recursiveSum(item) {
    // Base case: if item is a number, return it
    if (typeof item === 'number') {
        return item;
    }
    
    // If item is an array, sum all its elements recursively
    if (Array.isArray(item)) {
        let sum = 0;
        for (let i = 0; i < item.length; i++) {
            sum += recursiveSum(item[i]);
        }
        return sum;
    }
    
    // If item is an object, sum all its values recursively
    if (typeof item === 'object' && item !== null) {
        let sum = 0;
        for (let key in item) {
            sum += recursiveSum(item[key]);
        }
        return sum;
    }
    
    // For any other type, return 0
    return 0;
}

const totalSum = recursiveSum(sumArray);
console.log("Total sum:", totalSum);


// console.log(sum);



