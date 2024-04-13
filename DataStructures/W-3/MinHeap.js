class MinHeap{
    constructor(){
        this.heap = [];
    }
    getParentIndex(i){
        return Math.floor((i-1)/2);
    }
    getLeftChildIndex(i){
        return (2*i)+1;
    }
    getRightChildIndex(i){
        return (2*i)+2;
    }

    parent(i){
        return this.heap[this.getParentIndex(i)]
    }
    leftChild(i){
        return this.heap[this.getLeftChildIndex(i)]
    }
    rightChild(i){
        return this.heap[this.getRightChildIndex(i)]
    }

    hasParent(i){
        return this.getParentIndex(i) >= 0;
    }
    hasLeftChild(i){
        return this.getLeftChildIndex(i) < this.heap.length
    }
    hasRightChild(i){
        return this.getRightChildIndex(i) < this.heap.length;
    }
    swap(i1,i2){
        let temp = this.heap[i1];
        this.heap[i1]=this.heap[i2];
        this.heap[i2] = temp;
    }
    add(value){
        this.heap[this.heap.length] = value;
        this.heapifyUp();
    }
    heapifyUp(){
        let currIndex = this.heap.length-1;
        while(this.hasParent(currIndex) && this.heap[currIndex] < this.parent(currIndex) ){
            this.swap(this.getParentIndex(currIndex),currIndex);
            currIndex = this.getParentIndex(currIndex);
        }
    }
    remove(){
        if(this.heap.length === 0){
            return null;
        }
        let element = this.heap[0]
        this.heap[0] = this.heap[this.heap.length-1];
        this.heap.pop();
        this.heapifyDown();
        return element;
    }
    heapifyDown(){
        let currIndex = 0;
        while(this.hasLeftChild(currIndex)){
            let smallestIndex = this.getLeftChildIndex(currIndex);
            if(this.hasRightChild && this.rightChild(currIndex) < this.leftChild(currIndex)){
                smallestIndex = this.getRightChildIndex(currIndex);
            }
            if(this.heap[currIndex] < this.heap[smallestIndex]){
                break;
            }else{
                this.swap(currIndex,smallestIndex);
            }
            currIndex = smallestIndex;
        }
    }
    peak(){
        if(this.heap.length){
            return this.heap[0];
        }
    }
}

const minHeap = new MinHeap();
minHeap.add(24)
minHeap.add(10)
minHeap.add(12)
minHeap.add(15)
minHeap.add(7)
minHeap.add(20)
minHeap.add(17)
console.log(minHeap.heap);
console.log(minHeap.remove());
console.log(minHeap.remove());
console.log(minHeap.remove());
console.log(minHeap.remove());
console.log(minHeap.remove());
console.log(minHeap.remove());
console.log(minHeap.remove());

