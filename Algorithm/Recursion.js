let string = 'hello';

function recursiveReverse(string){
    if(string.length < 1){
        return string;
    }
     
    return recursiveReverse((string.slice(1)))+string[0];
}

// console.log(recursiveReverse(string))

function fibonnaci(n){
    if(n < 2){
        return n;
    }
    return fibonnaci(n-1) + fibonnaci(n-2);
}

// console.log(fibonnaci(7));

function factorial(n){
    if(n <= 1){
        return 1
    }
    return factorial(n-1)*n;
}

// console.log(factorial(3));




