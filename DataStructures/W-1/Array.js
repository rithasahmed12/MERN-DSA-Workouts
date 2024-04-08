//1. Remove duplicates in an array in o(n);

function removeDuplicates(array){
    let values = new Set();
    for(let i=0 ; i<array.length; i++){
        if(values.has(array[i])){
            array.splice(i,1);
        }else{
            values.add(array[i])
        }
    }

}

let array = [1,3,4,1,45,6,3,2]
removeDuplicates(array)
// console.log(array);
 

// 2. -Find the uncommon elements from both array [9,8,5-1,8], [5,0,5,8,2,6]
// Output should be [9,-1,0,2,6] using O( n )

function findUncommonElements(array1,array2){
    let frequency = new Map();

    for(let value of array1){
        frequency.set(value, (frequency.get(value)||0)+1 )
    }

    for(let value of array2){
        frequency.set(value, (frequency.get(value)||0)+1 )
    }

    let uncommonElements = [];

    for(let [element,freq] of frequency){
        if(freq === 1){
            uncommonElements.push(element)
        }
    }
    return uncommonElements
}

// console.log(findUncommonElements([9,8,5,-1,8], [5,0,5,8,2,6]));

// 3. chunk array into subarrays of n elements

function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkSize = 3;
 console.log(chunkArray(originalArray, chunkSize));


