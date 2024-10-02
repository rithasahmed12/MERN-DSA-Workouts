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
            }
             char = string[i];
             number = ''
        }        
    }
}
// console.log(printPreceedingCharBeforeNumber(string));


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



