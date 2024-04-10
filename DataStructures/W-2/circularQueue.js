class CircularQueue{
    constructor(size){
        this.items = new Array(size);
        this.maxSize = size;
        this.length = 0;
        this.front = -1;
        this.rear = -1; 
    }
    enqueue(value){
        if(this.isFull()) return;
        this.rear = (this.rear+1) % this.maxSize
        this.items[this.rear] = value;
        this.length++;
        if(this.front === -1){
            this.front = this.rear;
        }
    }
    dequeue(){
        if(this.isEmpty())return;
        let element = this.items[this.front] 
        this.items[this.front] = null;
        this.front = (this.front+1)%this.maxSize;
        this.length--;
        return element;
    }
    isFull(){
        return this.maxSize === this.length
    }
    isEmpty(){
        return this.length === 0;
    }
    getFront(){
        if(!this.isEmpty()) return this.items[this.front]
    }
    getRear(){
        if(!this.isEmpty()) return this.items[this.rear]
    }
    print(){
        let items = ""
        for(let value of this.items){
            if(value !== null){
                items+= " "+value;
            }
        }
        console.log(items);
    }

}

const circularQ = new CircularQueue(5);
circularQ.enqueue(10);
circularQ.enqueue(23);
circularQ.enqueue(5);
circularQ.enqueue(7);
circularQ.enqueue(8);
circularQ.dequeue();
console.log(circularQ.getFront());
console.log(circularQ.getRear());
circularQ.print()
console.log(circularQ.isEmpty());
console.log(circularQ.isFull());