let arr = [12,1,90,55,6,3,18,32,8];
let sortedArr = heapSort(arr);
console.log(sortedArr)

function heapSort(arr){
    let heap = createHeap(arr);
    let sortedArr = [];

    while(heap.length){
        sortedArr.unshift(heap.shift());
        heap = createHeap(heap);
    }
    return sortedArr;
}

function createHeap(arr){
    let heap = [...arr];
    
    for(let i=Math.ceil((heap.length/2)-1); i>=0 ; i--){
        heapify(heap,i,heap.length);
    }
    return heap;
}

function heapify(heap,i,heapSize){
    let left = 2*i+1;
    let right = 2*i+2;
    let largest = i;

    if(left < heapSize && heap[left] > heap[largest]){
        largest = left;
    }
    if(right < heapSize && heap[right] > heap[largest]){
        largest = right;
    }
    if(largest !== i){
        [heap[i],heap[largest]] = [heap[largest],heap[i]];
        heapify(heap,largest,heapSize);
    }
}