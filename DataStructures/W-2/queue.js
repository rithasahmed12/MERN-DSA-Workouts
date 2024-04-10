class Queue{
    constructor(){
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }
    getSize(){
        return this.rear-this.front;
    }
    isEmpty(){
        return this.rear === this.front;
    }
    enqueue(value){
        this.items[this.rear] = value;
        this.rear++
    }
    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front];
        this.front++;
        return item;
    }
    peek(){
        return this.items[this.front];
    }
    print(){
        console.log(this.items);
    }
    
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(11);
queue.enqueue(12);
console.log(queue.peek());
queue.print()
queue.dequeue();
console.log(queue.peek());
queue.print()