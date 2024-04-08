// Bubble Sort, Insertion Sort
// Selection Sort, quick sort, merge sort

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

let arr = [12,40,-1,-9,4,2,6,34]
bubbleSort(arr)
console.log(arr);