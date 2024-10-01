class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {
        if (this.stack2.size === 0) {
            while (this.stack1.size > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }

    peek() {
        if (this.stack2.size === 0) {
            while (this.stack1.size > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.peek();
    }

    isEmpty() {
        return this.stack1.size === 0 && this.stack2.size === 0;
    }
}

class Stack {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    push(value) {
        this.items[this.size] = value;
        this.size++;
    }

    pop() {
        let lastElement = this.items[this.size - 1];
        this.items[this.size - 1] = undefined;
        this.size--;
        return lastElement;
    }

    peek() {
        return this.items[this.size - 1];
    }
}

// Usage example
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue()); // Output: 10
console.log(queue.peek()); // Output: 20
console.log(queue.dequeue()); // Output: 20
console.log(queue.isEmpty()); // Output: false