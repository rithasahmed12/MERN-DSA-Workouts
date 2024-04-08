function binarySearch(array,target){
    array.sort((a,b) => a-b);
    let startIndex = 0;
    let endIndex = array.length-1;
    
    while(startIndex <= endIndex){
        let middleIndex = Math.ceil((startIndex+endIndex)/2);
        if(array[middleIndex] === target){
            return middleIndex;
        }else if(target > array[middleIndex]){
            startIndex = middleIndex + 1;
        }else{
            endIndex = middleIndex-1
        }
    }
    return -1;
}

const target = binarySearch([1,2,3,4,5,6,76,78],66);
// console.log(target);

function recursiveBinarySearch(array,target){
    array.sort((a,b)=> a-b);
    let startIndex = 0;
    let endIndex = array.length-1;
    let targetIndex = search(array,target,startIndex,endIndex);
    return targetIndex;
}

function search(array, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex) return -1;
    
    let middleIndex = Math.ceil((leftIndex+rightIndex)/2);

    if(array[middleIndex] == target){
        return middleIndex;
    }
    
    if(target > array[middleIndex]){
        return search(array,target,middleIndex+1,rightIndex);
    }else{
        return search(array,target,leftIndex,middleIndex-1);
    }
}

const recursiveBinarySeachTarget = recursiveBinarySearch([1,2,3,4,5,6,76,78],3);
console.log(recursiveBinarySeachTarget);