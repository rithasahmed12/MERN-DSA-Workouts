
// 1.check string is palindrome using recursion

let string = 'MadaaM';
// reverse string using recurtion
function stringReverse(string){
    if(string.length < 1){
        return string;
    }
     
    return stringReverse((string.slice(1)))+string[0];
}


function isStringPalindrome(string){
    let reversed = stringReverse(string);
    console.log(reversed)
    return reversed === string;
}

console.log(isStringPalindrome(string));


