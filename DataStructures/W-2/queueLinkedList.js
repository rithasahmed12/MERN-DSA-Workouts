class Node {
    constructor(value){
        this.value = value;
        this.next= null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null;
        this.size=0;
    }
    append(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++
    }

    removefromStart(){
        let element;
        if(this.isEmpty()) return
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }else{
            element = this.head.value;
            this.head = this.head.next;
        }
        this.size--;
        return element
    }

    isEmpty(){
        return this.size === 0;
    }
    print(){
        if(this.isEmpty())return;
        let element = ""
        let curr = this.head;
        while(curr){
            element += " "+curr.value;
            curr = curr.next;
        }
        console.log(element);
    }
}

class QueueLinked{
    constructor(){
        this.items = new LinkedList();
    }
    enqueue(value){
        this.items.append(value);
    }
    dequeue(){
        return this.items.removefromStart();
    }
    front(){
        return this.items.head.value;
    }
    rear(){
        return this.items.tail.value
    }
    isEmpty(){
        return this.items.isEmpty()
    }
    print(){
        this.items.print()
    }
}

const queueLL = new QueueLinked();
queueLL.enqueue(10)
queueLL.enqueue(20)
queueLL.enqueue(27)
queueLL.enqueue(90)
queueLL.enqueue(30)
queueLL.dequeue()
queueLL.dequeue()
console.log(queueLL.front());
console.log(queueLL.rear());
queueLL.print()
