const LinkedList = require("../W-1/LinkedList");

class Stack{
    constructor(){
        this.items = new LinkedList();
    }
    push(value){
        this.items.append(value)
    }
    pop(){
        this.items.removeFromEnd();
    }
    top(){
        if(this.items.isEmpty()){
            return "underflow"
        }
        return this.items.tail.value;
    }
    isEmpty(){
        return this.items.isEmpty();
    }
    getSize(){
        return this.items.getSize()
    }
    print(){
        this.items.print()
    }
}

const stackLL = new Stack();
stackLL.push(10);
stackLL.push(1);
stackLL.push(7);
stackLL.push(11);
stackLL.print();
console.log(stackLL.top());
stackLL.pop();
console.log(stackLL.top());
stackLL.print();