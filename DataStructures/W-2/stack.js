class Stack {
    constructor() {
        this.items = [];
        this.size = 0;
        this.maxElement = Number.NEGATIVE_INFINITY;
        this.minElement = Number.POSITIVE_INFINITY;
    }
    
    push(value) {
        this.items[this.size++] = value;
        if(value > this.maxElement){
            this.maxElement = value;
        }
        if(value < this.minElement){
            this.minElement = value;
        }
    }
    
    pop() {
        if (this.isEmpty()) {
            return "underflow"; // Return null if stack is empty
        }
        const topElement = this.items[--this.size]; // Decrement size to get index of top element
        this.items[this.size]=undefined; // Delete the top element
        
        if(topElement == this.maxElement){
            if(this.isEmpty()){
                this.maxElement = Number.NEGATIVE_INFINITY;
            }else{
                this.maxElement = this.items[0]
                for(let i=1 ;i<this.size;i++){
                    if(this.items[i] > this.maxElement ){
                        this.maxElement = this.items[i]
                    }
                }
            }
        }
        if(topElement == this.minElement){
            if(this.isEmpty()){
                this.minElement = Number.POSITIVE_INFINITY;
            }else{
                this.minElement = this.items[0]
                for(let i=1 ;i<this.size;i++){
                    if(this.items[i] < this.minElement ){
                        this.minElement = this.items[i]
                    }
                }
            }
        }
        return topElement; // Return the popped element
    }

    reverse(){
        if(this.isEmpty()){
            return
        }else{
            let element = this.pop();
            this.reverse();
            this.insertBottom(element);
        }
    }

    insertBottom(item){
        if(this.isEmpty()){
            this.push(item);
        }else{
            let temp = this.pop();
            this.insertBottom(item);
            this.push(temp)
        }
    }


    getMin(){
        return this.minElement;
    }

    getMax(){
        return this.maxElement;
    }
    
    isEmpty() {
        return this.size === 0;
    }

    peak(){
        return this.items[this.size-1];
    }


}

// Example usage:
const stack = new Stack();
stack.push(20);
stack.push(10);
stack.push(30);
stack.push(40)
// console.log("deleted:",stack.pop()); // Output: 30
// // console.log(stack.pop()); // Output: 20
// // console.log(stack.pop()); // Output: 10
// // console.log(stack.pop()); // Output: null (stack is empty)
// console.log(stack.items);
// console.log("top:",stack.peak());

// console.log("Max:",stack.getMax());
// console.log("Min:",stack.getMin());
// stack.reverse()
// console.log(stack.items);

