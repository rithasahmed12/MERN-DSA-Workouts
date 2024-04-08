// Bubble Sort, Insertion Sort
// Selection Sort, quick sort, merge sort
let arr = [12,40,-1,-9,4,2,6,34]


function bubbleSort(arr){
    let swap = true;
    do{
        swap=false;
        for(let i=0 ; i<arr.length; i++){
            if(arr[i] > arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
                swap = true
            }
        }
    }while(swap==true);
}

// bubbleSort(arr)
// console.log(arr);

function insertionSort(arr){
    
    for(let i=1; i<arr.length; i++){
        let numberToInsert = arr[i]
        let j=i;
        while(arr[j-1] > numberToInsert && j >= 0){
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = numberToInsert;
    }
}

// insertionSort(arr);
// console.log(arr);

function selectionSort(arr){
    for(let i=0 ; i<arr.length ; i++){
        let smallestValueIndex = i; 
        for(let j=i ; j<arr.length; j++){
            if(arr[j] < arr[smallestValueIndex]){
                smallestValueIndex = j
            }
        }
        [arr[i],arr[smallestValueIndex]] = [arr[smallestValueIndex],arr[i]];
    }
}

// selectionSort(arr);
// console.log(arr);

function quickSort(arr){
    if(arr.length < 1){
        return arr;
    }

    let pivot = arr[0]
    const left = [];
    const right = [];

    for(let i=1 ; i<arr.length; i++){
        if(arr[i] > pivot ){
            right.push(arr[i])
        }else{
            left.push(arr[i]);
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)];
    
}

// let sortedArray = quickSort(arr);
// console.log(sortedArray);

function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let middle = arr.length/2;
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);

    return join(mergeSort(left), mergeSort(right));

}

function join(left,right){
    let newArray = [];
    let i=0;
    let j=0;

    while(i < left.length && j<right.length ){
        if(left[i] < right[j]){
            newArray.push(left[i++])
        }else{
            newArray.push(right[j++]);
        }
    }

        while(i< left.length){
            newArray.push(left[i++])
        }

        while(j < right.length){
            newArray.push(right[j++])
        }
        return newArray;

}

let sortedArray = mergeSort(arr);
console.log(sortedArray);