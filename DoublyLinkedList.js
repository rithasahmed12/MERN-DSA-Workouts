// Methods
// append, prepend
// removeFromStart, removeFromEnd
// reverse , removeFromMiddle
// removeByIndex, removeByValue
// removeDuplicates, print

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size=0
    }

    isEmpty(){
        return this.size === 0;
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }

    removeFromStart(){
        if(this.isEmpty()){
            return;
        }
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }else{
             this.head = this.head.next; 
             this.head.prev = null;
        }
        this.size--;
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return;
        }
        if(this.size === 1){
            this.head = null;
            this.tail = null
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null
        }
        this.size--;
    }

    reverse(){
        let prev = null;
        let curr = this.head;
        while(curr){
            let next = curr.next;
            curr.prev = next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.tail = this.head;
        this.head = prev;
    }

    removeFromMiddle(){
        if(this.isEmpty()) return;
        if(this.size === 1){
            this.removeFromStart();
        }else{
            let slowPointer = this.head;
            let fastPointer = this.head;
            let prev = null;
            while(fastPointer && fastPointer.next){
                prev = slowPointer;
                slowPointer = slowPointer.next;
                fastPointer = fastPointer.next.next;
            }
            prev.next = slowPointer.next;
            slowPointer.prev = null; 
        }
        this.size--;
    }

    removeByIndex(index){
        if(this.isEmpty() || this.size <= index || index < 0) return;
        if(index === 0){
            this.removeFromStart();
        }else{
            let previous = this.head
            for(let i=0 ; i<index-1; i++){
                previous = previous.next;
            }
            let removeNode = previous.next;
            previous.next = removeNode.next;
            removeNode.prev = null
        }
        this.size--;
    }

    removeByValue(values){
        if(this.isEmpty())return;
        if(this.head.value == values){
            this.removeFromStart()
        }else if(this.tail.value == values){
            this.removeFromEnd();
        }else{
            let curr = this.head;
            while(curr.value != values && curr){
                curr = curr.next;
            }
            let prevNode = curr.prev;
            prevNode.next = curr.next;
            curr.prev= null;
            curr.next= null;
        }
        this.size--
    }

    // removeDuplicates(){
    //     let uniqueValues = new Set();
    //     let curr = this.head;
    //     while(curr){
    //         if(uniqueValues.has(curr.value)){
    //             curr.prev.next = curr.next;
    //             curr.next.prev = curr.prev;
    //             this.size--;
    //         }else{
    //             uniqueValues.add(curr.value)
    //         }
    //         curr = curr.next;
    //     }
    // }

    removeDuplicates() {
        let uniqueValues = new Set();
        let curr = this.head;
        while (curr) {
            if (uniqueValues.has(curr.value)) {
                // Check if curr is not the last node
                if (curr.next) {
                    curr.next.prev = curr.prev;
                } else {
                    // If curr is the last node, update tail
                    this.tail = curr.prev;
                }
                // Check if curr is not the first node
                if (curr.prev) {
                    curr.prev.next = curr.next;
                } else {
                    // If curr is the first node, update head
                    this.head = curr.next;
                }
                this.size--;
            } else {
                uniqueValues.add(curr.value);
            }
            curr = curr.next;
        }
    }
    


    print(){
        let curr = this.head;
        let values = "";
        while(curr){
            values+= " "+curr.value
            curr = curr.next;
        }
        console.log(values);
    }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append(11);
doublyLinkedList.append(20);
doublyLinkedList.append(30);
doublyLinkedList.prepend(40);
doublyLinkedList.prepend(11);
doublyLinkedList.prepend(15);
doublyLinkedList.prepend(20);
// doublyLinkedList.removeFromStart()
// doublyLinkedList.removeFromStart()
// doublyLinkedList.removeFromStart()
// doublyLinkedList.removeFromEnd()
// doublyLinkedList.removeFromEnd()
// doublyLinkedList.reverse()
// doublyLinkedList.removeFromMiddle()
doublyLinkedList.removeByValue(30);
doublyLinkedList.removeDuplicates();
doublyLinkedList.print()

