class MonotonicStack {
    constructor() {
        this.stack = [];
    }

    // Push an element onto the stack
    push(element) {
        while (this.stack.length !== 0 && element < this.stack[this.stack.length - 1]) {
            this.stack.pop();
        }
        this.stack.push(element);
    }

    // Pop an element from the stack
    pop() {
        if (this.stack.length !== 0) {
            return this.stack.pop();
        } else {
            return null; // Stack is empty
        }
    }

    // Peek the top element of the stack without removing it
    peek() {
        if (this.stack.length !== 0) {
            return this.stack[this.stack.length - 1];
        } else {
            return null; // Stack is empty
        }
    }

    // Check if the stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }

    // Print the elements of the stack
    print() {
        console.log(this.stack);
    }
}

// Example usage:
const stack = new MonotonicStack();

stack.push(5);
stack.push(3);
stack.push(7);
stack.push(2);
stack.push(3);

console.log("Stack after pushes:");
stack.print(); // Output: [5, 7]

stack.pop(); // Remove top element
console.log("Stack after pop:");
stack.print(); // Output: [5]

console.log("Top element of the stack:", stack.peek()); // Output: 5

console.log("Is the stack empty?", stack.isEmpty()); // Output: false
